# 台灣史年表：從荷西到今天（接手說明）

單檔靜態網站（原生 JS/CSS，無框架），GitHub Pages 發布。**台灣史是主軸，李登輝（讀《餘生》的學習筆記）是可切換的深入視角。**
使用者是台灣的繁體中文讀者，**目的是拿來教別人**，所以內容要容易理解、可教學。

## 一定要遵守的使用者偏好
- 一律繁體中文。回答要讓人能拿去教別人，先用自己的話重述使用者的目標與問題。
- 解釋流程、層級、時間線、因果時用 ASCII 圖示畫出來。
- 不要把「同一年發生」寫成因果；有爭議就標示並並列各方說法；不確定就說不確定、不要編。

## 指令
```
python3 build.py              # src/ → index.html（發布檔，要一併提交）
python3 build.py --artifact   # 另產生 out/artifact.html（Claude Artifact 變體）
python3 build.py --check      # 檢查 index.html 是否與 src/ 一致（CI 會跑）
python3 tests/smoke.py        # Playwright 冒煙測試（桌機＋手機，需先 build）
```
**只改 `src/`，不要直接改 `index.html`**（它是建置產物）。改完一定 build → 跑測試 → 一起 commit。
推上 main 後 GitHub Actions 自動部署；用 `gh run list -L1` 確認成功。

## 結構
```
src/template.html   頁面外殼：CSS、HTML、全部前端 JS（含 __DATA__ / __BG__ / __HIST__ 佔位符）
src/data.js         李登輝線：ERAS、METHODS、E（111 則事件）、RELAY
src/bgdata.js       背景補充專題 BG（目前 38 則，含 4 則 jp-*）
src/history.js      台灣史：PERIODS（8 時期）、CONF、H_RAW（事件）
docs/               ROADMAP.md（待辦與擴充流程）、jp_events.research.json（日治原始查證資料）
tests/smoke.py      冒煙測試
```
頁面（分頁）：台灣史（預設）｜李登輝（總覽圖＋逐年年表同一頁）｜民主接力｜政治手腕｜背景補充｜翻卡複習。
台灣史三層下鑽：8 時期方塊（上方另有全期泳道圖）→ 該時期泳道圖（統治政權／政治與外交／李登輝線）→ 事件卡。

## 資料格式
**台灣史事件 `H_RAW`（src/history.js）**
```
{y:1930, md:"10月27日", t:"霧社事件", s:"霧社事件"(圖上短標籤≤8字),
 b:"中性陳述", track:"政權"|"政治外交", conf:"verified"|"common"|"disputed",
 aliases:[{term,note}] 各方稱謂, note:"歧異/爭議說明", src:[{t,u}] 來源, bg:"背景專題id"(可選)}
```
- `conf` 的意思：verified＝各來源一致的事實；common＝常見說法/各來源只是記載不同階段；disputed＝學界或各方有實質爭議。有歧見的事不可標 verified。
- 時期歸屬依 `y` 落在 `PERIODS` 的 `[a,b)` 區間。`md` 是範圍（如 1895–1902）時改放進標題，`md` 留空。
- 時期事件沒資料時介面顯示「事件待擴充」，**不要拿未查證的事件充數**。

**李登輝事件 `E`（src/data.js）**：列 `[era,year,md,title,body,w,tags,key,mv,ms,ck]`，檔尾依年份、月排序後以**索引當 id**——新增事件會讓 id 位移，凡是寫死 id 的地方（總覽精選 `OV_SEL`、`ovLane` 等）要一起檢查。

**背景專題 `BG`（src/bgdata.js）**：`{id,k,t,s,ys,html}`，新專題插在 `{id:"jiangnan"` 之前。內文用 `[[bg:id]]` 可產生連結按鈕（id 只能 `[\w-]+`）。輔助函式：`F`(流程) `P`(對照) `T`(表) `N`(補充) `L`(和李登輝的關係) `Pp`(段落)。

## 品質流程（每一批內容都要走）
1. 研究：用 WebSearch/WebFetch 讀實際頁面，每則事件附真實可開的來源網址（優先官方：國史館、國家人權博物館、中研院、教育部辭典），不可只憑記憶。
2. 寫入：中性用語、各方稱謂並列（光復／終戰、日治／日據…）、標 `conf`、有歧見寫在 `note`。
3. **審查**：另派一個沒看過寫作過程的審查 agent（Opus、medium）逐則查日期/人名/數字、conf 標籤合理性、用語中立、來源網址可用（至少抽查 8 個），只回報有證據的問題。依結果修正後才發布。
4. 工作用語不可外洩到頁面（如「本次未讀到」「任務書」）；改寫成「目前未見可引用來源」。
5. build → `tests/smoke.py` → commit → push → 確認 Actions 成功。

## 已知踩雷
- Playwright 在手機寬度點擊常被相鄰標籤擋住，用 `force=True` 或 `dispatchEvent`。
- 手機版圖表靠橫向捲動；桌機（≥900px）圖表突破欄寬並有縮放鈕（`addZoom`）。
- 目前發布的 Artifact 版本是 `build.py --artifact` 的產物（去掉 viewport meta，加 `claude:viewport-fit-sides`）。

## 現況與下一步
見 `docs/HANDOFF.md`（交接狀態）、`docs/ROADMAP.md`（待辦）、`docs/PROMPTS.md`（研究者／審查者提示詞）、`docs/P4_SCOPE_DRAFT.md`（下一期範圍草案，待使用者確認）。簡述：架構與「日治時期」樣板已完成並審查；其餘 7 個時期待逐期擴充，每期一批、每批都要審查。
