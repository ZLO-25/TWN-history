// 檢查 src/stories/*.js：格式、連結是否存在、字數與 min、工作用語。用法：node tests/check_stories.js [id...]
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
const ctx = {};
vm.createContext(ctx);
for (const f of ["bgdata.js", "history.js", "people.js"]) {
  const code = fs.readFileSync(path.join(ROOT, "src", f), "utf8").replace(/^(const|let) (\w+)\s*=/gm, "var $2=");
  vm.runInContext(code, ctx);
}
const BG = ctx.BG, H = ctx.H || ctx.H_RAW, PEOPLE = ctx.PEOPLE;
const STORIES = [];
ctx.S = o => STORIES.push(o);
const dir = path.join(ROOT, "src", "stories");
const only = process.argv.slice(2);
let errs = 0, warn = 0;
const E = (id, m) => { errs++; console.log(`✗ ${id}: ${m}`) }, W = (id, m) => { warn++; console.log(`! ${id}: ${m}`) };
for (const f of fs.readdirSync(dir).filter(f => f.endsWith(".js")).sort()) {
  const id0 = f.slice(0, -3);
  if (only.length && !only.includes(id0)) continue;
  const n = STORIES.length;
  try { vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f }) } catch (e) { E(id0, "語法錯誤 " + e.message); continue }
  if (STORIES.length !== n + 1) { E(id0, "檔案必須剛好呼叫一次 S({...})"); continue }
  const s = STORIES[n];
  if (s.id !== id0) E(id0, `id "${s.id}" 與檔名不符`);
  if (!BG.find(b => b.id === s.id)) E(id0, "沒有對應的專題 id");
  for (const k of ["min", "lead", "cast", "secs", "keep", "think", "src"]) if (s[k] == null) E(id0, "缺欄位 " + k);
  if (!Array.isArray(s.secs) || !s.secs.length) continue;
  if ((s.keep || []).length !== 3) E(id0, "keep 要剛好 3 項");
  const all = [s.lead, ...s.secs.map(x => x.h + "\n" + x.t), ...(s.keep || []), ...(s.think || []), ...(s.cast || []).map(c => c.name + c.role)].join("\n");
  for (const m of all.matchAll(/\[\[(\w+):([^|\]]+)\|([^\]]+)\]\]/g)) {
    const [, k, v] = m;
    if (k === "p" && !PEOPLE.find(p => p.id === v)) E(id0, "人物 id 不存在：" + v);
    else if (k === "h" && !H.find(h => h.t === v)) E(id0, "事件標題不存在：" + v);
    else if (k === "bg" && !BG.find(b => b.id === v)) E(id0, "專題 id 不存在：" + v);
    else if (!["p", "h", "bg"].includes(k)) E(id0, "未知連結類型：" + k);
  }
  const bad = all.match(/\[\[(?!(p|h|bg):[^|\]]+\|[^\]]+\]\])/g); if (bad) E(id0, "連結格式錯誤（要 [[類型:id|文字]]）");
  for (const c of s.cast || []) if (c.p && !PEOPLE.find(p => p.id === c.p)) E(id0, "cast 人物 id 不存在：" + c.p);
  const links = (all.match(/\[\[/g) || []).length; if (links < 4) W(id0, `站內連結只有 ${links} 個（至少 4）`);
  const body = s.secs.map(x => x.t).join("").replace(/```[\s\S]*?```/g, m => m.replace(/[\s─│┌┐└┘├┤┬┴┼▶◀▼▲→←↓↑]/g, "")).replace(/\[\[\w+:[^|\]]+\|([^\]]+)\]\]/g, "$1").replace(/\s/g, "");
  const chars = body.length, est = Math.round(chars / 350);
  if (Math.abs(est - s.min) > 2) W(id0, `min=${s.min} 但字數 ${chars} 約 ${est} 分`);
  if ((s.secs.map(x => x.t).join("").match(/```/g) || []).length < 4) W(id0, "ASCII 圖少於 2 張");
  if (!s.secs.some(x => /各方怎麼看|怎麼被記住/.test(x.h))) W(id0, "缺「各方怎麼看」段");
  const leak = all.match(/本次|任務書|所讀來源|未讀到|研究者|審查者|查證不足/); if (leak) E(id0, "工作用語外洩：" + leak[0]);
  if (/<[a-z]+[\s>]/i.test(all)) E(id0, "不要寫 HTML 標籤");
  for (const x of s.src || []) if (!/^https?:\/\//.test(x.u || "")) E(id0, "來源網址格式錯誤：" + x.t);
  console.log(`✓ ${id0}  ${chars} 字  約 ${est} 分（min ${s.min}）  連結 ${links}  來源 ${(s.src || []).length}`);
}
console.log(`\n${STORIES.length} 篇；錯誤 ${errs}；提醒 ${warn}`);
process.exit(errs ? 1 : 0);
