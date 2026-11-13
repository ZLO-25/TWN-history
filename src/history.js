const PERIODS=[
 {id:"p0",name:"原住民社會",range:"至 1624",a:1400,b:1624,sum:"南島語系原住民族在各地生活，各有自己的社會與信仰。"},
 {id:"p1",name:"荷西與鄭氏",range:"1624–1683",a:1624,b:1683,sum:"荷蘭、西班牙先後經營台灣，後由鄭成功趕走荷蘭，鄭氏政權延續到 1683 年。"},
 {id:"p2",name:"清領時期",range:"1683–1895",a:1683,b:1895,sum:"1683 年起納入清朝版圖，漢人移民增加，19 世紀後期建省。"},
 {id:"p3",name:"日治時期",range:"1895–1945",a:1895,b:1946,sum:"馬關條約後日本統治台灣五十年（亦稱日據時期、日本殖民統治時期），從武力鎮壓、同化到戰時動員。",
  keys:["統治方式大致由武力鎮壓、同化走向皇民化與戰時動員；分期沒有單一通說（見專題「日治統治政策三階段」）","1920 年代出現以文化協會、議會設置請願為代表的非武裝政治運動，也有 1930 年霧社事件這樣的武裝衝突","建設與統治並存，評價有很大爭議；台灣人的身分認同在這五十年間有抵抗、協力、適應等多種選擇"]},
 {id:"p4",name:"戰後接收與內戰",range:"1945–1949",a:1946,b:1950,sum:"國民政府接收台灣，1947 年二二八事件，1949 年中華民國政府遷台。"},
 {id:"p5",name:"威權戒嚴",range:"1949–1987",a:1950,b:1988,sum:"戒嚴與動員戡亂體制下的政治、經濟起飛，也是白色恐怖時期。"},
 {id:"p6",name:"民主化",range:"1987–2000",a:1988,b:2001,sum:"解嚴、國會全面改選、修憲與總統直選，2000 年第一次政黨輪替。"},
 {id:"p7",name:"政黨輪替後",range:"2000–今",a:2001,b:2027,sum:"政黨輪替成為常態，兩岸與國際關係成為核心議題。"}
];
const CONF={verified:["✓","已查證"],common:["≈","常見說法"],disputed:["⚑","有爭議"]};
const H_RAW=[
{
"y": 1895,
"md": "4月17日",
"t": "簽訂《馬關條約》",
"key": "treaty-shimonoseki-1895",
"s": "馬關條約",
"b": "清日兩國於馬關簽訂條約，清廷將台灣與澎湖永久讓與日本。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "馬關條約／下關條約／日清講和條約",
"note": "中文多稱「馬關條約」，日文稱「下關條約」「日清講和條約」。"
}
],
"note": "英文維基標示條約於1895年5月8日生效；日本實際接收時間，各來源另有說法（英文維基Shimonoseki條目稱至10月才接收，Invasion條目稱6月3日基隆海上交接）。",
"src": [
{
"t": "English Wikipedia: Treaty of Shimonoseki",
"u": "https://en.wikipedia.org/wiki/Treaty_of_Shimonoseki"
},
{
"t": "維基百科中文「乙未戰爭」",
"u": "https://zh.wikipedia.org/wiki/乙未戰爭"
}
],
"why": [
{
"t": "甲午戰爭（1894–1895）中清廷戰敗，與日本議和。",
"k": "d"
}
],
"so": [
{
"t": "條約規定割讓台灣與澎湖；台灣士紳與官員隨後宣布成立台灣民主國以抵抗接收，日軍於 5 月底登陸，展開接收。",
"k": "d"
}
],
"rel": [
"world-sino-japanese-1894",
"republic-formosa-1895",
"landing-aodi-1895"
]
},
{
"y": 1895,
"md": "5月25日",
"t": "台灣民主國宣布成立",
"key": "republic-formosa-1895",
"s": "台灣民主國",
"b": "5月23日發布自主宣言，5月25日成立，台灣士紳與官員推唐景崧為總統，年號「永清」，以抵抗接收。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "台灣民主國／臺灣共和國（Republic of Formosa）",
"note": "中文多稱台灣民主國；英文常譯Republic of Formosa；性質上為短暫的抗拒割讓政權，各方評價不一。"
}
],
"note": "5月23日（宣言）與25日（成立、唐景崧就任）是兩個不同動作，各來源擇一記載。英文維基Republic of Formosa對唐景崧離任日期自相矛盾（表列至6月5日，內文稱6月4日夜潛逃、6日搭船離台）。",
"src": [
{
"t": "維基百科中文「乙未戰爭」",
"u": "https://zh.wikipedia.org/wiki/乙未戰爭"
},
{
"t": "English Wikipedia: Republic of Formosa",
"u": "https://en.wikipedia.org/wiki/Republic_of_Formosa"
}
],
"why": [
{
"t": "《馬關條約》規定割讓台灣，台灣的部分士紳與官員決定宣布自主、抵抗接收。",
"k": "d"
}
],
"so": [
{
"t": "日軍於 5 月 29 日登陸；唐景崧於 6 月初離台，10 月 21 日台南城陷落、劉永福離台（各事件日期見各卡）。",
"k": "d"
}
],
"rel": [
"treaty-shimonoseki-1895",
"landing-aodi-1895",
"tainan-fall-1895"
]
},
{
"y": 1895,
"md": "5月29日",
"t": "日軍於澳底登陸",
"key": "landing-aodi-1895",
"s": "日軍登陸澳底",
"b": "日軍近衛師團在基隆東方的澳底一帶登陸，展開接收台灣的軍事行動。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "乙未戰爭／乙未之役／台灣平定",
"note": "中文以干支「乙未」命名；日方稱「臺灣平定」「臺灣征討」，立場不同。"
}
],
"note": "中文維基稱「澳底」；英文維基稱 Samtiao Point（三貂角）近Audi，日期同為5月29日。",
"src": [
{
"t": "維基百科中文「乙未戰爭」",
"u": "https://zh.wikipedia.org/wiki/乙未戰爭"
},
{
"t": "English Wikipedia: Japanese invasion of Taiwan (1895)",
"u": "https://en.wikipedia.org/wiki/Japanese_invasion_of_Taiwan_(1895)"
}
]
},
{
"y": 1895,
"md": "6月17日",
"t": "台北舉行始政式",
"key": "inauguration-1895",
"s": "始政式",
"b": "樺山資紀在台北城內原布政使司衙門的總督府舉行始政儀式，日後稱「始政紀念日」。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "始政／始政紀念日",
"note": "日方以此日為統治開始；台灣方面亦有以5月至10月戰事視為統治確立過程之觀點。"
}
],
"note": "英文維基Invasion條目另記6月3日在基隆港日艦上由樺山資紀與李經方辦理交接，與6月17日始政式為不同儀式。",
"src": [
{
"t": "維基百科中文「乙未戰爭」",
"u": "https://zh.wikipedia.org/wiki/乙未戰爭"
},
{
"t": "English Wikipedia: Japanese invasion of Taiwan (1895)",
"u": "https://en.wikipedia.org/wiki/Japanese_invasion_of_Taiwan_(1895)"
}
]
},
{
"y": 1895,
"md": "10月21日",
"t": "台南城陷落，劉永福離台",
"key": "tainan-fall-1895",
"s": "台南陷落",
"b": "10月20日劉永福離開台南渡廈門；21日日軍進入台南城，日方視為台灣民主國結束。",
"track": "政權",
"conf": "disputed",
"aliases": [
{
"term": "抗日／反抗殖民／抗日運動",
"note": "「抗日」為台灣與中國通行用語；日方與部分研究稱「匪亂」「土匪」（日本殖民史觀）；現代台灣史觀多稱抗日或反殖民。"
},
{
"term": "乙未戰爭／乙未之役／台灣平定",
"note": "中文以干支「乙未」命名；日方稱「臺灣平定」「臺灣征討」，立場不同。"
}
],
"note": "日期：中文維基稱日軍10月21日進入台南，靖國神社統計以10月22日為占領日；英文維基Invasion與Formosa皆為10月21日。劉永福：10月20日棄城，所乘英輪被日艦攔檢、後獲釋（船名英文維基作SS Thales）。",
"src": [
{
"t": "維基百科中文「乙未戰爭」",
"u": "https://zh.wikipedia.org/wiki/乙未戰爭"
},
{
"t": "English Wikipedia: Japanese invasion of Taiwan (1895)",
"u": "https://en.wikipedia.org/wiki/Japanese_invasion_of_Taiwan_(1895)"
},
{
"t": "English Wikipedia: Republic of Formosa",
"u": "https://en.wikipedia.org/wiki/Republic_of_Formosa"
}
]
},
{
"y": 1895,
"md": "",
"t": "武裝抗日（1895–1902）",
"key": "armed-resistance-1895",
"s": "武裝抗日",
"b": "乙未戰爭後各地仍有武裝抗日；總督府以軍警鎮壓並輔以招降，至1902年前後大規模武裝抗爭大致平息。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "抗日／反抗殖民／抗日運動",
"note": "「抗日」為台灣與中國通行用語；日方與部分研究稱「匪亂」「土匪」（日本殖民史觀）；現代台灣史觀多稱抗日或反殖民。"
},
{
"term": "乙未戰爭／乙未之役／台灣平定",
"note": "中文以干支「乙未」命名；日方稱「臺灣平定」「臺灣征討」，立場不同。"
}
],
"note": "乙未戰爭數字：日軍衛生部門統計死亡8,503人（戰死333人）；靖國神社統計戰死354人；台方戰場遺屍據稱七、八千人，學術估算陣亡至少14,000人，平民受害估計至少10萬人（均據中文維基，估計值差異大）。1898–1902年的招降與各地抗日事件，目前未見足夠一手或學術來源，細節待補。 另1907–1915年仍有北埔、林圮埔、苗栗等事件，至西來庵事件為止，並非1902年後就沒有武裝抗爭。",
"src": [
{
"t": "維基百科中文「乙未戰爭」",
"u": "https://zh.wikipedia.org/wiki/乙未戰爭"
},
{
"t": "English Wikipedia: Taiwan under Japanese rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Japanese_rule"
}
]
},
{
"y": 1896,
"md": "3月31日",
"t": "公布「六三法」",
"key": "law63-1896",
"s": "六三法",
"b": "日本帝國議會通過法律第63號，授權台灣總督發布具法律效力的命令（律令），總督集行政、立法、司法權。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "六三法／台灣施行法令相關法律",
"note": "正式名為《臺灣ニ施行スヘキ法令ニ關スル法律》；台灣人稱總督為「土皇帝」（據中文維基）。"
}
],
"note": "原定三年期限，經1899、1902、1905年延長；1906年改以《三一法》取代，總督仍保有律令制定權。其與憲法適用台灣之關係，學者意見分歧。",
"src": [
{
"t": "維基百科中文「六三法」",
"u": "https://zh.wikipedia.org/wiki/%E5%85%AD%E4%B8%89%E6%B3%95"
},
{
"t": "English Wikipedia: Taiwan under Japanese rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Japanese_rule"
}
],
"bg": "jp-policy",
"why": [
{
"t": "日本取得台灣後，需要決定治理台灣的法律依據；憲法是否適用台灣，學者意見分歧。",
"k": "s"
}
],
"so": [
{
"t": "總督得發布具法律效力的律令，集行政、立法、司法權；原定三年，經三次延長，1906 年由《三一法》取代。",
"k": "d"
}
],
"rel": [
"kodama-goto-1898",
"treaty-shimonoseki-1895"
]
},
{
"y": 1898,
"md": "2月26日",
"t": "兒玉源太郎就任，後藤新平主持民政",
"key": "kodama-goto-1898",
"s": "兒玉、後藤上任",
"b": "第四任總督兒玉源太郎於1898年2月26日就任，後藤新平主持民政（初任民政局長，同年官制改為民政長官），推動土地、戶口調查與基礎建設。",
"track": "政權",
"conf": "verified",
"aliases": [],
"note": "兒玉任期1898.2.26–1906.4.11（據英文維基總督表）；後藤就任及改任民政長官的確切日期，目前未見可引用的線上來源。",
"src": [
{
"t": "English Wikipedia: Governor-General of Taiwan",
"u": "https://en.wikipedia.org/wiki/Governor-General_of_Taiwan"
},
{
"t": "English Wikipedia: Gotō Shinpei",
"u": "https://en.wikipedia.org/wiki/Gotō_Shinpei"
}
],
"bg": "jp-policy",
"so": [
{
"t": "後藤新平主持民政期間，展開土地調查事業與戶口調查，並推動基礎建設（見相關事件）。",
"k": "d"
}
],
"rel": [
"land-survey-1898",
"census-1905",
"bank-taiwan-1899"
],
"who": [
"goto-shinpei"
]
},
{
"y": 1898,
"md": "",
"t": "土地調查事業（1898–1905）",
"key": "land-survey-1898",
"s": "土地調查",
"b": "總督府以1898年《臺灣土地調查規則》展開土地調查，1905年3月完成、5月實施土地登記，並消滅大租權。",
"track": "政權",
"conf": "common",
"aliases": [],
"note": "吳聰敏講義：1898–1905年，1898年7月公告規則，1905年3月調查完成。英文維基Taiwan under Japanese rule稱「1911年前未做調查」，與前者不一致，疑指另一階段或表述有誤，需查原始文獻。調查前後的耕地面積與地租數字，目前未見可引用來源。",
"src": [
{
"t": "吳聰敏講義：土地調查與戶口調查（國立臺灣大學）",
"u": "https://homepage.ntu.edu.tw/~ntut019/te400/bm-T4A-LandCensus-why.pdf"
},
{
"t": "English Wikipedia: Gotō Shinpei",
"u": "https://en.wikipedia.org/wiki/Gotō_Shinpei"
},
{
"t": "English Wikipedia: Taiwan under Japanese rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Japanese_rule"
}
],
"bg": "jp-development"
},
{
"y": 1899,
"md": "",
"t": "台灣銀行成立",
"key": "bank-taiwan-1899",
"s": "台灣銀行",
"b": "依1897年《臺灣銀行法》設立的台灣銀行，於1899年（9月26日）開業，兼具發行貨幣與中央銀行功能。",
"track": "政權",
"topic": "經濟產業",
"conf": "common",
"aliases": [],
"note": "1897年是設立法案通過，1899年是開業，並非矛盾；英文維基Bank of Taiwan資訊框列1897。1898年6月成立之說，目前未見其他來源佐證。",
"src": [
{
"t": "English Wikipedia: Bank of Taiwan",
"u": "https://en.wikipedia.org/wiki/Bank_of_Taiwan"
},
{
"t": "English Wikipedia: Taiwan under Japanese rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Japanese_rule"
}
],
"bg": "jp-development"
},
{
"y": 1905,
"md": "10月1日",
"t": "第一次臨時台灣戶口調查",
"key": "census-1905",
"s": "首次戶口調查",
"b": "總督府於1905年10月1日進行首次戶口調查，其後1915年再調查，1920年起每五年一次，結果顯示台灣人口約三百萬。",
"track": "政權",
"conf": "common",
"aliases": [],
"note": "吳聰敏：1905年10月1日現住人口3,039,751人（不含高山原住民），同年底3,046,859人；英文維基只稱約三百萬。講義另載調查年份為1905、1915、1920。",
"src": [
{
"t": "吳聰敏講義：土地調查與戶口調查（國立臺灣大學）",
"u": "https://homepage.ntu.edu.tw/~ntut019/te400/bm-T4A-LandCensus-why.pdf"
},
{
"t": "吳聰敏：糖業、纏足與失蹤婦女（未完成初稿，臺大經濟系）",
"u": "https://econ.ntu.edu.tw/wp-content/uploads/2023/12/hist_1080516.pdf"
},
{
"t": "English Wikipedia: Taiwan under Japanese rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Japanese_rule"
}
],
"bg": "jp-development"
},
{
"y": 1915,
"md": "7月6日",
"t": "西來庵（噍吧哖）事件",
"key": "tapani-1915",
"s": "西來庵事件",
"b": "余清芳等人以西來庵為據點起事，8月在噍吧哖與日軍警衝突，總督府大規模逮捕並軍法審判。",
"track": "政權",
"conf": "disputed",
"aliases": [
{
"term": "西來庵事件／噍吧哖事件／余清芳事件",
"note": "依地名或領導者命名；日方史觀曾稱匪亂，台灣現代史觀多視為抗日事件。"
}
],
"note": "人數各來源不一：中文維基（目前取得內容）：總督府統計逮捕1,957人，台南臨時法院判死刑866人（另有余清芳、羅俊、江定），11月10日安東貞美宣布約四分之三死刑改無期徒刑；學者估計日方殺害可能逾萬人；2014年新化發現逾3,000具遺骨，身分未確認。英文維基Tapani：參與1,413人，江定等272人於1916年5月18日被捕；死亡總數未給。日期：英文維基起事為7月6日，余清芳8月22日被捕。",
"src": [
{
"t": "維基百科中文「西來庵事件」",
"u": "https://zh.wikipedia.org/wiki/西來庵事件"
},
{
"t": "English Wikipedia: Tapani incident",
"u": "https://en.wikipedia.org/wiki/Tapani_incident"
}
]
},
{
"y": 1919,
"md": "10月29日",
"t": "田健治郎就任首位文官總督",
"key": "den-1919",
"s": "首位文官總督",
"b": "田健治郎於1919年10月29日就任，台灣總督改由文官出任，統治方針轉向同化。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "同化政策／內地延長主義",
"note": "同化政策主張台灣視為日本延長，實際仍存在本島人與內地人差別待遇。"
}
],
"note": "總督表列田健治郎任期1919.10.29–1923.9.6，為第8任。同化階段起點，英文維基Taiwan under Japanese rule分期為1915–37，通說常以1919為文官總督起點，兩說並存。",
"src": [
{
"t": "English Wikipedia: Governor-General of Taiwan",
"u": "https://en.wikipedia.org/wiki/Governor-General_of_Taiwan"
},
{
"t": "English Wikipedia: Taiwan under Japanese rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Japanese_rule"
}
],
"bg": "jp-policy"
},
{
"y": 1921,
"md": "10月17日",
"t": "台灣文化協會成立",
"key": "tca-1921",
"s": "文化協會",
"b": "蔣渭水等人在台北大稻埕創立台灣文化協會，林獻堂任總理，以講演、讀報社等啟蒙社會。",
"track": "政治外交",
"conf": "verified",
"aliases": [],
"note": "英文維基：1925與1926年巡迴講演聽眾超過23萬人次（為出席人次，非會員數）。會員人數目前未見。",
"src": [
{
"t": "English Wikipedia: Taiwanese Cultural Association",
"u": "https://en.wikipedia.org/wiki/Taiwanese_Cultural_Association"
}
],
"bg": "jp-identity",
"why": [
{
"t": "學者常把一次大戰後的民族自決思潮、日本國內的大正民主風氣，視為台灣知識青年組織文協的背景；影響的程度與路徑，各家說法不一。",
"k": "s"
}
],
"so": [
{
"t": "文協以講演、讀報社等方式啟蒙社會；1927 年內部溫和派與左翼分歧，部分成員另組台灣民眾黨。",
"k": "d"
}
],
"rel": [
"world-ww1-1918",
"petition-1921",
"cpl-incident-1923",
"tpp-1927"
],
"who": [
"chiang-wei-shui",
"lin-hsien-tang"
]
},
{
"y": 1921,
"md": "1月30日",
"t": "台灣議會設置請願運動展開",
"key": "petition-1921",
"s": "議會請願",
"b": "1921年1月30日首次向帝國議會提出請願，至1934年共15次，9月2日宣布停止。",
"track": "政治外交",
"conf": "verified",
"aliases": [],
"note": "中文維基：1921–1934共約14年、15次；1934年9月2日林獻堂等人決議停止，1931年台灣民主黨已解散。",
"src": [
{
"t": "維基百科中文「臺灣議會設置請願運動」",
"u": "https://zh.wikipedia.org/wiki/臺灣議會設置請願運動"
}
],
"bg": "jp-identity",
"why": [
{
"t": "同上：民族自決思潮與大正民主風氣，常被學者視為背景之一，但影響程度並無定論。",
"k": "s"
}
],
"so": [
{
"t": "請願共提出 15 次，1934 年宣布停止；1923 年總督府曾以《治安警察法》搜捕運動成員（治警事件）。",
"k": "d"
}
],
"rel": [
"tca-1921",
"cpl-incident-1923"
],
"who": [
"lin-hsien-tang"
]
},
{
"y": 1923,
"md": "12月16日",
"t": "治警事件",
"key": "cpl-incident-1923",
"s": "治警事件",
"b": "總督府以違反《治安警察法》為由大規模搜捕議會請願運動成員，後經三審判決。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "治警事件／台灣治安警察法違反事件",
"note": "日方以違反治安警察法為名，台灣方面視為鎮壓政治結社。"
}
],
"note": "日期與判決人數各來源大致一致（二審13人有罪，三審維持；蔣渭水、蔡培火各4個月，另5人各3個月，6人罰金100圓）。中文維基「臺灣議會設置請願運動」條目寫「六人判3至4個月」且列七人，與治警事件條不一致，採後者。拘捕41人、傳訊58人、牽連99人、起訴18人（中文維基）。",
"src": [
{
"t": "維基百科中文「治警事件」",
"u": "https://zh.wikipedia.org/wiki/治警事件"
},
{
"t": "維基百科中文「臺灣議會設置請願運動」",
"u": "https://zh.wikipedia.org/wiki/臺灣議會設置請願運動"
}
],
"bg": "jp-identity",
"why": [
{
"t": "起因是議會設置請願運動的組織與活動，總督府以違反《治安警察法》為由處理。",
"k": "d"
}
],
"so": [
{
"t": "二審 13 人有罪、三審維持；蔣渭水、蔡培火各判 4 個月（細節見說明）。",
"k": "d"
}
],
"rel": [
"petition-1921",
"tpp-1927"
],
"who": [
"chiang-wei-shui"
]
},
{
"y": 1927,
"md": "7月10日",
"t": "台灣民眾黨成立",
"key": "tpp-1927",
"s": "民眾黨",
"b": "文協內部溫和派與左翼分歧，部分成員另組台灣民眾黨，被視為台灣第一個政黨。",
"track": "政治外交",
"conf": "common",
"aliases": [],
"note": "成立日1927年7月10日各來源一致。被禁日期以1931年2月18日為是；英文維基資訊框的「1931年8月」疑為誤植（該月是蔣渭水過世）。文協分裂的確切日期，目前未見可引用來源。",
"src": [
{
"t": "English Wikipedia: Taiwanese People's Party",
"u": "https://en.wikipedia.org/wiki/Taiwanese_People%27s_Party"
},
{
"t": "English Wikipedia: Taiwanese Cultural Association",
"u": "https://en.wikipedia.org/wiki/Taiwanese_Cultural_Association"
}
],
"bg": "jp-identity",
"why": [
{
"t": "文協內部溫和派與左翼出現分歧，部分成員另組政黨。",
"k": "d"
}
],
"so": [
{
"t": "台灣民眾黨於 1931 年 2 月 18 日被禁；同年 8 月蔣渭水過世。",
"k": "d"
}
],
"rel": [
"tca-1921",
"cpl-incident-1923"
],
"who": [
"chiang-wei-shui"
]
},
{
"y": 1928,
"md": "3月16日",
"t": "台北帝國大學設立",
"key": "taihoku-univ-1928",
"s": "台北帝大",
"b": "台北帝國大學為日本第七所帝國大學，1928年設立，初設文政學部與理農學部。",
"track": "政權",
"topic": "文化生活",
"conf": "verified",
"aliases": [],
"note": "英文維基：1928年3月16日設立，首屆新生入學4月30日、5月5日開課；1928–1943年學生約八成日籍、兩成台籍；1945年接收時1,767名學生中台籍351人。",
"src": [
{
"t": "English Wikipedia: National Taiwan University",
"u": "https://en.wikipedia.org/wiki/National_Taiwan_University"
}
],
"bg": "jp-development"
},
{
"y": 1930,
"md": "10月27日",
"t": "霧社事件",
"key": "wushe-1930",
"s": "霧社事件",
"b": "賽德克族起事六社，在霧社公學校運動會當日襲擊日人；日方以軍警、飛機與火砲鎮壓，並被指使用毒氣。起因包括強制勞動、警察不當對待等（英文維基）。",
"track": "政權",
"conf": "disputed",
"aliases": [
{
"term": "霧社事件／Musha（Wushe）Incident",
"note": "日文稱「霧社事件」；台灣原住民族視角強調賽德克人反殖民抵抗；亦有「抗日」之稱。"
}
],
"note": "死傷各來源不一：日人死亡134人（英文維基、Taipei Times、Taiwan Today一致；英文維基另提兩名著和服的漢人）；日方傷者，Taiwan Today稱26人，英文維基資訊框稱215人。賽德克方：英文維基稱644人死亡（其中290人自殺，該數字標註待引用）；Taipei Times稱逾600人死、約半數自殺；香港01稱六社約1,500人減至298人倖存。起事六社人口約1,236人（Taiwan Today），英文維基稱實際參與襲擊的壯丁逾300人；Taipei Times稱「數百人」。第二次霧社事件：1931年4月25日，味方蕃襲擊收容所，Taiwan Today稱216人死亡；英文維基稱斬首15歲以上男性、無死亡數。",
"src": [
{
"t": "English Wikipedia: Musha Incident",
"u": "https://en.wikipedia.org/wiki/Musha_Incident"
},
{
"t": "Taipei Times: Taiwan in Time（2015-10-25）",
"u": "https://www.taipeitimes.com/News/feat/archives/2015/10/25/2003630860"
},
{
"t": "Taiwan Today 2011-07-15：'Seediq Bale' sparks renewed interest in Wushe Uprising",
"u": "https://taiwanreview.nat.gov.tw/AMP/Culture/Top-News/24465"
},
{
"t": "香港01：霧社事件九十周年",
"u": "https://www.hk01.com/%E8%97%9D%E6%96%87%E4%B8%AD%E5%9C%8B/536836/"
}
],
"bg": "wushe",
"why": [
{
"t": "起因包括強制勞動、警察不當對待等；各來源強調的原因不同，詳見專題。",
"k": "s"
}
],
"so": [
{
"t": "日方以軍警鎮壓；1931 年 4 月又發生第二次霧社事件（與日方合作的原住民襲擊收容所）。倖存者被遷往平地。",
"k": "d"
}
],
"rel": [
"kominka-1937"
],
"who": [
"mona-rudao"
]
},
{
"y": 1930,
"md": "5月",
"t": "嘉南大圳完工",
"key": "chianan-1930",
"s": "嘉南大圳",
"b": "嘉南大圳1920年動工、1930年完工，由總督府技師八田與一設計，以烏山頭水庫為核心。",
"track": "政權",
"topic": "經濟產業",
"conf": "common",
"aliases": [],
"note": "中文維基：1920年9月動工、1930年5月完成；灌溉區各幹線面積加總約144,000甲（為依條目數字自行加總，條目未載總數）。英文維基稱可耕稻田由5,000增至150,000公頃，兩者單位與口徑不同。",
"src": [
{
"t": "維基百科中文「嘉南大圳」",
"u": "https://zh.wikipedia.org/wiki/嘉南大圳"
},
{
"t": "English Wikipedia: Chianan Irrigation",
"u": "https://en.wikipedia.org/wiki/Chianan_Irrigation"
}
],
"bg": "jp-development"
},
{
"y": 1935,
"md": "10月10日",
"t": "始政四十週年台灣博覽會",
"key": "expo-1935",
"s": "始政40年博覽會",
"b": "為紀念統治四十年，博覽會於1935年10月10日至11月28日舉行，展示總督府施政建設。",
"track": "政權",
"conf": "verified",
"aliases": [],
"note": "英文維基：共50天，入場者逾100萬人，另載館內參觀人次2,750,000。",
"src": [
{
"t": "English Wikipedia: The Taiwan Exposition (1935)",
"u": "https://en.wikipedia.org/wiki/The_Taiwan_Exposition:_In_Commemoration_of_the_First_Forty_Years_of_Colonial_Rule"
}
],
"bg": "jp-development"
},
{
"y": 1936,
"md": "9月2日",
"t": "小林躋造就任，武官總督復活",
"key": "kobayashi-1936",
"s": "武官總督復活",
"b": "海軍出身的小林躋造就任第17任總督，台灣總督重回武官，提出「皇民化、工業化、南進基地化」。",
"track": "政權",
"conf": "verified",
"aliases": [],
"note": "總督表：小林躋造1936.9.2–1940.11.27。「三原則」說法見中文維基皇民化運動條。",
"src": [
{
"t": "English Wikipedia: Governor-General of Taiwan",
"u": "https://en.wikipedia.org/wiki/Governor-General_of_Taiwan"
},
{
"t": "維基百科中文「皇民化運動」",
"u": "https://zh.wikipedia.org/wiki/皇民化運動"
},
{
"t": "Soundtraces: Colonial Government Intensifies the Kominka Movement",
"u": "https://soundtraces.tw/?p=102611"
}
],
"bg": "jp-policy"
},
{
"y": 1937,
"md": "4月",
"t": "皇民化運動與報紙漢文欄廢止",
"key": "kominka-1937",
"s": "皇民化運動",
"b": "1937年起強化日語推行，查禁報紙漢文欄、廢除漢文書房，並推動神社參拜與國語家庭。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "皇民化運動／皇民奉公運動／Japanization",
"note": "1941年4月成立皇民奉公會後轉稱皇民奉公運動；台灣學界亦譯Kōminka。"
}
],
"note": "時間點：中文維基稱1937年四、五月開始查禁漢文欄；英文維基Taiwan under Japanese rule稱1937年4月；英文維基Japanization僅稱運動始於1937、未單獨標漢文欄日期。皇民化起點亦有1936年底說（中文維基第一階段為1936年底至1940年）。",
"src": [
{
"t": "維基百科中文「皇民化運動」",
"u": "https://zh.wikipedia.org/wiki/皇民化運動"
},
{
"t": "English Wikipedia: Japanization",
"u": "https://en.wikipedia.org/wiki/Japanization"
},
{
"t": "Soundtraces: Colonial Government Intensifies the Kominka Movement",
"u": "https://soundtraces.tw/?p=102611"
},
{
"t": "English Wikipedia: Taiwan under Japanese rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Japanese_rule"
}
],
"bg": "jp-identity",
"why": [
{
"t": "學者多把皇民化放在戰爭動員的脈絡下理解，但起點與動機的說法並不一致（見說明）。",
"k": "s"
}
],
"so": [
{
"t": "同一政策方向下，之後有改姓名（1940）、陸軍特別志願兵（1942）與徵兵（1945）等措施。",
"k": "s"
}
],
"rel": [
"name-change-1940",
"volunteer-1942",
"conscription-1945"
]
},
{
"y": 1940,
"md": "",
"t": "改姓名運動",
"key": "name-change-1940",
"s": "改姓名",
"b": "1940年起實施改日本姓名，採申請許可制，非全面強制，附帶配給與升學等優惠。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "改姓名／改姓名運動",
"note": "日方稱「內地人式氏名」，台灣人則多稱改姓名；是否出於自願，學界常強調有壓力與誘因。"
}
],
"note": "數字差異主要是時間點不同：中文維基載1941年底約1%、1943年底17,526戶（126,211人，約占人口2%）；英文維基稱「戰爭結束時約7%」。終戰時的確切比例目前未見可引用來源。",
"src": [
{
"t": "維基百科中文「皇民化運動」",
"u": "https://zh.wikipedia.org/wiki/皇民化運動"
},
{
"t": "English Wikipedia: Taiwan under Japanese rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Japanese_rule"
}
],
"bg": "jp-identity"
},
{
"y": 1942,
"md": "",
"t": "陸軍特別志願兵制度",
"key": "volunteer-1942",
"s": "特別志願兵",
"b": "1942年實施陸軍特別志願兵制度，1943年續設海軍特別志願兵，台灣人開始以正式軍人身分（志願兵）入伍。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "台籍日本兵／志願兵",
"note": "稱謂涉及自願與否及身分認同；戰後因喪失日本國籍而無法依日本法令請求撫卹，成為補償爭議。"
}
],
"note": "人數：英文維基Conscription in Taiwan：1937–1945共207,183人服役（現役80,433、軍屬126,750）；The News Lens：約207,000人，約3萬人死亡；英文維基Taiwan under Japanese rule稱約5萬人死亡或失蹤。死亡數口徑不同：日本厚生省統計戰死30,304人（約15%），英文維基「約5萬」為死亡加失蹤。1937年起已有軍屬、軍夫，1942年另有高砂義勇隊。志願兵申請人數與錄取人數，目前未見可引用來源。",
"src": [
{
"t": "維基百科中文「皇民化運動」",
"u": "https://zh.wikipedia.org/wiki/皇民化運動"
},
{
"t": "English Wikipedia: Conscription in Taiwan",
"u": "https://en.wikipedia.org/wiki/Conscription_in_Taiwan"
},
{
"t": "The News Lens：台籍日本兵補償議題",
"u": "https://www.thenewslens.com/article/145592"
}
],
"bg": "jp-identity",
"so": [
{
"t": "1937–1945 年共約 20.7 萬台灣人以軍人、軍屬、軍夫身分服役；死亡人數口徑不同，見說明。",
"k": "d"
}
],
"rel": [
"kominka-1937",
"conscription-1945",
"world-pacific-war-1941"
]
},
{
"y": 1945,
"md": "1月",
"t": "徵兵制（1943年宣布、1945年1月起徵兵檢查）",
"key": "conscription-1945",
"s": "徵兵制",
"b": "1943年宣布自1945年起施行；1944年9月起台灣人負兵役義務，1945年1月開始徵兵檢查並入營，至日本投降為止。",
"track": "政權",
"conf": "common",
"aliases": [],
"note": "各來源記載的是不同階段：中文維基與英文維基Conscription in Taiwan稱1945年（英文維基稱1945年1月）；日文維基稱1944年9月起台灣人負兵役義務；The News Lens稱「1944年更實施了徵兵制度」。首批受檢人數等細節尚待官方資料確認。",
"src": [
{
"t": "維基百科中文「皇民化運動」",
"u": "https://zh.wikipedia.org/wiki/皇民化運動"
},
{
"t": "English Wikipedia: Conscription in Taiwan",
"u": "https://en.wikipedia.org/wiki/Conscription_in_Taiwan"
},
{
"t": "維基百科中文「台籍日本兵」",
"u": "https://zh.wikipedia.org/wiki/台籍日本兵"
}
],
"bg": "jp-identity"
},
{
"y": 1945,
"md": "8月15日",
"t": "日本宣布投降",
"key": "surrender-1945",
"s": "日本投降",
"b": "1945年8月15日天皇廣播《終戰詔書》，9月2日簽署降伏文書，戰爭結束。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "光復／終戰／戰敗／接收",
"note": "「光復」為中華民國官方傳統用語；「終戰」為日本與部分台灣人用語；「戰敗」強調日本角度；「接收」側重軍事接管、不預設主權移轉；亦有學者稱「再淪陷」（據中文維基光復條）。"
}
],
"note": "8月14日天皇決定接受波茨坦公告並照會盟國；8月15日玉音放送；9月2日密蘇里號簽降。英文維基Taiwan under Japanese rule另寫「8月14日投降」，屬口徑不同。",
"src": [
{
"t": "維基百科中文「日本投降」",
"u": "https://zh.wikipedia.org/wiki/日本投降"
},
{
"t": "English Wikipedia: Taiwan under Japanese rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Japanese_rule"
}
],
"why": [
{
"t": "二戰末期，日本於 8 月 14 日決定接受波茨坦公告並照會盟國，15 日廣播《終戰詔書》。",
"k": "d"
}
],
"so": [
{
"t": "台灣的統治權進入移轉：10 月 25 日在台北舉行受降，行政長官公署開始運作。",
"k": "d"
}
],
"rel": [
"takeover-1945",
"world-pacific-war-1941"
]
},
{
"y": 1945,
"md": "10月25日",
"t": "台灣受降與行政長官公署接收",
"key": "takeover-1945",
"s": "受降與接收",
"b": "日方總督安藤利吉在台北公會堂向陳儀簽收受降，行政長官公署同日開始運作。",
"track": "政權",
"conf": "disputed",
"aliases": [
{
"term": "光復／終戰／戰敗／接收",
"note": "「光復」為中華民國官方傳統用語；「終戰」為日本與部分台灣人用語；「戰敗」強調日本角度；「接收」側重軍事接管、不預設主權移轉；亦有學者稱「再淪陷」（據中文維基光復條）。"
}
],
"note": "性質有歧見：中華民國政府稱「光復」「收回」；部分學者與當時英美視為戰後軍事占領／接收、待和約決定主權（英文維基Retrocession Day稱英美不接受陳儀單方行動）。",
"src": [
{
"t": "維基百科中文「臺灣光復」",
"u": "https://zh.wikipedia.org/wiki/臺灣光復"
},
{
"t": "English Wikipedia: Taiwan Retrocession Day",
"u": "https://en.wikipedia.org/wiki/Taiwan_Retrocession_Day"
}
],
"why": [
{
"t": "日本投降後，依盟軍的受降安排，台灣日軍向中華民國政府（蔣介石的中國戰區）投降。",
"k": "d"
}
],
"so": [
{
"t": "行政長官公署開始運作；1946 年 1 月行政院令台澎居民恢復中華民國國籍。接收的性質（光復或軍事占領）有歧見。",
"k": "d"
}
],
"rel": [
"surrender-1945",
"nationality-1946"
],
"who": [
"chen-yi"
]
},
{
"y": 1946,
"md": "1月12日",
"t": "恢復中華民國國籍",
"key": "nationality-1946",
"s": "恢復國籍",
"b": "1946年1月12日行政院令台澎居民恢復中華民國國籍，並溯及1945年10月25日生效；1月20日長官公署再公告。",
"track": "政治外交",
"conf": "disputed",
"aliases": [
{
"term": "恢復國籍／國籍變更",
"note": "ROC稱「恢復」，批評者稱未經同意強加國籍；英美當時未接受。"
}
],
"note": "爭議點在國際法上是否承認，而非日期：據Taipei Times社論（陳逸南，評論性文章，立場批評ROC），英國1946年8月31日表示接受ROC管理台灣、但不接受國籍已恢復；美國1946年11月備忘錄同意英方；1952年8月5日《台北條約》生效。中文維基光復條未載此日期。目前未見行政院原令文本或國史館原件。",
"src": [
{
"t": "Taipei Times 社論（陳逸南）：ROC forced citizenship on unwary Taiwanese（2011-01-20，評論性文章）",
"u": "https://www.taipeitimes.com/News/editorials/archives/2011/01/20/2003493942"
},
{
"t": "English Wikipedia: Taiwan Retrocession Day",
"u": "https://en.wikipedia.org/wiki/Taiwan_Retrocession_Day"
},
{
"t": "維基百科中文「臺灣光復」",
"u": "https://zh.wikipedia.org/wiki/臺灣光復"
}
],
"why": [
{
"t": "1945 年 10 月 25 日起，中華民國政府自稱已收回台灣，國籍令溯及該日生效。",
"k": "d"
}
],
"so": [
{
"t": "國際上是否承認有爭議；1952 年 8 月 5 日《台北條約》生效（細節見說明）。",
"k": "d"
}
],
"rel": [
"takeover-1945"
],
"who": [
"chen-yi"
]
},
{
"y": 1912,
"md": "1月1日",
"t": "中華民國臨時政府在南京成立，孫文就任臨時大總統",
"key": "provisional-gov-1912",
"s": "臨時政府成立",
"b": "1912年1月1日，中華民國宣告成立，革命各省代表在南京組成臨時政府，孫文（孫中山）就任臨時大總統。行政院網站與英文維基百科均以這一天作為民國成立日。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "南京臨時政府",
"note": "常見簡稱；與1937–1940年日本支持下成立、同名的『中華民國臨時政府』（北京）不同"
},
{
"term": "民國元年",
"note": "以1912年為紀元元年"
}
],
"note": "英文維基《Xinhai Revolution》寫為『參議會宣告中華民國成立、孫為總統』，未寫南京就職典禮；行政院網頁寫『孫中山宣誓就職』但未列地點；英文《Provisional Government of the Republic of China (1912–1913)》明確寫在南京就任。臨時政府籌組過程另有細節差異（如首次代表會議地點：武昌或漢口英租界），此處不展開。",
"src": [
{
"t": "行政院：中華民國成立相關敘述",
"u": "https://www.ey.gov.tw/state/62879155A536D543/bf75db05-30af-4c3a-bdda-3fe32e3f8e5a"
},
{
"t": "Wikipedia: Provisional Government of the Republic of China (1912–1913)",
"u": "https://en.wikipedia.org/wiki/Provisional_Government_of_the_Republic_of_China_(1912%E2%80%931913)"
},
{
"t": "Wikipedia: Xinhai Revolution",
"u": "https://en.wikipedia.org/wiki/Xinhai_Revolution"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1912,
"md": "2月12日",
"t": "清帝（宣統帝）頒布退位詔書",
"key": "abdication-1912",
"s": "清帝退位",
"b": "1912年2月12日，宣統帝的退位詔書頒布，清朝帝制結束。這是臨時政府與北方清廷、袁世凱交涉的結果之一。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "清帝遜位",
"note": "民國早期常用語"
}
],
"note": "英文維基《Xinhai Revolution》載明詔書於1912年2月12日頒布，並提到部分地區在正式詔書前已得知退位消息，屬消息傳遞時間差，非詔書日期不同。孫文辭職與參議院選袁世凱的先後，各來源敘述詳略不一，本條不下因果判斷。",
"src": [
{
"t": "Wikipedia: Xinhai Revolution",
"u": "https://en.wikipedia.org/wiki/Xinhai_Revolution"
},
{
"t": "行政院：中華民國成立相關敘述（述及袁世凱促使清帝退位，未列日期）",
"u": "https://www.ey.gov.tw/state/62879155A536D543/bf75db05-30af-4c3a-bdda-3fe32e3f8e5a"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1912,
"md": "3月10日",
"t": "袁世凱在北京就任臨時大總統",
"key": "yuan-1912",
"s": "袁世凱就任",
"b": "1912年2月15日南京臨時參議院選出袁世凱為臨時大總統；3月10日袁在北京就任。孫文於4月1日解職後，臨時參議院北遷，此後中央政府一般稱北京政府或北洋政府。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "北京政府",
"note": "以首都所在地命名，被認為較中性"
},
{
"term": "北洋政府",
"note": "以北洋軍系掌權得名；英文維基指其為國民黨後來普及的稱法，帶有負面意涵"
}
],
"note": "英文維基《Provisional Government (1912–1913)》把參議院選舉寫在3月10日，與香港中華文化資源（chiculture.org.hk）及archontology的記載（2月15日選出、3月10日就任）不一致，這裡採後者。『政府北遷』是3至4月間陸續完成的過程，並非3月10日單日的事。",
"src": [
{
"t": "Wikipedia: Xinhai Revolution",
"u": "https://en.wikipedia.org/wiki/Xinhai_Revolution"
},
{
"t": "Wikipedia: Provisional Government of the Republic of China (1912–1913)",
"u": "https://en.wikipedia.org/wiki/Provisional_Government_of_the_Republic_of_China_(1912%E2%80%931913)"
},
{
"t": "Wikipedia: Beiyang government",
"u": "https://en.wikipedia.org/wiki/Beiyang_government"
},
{
"t": "香港中華文化資源：中華民國臨時政府",
"u": "https://chiculture.org.hk/en/node/2163"
},
{
"t": "Archontology：China 1912 Provisional Presidents",
"u": "https://archontology.org/nations/china/china-roc/00_1912_28_s.php"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1912,
"md": "",
"t": "北洋（北京）政府時期：起訖年份的幾種界定",
"key": "beiyang-def-1912",
"s": "北洋政府時期",
"b": "北洋政府（北京政府）一般指1912年起、以北京為首都、由北洋軍系人物主導的中華民國中央政府，至1928年北伐完成前後結束。",
"track": "政權",
"conf": "disputed",
"aliases": [
{
"term": "北京政府",
"note": "以首都命名；英文維基指有史家為求中性而偏好此稱"
},
{
"term": "北洋政府",
"note": "以掌權軍系命名"
}
],
"note": "起點：英文維基《Beiyang government》與《Republic of China (1912–1949)》以1912年起算；中文維基《北洋政府》信息框為1913年起，以1913年10月6日袁世凱當選正式大總統、10日就職為標誌。終點：中文維基列1928年6月3日張作霖軍政府瓦解、6月8日國民革命軍占領北京、12月29日張學良東北易幟，並稱以12月29日『北洋政府就此結束運作』；英文《Northern Expedition》列6月4日皇姑屯事件、6月6日國民革命軍進入北京、12月29日張學良宣布效忠南京政府。北伐開始日：英文維基為1926年7月9日；中文維基《北洋政府》條列為7月29日，兩者不同，目前未見可引用來源說明差異。",
"src": [
{
"t": "中文維基百科：北洋政府",
"u": "https://zh.wikipedia.org/wiki/北洋政府"
},
{
"t": "Wikipedia: Beiyang government",
"u": "https://en.wikipedia.org/wiki/Beiyang_government"
},
{
"t": "Wikipedia: Northern Expedition",
"u": "https://en.wikipedia.org/wiki/Northern_Expedition"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1912,
"md": "8月25日",
"t": "國民黨成立（同盟會與數個小黨合併）",
"key": "kmt-1912",
"s": "國民黨成立",
"b": "1912年8月25日，同盟會與其他小黨合併成立國民黨，宋教仁為實際最具影響力的成員。1913年宋教仁遇刺、二次革命失敗後，袁世凱取締國民黨。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "國民黨（1912）",
"note": "與後來的中華革命黨、中國國民黨為前後相承的黨史脈絡，但屬不同階段的組織"
}
],
"note": "英文維基《Kuomintang》寫1912年8月25日於北京成立、孫為理事長（chairman）；有說法稱創立者為宋教仁，英文維基該文並不支持『由宋創立』，只稱宋為最具影響力成員。『中國國民黨』自稱的黨史起點（興中會1894、同盟會1905）是黨自身的史觀，學界與他黨不一定採同一起點。",
"src": [
{
"t": "Wikipedia: Kuomintang",
"u": "https://en.wikipedia.org/wiki/Kuomintang"
},
{
"t": "中文維基百科：中國國民黨",
"u": "https://zh.wikipedia.org/wiki/中國國民黨"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1914,
"md": "7月8日",
"t": "孫文在日本另組中華革命黨",
"key": "revolutionary-party-1914",
"s": "中華革命黨",
"b": "二次革命失敗、國民黨被取締後，孫文在日本另組中華革命黨，1914年7月8日在東京召開成立大會。1919年孫文在上海再改組，並於10月10日定名中國國民黨。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "中華革命黨",
"note": "1914年在東京成立，後於1919年改組為中國國民黨"
}
],
"note": "成立大會日期依國父紀念館孫學研究資料（成立大會照片說明載1914年7月8日）；英文維基《Kuomintang》只寫「不久後在日本成立」，未標年份。",
"src": [
{
"t": "Wikipedia: Kuomintang",
"u": "https://en.wikipedia.org/wiki/Kuomintang"
},
{
"t": "Wikipedia: 1st National Congress of the Kuomintang",
"u": "https://en.wikipedia.org/wiki/1st_National_Congress_of_the_Kuomintang"
},
{
"t": "國父紀念館孫學研究：中華革命黨成立大會",
"u": "https://sunology.culture.tw/detail/bb1c35f33545a55aae54c032155c9c09/"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1919,
"md": "10月10日",
"t": "中華革命黨改稱中國國民黨",
"key": "kmt-rename-1919",
"s": "改稱中國國民黨",
"b": "1919年10月10日，孫文在上海將中華革命黨改稱中國國民黨，沿用至今。",
"track": "政權",
"conf": "common",
"aliases": [],
"note": "英文維基《Kuomintang》寫1919年10月10日於上海重建並定名；《1st National Congress》寫1919年由中華革命黨改稱，兩者一致。目前只有維基類來源，黨史館或國史館資料未見可引用。",
"src": [
{
"t": "Wikipedia: Kuomintang",
"u": "https://en.wikipedia.org/wiki/Kuomintang"
},
{
"t": "Wikipedia: 1st National Congress of the Kuomintang",
"u": "https://en.wikipedia.org/wiki/1st_National_Congress_of_the_Kuomintang"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1924,
"md": "1月20日",
"t": "中國國民黨一全大會於廣州召開，完成改組",
"key": "kmt-reorg-1924",
"s": "國民黨一大",
"b": "1924年1月20日至30日，中國國民黨第一次全國代表大會在廣州舉行，完成黨的改組，通過與蘇聯合作、與中國共產黨合作（第一次國共合作）等政策，並採列寧式黨組織。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "聯俄容共",
"note": "國民黨方面的常見稱呼"
},
{
"term": "第一次國共合作",
"note": "中性歷史用語"
},
{
"term": "聯俄聯共",
"note": "中共方面的常見稱呼"
}
],
"note": "英文維基《1st National Congress》寫會期為1月20–30日，《Kuomintang》寫1923–1924年在蘇聯協助下採列寧式結構；『聯俄容共』與『聯俄聯共』是各方對同一政策的不同稱謂，各方評價不同。",
"src": [
{
"t": "Wikipedia: 1st National Congress of the Kuomintang",
"u": "https://en.wikipedia.org/wiki/1st_National_Congress_of_the_Kuomintang"
},
{
"t": "Wikipedia: Kuomintang",
"u": "https://en.wikipedia.org/wiki/Kuomintang"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1925,
"md": "7月1日",
"t": "廣州國民政府成立",
"key": "guangzhou-gov-1925",
"s": "廣州國民政府",
"b": "孫文於1925年3月12日逝世後，國民黨在廣州公布《國民政府組織法》，於1925年7月1日成立國民政府。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "國民政府",
"note": "正式名稱為『國民政府』，是國民黨領導下的政府，不等同於政黨『國民黨』"
},
{
"term": "廣州國民政府",
"note": "以所在地區分"
}
],
"note": "中文維基《國民政府》記載當日在廣州市第三公園宣告成立；英文維基《Nationalist government》亦記1925年7月1日於廣州成立。",
"src": [
{
"t": "中文維基百科：國民政府",
"u": "https://zh.wikipedia.org/wiki/國民政府"
},
{
"t": "Wikipedia: Nationalist government",
"u": "https://en.wikipedia.org/wiki/Nationalist_government"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1926,
"md": "7月9日",
"t": "國民革命軍北伐（1926–1928）",
"key": "northern-exp-1926",
"s": "北伐",
"b": "國民革命軍自1926年7月起自廣東北上，以結束軍閥割據為目標；1928年6月進入北京，12月29日張學良宣布效忠南京政府，北伐在形式上完成。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "國民革命",
"note": "國民黨方面的整體稱呼"
}
],
"note": "英文維基《Northern Expedition》：1926年7月9日正式開始、1927年3月24日攻占南京、1927年4月12–14日上海清黨、1928年6月6日進入北京、12月29日結束。中文維基《北洋政府》列北伐開始為7月29日，與7月9日不同。『北伐完成』在1928年6月（占北京）與12月29日（東北易幟）兩種截點並存；英文維基亦指各地軍閥實力仍在，隨後有1929–1930年中原大戰。",
"src": [
{
"t": "Wikipedia: Northern Expedition",
"u": "https://en.wikipedia.org/wiki/Northern_Expedition"
},
{
"t": "中文維基百科：北洋政府",
"u": "https://zh.wikipedia.org/wiki/北洋政府"
},
{
"t": "中文維基百科：國民政府",
"u": "https://zh.wikipedia.org/wiki/國民政府"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1927,
"md": "4月18日",
"t": "南京國民政府成立（寧漢對立）",
"key": "nanjing-gov-1927",
"s": "南京國民政府",
"b": "1927年4月，蔣中正發動清黨（4月12日起），並於4月18日在南京另立國民政府；以汪兆銘為首的武漢國民政府與之對立，形成寧漢分裂，其後兩方合流。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "寧漢分裂",
"note": "南京與武漢兩政府並立"
},
{
"term": "清黨",
"note": "國民黨方面用語；中共方面常稱『四一二政變／反革命政變』"
},
{
"term": "南京政府",
"note": "常用簡稱"
}
],
"note": "合流日期說法不一：中文維基《國民政府》寫『7月15日汪兆銘的武漢政府宣布反共，兩方合流』；英文維基《Nationalist government》寫武漢派於1927年8月加入南京。香港中華文化資源網（chiculture.org.hk）確認4月18日蔣在南京成立國民政府。英文《Northern Expedition》提到南京政府的就職為1928年10月10日，並未記4月18日，故4月18日由中文維基與前述網站支持，英文維基二文未載。",
"src": [
{
"t": "中文維基百科：國民政府",
"u": "https://zh.wikipedia.org/wiki/國民政府"
},
{
"t": "中華文化資源網：寧漢分裂",
"u": "https://chiculture.org.hk/en/node/2769"
},
{
"t": "Wikipedia: Nationalist government",
"u": "https://en.wikipedia.org/wiki/Nationalist_government"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1928,
"md": "10月3日",
"t": "《訓政綱領》通過，國民黨以黨領政的訓政開始",
"key": "tutelage-1928",
"s": "訓政綱領",
"b": "1928年北伐形式完成後，國民黨宣布進入訓政時期。10月3日中央政治會議通過《訓政綱領》，規定訓政期間由中國國民黨全國代表大會代表國民大會領導國民行使政權，行政、立法、司法、考試、監察五種治權由國民政府總攬。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "以黨治國",
"note": "當時國民黨方面的用語"
},
{
"term": "黨國體制",
"note": "後世學界常用的描述用語"
},
{
"term": "訓政",
"note": "孫文《建國大綱》『軍政、訓政、憲政』三階段中的第二階段"
}
],
"note": "國防部資料（mnd.gov.tw）載訓政綱領於1928年（民國17年）10月3日由中央政治會議第172次常會通過、1929年3月三全大會追認；政大論文引述為1928年10月通過。中文維基《國民政府》載1928年9月二屆五中全會宣布進入訓政、10月公布《國民政府組織法》。英文《Republic of China (1912–1949)》寫訓政以1930年的臨時憲法為準，與其他來源不同，不採用。",
"src": [
{
"t": "國防部：訓政綱領與訓政相關資料",
"u": "https://www.mnd.gov.tw/File/6046"
},
{
"t": "政治大學學術資料（訓政綱領與訓政時期約法）",
"u": "https://irtest.lib.nccu.edu.tw/ir/retrieve/150119/408007.pdf"
},
{
"t": "中文維基百科：國民政府",
"u": "https://zh.wikipedia.org/wiki/國民政府"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1931,
"md": "6月1日",
"t": "《中華民國訓政時期約法》公布",
"key": "provisional-const-1931",
"s": "訓政時期約法",
"b": "國民會議於1931年5月12日制定《中華民國訓政時期約法》，國民政府於6月1日公布施行。第30條規定訓政時期中央統治權由中國國民黨全國代表大會代表國民大會行使，閉會時由中央執行委員會行使；第85條規定約法解釋權屬於中央執行委員會。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "訓政約法",
"note": "簡稱"
}
],
"note": "中文維基文庫條文與政大論文一致（5月12日制定、6月1日公布）。英文維基《Republic of China (1912–1949)》把訓政以1930年臨時憲法為準，與此不同，不採用。",
"src": [
{
"t": "維基文庫：中華民國訓政時期約法",
"u": "https://zh.wikisource.org/wiki/中華民國訓政時期約法"
},
{
"t": "政治大學學術資料",
"u": "https://irtest.lib.nccu.edu.tw/ir/retrieve/150119/408007.pdf"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1946,
"md": "12月25日",
"t": "制憲國民大會三讀通過《中華民國憲法》",
"key": "const-1946",
"s": "制憲通過",
"b": "國民大會於1946年12月25日在南京三讀通過憲法，國民政府於1947年1月1日公布，自1947年12月25日起施行。中國共產黨與中國民主同盟未參加國民大會，中共並否認該憲法。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "制憲",
"note": "制定憲法"
},
{
"term": "行憲",
"note": "憲法施行，1947年12月25日（今臺灣行憲紀念日）"
}
],
"note": "司法院大法官網站所附憲法資料與英文維基《Constitution of the Republic of China》日期一致（通過12月25日、公布1月1日、施行1947年12月25日）。",
"src": [
{
"t": "司法院：憲法相關資料",
"u": "https://cons.judicial.gov.tw/download/download.aspx?id=395446"
},
{
"t": "Wikipedia: Constitution of the Republic of China",
"u": "https://en.wikipedia.org/wiki/Constitution_of_the_Republic_of_China"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1948,
"md": "5月10日",
"t": "《動員戡亂時期臨時條款》公布",
"key": "temp-provisions-1948",
"s": "動員戡亂條款",
"b": "國民大會於1948年4月18日依憲法修憲程序三讀通過《動員戡亂時期臨時條款》，國民政府於5月10日公布施行。條款使總統得經行政院會議決議實施緊急處分，不受憲法第39條或第43條限制，後經修訂延續，至1991年5月1日廢止。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "臨時條款",
"note": "簡稱"
},
{
"term": "戡亂",
"note": "中華民國方面的用語；中共方面稱『解放戰爭』"
}
],
"note": "中文維基與英文維基日期一致（4月18日通過、5月10日施行）；廢止日期為1991年（4月22日國民大會通過、4月30日總統令終止動員戡亂時期、5月1日廢止）。",
"src": [
{
"t": "中文維基百科：動員戡亂時期臨時條款",
"u": "https://zh.wikipedia.org/wiki/動員戡亂時期臨時條款"
},
{
"t": "Wikipedia: Constitution of the Republic of China",
"u": "https://en.wikipedia.org/wiki/Constitution_of_the_Republic_of_China"
}
],
"bg": "roc-terms",
"ctx": "中國大陸",
"why": [
{
"t": "官方說法是為因應國共內戰、賦予總統緊急處分權；批評者則認為它使憲法部分條文長期被凍結。",
"k": "s"
}
],
"so": [
{
"t": "條款經多次修訂延續，至 1991 年 5 月 1 日廢止。",
"k": "d"
}
],
"rel": [
"const-1946",
"inauguration-1948",
"taipei-1949"
]
},
{
"y": 1948,
"md": "5月20日",
"t": "行憲後第一任總統就職，國民政府改組",
"key": "inauguration-1948",
"s": "第一任總統就職",
"b": "1948年5月20日，蔣中正與李宗仁就任行憲後第一任總統與副總統；國民政府主席一職由總統取代，國民政府改組為總統府，中央政府改稱中華民國政府，訓政時期在制度上結束。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "行憲政府",
"note": "憲法施行後的中華民國政府"
}
],
"note": "中文維基《國民政府》與《中華民國總統》均載5月20日；英文維基《Nationalist government》正文寫5月20日解散、infobox寫5月28日。總統、副總統由國民大會於1948年4月間選出，確切選舉日期各來源記載不一（英文《Republic of China (1912–1949)》寫國大選舉在3月21日，與其他來源不同），此處不列。",
"src": [
{
"t": "中文維基百科：國民政府",
"u": "https://zh.wikipedia.org/wiki/國民政府"
},
{
"t": "中文維基百科：中華民國總統",
"u": "https://zh.wikipedia.org/wiki/中華民國總統"
},
{
"t": "Wikipedia: Nationalist government",
"u": "https://en.wikipedia.org/wiki/Nationalist_government"
}
],
"bg": "roc-terms",
"ctx": "中國大陸",
"rel": [
"const-1946",
"temp-provisions-1948"
],
"who": [
"chiang-kai-shek"
]
},
{
"y": 1949,
"md": "10月1日",
"t": "中華人民共和國中央人民政府成立",
"key": "prc-1949",
"s": "人民共和國成立",
"b": "1949年10月1日下午3時，毛澤東在北京天安門廣場宣告中華人民共和國中央人民政府成立。公告稱該政府為『代表中華人民共和國全國人民唯一合法政府』。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "開國大典",
"note": "中華人民共和國方面的用語"
}
],
"note": "英文維基《Retreat of the government of Republic of China to Taiwan》與中文維基《中華人民共和國成立》日期一致；當時多數國家仍與中華民國政府保持外交關係。",
"src": [
{
"t": "中文維基百科：中華人民共和國成立",
"u": "https://zh.wikipedia.org/wiki/中華人民共和國成立"
},
{
"t": "Wikipedia: Retreat of the government of Republic of China to Taiwan",
"u": "https://en.wikipedia.org/wiki/Great_Retreat_(Taiwan)"
}
],
"bg": "roc-terms",
"ctx": "中國大陸"
},
{
"y": 1949,
"md": "12月7日",
"t": "中華民國政府遷設臺北（宣布以臺北為臨時首都）",
"key": "taipei-1949",
"s": "政府遷臺北",
"b": "1949年12月，中華民國政府自大陸遷至臺灣，臺北被宣布為（臨時）首都，行政院長閻錫山等人於當時前往臺北。常見日期為12月7日。",
"track": "政權",
"conf": "disputed",
"aliases": [
{
"term": "遷臺／遷都臺北",
"note": "官方與較中性用語"
},
{
"term": "播遷來臺",
"note": "中華民國官方與國民黨方面常用的說法"
},
{
"term": "撤退來臺／退入臺灣",
"note": "英文維基標題用 retreat；『撤退』『退入』在中文敘述中為中性或批評性並存的稱呼"
},
{
"term": "流亡政府（government-in-exile）",
"note": "部分學者與臺灣獨立派的看法，只作並列陳述"
}
],
"note": "日期各來源不同：英文《Great Retreat》寫12月7日抵臺；英文《Republic of China (1912–1949)》寫12月7日宣布臺北為臨時首都；英文維基《1949 in the Republic of China》與history.com寫12月8日；Taipei Times（1999）同時提到7日與8日（8日是國民黨宣布遷臺）；美國國務院文件（FRUS 1949 VIII，12月15日備忘錄）顯示美方到12月15日尚未接獲遷都臺北的正式通知。爭議較大的是用語（遷都、播遷、撤退、流亡）。台灣研究中心（twcenter）一文以『撤退』『退入』『流亡』描述，並引蔣中正之語稱『中華民國到去年終就隨大陸淪陷而已滅亡』；該文標示講話日期為1950年3月13日，英文版標3月3日，原講稿出處未附。行政院決議全文未見可引用來源。",
"src": [
{
"t": "Wikipedia: Retreat of the government of Republic of China to Taiwan",
"u": "https://en.wikipedia.org/wiki/Great_Retreat_(Taiwan)"
},
{
"t": "Wikipedia: Republic of China (1912–1949)",
"u": "https://en.wikipedia.org/wiki/Republic_of_China_(1912%E2%80%931949)"
},
{
"t": "Taipei Times 1999-12-08",
"u": "https://www.taipeitimes.com/News/front/archives/1999/12/08/0000014054"
},
{
"t": "台灣研究中心：政權退入台灣的敘述",
"u": "https://www.twcenter.org.tw/?p=2434"
},
{
"t": "FRUS 1949 Vol. VIII, doc 850",
"u": "https://history.state.gov/historicaldocuments/frus1949v08/d850"
}
],
"bg": "roc-terms",
"why": [
{
"t": "國共內戰局勢逆轉，1949 年 10 月 1 日中華人民共和國成立；中華民國政府自大陸撤往台灣。",
"k": "d"
}
],
"so": [
{
"t": "臺北成為中華民國政府的所在地，台灣成為其主要統治範圍。稱呼（遷都、播遷、撤退）各方不同。",
"k": "d"
}
],
"rel": [
"prc-1949",
"temp-provisions-1948"
],
"who": [
"chiang-kai-shek"
]
},
{
"y": 1894,
"md": "8月1日",
"t": "甲午戰爭爆發（清日互相宣戰）",
"key": "world-sino-japanese-1894",
"s": "甲午戰爭",
"b": "清、日兩國因朝鮮問題衝突，於 1894 年 8 月 1 日互相宣戰；戰爭持續到 1895 年 4 月簽訂《馬關條約》。",
"track": "政治外交",
"ctx": "世界",
"conf": "common",
"aliases": [
{
"term": "甲午戰爭／日清戰爭／第一次中日戰爭",
"note": "中文多稱甲午戰爭，日文稱日清戰爭。"
}
],
"note": "戰事自 7 月 25 日豐島海戰起，8 月 1 日為互相宣戰日，各來源擇一記載。",
"so": [
{
"t": "清廷戰敗，1895 年簽訂《馬關條約》，割讓台灣與澎湖。",
"k": "d"
}
],
"rel": [
"treaty-shimonoseki-1895"
],
"src": [
{
"t": "English Wikipedia: First Sino-Japanese War",
"u": "https://en.wikipedia.org/wiki/First_Sino-Japanese_War"
}
]
},
{
"y": 1918,
"md": "11月11日",
"t": "第一次世界大戰停戰；民族自決成為國際討論主題",
"key": "world-ww1-1918",
"s": "一戰停戰",
"b": "同盟國與協約國於 1918 年 11 月 11 日停戰。戰爭後期美國總統威爾遜等人提出「民族自決」等主張，成為戰後國際討論的主題之一。",
"track": "政治外交",
"ctx": "世界",
"conf": "common",
"note": "民族自決思潮對殖民地知識分子的影響程度，學界看法不一；列在這裡是提供對照，不是說兩者有必然因果。",
"so": [
{
"t": "學者常把戰後的民族自決思潮與 1920 年代台灣知識青年的政治運動（文化協會、議會設置請願）連在一起談；影響的程度與路徑，各家說法不一。",
"k": "s"
}
],
"rel": [
"tca-1921",
"petition-1921"
],
"src": [
{
"t": "English Wikipedia: Armistice of 11 November 1918",
"u": "https://en.wikipedia.org/wiki/Armistice_of_11_November_1918"
}
]
},
{
"y": 1941,
"md": "12月7–8日",
"t": "太平洋戰爭爆發（珍珠港事件）",
"key": "world-pacific-war-1941",
"s": "太平洋戰爭",
"b": "日本海軍偷襲美國夏威夷珍珠港，並同時向東南亞與太平洋發動攻勢，美日開戰，第二次世界大戰擴及東亞與太平洋。",
"track": "政治外交",
"ctx": "世界",
"conf": "common",
"note": "珍珠港事件在夏威夷時間為 12 月 7 日，日本時間為 12 月 8 日。",
"so": [
{
"t": "台灣在日本「南進基地化」方針下被捲入戰事，台灣人也陸續被徵調入伍（見相關事件）。",
"k": "s"
}
],
"rel": [
"volunteer-1942",
"surrender-1945"
],
"src": [
{
"t": "English Wikipedia: Attack on Pearl Harbor",
"u": "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor"
}
]
},
{
"y": 1947,
"md": "3月12日",
"t": "杜魯門主義：美國對共產主義採取圍堵立場",
"key": "world-cold-war-1947",
"s": "冷戰開端",
"b": "美國總統杜魯門在國會演說，表示美國將支持抵抗「武裝少數或外來壓力」的自由民族，常被視為冷戰開端的標誌之一。",
"track": "政治外交",
"ctx": "世界",
"conf": "common",
"note": "冷戰的起點並無單一通說，另有 1946 年邱吉爾「鐵幕」演說、1948 年柏林封鎖等說法。",
"rel": [
"prc-1949",
"taipei-1949"
],
"src": [
{
"t": "U.S. Department of State, Office of the Historian: Truman Doctrine",
"u": "https://history.state.gov/milestones/1945-1952/truman-doctrine"
},
{
"t": "English Wikipedia: Truman Doctrine",
"u": "https://en.wikipedia.org/wiki/Truman_Doctrine"
}
]
}
];
const H=H_RAW.map((h,i)=>({id:"h"+i,...h})).sort((a,b)=>a.y-b.y||(parseInt(a.md)||0)-(parseInt(b.md)||0));
