#!/usr/bin/env python3
"""把 src/ 組裝成 index.html（GitHub Pages 直接發布的檔案）。

用法：
  python3 build.py            # 產生 ./index.html
  python3 build.py --artifact # 另外產生 out/artifact.html（給 Claude Artifact 發布用的變體）
  python3 build.py --check    # 只檢查 ./index.html 是否與 src/ 一致（CI 用）
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "src"


def read(name):
    return (SRC / name).read_text(encoding="utf-8")


def build():
    html = read("template.html")
    for key, f in (("__DATA__", "data.js"), ("__BG__", "bgdata.js"), ("__HIST__", "history.js")):
        assert key in html, f"template.html 缺少佔位符 {key}"
        html = html.replace(key, read(f))
    return html


def artifact_variant(html):
    x = html[html.index("<title>"):]
    x = re.sub(r'<meta name="viewport"[^>]*>', "", x)
    return x.replace("</title>", '</title>\n<meta name="claude:viewport-fit-sides" content="cover">', 1)


if __name__ == "__main__":
    out = build()
    target = ROOT / "index.html"
    if "--check" in sys.argv:
        ok = target.exists() and target.read_text(encoding="utf-8") == out
        print("index.html 與 src/ 一致" if ok else "index.html 已過期：請執行 python3 build.py 並提交")
        sys.exit(0 if ok else 1)
    target.write_text(out, encoding="utf-8")
    print("built index.html", len(out), "chars")
    if "--artifact" in sys.argv:
        (ROOT / "out").mkdir(exist_ok=True)
        (ROOT / "out" / "artifact.html").write_text(artifact_variant(out), encoding="utf-8")
        print("built out/artifact.html")
