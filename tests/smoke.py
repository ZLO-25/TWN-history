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
    b = p.chromium.launch()
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
        check(f"{n} 點全期圖事件會開啟日治並選事件", ev("state.hp") == "p3" and ev("!!state.hsel"))
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
        # 其他分頁不報錯
        for v in ["relay", "methods", "background", "quiz"]:
            pg.click(f'.tab[data-view="{v}"]'); pg.wait_for_timeout(150)
        check(f"{n} 無 JS 錯誤", not errs, "; ".join(errs))
        pg.close()
    b.close()
print("\n失敗 %d 項" % len(fails) if fails else "\n全部通過")
sys.exit(1 if fails else 0)
