#!/usr/bin/env python3
"""瀏覽器冒煙測試（Playwright）。用法：python3 build.py && python3 tests/smoke.py
檢查桌機(1400px)與手機(400px)：無 JS 錯誤、台灣史三層下鑽、與李登輝線互通、返回按鈕、
李登輝分頁（總覽圖＋年表同頁）、背景專題連結、圖表縮放。"""
import os, sys, pathlib
from playwright.sync_api import sync_playwright

URL = "file://" + str(pathlib.Path(__file__).resolve().parent.parent / "index.html")
fails = []


def check(name, cond, info=""):
    print(("PASS " if cond else "FAIL ") + name + (f"  [{info}]" if info and not cond else ""))
    if not cond:
        fails.append(name)


with sync_playwright() as p:
    b = p.chromium.launch(**({"executable_path": os.environ["CHROME"]} if os.environ.get("CHROME") else {}))
    for w, h, n in [(1400, 900, "桌機"), (400, 850, "手機")]:
        errs = []
        pg = b.new_page(viewport={"width": w, "height": h})
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.goto(URL); pg.wait_for_timeout(500)
        ev = lambda s: pg.evaluate(s)
        check(f"{n} 預設為台灣史", ev("state.view") == "history")
        check(f"{n} 8 個時期方塊", pg.locator(".hb").count() == 8)
        check(f"{n} 全期泳道圖有色條、時期色帶與事件", pg.locator("#lcAll .lc-barg").count() >= 6 and pg.locator("#lcAll .lc-band [data-band]").count() == 7 and ev("lcAll.order.length") > 20)
        check(f"{n} 全期圖放不下的事件合併成 +N", pg.locator("#lcAll .lc-cl").count() >= 1)
        # 全期圖事件 → 開啟時期並選到事件
        pg.evaluate("document.querySelector('#lcAll .lc-it').dispatchEvent(new MouseEvent('click',{bubbles:true}))")
        check(f"{n} 點全期圖事件會開啟該時期並選事件", ev("/^p\\d$/.test(state.hp)") and ev("!!state.hsel"))
        ev("hallOpen('p3',HK['surrender-1945'].id)"); pg.wait_for_timeout(300)
        check(f"{n} 日治泳道圖有事件", ev("lcP.order.length") >= 25)
        if w < 700:
            check(f"{n} 手機時期圖改為直式列表", pg.locator("#lcP .lc-list").is_visible() and pg.locator("#lcP .lc-list button.lc-row").count() >= 25)
            check(f"{n} 手機事件卡從下方滑出", ev("document.getElementById('hCard').classList.contains('open')") and pg.locator("#hCard").is_visible())
        else:
            check(f"{n} 桌機時期圖為泳道圖", pg.locator("#lcP .lc-svg").is_visible() and pg.locator("#lcP .lc-it").count() >= 10)
        check(f"{n} 事件卡含可信度標籤", pg.locator("#hCard .badge").count() == 1)
        # 背景專題 + 返回
        ev("lcP.opt.onSelect(H.find(h=>h.t.includes('霧社')).id,true)"); pg.wait_for_timeout(200)
        check(f"{n} 事件卡有前一則／後一則", pg.locator("#hCard #hPrev").count() == 1 and pg.locator("#hCard #hNext").count() == 1)
        check(f"{n} 霧社卡有背景按鈕與各方稱謂", pg.locator("#hCard [data-bg]").count() == 1 and pg.locator("#hCard .alias").count() == 1)
        pg.locator("#hCard [data-bg]").first.click(); pg.wait_for_timeout(400)
        check(f"{n} 跳到背景專題且出現「回台灣史」", ev("state.view") == "background" and "回台灣史" in pg.inner_text("#backpill"))
        pg.click("#backpill"); pg.wait_for_timeout(300)
        check(f"{n} 返回後回到日治並保留選取", ev("state.view") == "history" and ev("state.hp") == "p3" and ev("!!state.hsel"))
        # 李登輝分頁
        pg.click('.tab[data-view="overview"]'); pg.wait_for_timeout(500)
        check(f"{n} 李登輝頁：總覽圖 29 個事件＋年表同頁", ev("lcOv.order.length") == 29 and pg.locator("#v-timeline").is_visible())
        ev("lcOv.opt.onSelect(lcOv.order[5].key,true)"); pg.wait_for_timeout(200)
        pg.click("#ovGo"); pg.wait_for_timeout(600)
        check(f"{n} 跳到下方年表並出現「回總覽圖」", "回總覽圖" in pg.inner_text("#backpill") and not ev("document.getElementById('backpill').hidden"))
        pg.click("#backpill"); pg.wait_for_timeout(600)
        check(f"{n} 回總覽圖後按鈕消失", ev("document.getElementById('backpill').hidden"))
        ev("location.hash='#timeline'"); pg.wait_for_timeout(300)
        check(f"{n} 舊網址 #timeline 導向李登輝頁", ev("state.view") == "overview")
        # 縮放
        pg.click('.tab[data-view="history"]'); pg.wait_for_timeout(300)
        w0 = ev("document.querySelector('#lcAll .lc-svg').getBoundingClientRect().width")
        pg.evaluate("document.querySelector('#lcAll [data-z=\"+\"]').click()")
        w1 = ev("document.querySelector('#lcAll .lc-svg').getBoundingClientRect().width")
        check(f"{n} 放大按鈕有效", w1 > w0 * 1.2, f"{w0}->{w1}")
        # --- 階段 1：事件卡新欄位、同期世界、人物、主線 ---
        check(f"{n} 資料完整性：key 不重複、rel／who／主線引用都能解析",
              ev("""(()=>{const ks=H.filter(h=>h.key).map(h=>h.key);if(new Set(ks).size!==ks.length||ks.length!==H.length)return false;
              for(const h of H){for(const r of (h.rel||[]))if(!HK[r])return false;for(const w of (h.who||[]))if(!PK[w])return false;
                for(const x of (h.why||[]).concat(h.so||[]))if(!x.t||!["d","s"].includes(x.k))return false}
              for(const t of THREADS)for(const st of t.steps){if(st.ref&&st.ref.startsWith("lee:")){if(!leeFind(st.ref))return false}else if(st.ref){if(!HK[st.ref])return false}else if(!BG.find(g=>g.id===st.bg))return false}
              return true})()"""))
        check(f"{n} 同期世界 12 則、全期圖有同期世界泳道", ev("H.filter(h=>h.ctx==='世界').length")==12 and ev("lcAll.data.lanes.some(l=>l.id==='world'&&l.items.length===12)"))
        ev("setView('history');hallOpen('p3',HK['treaty-shimonoseki-1895'].id)"); pg.wait_for_timeout(300)
        check(f"{n} 事件卡有前因、影響與「直接／學者解釋」標示", pg.locator("#hCard .cause h4").count()>=2 and pg.locator("#hCard .kind").count()>=2)
        check(f"{n} 事件卡有相關事件按鈕", pg.locator("#hCard [data-rel]").count()>=2)
        pg.locator("#hCard [data-rel]").first.dispatch_event("click"); pg.wait_for_timeout(300)
        check(f"{n} 點相關事件會切到該事件", ev("state.hsel")!=ev("HK['treaty-shimonoseki-1895'].id"))
        ev("setView('history');hallOpen('p3',HK['tca-1921'].id)"); pg.wait_for_timeout(300)
        check(f"{n} 文協卡有人物與主線以外的人名按鈕", pg.locator("#hCard [data-who]").count()==2)
        pg.locator("#hCard [data-who]").first.dispatch_event("click"); pg.wait_for_timeout(300)
        check(f"{n} 點人名進人物頁並顯示人物卡", ev("state.view")=="people" and pg.locator("#pCard").is_visible() and pg.locator("#pCard .rowr [data-h]").count()>=3)
        check(f"{n} 人物頁有「回台灣史」", "回台灣史" in pg.inner_text("#backpill"))
        pg.locator("#backpill").dispatch_event("click"); pg.wait_for_timeout(300)
        check(f"{n} 返回後回到事件卡", ev("state.view")=="history" and ev("!!state.hsel"))
        pg.click('.tab[data-view="people"]'); pg.wait_for_timeout(200)
        check(f"{n} 人物索引 31 張", pg.locator("#pGrid .pb").count()==31)
        pg.locator("#pCard [data-h]").first.dispatch_event("click") if ev("!document.getElementById('pCard').hidden") else None
        ev("state.person='goto-shinpei';renderPeople()"); pg.wait_for_timeout(100)
        check(f"{n} 評價分歧的人物並列各方評價", pg.locator("#pCard .views li").count()>=2)
        pg.locator("#pCard [data-h]").first.dispatch_event("click"); pg.wait_for_timeout(300)
        check(f"{n} 從人物回事件後出現「回人物」", ev("state.view")=="history" and "回人物" in pg.inner_text("#backpill"))
        pg.locator("#backpill").dispatch_event("click"); pg.wait_for_timeout(300)
        check(f"{n} 回人物頁", ev("state.view")=="people")
        pg.click('.tab[data-view="history"]'); pg.wait_for_timeout(200)
        pg.locator("#thChips button").first.dispatch_event("click"); pg.wait_for_timeout(200)
        check(f"{n} 主線展開 9 步", pg.locator("#thPanel .flow li").count()==9)
        pg.locator("#thPanel button[data-i]").nth(1).dispatch_event("click"); pg.wait_for_timeout(500)
        check(f"{n} 主線裡李登輝線步驟可跳到年表並可返回", ev("state.view")=="overview" and not ev("document.getElementById('backpill').hidden"))
        ev("setView('history');hallOpen('p3',HK['surrender-1945'].id)"); pg.wait_for_timeout(300)
        check(f"{n} 日治期有「這個時期要記住的 3 件事」", pg.locator("#hKeys li").count()==3)
        ev("hallOpen('p0')"); pg.wait_for_timeout(300)
        check(f"{n} 原住民社會期有事件且不再標示待擴充", ev("!document.querySelector('.hb[data-p=p0] em').textContent.includes('事件待擴充')") and ev("lcP.order.length")>=8)
        # 教學層：搜尋、學習路徑、講課模式、台灣史翻卡
        ev("setView('history')"); pg.wait_for_timeout(200)
        pg.fill("#hs","鄭成功"); pg.wait_for_timeout(200)
        check(f"{n} 全站搜尋能找到事件與人物", pg.locator("#hsRes button").count()>=3 and "人物" in pg.inner_text("#hsRes"))
        pg.locator("#hsRes button").first.dispatch_event("click"); pg.wait_for_timeout(300)
        check(f"{n} 點搜尋結果會開啟對應內容", ev("state.hp!==null||state.view!=='history'"))
        pg.fill("#hs",""); pg.dispatch_event("#hs","input")
        pg.locator("#goPath30").dispatch_event("click"); pg.wait_for_timeout(300)
        check(f"{n} 30 分鐘路徑展開 15 步", pg.locator("#thPanel .flow li").count()==15)
        pg.locator("#goPath180").dispatch_event("click"); pg.wait_for_timeout(300)
        check(f"{n} 3 小時路徑展開 60 步以上", pg.locator("#thPanel .flow li").count()>=60)
        ev("hallOpen('p5')"); pg.wait_for_timeout(200)
        pg.locator("#lectureBtn").dispatch_event("click"); pg.wait_for_timeout(200)
        ev("lcStep(lcP,1)"); pg.wait_for_timeout(200)
        sel0=ev("lcP.sel")
        check(f"{n} 講課模式隱藏其他區塊", ev("document.body.classList.contains('lecture')") and not pg.locator("#hBlocks").is_visible())
        pg.keyboard.press("ArrowRight"); pg.wait_for_timeout(200)
        check(f"{n} 講課模式用方向鍵切換事件", ev("lcP.sel")!=sel0 and ev("!!state.hsel"))
        pg.locator("#lectureBtn").dispatch_event("click"); pg.wait_for_timeout(200)
        check(f"{n} 可離開講課模式", not ev("document.body.classList.contains('lecture')"))
        pg.click('.tab[data-view="quiz"]'); pg.wait_for_timeout(200)
        pg.locator('.q-scope [data-scope="h:p2"]').dispatch_event("click"); pg.wait_for_timeout(200)
        check(f"{n} 台灣史翻卡可選單一時期", "清領" in pg.inner_text("#quiz") or "第 1 /" in pg.inner_text("#quiz"))
        pg.locator("#flip").dispatch_event("click"); pg.wait_for_timeout(200)
        check(f"{n} 台灣史翻卡翻開後有答案與事件卡連結", pg.locator("#qgo").count()==1 and pg.locator("#quiz .yr").count()==1)
        # 其他分頁不報錯
        for v in ["relay", "methods", "background", "quiz", "people"]:
            pg.click(f'.tab[data-view="{v}"]'); pg.wait_for_timeout(150)
        check(f"{n} 無 JS 錯誤", not errs, "; ".join(errs))
        pg.close()
    b.close()
print("\n失敗 %d 項" % len(fails) if fails else "\n全部通過")
sys.exit(1 if fails else 0)
