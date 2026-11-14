const PERIODS=[
 {id:"p0",name:"原住民社會",range:"至 1624",a:1400,b:1624,sum:"南島語系原住民族在各地生活，各有自己的社會與信仰。"},
 {id:"p1",name:"荷西與鄭氏",range:"1624–1683",a:1624,b:1683,sum:"荷蘭、西班牙先後經營台灣，後由鄭成功趕走荷蘭，鄭氏政權延續到 1683 年。"},
 {id:"p2",name:"清領時期",range:"1683–1895",a:1683,b:1895,sum:"1683 年起納入清朝版圖，漢人移民增加，19 世紀後期建省。",
  keys:["清朝對台灣的治理從1684年設台灣府、隸屬福建省開始；入台要許可、不准攜眷，家眷政策反覆到1788年，劃界立碑把漢人與原住民隔開；解除限制的年份有1788年與1875年兩種說法，見事件卡", "清領時期的民變以朱一貴（1721）與林爽文（1786–1788）為代表；各來源的日期與人數並不一致，事件卡把不同寫法並列", "十九世紀後期，條約開港、牡丹社事件與清法戰爭促使清朝調整治理，1885年決定、1887年正式建省，劉銘傳推動鐵路；建省的年份與省會的說法有分歧，不下結論"]},
 {id:"p3",name:"日治時期",range:"1895–1945",a:1895,b:1946,sum:"馬關條約後日本統治台灣五十年（亦稱日據時期、日本殖民統治時期），從武力鎮壓、同化到戰時動員。",
  keys:["統治方式大致由武力鎮壓、同化走向皇民化與戰時動員；分期沒有單一通說（見專題「日治統治政策三階段」）","1920 年代出現以文化協會、議會設置請願為代表的非武裝政治運動，也有 1930 年霧社事件這樣的武裝衝突","建設與統治並存，評價有很大爭議；台灣人的身分認同在這五十年間有抵抗、協力、適應等多種選擇"]},
 {id:"p4",name:"戰後接收與內戰",range:"1945–1948",a:1946,b:1949,sum:"國民政府接收台灣，1947 年二二八事件；1949 年起的戒嚴與遷台，歸入下一期「威權戒嚴」。"},
 {id:"p5",name:"威權戒嚴",range:"1949–1987",a:1949,b:1988,sum:"戒嚴與動員戡亂體制下的政治、經濟起飛，也是白色恐怖時期。",
  keys:["1949年5月起的戒嚴（持續約38年）與《懲治叛亂條例》，是這段期間政治案件的法律框架；各個案（孫立人、雷震、彭明敏）的指控與評價不同，見專題「白色恐怖個案」", "國際位置大轉變：韓戰後美國介入台灣海峽、簽訂條約，1971年中華民國代表團離開聯合國；各方對舊金山和約與2758號決議的解讀並不一致", "經濟面：三七五減租、公地放領、耕者有其田，加上1951–1965年的美援，之後走向出口導向（加工出口區）；這些因素的相對重要性，學界有不同看法"]},
 {id:"p6",name:"民主化",range:"1987–2000",a:1988,b:2001,sum:"解嚴、國會全面改選、修憲與總統直選，2000 年第一次政黨輪替。",
  keys:["解嚴之後的變化可分三條線看：言論與社會（報禁、農運、鄭南榕、野百合、教改）、國會與選舉（釋字261、終止動員戡亂、立委改選、修憲、直選）、兩岸與外交（機構成立、兩國論）；時間先後不等於因果", "從萬年國會到直選有幾個節點：1990年釋字第261號定退職期限、1991年5月1日終止動員戡亂時期、1992年立委改選、1994年修憲、1996年第一次總統直選；各節點的日期以事件卡的來源為準", "2000年陳水扁以39.30%當選，宋楚瑜36.84%、連戰23.10%；「政黨輪替」是中文常用說法，勝選原因與票源分流的解釋各家不同，見事件卡"]},
 {id:"p7",name:"政黨輪替後",range:"2000–今",a:2001,b:2027,sum:"政黨輪替成為常態，兩岸與國際關係成為核心議題。",
  keys:["政黨輪替之後，總統選舉的得票與投票率變化很大：2000年陳水扁39.30%當選，2004年50.11%，2008年馬英九58.45%，2016年蔡英文56.12%，2024年賴清德40.05%；完整的表格見專題，2012年的數字目前未見可引用來源", "兩岸往來制度化（小三通、大三通、ECFA）與政治歧見並存：九二共識在不同黨派與北京手上有不同定義，2016年後官方溝通中止，2024年就職演說提出「互不隸屬」；各方說法並列，不下結論", "社會議題進入政治：2014年太陽花運動、2019年同婚專法施行、2025年大罷免；各項的評價與影響分歧，事件卡只記已有來源的事實"]}
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
},
{
"y": 1950,
"md": "6月27日",
"t": "杜魯門聲明：第七艦隊防止對台灣的攻擊",
"key": "truman-fleet-1950",
"s": "第七艦隊",
"b": "韓戰局勢之下，美國總統杜魯門發表聲明，表示已下令第七艦隊防止對福爾摩沙（台灣）的任何攻擊，並要求在台灣的中國政府停止對大陸的海空作戰。聲明同時說，台灣未來地位的決定，須等待太平洋地區安全恢復、對日和約，或聯合國的考慮。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "福爾摩沙（Formosa）",
"note": "當時美國文件對台灣的稱呼；聲明原文用 Formosa。"
}
],
"note": "此卡只轉述聲明原文。「台灣地位未定」這一句此後在各方有不同解讀，各方解讀目前未見可引用來源，故不在此並列。",
"why": [
{
"t": "聲明標題為「關於韓國局勢」，把朝鮮半島的戰事與台灣海峽的安全放在同一份聲明裡處理。",
"k": "d"
}
],
"so": [
{
"t": "第七艦隊進入台灣海峽，成為之後數年美國介入台海局勢的起點之一（見專題「台海危機」）。",
"k": "s"
}
],
"rel": [
"shelling-1954",
"mdt-1954"
],
"who": [
"chiang-kai-shek"
],
"bg": "strait-crises",
"src": [
{
"t": "The American Presidency Project：Statement by the President on the Situation in Korea（1950-06-27）",
"u": "https://www.presidency.ucsb.edu/documents/statement-the-president-the-situation-korea"
},
{
"t": "美國國務院史家辦公室：The Taiwan Straits Crises: 1954–55 and 1958",
"u": "https://history.state.gov/milestones/1953-1960/taiwan-strait-crises"
}
]
},
{
"y": 1954,
"md": "9月3日",
"t": "九三砲戰：中共砲擊金門（第一次台海危機）",
"key": "shelling-1954",
"s": "九三砲戰",
"b": "1954年9月3日，中共對金門實施隔海砲擊，砲擊目標隨後擴及馬祖與大陳。這輪衝突後來被稱為「第一次台海危機」。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "九三砲戰",
"note": "臺灣常用，以首次大規模砲擊的日期命名。"
},
{
"term": "第一次台海危機（First Taiwan Strait Crisis）",
"note": "「第幾次危機」是後人的分類，不是當時的正式名稱。"
}
],
"note": "日期：國防部學術期刊的註記為1954年9月3日；美國國務院史家辦公室的頁面只寫「1954年9月」。危機的範圍（起訖）各家分法不同：國防部《陸軍學術雙月刊》的註記把九三砲戰、1955年1月一江山、2月大陳撤退，到4月23日周恩來在萬隆會議發言，視為同一段；美國國務院頁面則說1955年9月中美在日內瓦開始談判。中共發動砲擊的動機，目前未見可引用的當事方原始聲明；國防部《空軍學術雙月刊》記載周恩來曾發表聲明，抗議1954年12月簽訂的條約。",
"why": [
{
"t": "國共內戰後，兩岸隔著海峽對峙，金門、馬祖仍由中華民國控制。",
"k": "d"
}
],
"so": [
{
"t": "同年12月美國與中華民國簽訂共同防禦條約（見相關事件）。",
"k": "d"
}
],
"rel": [
"truman-fleet-1950",
"mdt-1954",
"yijiangshan-1955",
"taipei-1949"
],
"bg": "strait-crises",
"src": [
{
"t": "國防部《陸軍學術雙月刊》596期：八二三砲戰前國軍外島防衛作戰計畫—太白計畫研究",
"u": "https://www.mnd.gov.tw/File/48868"
},
{
"t": "美國國務院史家辦公室：The Taiwan Straits Crises: 1954–55 and 1958",
"u": "https://history.state.gov/milestones/1953-1960/taiwan-strait-crises"
}
]
},
{
"y": 1954,
"md": "12月2日",
"t": "簽訂《中美共同防禦條約》",
"key": "mdt-1954",
"s": "共同防禦約",
"b": "1954年12月2日，美國與中華民國在華盛頓簽訂《共同防禦條約》，1955年3月3日在台北換文生效。第六條把條約適用範圍定為台灣與澎湖，其他領土須「經雙方協議決定」。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "中美共同防禦條約／美華共同防禦條約",
"note": "英文為 Mutual Defense Treaty between the United States and the Republic of China。"
}
],
"note": "國防部《空軍學術雙月刊》與耶魯 Avalon 計畫的條約文件都寫簽訂日為12月2日。條約第五條寫明各方「依其憲法程序」行動以應對對締約國領土的武裝攻擊；金門、馬祖是否屬於適用範圍，條文沒有直接點名（第六條只寫台灣與澎湖及「經雙方協議決定」的其他領土）。另有一份國防部期刊的正文寫簽訂日為12月4日、註釋寫12月3日，與條約文件所載12月2日不一致，此處依條約文件。1979年美中建交後條約的後續處理，不在此卡範圍。",
"why": [
{
"t": "1954年9月金門遭砲擊後，美國與中華民國簽訂條約。",
"k": "d"
}
],
"so": [
{
"t": "1955年1月美國國會通過福爾摩沙決議案，授權總統保衛台灣與外島（見相關事件）。",
"k": "d"
}
],
"rel": [
"shelling-1954",
"formosa-res-1955",
"normalization-1979"
],
"bg": "us-roc-prc",
"src": [
{
"t": "Avalon Project／Britannica：Mutual Defense Treaty between the US and the ROC, Dec 2, 1954",
"u": "https://cdn.britannica.com/primary_source/avalon/20th_century/chin001.asp"
},
{
"t": "國防部《空軍學術雙月刊》617期：八二三台海戰役中共用兵決策與徵候解析",
"u": "https://www.mnd.gov.tw/File/12137"
}
]
},
{
"y": 1955,
"md": "1月18日",
"t": "一江山戰役",
"key": "yijiangshan-1955",
"s": "一江山",
"b": "1955年1月，解放軍進攻大陳島群附近的一江山島，國軍失守。",
"track": "政治外交",
"conf": "common",
"note": "日期與描述：國防部《空軍學術雙月刊》寫「1月18日攻下一江山」；Taiwan Insight 寫解放軍1月18日開始進攻、19日清晨守軍全部陣亡。國防部《陸軍學術雙月刊》只寫「民國44年1月奪占」，中央社只寫1955年。守軍人數與傷亡，目前未見可引用來源。",
"why": [
{
"t": "1954年9月起，中共砲擊金門、馬祖與大陳。",
"k": "d"
}
],
"so": [
{
"t": "同年2月大陳島軍民在美國第七艦隊協助下撤往台灣（見相關事件）。",
"k": "d"
}
],
"rel": [
"shelling-1954",
"dachen-1955"
],
"bg": "strait-crises",
"src": [
{
"t": "國防部《空軍學術雙月刊》617期：八二三台海戰役中共用兵決策與徵候解析",
"u": "https://www.mnd.gov.tw/File/12137"
},
{
"t": "Taiwan Insight：The “Lost Outlying Island” of the Tachen Diaspora（2021）",
"u": "https://taiwaninsight.org/2021/09/17/the-lost-outlying-island-of-the-tachen-diaspora/"
},
{
"t": "國防部《陸軍學術雙月刊》596期：八二三砲戰前國軍外島防衛作戰計畫—太白計畫研究",
"u": "https://www.mnd.gov.tw/File/48868"
}
]
},
{
"y": 1955,
"md": "1月",
"t": "美國國會通過福爾摩沙決議案",
"key": "formosa-res-1955",
"s": "福爾摩沙決議",
"b": "1955年1月，美國國會通過「福爾摩沙決議案」，授權艾森豪總統採取保衛台灣與外島所需的措施。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "福爾摩沙決議案／台灣決議案",
"note": "英文為 Formosa Resolution；中央社稱「台灣決議案」。"
}
],
"note": "美國國務院史家辦公室頁面只寫「1955年1月」，未給日期；中央社的文章寫為1月26日，兩者並列，確切日期目前未見官方來源。該頁面的描述是決議案讓艾森豪「對保衛台灣及外島擁有全部權力」；決議所稱「外島」是否包含金門、馬祖，其文字與當時的解讀，目前未見可引用來源。",
"so": [
{
"t": "同年2月大陳島軍民撤往台灣（見相關事件）。",
"k": "d"
}
],
"rel": [
"mdt-1954",
"dachen-1955"
],
"bg": "strait-crises",
"src": [
{
"t": "美國國務院史家辦公室：The Taiwan Straits Crises: 1954–55 and 1958",
"u": "https://history.state.gov/milestones/1953-1960/taiwan-strait-crises"
},
{
"t": "中央社：開箱老照片》大陳軍民撤退來台（2024）",
"u": "https://www.cna.com.tw/news/ahel/202402075008.aspx"
}
]
},
{
"y": 1955,
"md": "2月",
"t": "大陳島軍民撤退來台",
"key": "dachen-1955",
"s": "大陳撤退",
"b": "1955年2月，大陳島的國軍與居民在美國第七艦隊協助下撤往台灣。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "大陳島撤退／大陳轉進",
"note": "國防部期刊用「轉進」，一般新聞用「撤退」。"
},
{
"term": "大陳義胞",
"note": "撤到台灣的大陳居民在台灣的稱呼之一。"
}
],
"note": "日期與人數各來源不同：中央社寫2月8日起美國第七艦隊協助撤退，2月10日「1萬4483人全部撤往台灣」；蔣中正日記（聯合報引述）寫2月6日美國下令掩護、聯合報寫至11日完成；國防部《空軍學術雙月刊》寫2月5日艾森豪下令第七艦隊「協助」撤退；Taiwan Insight 寫2月2日至25日共約2.8萬人，可能計入不同對象（居民與軍人等），各頁未說明口徑。蔣中正1955年1月21日日記載有美方提議「以協防金門換取大陳撤退」的建議，這是日記的紀錄，不等於雙方已有正式協議；美國國務院頁面的說法是蔣介石在換取對金門、馬祖的私下承諾後同意撤軍。",
"why": [
{
"t": "一江山失守後，大陳島群的防守成為問題。",
"k": "d"
}
],
"so": [
{
"t": "撤離的居民在台灣安置，形成後來的「大陳義胞」社群。",
"k": "d"
}
],
"rel": [
"yijiangshan-1955",
"formosa-res-1955",
"shelling-1958"
],
"who": [
"chiang-kai-shek"
],
"bg": "dachen",
"src": [
{
"t": "中央社：開箱老照片》大陳軍民撤退來台（2024）",
"u": "https://www.cna.com.tw/news/ahel/202402075008.aspx"
},
{
"t": "聯合報：大陳島撤退 蔣中正日記批艾森豪（2026）",
"u": "https://udn.com/news/story/6656/9786963"
},
{
"t": "Taiwan Insight：The “Lost Outlying Island” of the Tachen Diaspora（2021）",
"u": "https://taiwaninsight.org/2021/09/17/the-lost-outlying-island-of-the-tachen-diaspora/"
},
{
"t": "美國國務院史家辦公室：The Taiwan Straits Crises: 1954–55 and 1958",
"u": "https://history.state.gov/milestones/1953-1960/taiwan-strait-crises"
}
]
},
{
"y": 1958,
"md": "8月23日",
"t": "八二三砲戰",
"key": "shelling-1958",
"s": "八二三砲戰",
"b": "1958年8月23日傍晚，中共開始對金門大規模砲擊，持續約兩個月。美國海軍協助護航運補。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "八二三砲戰",
"note": "臺灣常用，以首日命名。"
},
{
"term": "第二次台海危機（Second Taiwan Strait Crisis）",
"note": "後人的分類。"
}
],
"note": "細節各來源不一：開始時間，國防部期刊分別寫下午5時30分與6時30分；開始砲擊後一至兩個多小時內的落彈數，寫2.9萬餘發至5.7萬餘發不等（4.7萬餘發的寫法最常見）；44天總數，寫約44萬發（引中共官方統計）或約47萬發；首日國軍三位副司令官的傷亡，寫法略有出入（有的寫三人陣亡，有的寫吉星文三天後傷重而亡）。美國護航的日期也不同：寫8月25日艾森豪同意、8月29日決定護航、9月3日開始護航等。美國國務院頁面則說1958年中共趁國際注意力集中在美國介入黎巴嫩時恢復砲擊。8月17日北戴河會議決定砲擊金門，為一份國防部期刊（八二三砲戰勝利60週年）所載；另一份只寫「北戴河會議」而未給日期。",
"why": [
{
"t": "1955年大陳撤退後，金門、馬祖仍由中華民國控制，1958年美軍同時介入黎巴嫩。",
"k": "d"
}
],
"so": [
{
"t": "10月6日中共宣布暫停砲擊（見相關事件）；之後長期的「單打雙不打」持續到1979年。",
"k": "d"
}
],
"rel": [
"dachen-1955",
"ceasefire-1958",
"dulles-chiang-1958"
],
"bg": "kinmen",
"src": [
{
"t": "國防部：八二三砲戰勝利60週年—作戰整備之研究",
"u": "https://www.mnd.gov.tw/File/29432"
},
{
"t": "國防部《國防雜誌》34卷1期：八二三砲戰中的平民經歷回顧與對全民國防教育的啟示",
"u": "https://www.mnd.gov.tw/File/30702"
},
{
"t": "國防部《國防雜誌》99年8月號：八二三砲戰時期之國際事務與戰略研究",
"u": "https://www.mnd.gov.tw/File/12191"
},
{
"t": "美國國務院史家辦公室：The Taiwan Straits Crises: 1954–55 and 1958",
"u": "https://history.state.gov/milestones/1953-1960/taiwan-strait-crises"
}
]
},
{
"y": 1958,
"md": "10月6日",
"t": "中共宣布暫停砲擊金門（《告台灣同胞書》）",
"key": "ceasefire-1958",
"s": "暫停砲擊",
"b": "1958年10月6日，中共以國防部長彭德懷名義發表《告台灣同胞書》，宣布對金門暫停砲擊；10月25日再發表《再告台灣同胞書》，宣稱雙日停火。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "單打雙不打",
"note": "之後長期的砲擊模式：單日象徵性砲擊、雙日停火。"
}
],
"note": "暫停時間：國防部期刊寫7天；遠見（引述伍世文的回憶）寫三週。《告台灣同胞書》由誰撰寫：國防部期刊引述大陸學者的說法，稱實際是毛澤東以彭德懷名義寫的，為單一轉述。「單打雙不打」的結束時間：一份國防部期刊寫持續到1979年；另一份寫「直至民國67年（1978年）才宣告停戰」；美國國務院頁面寫約二十年，到美中建交為止。",
"rel": [
"shelling-1958",
"dulles-chiang-1958",
"normalization-1979"
],
"who": [
"peng-dehuai"
],
"bg": "kinmen",
"src": [
{
"t": "國防部《國防雜誌》34卷1期：八二三砲戰中的平民經歷回顧與對全民國防教育的啟示",
"u": "https://www.mnd.gov.tw/File/30702"
},
{
"t": "國防部《國防雜誌》99年8月號：八二三砲戰時期之國際事務與戰略研究",
"u": "https://www.mnd.gov.tw/File/12191"
},
{
"t": "國防部：八二三砲戰勝利60週年—作戰整備之研究",
"u": "https://www.mnd.gov.tw/File/29432"
},
{
"t": "遠見雜誌：7個孩子交給您了！這群老兵道盡外人不知的823血淚史（2018）",
"u": "https://www.gvm.com.tw/article/45605"
},
{
"t": "美國國務院史家辦公室：The Taiwan Straits Crises: 1954–55 and 1958",
"u": "https://history.state.gov/milestones/1953-1960/taiwan-strait-crises"
}
]
},
{
"y": 1958,
"md": "10月23日",
"t": "蔣介石與杜勒斯發表聯合公報",
"key": "dulles-chiang-1958",
"s": "蔣杜公報",
"b": "1958年10月23日在台北，蔣介石與美國國務卿杜勒斯會商後發表聯合公報。公報稱「在目前情況下，金門與馬祖的防禦與台灣、澎湖的防禦密切相關」，並說中華民國認為恢復大陸人民的自由是「神聖使命」，達成使命的主要手段是實行孫中山的三民主義，「而不是使用武力」。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "蔣杜公報／中美聯合公報（1958）",
"note": "與1972、1979、1982年的美中「三公報」不同，這份是美國與中華民國之間的公報。"
}
],
"note": "引文依美國國務院《美國外交關係》文件（FRUS）所載公報英文本意譯。對公報的評價，一說是「三分軍事、七分政治」的開始（國防部期刊引述學者林正義），另有不同看法；此卡不下定論。",
"rel": [
"shelling-1958",
"ceasefire-1958",
"mdt-1954"
],
"who": [
"chiang-kai-shek",
"dulles"
],
"bg": "us-roc-prc",
"src": [
{
"t": "FRUS 1958–1960 Vol. XIX, doc 209：Joint Communiqué（Taipei, Oct 23, 1958）",
"u": "https://history.state.gov/historicaldocuments/frus1958-60v19/d209"
},
{
"t": "國防部《國防雜誌》34卷1期：八二三砲戰中的平民經歷回顧與對全民國防教育的啟示",
"u": "https://www.mnd.gov.tw/File/30702"
}
]
},
{
"y": 1972,
"md": "2月21–28日",
"t": "尼克森訪問中國",
"key": "nixon-visit-1972",
"s": "尼克森訪中",
"b": "美國總統尼克森於1972年2月21日至28日訪問中華人民共和國，訪問結束時發表《上海公報》。",
"track": "政治外交",
"ctx": "世界",
"conf": "verified",
"note": "訪問期間依《上海公報》文本頁面所載（February 21 to February 28, 1972）。",
"rel": [
"shanghai-comm-1972"
],
"src": [
{
"t": "Teaching American History：Shanghai Communiqué（來源 FRUS 1969–1972 XVII doc 203）",
"u": "https://old.teachingamericanhistory.org/document/joint-statement-following-discussions-with-leaders-of-the-peoples-republic-of-china-shanghai-communique/"
}
]
},
{
"y": 1972,
"md": "2月28日",
"t": "《上海公報》",
"key": "shanghai-comm-1972",
"s": "上海公報",
"b": "美國與中華人民共和國發表聯合公報，雙方各自陳述對台灣的立場。美方稱「認知到海峽兩邊所有的中國人都認為只有一個中國，台灣是中國的一部分」（英文：acknowledges），並表示「對這一立場不提出異議」，也確認最終目標是撤出美國在台灣的全部武裝力量與軍事設施。中方稱台灣問題是阻礙兩國關係正常化的關鍵，中華人民共和國政府是中國的唯一合法政府。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "acknowledges 的中譯",
"note": "英文 acknowledges 在中文有「認知」「認識到」等不同譯法；各版本中文措辭的比較，目前未見可引用來源。"
}
],
"note": "公報日期：1982年公報文本把它引為「1972年2月28日的上海公報」；公報頁面本身列的是訪問期間（2月21日至28日），沒有另列簽署日。上文為依英文本的中文意譯，非官方中文譯本。",
"rel": [
"nixon-visit-1972",
"normalization-1979"
],
"bg": "us-roc-prc",
"src": [
{
"t": "Teaching American History：Shanghai Communiqué（來源 FRUS 1969–1972 XVII doc 203）",
"u": "https://old.teachingamericanhistory.org/document/joint-statement-following-discussions-with-leaders-of-the-peoples-republic-of-china-shanghai-communique/"
},
{
"t": "AIT 檔案：Joint Communique of the US and the PRC (1982)",
"u": "https://web-archive-2017.ait.org.tw/en/us-joint-communique-1982.html"
}
]
},
{
"y": 1979,
"md": "1月1日",
"t": "美國與中華人民共和國建交",
"key": "normalization-1979",
"s": "美中建交",
"b": "美國與中華人民共和國於1979年1月1日正式建交（建交公報1978年12月15日在華盛頓與北京同時發表）。公報稱美國「承認」中華人民共和國政府是中國的唯一合法政府，並「認知」中方的一中立場；美國人民將與台灣人民保持文化、商務與其他非官方關係。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "斷交",
"note": "臺灣方面稱美國與中華民國「斷交」；美方的說法是承認中華人民共和國。"
}
],
"note": "文字依公報英文本（recognizes／acknowledges）意譯；公報也說雙方將在1979年3月1日互換大使並設立大使館。",
"rel": [
"shanghai-comm-1972",
"tra-1979",
"ceasefire-1958"
],
"bg": "us-roc-prc",
"src": [
{
"t": "AIT 檔案：Joint Communique of the US and the PRC (1979)",
"u": "https://web-archive-2017.ait.org.tw/en/us-joint-communique-1979.html"
},
{
"t": "CRS Report 96-246：Taiwan: Texts of the Taiwan Relations Act, the U.S.-China Communiques, and the “Six Assurances”",
"u": "https://www.everycrsreport.com/reports/96-246.html"
}
]
},
{
"y": 1979,
"md": "4月10日",
"t": "美國《台灣關係法》",
"key": "tra-1979",
"s": "台灣關係法",
"b": "美國國會通過、1979年4月10日核准《台灣關係法》（公法96-8），第18條規定追溯自1979年1月1日生效。條文說美國與中華人民共和國建交的決定，基於台灣前途將以和平方式決定的期望；任何非和平方式的企圖，都是對西太平洋和平安全的威脅，也是美國嚴重關切之事；美國將向台灣提供防禦性武器。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "Taiwan Relations Act（TRA）",
"note": "美國國內法，不是與任何一方簽署的條約或公報。"
}
],
"note": "條文用語是「嚴重關切」「提供防禦性武器」，並規定由總統與國會「依憲法程序決定適當行動」，與1954年條約第五條的共同防禦條款措辭不同；各方如何解讀這些差別，目前未見可引用來源。",
"rel": [
"normalization-1979",
"aug17-comm-1982",
"mdt-1954"
],
"bg": "us-roc-prc",
"src": [
{
"t": "CRS Report 96-246：Taiwan: Texts of the Taiwan Relations Act, the U.S.-China Communiques, and the “Six Assurances”",
"u": "https://www.everycrsreport.com/reports/96-246.html"
}
]
},
{
"y": 1982,
"md": "8月17日",
"t": "《八一七公報》",
"key": "aug17-comm-1982",
"s": "八一七公報",
"b": "美國與中華人民共和國發表聯合公報。美方稱不尋求執行長期對台軍售政策，對台軍售在質與量上不會超過近年水準，並打算逐步減少；中方稱台灣問題是中國內政。",
"track": "政治外交",
"conf": "verified",
"note": "文字依公報英文本意譯。公報也提到1979年談判中對台軍售問題未獲解決，中方表示建交後會再提。公報發表後美方另有「六項保證」（見相關事件）。",
"rel": [
"tra-1979",
"six-assur-1982"
],
"bg": "us-roc-prc",
"src": [
{
"t": "AIT 檔案：Joint Communique of the US and the PRC (1982)",
"u": "https://web-archive-2017.ait.org.tw/en/us-joint-communique-1982.html"
},
{
"t": "CRS Report 96-246：Taiwan: Texts of the Taiwan Relations Act, the U.S.-China Communiques, and the “Six Assurances”",
"u": "https://www.everycrsreport.com/reports/96-246.html"
}
]
},
{
"y": 1982,
"md": "",
"t": "美國對台灣的「六項保證」",
"key": "six-assur-1982",
"s": "六項保證",
"b": "1982年，美國向台北表達六項立場：未同意訂定終止對台軍售的日期；未同意就對台軍售與北京磋商；不扮演台北與北京間的調解角色；未同意修改《台灣關係法》；未改變對台灣主權的立場；不會對台灣施壓要求與北京談判。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "Six Assurances",
"note": "英文名稱；來自美方對台北的表述，不是與北京簽署的文件。"
}
],
"note": "日期：美國在台協會（AIT）網頁列有1982年7月10日與8月17日兩封電報，其中8月17日電報「提出六項保證」。六項的措辭依AIT網頁所列的英文電報意譯。這些保證是美方對台灣方面的表述，非公開簽署的公報；北京方面對此的看法，目前未見可引用來源。",
"rel": [
"aug17-comm-1982",
"tra-1979"
],
"bg": "us-roc-prc",
"src": [
{
"t": "AIT 檔案：Six Assurances (1982)",
"u": "https://web-archive-2022.ait.org.tw/our-relationship/policy-history/key-u-s-foreign-policy-documents-region/six-assurances-1982/index.html"
},
{
"t": "CRS Report 96-246：Taiwan: Texts of the Taiwan Relations Act, the U.S.-China Communiques, and the “Six Assurances”",
"u": "https://www.everycrsreport.com/reports/96-246.html"
}
]
},
{
"y": 1992,
"md": "10月",
"t": "香港商談與「九二共識」之爭",
"key": "hk-talks-1992",
"s": "九二共識",
"b": "1992年10月，台灣的海基會與中國大陸的海協會在香港舉行工作性商談，雙方都堅持「一個中國」，但對其意涵的認知不同。事後兩會以各自口頭表述的方式處理。「九二共識」一詞是2000年4月28日由陸委會主委蘇起首度提出。",
"track": "政治外交",
"conf": "disputed",
"aliases": [
{
"term": "一個中國，各自表述／一中各表",
"note": "國民黨與蘇起提出的解讀。"
},
{
"term": "認同一個中國的共識",
"note": "中國海協會副會長唐樹備1999年的說法，稱兩岸1992年達成此共識。"
},
{
"term": "「九二共識」不存在",
"note": "陳水扁、李登輝等人曾公開質疑此共識的存在（TVBS 報導）。"
}
],
"note": "爭議核心：1992年是否形成「共識」，以及內容是什麼。中央社的名詞解釋寫：這是事後塑造出的概括性名詞，商談內容是否形成共識有爭議。時間：中央社寫10月26至30日，TVBS寫為期3天、10月28日開始；TVBS另載11月3日海基會與陸委會各自發新聞稿、11月16日海協會回函表示「充分尊重並接受」海基會的建議（單一來源）。2019年習近平「重新定調」九二共識，蔡英文表示台灣「始終未接受九二共識」（中央社）。TVBS也指出，當時的新聞簡報看不到「九二共識」這個名詞。",
"rel": [
"koo-wang-1993"
],
"who": [
"koo-chen-fu",
"wang-daohan"
],
"bg": "strait-crises",
"src": [
{
"t": "中央社：不只九二共識 兩岸喊話這些名詞你都知道嗎（2019）",
"u": "https://www.cna.com.tw/news/firstnews/201901025006.aspx"
},
{
"t": "TVBS：還原香港會談 九二共識事後達成",
"u": "https://news.tvbs.com.tw/politics/367567"
}
]
},
{
"y": 1993,
"md": "4月27–29日",
"t": "辜汪會談（新加坡）",
"key": "koo-wang-1993",
"s": "辜汪會談",
"b": "海基會董事長辜振甫與海協會會長汪道涵於1993年4月27日至29日在新加坡會談，簽署四項事務性協議。Taipei Times 與當代中國都稱這是1949年後兩岸的首次正式接觸。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "汪辜會談",
"note": "中國大陸的稱法，把汪道涵放在前。"
}
],
"note": "日期：Taipei Times 與當代中國內文都寫4月27日至29日，當代中國有一張圖說寫4月25至27日，與內文不一致，此處依內文。四項協議的完整名稱，當代中國只舉出《汪辜會談共同協議》與《兩會聯繫與會談制度協議》。「首次正式接觸」為上述兩個來源的說法。",
"rel": [
"hk-talks-1992",
"jiang8-1995"
],
"who": [
"koo-chen-fu",
"wang-daohan"
],
"bg": "strait-crises",
"src": [
{
"t": "Taipei Times：Koo-Wang 會談20週年座談報導（2013-04-29）",
"u": "https://www.taipeitimes.com/News/front/archives/2013/04/29/2003560975"
},
{
"t": "當代中國：改革開放 汪辜會談後兩岸關係解凍（2021）",
"u": "https://www.ourchinastory.com/zh/1498"
},
{
"t": "遠見雜誌：兩岸大事記（2004）",
"u": "https://www.gvm.com.tw/article/9240"
}
]
},
{
"y": 1995,
"md": "1月30日",
"t": "江澤民發表「江八點」",
"key": "jiang8-1995",
"s": "江八點",
"b": "1995年1月30日，中共中央總書記江澤民發表談話，提出對台八點主張，其中一點是「堅持一個中國的原則，是實現和平統一的基礎和前提」。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "江八點",
"note": "〈為促進祖國統一大業的完成而繼續奮鬥〉講話的八點主張。"
}
],
"note": "八點的完整內容，此處未逐點收錄。",
"rel": [
"lee6-1995"
],
"who": [
"jiang-zemin"
],
"bg": "strait-crises",
"src": [
{
"t": "中央社：李登輝與江澤民多次過招 18套劇本因應台海飛彈危機（2022）",
"u": "https://www.cna.com.tw/news/acn/202211300345.aspx"
},
{
"t": "遠見雜誌：兩岸大事記（2004）",
"u": "https://www.gvm.com.tw/article/9240"
}
]
},
{
"y": 1995,
"md": "4月8日",
"t": "李登輝提出「李六條」",
"key": "lee6-1995",
"s": "李六條",
"b": "1995年4月8日，李登輝提出六點主張回應「江八點」，包括「在兩岸分治的現實上追求中國統一」，以及「兩岸平等參與國際組織，雙方領導人藉此自然見面」。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "李六條／李六點",
"note": "兩種寫法並見。"
}
],
"note": "六條的完整內容，此處未逐條收錄。遠見的大事記記載是在國統會上提出。",
"rel": [
"jiang8-1995",
"missile-jul-1995"
],
"bg": "strait-crises",
"src": [
{
"t": "中央社：李登輝與江澤民多次過招 18套劇本因應台海飛彈危機（2022）",
"u": "https://www.cna.com.tw/news/acn/202211300345.aspx"
},
{
"t": "遠見雜誌：兩岸大事記（2004）",
"u": "https://www.gvm.com.tw/article/9240"
}
]
},
{
"y": 1995,
"md": "7月21日",
"t": "中共在台灣北方海域試射飛彈",
"key": "missile-jul-1995",
"s": "飛彈試射",
"b": "1995年7月21日起，中共在台灣北部外海進行飛彈試射與軍演；8月再舉行第二輪。這是「第三次台海危機」的開端。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "第三次台海危機（Third Taiwan Strait Crisis）",
"note": "後人的分類。"
},
{
"term": "台海飛彈危機",
"note": "臺灣常用說法。"
}
],
"note": "日期：EBSCO 寫7月21至26日，共發射四枚短程與兩枚中程飛彈；中央社寫新華社7月18日宣布二砲部隊將於7月21日至28日在彭佳嶼附近海域試射，兩者的終止日不同。EBSCO 另載8月15至25日為第二輪，12月19日美國尼米茲號航艦通過台灣海峽。中共為何採取這些行動：學界常見說法是抗議李登輝同年6月訪美；EBSCO 轉述北京方面的看法，稱李登輝訪美是在爭取對台獨的支持，8月北京並稱李登輝「必須為他的固執受到懲罰」（EBSCO 轉述，非原始聲明）。以上是解釋或轉述，不是官方原始聲明，各方說法另見專題。",
"why": [
{
"t": "1995年6月李登輝訪問母校康乃爾大學（見李登輝線）。",
"k": "d"
},
{
"t": "學界常把這輪飛彈試射和訪美連在一起談，也有人強調其他因素；各家說法並列於專題。",
"k": "s"
}
],
"so": [
{
"t": "1996年3月再次舉行飛彈演習並有美國航艦進入該海域（見相關事件）。",
"k": "d"
}
],
"rel": [
"lee6-1995",
"missile-mar-1996"
],
"who": [
"jiang-zemin"
],
"bg": "missile",
"src": [
{
"t": "EBSCO Research Starters：Third Taiwan Strait Crisis",
"u": "https://www.ebsco.com/research-starters/history/third-taiwan-strait-crisis"
},
{
"t": "中央社：李登輝與江澤民多次過招 18套劇本因應台海飛彈危機（2022）",
"u": "https://www.cna.com.tw/news/acn/202211300345.aspx"
}
]
},
{
"y": 1996,
"md": "3月8日",
"t": "1996年3月飛彈演習與美國航艦調動",
"key": "missile-mar-1996",
"s": "九六飛彈",
"b": "1996年3月，中共再度舉行飛彈演習與軍演，飛彈落在基隆與高雄外海；美國派出獨立號航艦戰鬥群，後有尼米茲號加入。3月23日台灣舉行首次總統直選。",
"track": "政治外交",
"conf": "common",
"note": "日期各來源不同：EBSCO 寫3月4日中共宣布3月8至18日試射、3月7日發射三枚、3月13日最後一次，另宣布3月12至20日與3月18至25日的實彈演習；中央社引述國防部，寫演習為3月8至15日，發射四枚東風15，三枚落高雄南方、一枚落基隆北方。美國部分：獨立號3月8日奉命前往，尼米茲號3月11日自波斯灣加入（中央社）。威嚇是否達到影響選舉的目的，外界評論多認為沒有，但這是評論，不是官方說法。",
"rel": [
"missile-jul-1995"
],
"who": [
"jiang-zemin"
],
"bg": "missile",
"src": [
{
"t": "EBSCO Research Starters：Third Taiwan Strait Crisis",
"u": "https://www.ebsco.com/research-starters/history/third-taiwan-strait-crisis"
},
{
"t": "中央社：李登輝與江澤民多次過招 18套劇本因應台海飛彈危機（2022）",
"u": "https://www.cna.com.tw/news/acn/202211300345.aspx"
}
]
},
{
"y": 2022,
"md": "8月4日",
"t": "裴洛西訪台後的解放軍大規模演訓",
"key": "pla-drill-2022",
"s": "八四軍演",
"b": "美國聯邦眾議院議長裴洛西2022年8月2日深夜抵台、3日離開後，解放軍自8月4日中午起在台灣周邊六處海空域實施實彈演訓，原定至8月7日中午。我國防部表示，4日下午共軍發射11枚東風飛彈。",
"track": "政治外交",
"conf": "common",
"note": "飛彈是否飛越台灣上空：日本防衛省的資料顯示有4枚飛越（含台北上空）、5枚落在日本專屬經濟海域（公視、今周刊轉述）；台灣國防部起初說軌跡未經台灣上空，之後改稱「不便評論」，並稱飛彈主要路徑在大氣層外、對地面無危害，所以沒有發布警報。中共外交部發言人華春瑩稱中日之間並無正式劃界，所以沒有「日本專屬經濟區」。8月5日中共宣布八項反制措施並制裁裴洛西及其直系親屬。蔡英文表示「不會升高衝突，不會挑起爭端」；外交部長吳釗燮稱裴洛西訪台只是藉口，目的是「企圖將台灣海峽內海化」（TVBS 8月9日）；裴洛西在東京表示美國不會讓中國孤立台灣。演訓後來還延長，TVBS 未寫明新的結束日。",
"rel": [
"missile-mar-1996"
],
"bg": "strait-crises",
"src": [
{
"t": "公視新聞網：4枚飛彈掠過台灣警報為何沒響？一文了解中國軍演狀況（2022-08-05）",
"u": "https://news.pts.org.tw/article/593745"
},
{
"t": "今周刊（聯合新聞網稿）：共軍機艦今再跨越海峽中線…（2022-08-05）",
"u": "https://www.businesstoday.com.tw/article/category/183012/post/202208050015/"
},
{
"t": "TVBS：外交部五點聲明譴責共軍挑釁 外媒關注（2022-08-09）",
"u": "https://news.tvbs.com.tw/politics/1872442"
}
]
},
{
"y": 1949,
"md": "5月19–20日",
"t": "台灣省戒嚴令",
"key": "martial-1949",
"s": "台灣省戒嚴",
"b": "1949年5月19日，台灣省當局宣布戒嚴，5月20日起生效。依 Taipei Times 的整理，戒嚴令關閉基隆、高雄、馬公以外的港口，對平民與商家實施宵禁，並禁止公開集會、罷工與遊行。這道戒嚴令後來維持約38年。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "台灣省全省戒嚴／全面戒嚴",
"note": "本站李登輝線與民間常稱「台灣全面戒嚴」，指同一件事。"
},
{
"term": "戒嚴時期",
"note": "1949至1987年的整段期間，另稱「戒嚴時期」或「威權時期」，後者是後人的分期用語。"
}
],
"note": "日期：Taipei Times 寫陳誠於5月19日宣布、次日午夜生效；1949年5月19日美國駐台北領事電報（FRUS）寫省政府與台灣駐軍當日聯合宣布、5月20日生效；聲軌（Soundtraces）頁面則只寫5月20日。因此「5月19日宣布、5月20日生效」是各來源可以並存的寫法，本站標為常見說法。宣布者與法律依據：Taipei Times 記載有人質疑陳誠宣布戒嚴的法律依據（憲法第39條規定由總統宣布）；FRUS 電報未提陳誠之名。戒嚴令全文與官方公報原件，目前未見可引用來源。",
"why": [
{
"t": "官方說法是國共內戰局勢下為防範共產黨滲透、穩定治安；批評者則指出它同時限縮了人民的集會、言論與出版自由（兩種說法並列，詳見專題「戒嚴、動員戡亂、臨時條款」）。",
"k": "s"
}
],
"so": [
{
"t": "戒嚴令持續約38年又56天，至1987年7月解除（Taipei Times 計算）。",
"k": "d"
},
{
"t": "同年稍後公布《懲治叛亂條例》，政治案件多由軍事機關審判（見相關事件）。",
"k": "d"
}
],
"rel": [
"temp-provisions-1948",
"taipei-1949",
"treason-act-1949"
],
"who": [
"chen-cheng"
],
"bg": "martial",
"src": [
{
"t": "Taipei Times：Taiwan in Time: May 16 to May 22",
"u": "https://www.taipeitimes.com/News/feat/archives/2016/05/15/2003646284"
},
{
"t": "美國國務院史家辦公室 FRUS 1949 Vol. IX，文件 383（1949年5月19日電報）",
"u": "https://history.state.gov/historicaldocuments/frus1949v09/d383"
},
{
"t": "聲軌 Soundtraces：Martial Law Declared in Taiwan Province",
"u": "https://soundtraces.tw/?p=100300"
}
]
},
{
"y": 1949,
"md": "6月21日",
"t": "《懲治叛亂條例》施行",
"key": "treason-act-1949",
"s": "懲治叛亂條例",
"b": "《懲治叛亂條例》於1949年5月24日經立法院三讀通過，自6月21日起施行，全文13條。第2條第1項規定犯內亂罪等條文者「處死刑」（俗稱「二條一」），第10條規定軍人由軍事機關審判、非軍人由司法機關審判，但在戒嚴區域犯者不論身分一律由軍事機關審判。該條例於1991年5月廢止。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "二條一",
"note": "民間對第2條第1項「唯一死刑」規定的簡稱。"
}
],
"note": "廢止日期：維基百科載立法院1991年5月17日三讀通過、5月22日由總統宣告廢止；中央社2021年5月1日的報導只寫5月17日通過廢止。施行日期與條文內容依維基百科條目，國史館與全國法規資料庫的條文原件，目前未見可引用來源。",
"so": [
{
"t": "依第10條，在戒嚴區域犯此條例之罪者不論軍民身分一律由軍事機關審判；白色恐怖時期的許多案件依此條例辦理（個案見專題「白色恐怖個案」）。",
"k": "d"
}
],
"rel": [
"martial-1949",
"sun-liren-1955",
"leichen-1960"
],
"bg": "terror-cases",
"src": [
{
"t": "維基百科中文：懲治叛亂條例",
"u": "https://zh.wikipedia.org/wiki/懲治叛亂條例"
},
{
"t": "中央社 2021-05-01：動員戡亂終止相關報導",
"u": "https://www.cna.com.tw/news/firstnews/202105010032.aspx"
}
]
},
{
"y": 1949,
"md": "6月15日",
"t": "幣制改革：發行新臺幣",
"key": "ntd-1949",
"s": "新臺幣發行",
"b": "1949年6月15日，台灣實施幣制改革，收回舊台幣，換發新臺幣，兌換比率為舊台幣四萬元換新臺幣一元。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "verified",
"aliases": [
{
"term": "舊台幣／新臺幣",
"note": "1949年以前流通的稱「舊台幣」（台灣銀行發行），改革後稱「新臺幣」。"
}
],
"note": "日期與比率依中央銀行網頁（「五、通貨膨脹的經驗」）。該頁未說明比率的計算依據與法源；新臺幣後續的發行準備與美金掛鉤安排，目前未見可引用來源。",
"why": [
{
"t": "中央銀行頁面記載，1945至1949年間台灣物價每年漲幅在500%至1200%之間。",
"k": "d"
}
],
"so": [
{
"t": "中央銀行頁面記載，幣制改革之後搭配優利存款、財政撙節等措施。",
"k": "d"
}
],
"rel": [
"taipei-1949",
"aid-1951"
],
"src": [
{
"t": "中央銀行：通貨膨脹的經驗",
"u": "https://www.cbc.gov.tw/tw/cp-731-24678-8C2D6-1.html"
}
]
},
{
"y": 1949,
"md": "4月14日",
"t": "三七五減租",
"key": "land375-1949",
"s": "三七五減租",
"b": "1949年4月，台灣省公布實施私有耕地租用辦法，規定佃農繳給地主的地租不得超過主要作物全年收穫量的37.5%，原租額低於37.5%者不得增加。1951年6月7日另制定《耕地三七五減租條例》作為法律依據。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"aliases": [
{
"term": "三七五減租",
"note": "「375」指地租上限為主要作物全年收穫量的37.5%，是一種定額地租（土地改革紀念館的說明）。"
}
],
"note": "年份不一致：多數來源以1949年（4月14日公布實施）為準，1947年3月20日已有類似訓令；有一份大專通識電子報把三七五減租寫成1951年，與其他來源不符，本站依多數來源。公布機關在來源中只寫「公布實施」，未寫明是省政府或其他機關。",
"so": [
{
"t": "1951年6月制定《耕地三七五減租條例》，之後另有公地放領與耕者有其田（見相關事件）。",
"k": "d"
}
],
"rel": [
"land-1953",
"ntd-1949"
],
"bg": "land-aid",
"src": [
{
"t": "政治大學學位論文第4章（土地改革，PDF）",
"u": "https://ah.lib.nccu.edu.tw/bitstream/140.119/33741/8/26000608.pdf"
},
{
"t": "土地改革紀念館電子報（PDF）",
"u": "https://www.landreform.org.tw/wp-content/uploads/2021/01/epapper-20200616-1.pdf"
},
{
"t": "南台科大通識電子報（PDF，日期與其他來源不一致）",
"u": "https://genedu.stust.edu.tw/Sysid/genedu/621GEP/GEP05/gep0546_03.pdf"
}
]
},
{
"y": 1950,
"md": "10月起",
"t": "縣市長與縣市議會選舉（地方自治）",
"key": "local-elections-1950",
"s": "地方選舉",
"b": "1950年起，台灣省分階段舉行縣市長與縣市議會選舉，共選出21名縣市長。首次投票在1950年10月15日（花蓮、台東），各縣市投票持續到1951年。這是戒嚴體制下的地方選舉；當時新政黨被禁止成立。",
"track": "政權",
"conf": "common",
"note": "日期：Taipei Times 記載1950年10月15日首次投票（花蓮、台東）；英文維基百科的表格以整段選舉期程列日期（第一階段自1950年8月12日起），苗栗的起始日（1950年5月5日）疑為誤植，因此本站以10月15日為首次投票日。結果：21名縣市長中國民黨17、中國民主社會黨1，其餘為無黨籍（維基資訊框）；Taipei Times 記載花蓮縣長楊仲鯨（中國民主社會黨）為首位當選者，並寫無黨籍候選人在台北、台中、台南當選。法源《臺灣省縣市長選舉罷免規程》。議會選舉的日期與法源，目前未見可引用來源。",
"so": [
{
"t": "地方有選舉，但同期戒嚴令下禁止新政黨成立與集會遊行（見相關事件）。",
"k": "d"
}
],
"rel": [
"martial-1949"
],
"src": [
{
"t": "Taipei Times：Oct. 11 to Oct. 17（Taiwan in Time）",
"u": "https://www.taipeitimes.com/News/feat/archives/2021/10/10/2003765831"
},
{
"t": "English Wikipedia：1950–51 Taiwanese local elections",
"u": "https://en.wikipedia.org/wiki/1950%E2%80%9351_Taiwanese_local_elections"
}
]
},
{
"y": 1951,
"md": "",
"t": "美援（1951–1965）",
"key": "aid-1951",
"s": "美援",
"b": "1951年起，美國對中華民國政府提供經濟與軍事援助，其中的經濟援助一般認為到1965年6月30日結束。經濟援助總額有14.8億美元（維基百科）、約15億美元（1951–1964年）等說法。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"aliases": [
{
"term": "美援",
"note": "狹義指1951年《共同安全法》下的經濟與軍事援助；廣義有人從1950年算起。"
}
],
"note": "起訖與金額各來源不同：維基百科「美援」條目寫1951年10月10日至1965年6月30日，總額14.8億美元；另一處寫1951–1964年約15億美元、約占資本形成40%；吳聰敏簡報的大事記寫「美援（1950–65）」，並寫1949–66年度軍援與經援贈與合計37.0億美元（含軍援）。主要用途（維基百科）：交通、電力、水庫、肥料、水泥、製糖、造紙與民營工業貸款等；1957年起由純贈與改為贈與與貸款並行，1962年後多改為貸款。官方（國史館等）統計，目前未見可引用來源。",
"so": [
{
"t": "吳聰敏簡報指出，1954年起美方把援助目標轉向經濟發展，並施壓促成1958年3月的外匯貿易改革。",
"k": "s"
}
],
"rel": [
"truman-fleet-1950",
"ntd-1949",
"land-1953",
"aid-end-1965"
],
"who": [],
"bg": "land-aid",
"src": [
{
"t": "維基百科中文：美援",
"u": "https://zh.wikipedia.org/wiki/美援"
},
{
"t": "吳聰敏：美援與台灣經濟（簡報，2023，PDF）",
"u": "https://homepage.ntu.edu.tw/~ntut019/te400/bm-T4A-USaid-TEA-2023.pdf"
},
{
"t": "聲軌 Soundtraces：Taiwan Begins Receiving U.S. Aid",
"u": "https://soundtraces.tw/?p=102818"
}
]
},
{
"y": 1952,
"md": "4月28日",
"t": "《中日和約》（台北和約）簽訂",
"key": "taipei-treaty-1952",
"s": "中日和約",
"b": "1952年4月28日，中華民國與日本在台北簽訂和平條約，8月5日換文生效。條約第2條確認依1951年舊金山和約，日本放棄對台灣、澎湖的一切權利、權利名義與要求。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "中日和約／台北和約",
"note": "臺灣與中華民國方面常用。"
},
{
"term": "日華和平條約（日華平和条約）",
"note": "日本方面的稱法。"
}
],
"note": "條約文與生效日見日本外務省《國家條約集》收錄的條約文本（東京大學田中研究室資料庫轉載）：1952年4月28日簽署、7月8日批准、8月5日在台北換文生效。條約第2條只確認日本放棄台灣、澎湖，與舊金山和約一樣，沒有寫明歸屬哪一方；各方對這一點與條約效力的解讀不同。1972年日本與中華人民共和國建交後，日方認為此條約失去存在意義並宣告結束（日本外相大平正芳的說法，依維基百科轉述）。各方官方原始聲明目前未見可引用來源。",
"why": [
{
"t": "1951年9月8日簽署的舊金山和約約定日本放棄台灣與澎湖，但中華民國與中華人民共和國的政府都不在49個簽署國名單中（見相關事件）。",
"k": "d"
}
],
"so": [
{
"t": "條約第4條認定中華民國1941年12月9日以前與日本簽訂的條約因戰爭而無效；中華民國政府認為這包含《馬關條約》。",
"k": "d"
}
],
"rel": [
"sf-1951",
"truman-fleet-1950",
"mdt-1954"
],
"bg": "diplomacy",
"src": [
{
"t": "外務省《日本国との平和条約》與《日華平和条約》條約文（The World and Japan 資料庫）",
"u": "https://worldjpn.net/documents/texts/docs/19520428.T1E.html"
},
{
"t": "English Wikipedia：Treaty of Taipei（引用聯合國條約集）",
"u": "https://en.wikipedia.org/wiki/Treaty_of_Taipei"
}
]
},
{
"y": 1953,
"md": "1月26日",
"t": "《實施耕者有其田條例》公布",
"key": "land-1953",
"s": "耕者有其田",
"b": "1953年1月20日立法院三讀通過、1月26日公布《實施耕者有其田條例》，政府向地主徵收超過保留額度的出租耕地，轉放領給現耕農。地主補償為七成實物土地債券與三成公營事業股票。此前已從1951年起辦理公地放領。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"aliases": [
{
"term": "土地改革（土改）",
"note": "通常合指三七五減租、公地放領與耕者有其田三個階段。"
}
],
"note": "日期：多數來源寫1953年1月20日立法院三讀、1月26日總統公布；另一份政治大學論文寫「1953年1月29日開始實施」，與公布日不同。數字依土地改革紀念館電子報等來源（各來源數字略有出入）：耕者有其田1953年12月完成，徵收放領耕地139,249公頃，創設自耕農戶194,823戶；公地放領1951至1976年分九期（連同試辦，試辦年份有1947、1948年兩種寫法），共放領138,957公頃、承領農戶286,287戶。地主補償：七成實物土地債券（十年均等償付、年息4%），三成四大公營事業股票（台灣水泥、台灣紙業、台灣工礦、台灣農林）；地主保留水田3甲或旱田6甲。評價：各方（農民、地主、研究者）的看法與補償的實際價值，目前未見可引用來源。",
"why": [
{
"t": "1949年已先實施三七五減租（見相關事件）。",
"k": "d"
}
],
"so": [
{
"t": "土地改革與日後工業化的關係，學者有不同論述（例如農村資金與勞動力是否轉入工業），目前未見可引用的單一定論來源。",
"k": "s"
}
],
"rel": [
"land375-1949",
"aid-1951"
],
"bg": "land-aid",
"src": [
{
"t": "政治大學學位論文第4章（土地改革，PDF）",
"u": "https://ah.lib.nccu.edu.tw/bitstream/140.119/33741/8/26000608.pdf"
},
{
"t": "土地改革紀念館電子報（PDF）",
"u": "https://www.landreform.org.tw/wp-content/uploads/2021/01/epapper-20200616-1.pdf"
},
{
"t": "南台科大通識電子報（PDF）",
"u": "https://genedu.stust.edu.tw/Sysid/genedu/621GEP/GEP05/gep0546_03.pdf"
}
]
},
{
"y": 1955,
"md": "",
"t": "孫立人案",
"key": "sun-liren-1955",
"s": "孫立人案",
"b": "1955年，孫立人的舊部郭廷亮等人被捕，孫立人被指涉及匿藏共諜與策劃政變。同年10月20日蔣中正命令稱孫立人「不知郭廷亮為匪諜尚屬事實」，但負有重大咎責，准其自新；孫立人此後被軟禁至1988年。",
"track": "政權",
"conf": "disputed",
"aliases": [
{
"term": "孫立人案／郭廷亮案",
"note": "當時官方的指控是匿藏共諜（匪諜）與謀反；後世稱「孫立人案」。"
}
],
"note": "調查結論並列：蔣中正指派的九人委員會（陳誠領銜）認定郭廷亮有罪、孫立人有責；監察院五人小組認為郭廷亮的活動不構成叛亂、孫立人不知情，該報告2001年解密，同年監察院通過朱浤源的調查報告為孫立人平反（Taipei Times）。日期：Taipei Times 2014年報導寫孫立人於1955年8月被捕並受軍事審判、2001年報導寫案件始於1955年5月，兩者差異；中研院週報記載10月20日的蔣中正命令。郭廷亮被捕日據 Taipei Times 引調查為5月25日，另載郭廷亮1991年過世，官方說法是跳火車，朱浤源依病歷推論為遭重擊後丟下車，此為學者推論。牽連人數：Taipei Times 2001年寫逾300人受牽連、逾30人判刑或判死；2014年寫逾300人被逮捕或入獄。五人報告年份，Taipei Times 2001年寫「1995年」，中研院週報寫民國44年（1955年），應為前者誤植，本站採後者。五人小組報告於民國44年（1955年）完成，原件2000年左右才由朱浤源重新整理公開（中研院週報）。",
"so": [
{
"t": "孫立人此後被軟禁，1988年3月解除；他於1990年11月過世（Taipei Times、中研院週報）。",
"k": "d"
},
{
"t": "2001年監察院調查報告稱沒有證據證明郭廷亮是共諜（Taipei Times 2001）。",
"k": "d"
}
],
"rel": [
"martial-1949",
"treason-act-1949",
"leichen-1960"
],
"who": [
"sun-liren",
"chen-cheng"
],
"bg": "terror-cases",
"src": [
{
"t": "Taipei Times 2001-01-10：Sun Li-jen 平反報導",
"u": "https://www.taipeitimes.com/News/front/archives/2001/01/10/69137"
},
{
"t": "Taipei Times 2014-07-19：孫立人案",
"u": "https://www.taipeitimes.com/News/taiwan/archives/2014/07/19/2003595465"
},
{
"t": "Taipei Times 2017：Nov. 13 to Nov. 19（Taiwan in Time）",
"u": "https://www.taipeitimes.com/News/feat/archives/2017/11/12/2003682105"
},
{
"t": "中央研究院週報第1430期（朱浤源，PDF）",
"u": "https://newsletter.sinica.edu.tw/reviews/knowledge/1430.pdf"
}
]
},
{
"y": 1957,
"md": "5月24日",
"t": "劉自然事件（五二四事件）",
"key": "may24-1957",
"s": "五二四事件",
"b": "1957年3月20日，美軍顧問團軍士雷諾（Robert G. Reynolds）在陽明山開槍，劉自然死亡。5月23日美軍軍事法庭宣判雷諾無罪。5月24日，劉自然遺孀到美國大使館前抗議，群眾衝入並破壞大使館與美國新聞處建築。",
"track": "政治外交",
"topic": "社會族群",
"conf": "common",
"aliases": [
{
"term": "五二四事件",
"note": "以群眾衝擊大使館的日期命名。"
},
{
"term": "劉自然事件",
"note": "以死者命名，指槍擊到判決與抗議的整段事件。"
}
],
"note": "數字各來源不同：維基百科寫人群達6,000人，11名美國人、62名警察、11名群眾受傷，1名群眾死亡，逮捕111人，其中28人被判有罪（最重一年）；Taipei Times 寫暴動持續近10小時，約40人被判6個月至1年，兩者不完全一致。責任：美方指控蔣經國煽動，中華民國官方報告否認事先策劃，蔣中正稱之為「不幸事變」（維基百科轉述），這些說法本站並列、不下結論。",
"so": [
{
"t": "美國大使要求「完全賠償與適當道歉」（Taipei Times 引 CBS 報導）。",
"k": "d"
}
],
"rel": [
"mdt-1954"
],
"who": [
"chiang-ching-kuo"
],
"src": [
{
"t": "English Wikipedia：May 24 incident",
"u": "https://en.wikipedia.org/wiki/May_24_incident"
},
{
"t": "Taipei Times 2018：May 21 to May 27（Taiwan in Time）",
"u": "https://www.taipeitimes.com/News/feat/archives/2018/05/20/2003693380"
}
]
},
{
"y": 1960,
"md": "3月",
"t": "修訂臨時條款、蔣中正第三任連任",
"key": "provisions-1960",
"s": "臨時條款修訂",
"b": "1960年3月，國民大會第一次修訂《動員戡亂時期臨時條款》，凍結憲法中總統連任一次的限制；同年蔣中正當選第三任總統。",
"track": "政權",
"conf": "common",
"note": "日期：中文維基百科條目只寫「1960年3月」；英文維基百科的總統選舉條目寫蔣中正1960年3月21日當選第三任、5月20日就任。對這次修訂的各方評價與官方原始說明，目前未見可引用來源。",
"so": [
{
"t": "此後總統連任次數不受憲法原條文的限制，臨時條款至1991年廢止（維基百科條目，法源見全國法規資料庫）。",
"k": "d"
}
],
"rel": [
"temp-provisions-1948",
"leichen-1960"
],
"src": [
{
"t": "維基百科中文：動員戡亂時期臨時條款",
"u": "https://zh.wikipedia.org/wiki/動員戡亂時期臨時條款"
},
{
"t": "English Wikipedia：1960 Taiwanese presidential election",
"u": "https://en.wikipedia.org/wiki/1960_Taiwanese_presidential_election"
},
{
"t": "全國法規資料庫：動員戡亂時期臨時條款（該頁引用）",
"u": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=A0000005"
}
]
},
{
"y": 1960,
"md": "9月4日",
"t": "雷震案",
"key": "leichen-1960",
"s": "雷震案",
"b": "1960年9月4日，《自由中國》雜誌社長雷震被捕，罪名是「知匪不報、為匪宣傳」，後被判十年徒刑；同案編輯傅正等人同時被捕，《自由中國》停刊。雷震當時正參與籌組反對黨（中國民主黨）。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "自由中國案",
"note": "以雜誌命名；官方當時的罪名為「知匪不報、為匪宣傳」。"
}
],
"note": "判刑依陳奎德文章的轉載（中國數字時代轉載，原刊明鏡），Taipei Times 2002年報導另載雷震被判十年、褫奪公權七年，國史館2002年出版三冊雷震案檔案；2019年促進轉型正義委員會公布第四波刑事有罪判決撤銷名單，雷震、傅正、劉子英都在名單上（公視報導）。判決書原件與出獄年份，目前未見可引用來源。《自由中國》1949年11月20日創刊，雷震被捕後停刊；雷震在1954年12月被國民黨開除黨籍。各方評價與判決書原件，目前未見可引用來源。",
"so": [
{
"t": "雷震1979年3月7日病逝，享年83歲（陳奎德文章）。",
"k": "d"
},
{
"t": "反對黨的組成在1986年民主進步黨成立之前未能實現（見李登輝線事件）。",
"k": "d"
},
{
"t": "2019年促進轉型正義委員會公布第四波刑事有罪判決撤銷名單，雷震、傅正、劉子英在名單上（公視報導）。",
"k": "d"
}
],
"rel": [
"treason-act-1949",
"sun-liren-1955",
"peng-1964"
],
"who": [
"lei-zhen"
],
"bg": "terror-cases",
"src": [
{
"t": "中國數字時代：陳奎德文章轉載（原刊明鏡）",
"u": "https://chinadigitaltimes.net/chinese/215420.html"
},
{
"t": "公視新聞：促轉會公布第四波刑事有罪判決撤銷名單（2019）",
"u": "https://news.pts.org.tw/article/433222"
},
{
"t": "Taipei Times 2002-09-05：雷震案檔案出版",
"u": "https://www.taipeitimes.com/News/taiwan/archives/2002/09/05/0000166855"
}
]
},
{
"y": 1960,
"md": "9月10日",
"t": "《獎勵投資條例》公布",
"key": "invest-1960",
"s": "獎勵投資條例",
"b": "1960年8月31日立法院制定、9月10日總統令公布《獎勵投資條例》，以租稅減免獎勵製造業等投資，並吸引外資；該條例施行至1990年，1991年1月1日廢止。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"note": "日期依維基百科中文條目，該條目未列官方來源網址；全國法規資料庫的條文與制定沿革目前未見逐項對照。條例後來為配合出口擴張與第二次進口替代修正（維基百科條目）。",
"why": [
{
"t": "1959年底有「19點財經改革措施」，與外匯貿易改革同屬1950年代末的經濟轉向（《臺灣經濟史》條目）；與條例之間的因果程度，各研究說法不同。",
"k": "s"
}
],
"so": [
{
"t": "條例以減免租稅吸引外資與發展外銷產業（維基百科條目）。",
"k": "d"
}
],
"rel": [
"aid-1951",
"kepz-1966"
],
"src": [
{
"t": "維基百科中文：獎勵投資條例",
"u": "https://zh.wikipedia.org/wiki/獎勵投資條例"
},
{
"t": "維基百科中文：臺灣經濟史",
"u": "https://zh.wikipedia.org/wiki/臺灣經濟史"
}
]
},
{
"y": 1964,
"md": "9月20日",
"t": "彭明敏等人因〈台灣人民自救運動宣言〉被捕",
"key": "peng-1964",
"s": "彭明敏案",
"b": "1964年9月20日，台灣大學政治系教授彭明敏與學生謝聰敏、魏廷朝因擬發表〈台灣人民自救運動宣言〉被捕。宣言主張集會結社自由、制定新憲法，並批評「反攻大陸」不可能。三人被以叛亂罪起訴。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "台灣人民自救運動宣言／台灣自救宣言",
"note": "各媒體稱法不同。"
}
],
"note": "判刑與後續各來源並列：Newtalk 寫彭明敏判8年、謝聰敏10年、魏廷朝8年，彭明敏次年11月獲釋；The News Lens 寫彭明敏獲特赦，但不得回台大教書、受嚴密監控形同軟禁。彭明敏1970年出走瑞典，後赴美（中央社引陳儀深）。2024年報導稱彭明敏2022年過世，生前未申請平反，謝聰敏、魏廷朝已平反，彭明敏文教基金會代為申請。宣言原文與判決書原件，目前未見可引用來源。",
"so": [
{
"t": "彭明敏1970年出走海外（中央社引述學者陳儀深）。",
"k": "d"
}
],
"rel": [
"leichen-1960",
"treason-act-1949"
],
"who": [
"peng-ming-min"
],
"bg": "terror-cases",
"src": [
{
"t": "Newtalk 2024-09-10：彭明敏案",
"u": "https://newtalk.tw/news/view/2024-09-10/935825"
},
{
"t": "The News Lens：台灣人民自救宣言相關報導",
"u": "https://www.thenewslens.com/article/192334"
}
]
},
{
"y": 1965,
"md": "6月30日",
"t": "美國經濟援助終止",
"key": "aid-end-1965",
"s": "美援終止",
"b": "1965年6月30日，美國對中華民國的經濟援助結束；此後仍有軍事援助與其他關係，經濟上轉向以貿易與投資為主（見相關事件）。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"note": "日期依維基百科「美援」條目寫的1965年6月30日、並寫美國華府於7月停止援助貸款；吳聰敏簡報的大事記寫1965年美援終止。官方文件原件目前未見可引用來源。",
"why": [
{
"t": "終止前援助的形式已改變：1957年起由純贈與改為贈與與貸款並行，1962年後多為貸款（維基百科條目）。",
"k": "d"
}
],
"rel": [
"aid-1951",
"invest-1960",
"kepz-1966"
],
"src": [
{
"t": "維基百科中文：美援",
"u": "https://zh.wikipedia.org/wiki/美援"
},
{
"t": "吳聰敏：美援與台灣經濟（簡報，2023，PDF）",
"u": "https://homepage.ntu.edu.tw/~ntut019/te400/bm-T4A-USaid-TEA-2023.pdf"
}
]
},
{
"y": 1966,
"md": "12月",
"t": "高雄加工出口區設立",
"key": "kepz-1966",
"s": "加工出口區",
"b": "1966年12月，高雄加工出口區設立，面積約68公頃，之後楠梓、台中也相繼設立加工出口區。維基百科稱它是全球第一個加工出口區。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"note": "「全球第一個」是維基百科條目的說法，未見官方來源核對；《加工出口區設置管理條例》的公布日期，目前未見可引用來源。2021年該區更名為前鎮科技產業園區。官方（經濟部加工出口區管理處）沿革頁，目前未見可引用來源。愛爾蘭香農自由區（1959）常被稱為最早的現代自由貿易區，各方對「第一個」的定義不同。",
"rel": [
"invest-1960",
"aid-end-1965"
],
"src": [
{
"t": "維基百科中文：高雄加工出口區（前鎮科技產業園區）",
"u": "https://zh.wikipedia.org/wiki/高雄加工出口區"
},
{
"t": "維基百科中文：臺灣經濟史",
"u": "https://zh.wikipedia.org/wiki/臺灣經濟史"
}
],
"why": [
{
"t": "《臺灣經濟史》條目寫1963年台灣對外貿易首次出超，並有美日資金投入出口導向產業（時間先於加工出口區設立）。",
"k": "d"
}
]
},
{
"y": 1968,
"md": "9月",
"t": "九年國民教育開始實施",
"key": "nine-year-1968",
"s": "九年國教",
"b": "1967年8月28日行政院令決定延長國民教育為九年，1968年1月27日公布《九年國民教育實施條例》，1968年（57學年度）起實施：國民中學取代初級中學，國小畢業生依學區分發入學，原有的初中入學考試取消。",
"track": "政權",
"topic": "社會族群",
"conf": "common",
"aliases": [
{
"term": "九年國民教育／九年義務教育",
"note": "法令與論文用「國民教育」；一般口語也稱「九年義務教育」。"
}
],
"note": "依吳清山〈近50年來國民教育發展之探究〉整理；蔣中正在1968年9月9日對國民教育九年制開始實施及國民中學開學典禮訓詞。日期為單一論文轉述，教育部原始公報目前未見可引用來源。",
"so": [
{
"t": "初級中學入學考試停止，全國初中、初職及五年制職校停止招生（吳清山論文）。",
"k": "d"
}
],
"rel": [
"invest-1960"
],
"src": [
{
"t": "吳清山：近50年來國民教育發展之探究（教育研究集刊，PDF）",
"u": "https://ber.ed.ntnu.edu.tw/upload/2026/02/644-172-full-text.pdf"
}
]
},
{
"y": 1970,
"md": "4月24日",
"t": "蔣經國在紐約遇刺（四二四刺蔣案）",
"key": "assassin-1970",
"s": "四二四刺蔣案",
"b": "1970年4月24日，蔣經國訪問美國，在紐約廣場飯店門前遭黃文雄開槍，被警探抓住手腕，子彈未擊中。黃文雄與鄭自才被捕。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "四二四刺蔣案／刺蔣案",
"note": "台灣的常見稱法，以日期命名。"
}
],
"note": "保釋情形各來源不同：1970年4月25日《紐約時報》頭版（Telltaiwan 中譯）寫法官裁定兩人不得保釋；The News Lens 寫兩人曾被裁定交保（10萬與11萬美元）後潛逃。《紐約時報》報導把黃文雄寫為康乃爾大學工業工程研究生，Telltaiwan 的按語指出他當時是社會學博士生。黃文雄之後的審判結果，目前未見可引用來源。事件的動機與各方評價，目前未見可引用的官方來源。",
"rel": [
"peng-1964",
"un-1971"
],
"who": [
"chiang-ching-kuo"
],
"src": [
{
"t": "The News Lens：刺蔣案相關報導",
"u": "https://www.thenewslens.com/article/94721"
},
{
"t": "公視新聞網：「刺蔣」50週年",
"u": "https://news.pts.org.tw/article/502998"
},
{
"t": "Telltaiwan：1970年4月25日《紐約時報》頭版中譯",
"u": "https://www.telltaiwan.org/1728"
}
]
},
{
"y": 1971,
"md": "10月25日",
"t": "聯合國第2758號決議：中華民國代表團離開聯合國",
"key": "un-1971",
"s": "退出聯合國",
"b": "1971年10月25日，聯合國大會第26屆會議第1976次全體會議以76票贊成、35票反對、17票棄權通過第2758號決議，決定「恢復中華人民共和國的一切權利」，並把「蔣介石的代表」從聯合國及所屬機構的席位上驅逐出去。投票前，中華民國代表團團長周書楷宣布代表團不再參與任何聯合國會議，率團離場。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "退出聯合國",
"note": "中華民國方面的常見稱法，強調代表團在表決前自行離場。"
},
{
"term": "被逐出聯合國／驅逐蔣介石的代表",
"note": "決議正文用語是把「蔣介石的代表」從席位上「驅逐出去」。"
},
{
"term": "恢復中華人民共和國席位",
"note": "中華人民共和國與決議正文的稱法。"
}
],
"note": "票數依維基百科中文條目，並引用聯合國文件 A/PV.1976；「重要問題」案（A/L.632）以59票反對、55票贊成、15票棄權未通過，分段表決動議以61票反對、51票贊成、16票棄權未通過。決議正文沒有出現「中華民國」與「台灣」。各方對決議的解讀並列：中華人民共和國方面認為它已解決中國代表權與台灣的地位；台灣方面與部分國家認為它只處理聯合國中的代表權，沒有決定台灣的地位。各方官方原始聲明，目前未見可引用來源。",
"why": [
{
"t": "學界常用的背景包括：1960年代起支持北京代表權的國家漸增、美國的政策調整（見1972年尼克森訪中）；各國投票動機各不相同，本站不列單一原因。",
"k": "s"
}
],
"so": [
{
"t": "1971年10月26日蔣中正發表《中華民國退出聯合國告全國同胞書》（維基百科條目轉述）。",
"k": "d"
},
{
"t": "1972年2月尼克森訪中並發表《上海公報》（見相關事件與主線「國際地位」）。",
"k": "d"
}
],
"rel": [
"sf-1951",
"shanghai-comm-1972",
"nixon-visit-1972",
"normalization-1979"
],
"bg": "diplomacy",
"src": [
{
"t": "維基百科中文：聯合國大會第2758號決議",
"u": "https://zh.wikipedia.org/wiki/聯合國大會第2758號決議"
},
{
"t": "聯合國文件 A/PV.1976（該條目引用）",
"u": "https://documents-dds-ny.un.org/doc/UNDOC/GEN/NG9/086/28/PDF/NG908628.pdf"
}
]
},
{
"y": 1950,
"md": "6月25日",
"t": "韓戰爆發",
"key": "world-korea-1950",
"s": "韓戰爆發",
"b": "1950年6月，北韓軍隊越過三八線南下，韓戰爆發；美國隨後出兵，並於6月27日宣布第七艦隊防止對台灣的攻擊。",
"track": "政治外交",
"ctx": "世界",
"conf": "common",
"aliases": [
{
"term": "韓戰／朝鮮戰爭／抗美援朝",
"note": "各方稱法不同：台灣、美國常稱韓戰，中華人民共和國稱抗美援朝。"
}
],
"note": "6月25日是通行的爆發日期（首爾時間）；杜魯門1950年6月27日聲明（杜魯門圖書館）只稱南韓政府軍遭北韓入侵軍攻擊，頁面本身未寫爆發日期。聲明還寫「福爾摩沙未來地位的決定，必須等到太平洋安全恢復」，並寫「我已命令第七艦隊防止對福爾摩沙的任何攻擊」，同時呼籲福爾摩沙的中國政府停止對大陸的一切海空作戰。",
"so": [
{
"t": "1950年6月27日杜魯門聲明：第七艦隊防止對台灣的攻擊（見相關事件）。",
"k": "d"
}
],
"rel": [
"truman-fleet-1950",
"aid-1951",
"world-cold-war-1947"
],
"src": [
{
"t": "杜魯門圖書館：杜魯門1950年6月27日關於韓國局勢的聲明",
"u": "https://www.trumanlibrary.gov/library/public-papers/173/statement-president-situation-korea"
}
]
},
{
"y": 1951,
"md": "9月8日",
"t": "舊金山和約簽署",
"key": "sf-1951",
"s": "舊金山和約",
"b": "1951年9月8日，49個國家（含日本）在舊金山簽署對日和平條約，1952年4月28日生效。第2條規定日本放棄對台灣、澎湖的一切權利、權利名義與要求，條文沒有寫明歸屬哪一方。",
"track": "政治外交",
"ctx": "世界",
"conf": "verified",
"aliases": [
{
"term": "舊金山和約／對日和平條約",
"note": "通稱。"
},
{
"term": "台灣地位未定論",
"note": "部分人從條文「未指明歸屬」推論台灣法律地位未定；另有人主張台灣已透過其他安排歸屬中華民國或中華人民共和國。各方說法並列，不下結論。"
}
],
"note": "依維基百科中文條目：簽署國名單中沒有中華民國，也沒有中華人民共和國（頁面未載明邀請與否的細節）；中華人民共和國在1951年8月15日與9月18日發表聲明，認為該和約非法、無效。條約全文的官方文本，目前未見可引用來源。",
"so": [
{
"t": "1952年4月28日，中華民國與日本在台北簽訂《中日和約》（見相關事件）。",
"k": "d"
}
],
"rel": [
"taipei-treaty-1952",
"un-1971",
"world-korea-1950"
],
"bg": "diplomacy",
"src": [
{
"t": "維基百科中文：對日和平條約（舊金山和約）",
"u": "https://zh.wikipedia.org/wiki/舊金山和約"
}
]
},
{
"y": 1965,
"md": "",
"t": "美國直接介入越戰；台灣成為美軍休假地點",
"key": "world-vietnam-1965",
"s": "越戰與台灣",
"b": "1965年，美國對越南戰爭的介入擴大為直接派遣地面部隊。同一時期，台灣成為駐越美軍的休假地點之一（rest and recreation），酒吧業與西方音樂隨之興起。",
"track": "政治外交",
"ctx": "世界",
"conf": "common",
"note": "休假地點的規模、人次與起迄時間，聲軌頁面（轉引 Taiwan Popular Music Wiki，2015）沒有給具體數字；官方或學術統計目前未見可引用來源。美國直接派遣地面部隊的具體日期（常見寫1965年3月美軍陸戰隊進駐峴港），目前未見可引用來源，因此只寫1965年。",
"rel": [
"aid-end-1965",
"un-1971"
],
"src": [
{
"t": "聲軌 Soundtraces：Taiwan 與美軍休假（Taiwan Popular Music Wiki 轉引）",
"u": "https://soundtraces.tw/?p=100670"
}
]
},
{
"y": 1972,
"md": "6月1日",
"t": "蔣經國出任行政院長",
"key": "cck-premier-1972",
"s": "蔣經國任閣揆",
"b": "1972年6月1日，蔣經國就任行政院長（第9任），任期到1978年5月20日他就任總統為止。",
"track": "政權",
"conf": "common",
"note": "日期依英文維基百科蔣經國條目的信息框（1 June 1972–20 May 1978）；行政院網站只有1978年5月16日總統嚴家淦向行政院長蔣經國辭行的照片說明，可佐證他當時仍任行政院長。行政院或國史館的任命公文原件，目前未見可引用來源。",
"rel": [
"chiang-death-1975",
"cck-president-1978"
],
"who": [
"chiang-ching-kuo"
],
"src": [
{
"t": "English Wikipedia：Chiang Ching-kuo",
"u": "https://en.wikipedia.org/wiki/Chiang_Ching-kuo"
},
{
"t": "行政院：1978年5月16日嚴家淦巡視行政院照片說明",
"u": "https://www.ey.gov.tw/Page/35A2599DF4457B2B/98efc1df-c993-4691-94ae-3d47a1a84ea8"
}
]
},
{
"y": 1972,
"md": "9月29日",
"t": "日本與中華人民共和國建交，與中華民國斷交",
"key": "japan-prc-1972",
"s": "日本建交",
"b": "1972年9月29日，日本與中華人民共和國在北京發表聯合聲明並建立外交關係。聲明中，中方重申「台灣是中華人民共和國領土不可分割的一部分」，日方「充分理解和尊重中國政府的這一立場」，並「堅持遵循波茨坦公告第八條的立場」。日本與中華民國的外交關係同時中止。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "日中聯合聲明（日中共同聲明）",
"note": "日方文件名，中華人民共和國外交部稱「中華人民共和國政府和日本國政府聯合聲明」。"
},
{
"term": "斷交／中止外交關係",
"note": "中華民國方面稱「斷交」；日方與中華人民共和國的文件沒有使用這個詞。"
}
],
"note": "聯合聲明的日期、簽字人（周恩來、田中角榮、姬鵬飛、大平正芳）與第3項、第4項（自9月29日起建立外交關係）依中華人民共和國外交部公開的聲明全文。中華民國方面同日宣布斷交的聲明與外交部說明，目前未見可引用來源。日方措辭「理解和尊重」與「承認」的差別，是研究者常提的解釋，各方官方說明並列，不下結論。",
"so": [
{
"t": "日本與中華民國的《中日和約》依日方說法就此結束（見事件「《中日和約》簽訂」的說明）。",
"k": "d"
}
],
"rel": [
"taipei-treaty-1952",
"un-1971",
"shanghai-comm-1972"
],
"bg": "diplomacy",
"src": [
{
"t": "中華人民共和國外交部：中華人民共和國政府和日本國政府聯合聲明（1972-09-29）",
"u": "https://www.mfa.gov.cn/web/gjhdq_676201/gj_676203/yz_676205/1206_676836/1207_676848/197209/t19720929_269810.shtml"
}
]
},
{
"y": 1973,
"md": "10月",
"t": "第一次石油危機",
"key": "world-oil-1973",
"s": "石油危機",
"b": "1973年贖罪日戰爭期間，阿拉伯產油國對支持以色列的美國等國實施石油禁運，油價先翻倍、後增為四倍；禁運於1974年3月解除。",
"track": "政治外交",
"ctx": "世界",
"conf": "common",
"note": "10月是通行的禁運起始月份（英文維基百科與多數歷史敘述）；美國國務院史家辦公室頁面只寫禁運發生於1973年阿拉伯–以色列戰爭期間、1974年3月解除，沒有寫起始日。油價數字依該頁「先翻倍、再增為四倍」的說法。台灣通膨率於1974年3月升到61.5%、1976年10月降到0.13%（英文維基百科嚴家淦條目）；石油價格與台灣物價的因果程度，各研究說法不同。",
"so": [
{
"t": "台灣1974年經濟成長率1.16%、通膨率47.5%，1976年經濟成長率13.86%（英文維基百科十大建設條目，標示資料來自行政院主計總處）；年度數字相差甚大，與石油危機的關係，各研究說法不同。",
"k": "s"
}
],
"rel": [
"ten-projects-1974"
],
"src": [
{
"t": "美國國務院史家辦公室：Oil Embargo, 1973–1974",
"u": "https://history.state.gov/milestones/1969-1976/oil-embargo"
},
{
"t": "English Wikipedia：Yen Chia-kan（引用台灣通膨與成長率）",
"u": "https://en.wikipedia.org/wiki/Yen_Chia-kan"
},
{
"t": "English Wikipedia：Ten Major Construction Projects",
"u": "https://en.wikipedia.org/wiki/Ten_Major_Construction_Projects"
}
]
},
{
"y": 1974,
"md": "",
"t": "十大建設動工",
"key": "ten-projects-1974",
"s": "十大建設",
"b": "1973年底行政院長蔣經國宣布加速完成「九大建設」，1974年增列核能發電廠，合稱十大建設；計畫自1974年起、預計1979年完工。項目包括交通6項（中山高速公路、鐵路電氣化、北迴鐵路、桃園國際機場、台中港、蘇澳港）、重工業3項（大造船廠、大煉鋼廠、石油化學工業）與能源1項（核能發電廠）。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"note": "投資總額的說法不一：英文維基百科寫「總計超過新臺幣3,000億元」；StockFeel 引用行政院主計總處資料，1975至1979年度的投資需求為1,904億元；另有2,094億元的說法，目前未見可引用來源。三個數字衡量範圍不同，不宜直接比較，請並列看待。宣布時間：StockFeel 寫1973年聖誕節蔣經國在國民大會宣布；英文維基百科只寫1974年起。動工、完工的確切日期與官方公報，目前未見可引用來源。",
"why": [
{
"t": "1973年石油危機與1974年的通膨期間，政府推出大型公共投資（見事件「第一次石油危機」）；兩者之間的因果程度，各研究說法不同。",
"k": "s"
}
],
"so": [
{
"t": "StockFeel 指出，十大建設的投資需求相當於1975年度中央政府總歲出的2.5倍（748億元）。",
"k": "d"
}
],
"rel": [
"world-oil-1973",
"cck-premier-1972",
"hsp-1980"
],
"who": [
"chiang-ching-kuo"
],
"bg": "tenprojects",
"src": [
{
"t": "English Wikipedia：Ten Major Construction Projects",
"u": "https://en.wikipedia.org/wiki/Ten_Major_Construction_Projects"
},
{
"t": "StockFeel：十大建設內容與提出的目的",
"u": "https://www.stockfeel.com.tw/%E5%8D%81%E5%A4%A7%E5%BB%BA%E8%A8%AD-%E5%85%A7%E5%AE%B9-%E6%8F%90%E5%87%BA%E7%9A%84%E7%9B%AE/"
}
]
},
{
"y": 1975,
"md": "4月5日",
"t": "蔣介石逝世，嚴家淦繼任總統",
"key": "chiang-death-1975",
"s": "蔣介石逝世",
"b": "1975年4月5日蔣中正在台北逝世，副總統嚴家淦依憲法繼任總統，4月6日上午宣誓就任；蔣經國接任中國國民黨主席。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "接任黨主席",
"note": "國民黨原設總裁，蔣中正過世後改設主席，由蔣經國擔任（英文維基百科）。"
}
],
"note": "日期依英文維基百科嚴家淦條目（4月5日逝世、4月6日上午11時宣誓）；蔣經國接任黨主席的日期，該條目信息框列自4月5日起，一般敘述寫為4月28日，兩者不同，本站只寫「接任」。嚴家淦任期至1978年5月20日，期間副總統職位空缺（同條目）。官方公報原件，目前未見可引用來源。",
"so": [
{
"t": "嚴家淦任期到1978年5月20日；之後由蔣經國任總統、謝東閔任副總統（見事件「蔣經國就任總統」）。",
"k": "d"
}
],
"rel": [
"cck-premier-1972",
"cck-president-1978"
],
"who": [
"yen-chia-kan",
"chiang-ching-kuo",
"chiang-kai-shek"
],
"src": [
{
"t": "English Wikipedia：Yen Chia-kan",
"u": "https://en.wikipedia.org/wiki/Yen_Chia-kan"
},
{
"t": "English Wikipedia：Chiang Ching-kuo",
"u": "https://en.wikipedia.org/wiki/Chiang_Ching-kuo"
}
]
},
{
"y": 1977,
"md": "11月19日",
"t": "中壢事件",
"key": "chungli-1977",
"s": "中壢事件",
"b": "1977年11月19日，在五項公職人員選舉的投開票日，桃園縣中壢市傳出投開票所作票的指控，上萬名群眾包圍並焚燒中壢警察分局。無黨籍的許信良當選桃園縣長。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "中壢事件",
"note": "台灣常用稱法，以事發地命名。"
},
{
"term": "五項公職人員選舉／五合一選舉",
"note": "同日舉行省議員、縣市長、縣市議員、鄉鎮市長等選舉。"
}
],
"note": "經過各來源並列：《關鍵評論網》記載中壢國小213號投開票所監察員范姜新林校長遭檢舉以沾印泥的手指按選票造成廢票，警察未積極處理；群眾包圍警察分局，8輛警車與60多輛機車受波及，駐軍被民眾攔下後退出；警察「自衛開槍」擊斃中央大學學生江文國與青年張治平（該文說法，本站來源僅此一處）。中央社只寫一萬多名群眾包圍並放火焚燒分局、搗毀警車，未提傷亡。票數：關鍵評論網寫許信良235,946票、歐憲瑜147,851票；中央社用約數22萬與13萬。許信良原擬代表國民黨參選，因黨紀考核被拒發推薦書，10月遭開除黨籍，以黨外身分參選。官方的調查報告與傷亡統計，目前未見可引用來源。",
"so": [
{
"t": "黨外此次囊括桃園縣、台中市、台南市、高雄縣4席縣市長（《關鍵評論網》）。",
"k": "d"
},
{
"t": "1979年許信良因參與橋頭事件遊行，被省政府以「擅離職守」移送監察院，公懲會宣布休職2年（《關鍵評論網》引《報導者》）。",
"k": "d"
}
],
"rel": [
"formosa-1979",
"chiang-death-1975"
],
"who": [
"xu-xinliang"
],
"bg": "chungli",
"src": [
{
"t": "關鍵評論網：中壢事件專題（2017）",
"u": "https://www.thenewslens.com/article/83699"
},
{
"t": "中央社 2017-11-18：中壢事件相關報導",
"u": "https://www.cna.com.tw/news/aipl/201711180074.aspx"
}
]
},
{
"y": 1977,
"md": "",
"t": "鄉土文學論戰（1977–1978）",
"key": "nativist-1977",
"s": "鄉土文學論戰",
"b": "1977年起至1978年初，台灣文壇圍繞「鄉土文學」與現實主義展開論戰。參與者包括王拓、陳映真、尉天驄、葉石濤等鄉土派作家，與批評者；論戰中有人把鄉土文學稱為「工農兵文學」並點名批判作家。",
"track": "政權",
"topic": "文化生活",
"conf": "common",
"aliases": [
{
"term": "鄉土文學論戰",
"note": "通稱；各方對論戰起訖與性質的界定不同。"
}
],
"note": "可引用來源有限：論戰起迄依《回望現實‧凝視人間》選集的出版資訊與《報導者》的報導（1977–1978年）；中央社報導（《關鍵評論網》轉載）寫1977年余光中在《聯合報》發表〈狼來了〉，把鄉土文學稱為「工農兵文學」並點名批判陳映真、尉天驄、王拓等人。引爆點的確切事件、官方（如國軍文藝大會）的反應與當時政治壓力，目前未見可引用來源。評價並列：論戰同時涉及文學主張與政治立場，各方說法不同，本站不下結論。",
"rel": [
"chungli-1977"
],
"src": [
{
"t": "清華大學亞太／文學叢書出版資訊：《回望現實‧凝視人間》",
"u": "https://apcs.site.nthu.edu.tw/p/16-1404-156716.php?Lang=zh-tw"
},
{
"t": "報導者：1970年代台灣鄉土文學與黃春明",
"u": "https://www.twreporter.org/a/1970s-taiwan-nativist-literature-huang-chunming"
},
{
"t": "關鍵評論網：余光中褒揚令報導（2018）",
"u": "https://www.thenewslens.com/article/91945"
}
]
},
{
"y": 1978,
"md": "5月20日",
"t": "蔣經國就任總統",
"key": "cck-president-1978",
"s": "蔣經國任總統",
"b": "1978年3月21日國民大會選出蔣經國為總統、謝東閔為副總統；5月20日蔣經國就職，接替任滿的嚴家淦。",
"track": "政權",
"conf": "common",
"note": "選舉日期依英文維基百科「1978 Republic of China presidential election」條目（3月21日）；蔣經國條目的信息框只寫5月20日。就職典禮的細節，目前未見可引用來源。",
"rel": [
"chiang-death-1975",
"cck-premier-1972",
"announce-1978"
],
"who": [
"chiang-ching-kuo",
"yen-chia-kan"
],
"src": [
{
"t": "English Wikipedia：Chiang Ching-kuo",
"u": "https://en.wikipedia.org/wiki/Chiang_Ching-kuo"
},
{
"t": "行政院：1978年5月16日嚴家淦巡視行政院照片說明",
"u": "https://www.ey.gov.tw/Page/35A2599DF4457B2B/98efc1df-c993-4691-94ae-3d47a1a84ea8"
},
{
"t": "English Wikipedia：1978 Republic of China presidential election",
"u": "https://en.wikipedia.org/wiki/1978_Republic_of_China_presidential_election"
}
]
},
{
"y": 1978,
"md": "12月16日",
"t": "美國宣布與中華人民共和國建交；增額中央民代選舉暫停",
"key": "announce-1978",
"s": "建交宣布",
"b": "1978年12月16日（台北時間），美國宣布將於1979年1月1日與中華人民共和國建立外交關係。蔣經國召集緊急會議，決定暫停增額中央民意代表選舉並提升戰備。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "斷交",
"note": "中華民國方面稱美國與中華民國「斷交」；美方與中華人民共和國的文件稱「建立外交關係」。"
}
],
"note": "時間：中央社記載美國駐華大使安克志12月16日凌晨2時15分到蔣經國官邸通知，並稱美方將於台北時間16日上午9時與中共同步宣布；新頭殼依美國國務院解密檔案寫「美東時間1978年12月15日」，兩者是時區差異。蔣經國的反應：中央社記載他對「7小時前才通知」表示遺憾；聲軌記載他次日（17日）發表聲明抗議，並下令停止進行中的增額中央民代補選。「緊急處分令」的名稱與頒布日期、原訂投票日，目前未見可引用來源。沈昌煥引咎辭職、孫運璿暫代外交部長（中央社）。",
"so": [
{
"t": "增額中央民意代表選舉暫停（中央社、聲軌）。",
"k": "d"
}
],
"rel": [
"normalization-1979",
"tra-1979",
"un-1971",
"shanghai-comm-1972"
],
"who": [
"chiang-ching-kuo"
],
"bg": "diplomacy",
"src": [
{
"t": "中央社 2018-12-15：建交宣布當夜報導",
"u": "https://www.cna.com.tw/news/firstnews/201812155002.aspx"
},
{
"t": "聲軌 Soundtraces：U.S. Establishes Diplomatic Relations with PRC",
"u": "https://soundtraces.tw/?p=101291"
},
{
"t": "新頭殼 2018-12-17：美國國務院檔案報導",
"u": "https://newtalk.tw/news/view/2018-12-17/181585"
}
]
},
{
"y": 1978,
"md": "12月18日",
"t": "中共十一屆三中全會",
"key": "world-reform-1978",
"s": "十一屆三中全會",
"b": "1978年12月18日起，中國共產黨第十一屆中央委員會第三次全體會議在北京舉行，把全黨工作重點轉到社會主義現代化建設，停止使用「以階級鬥爭為綱」的口號。中華人民共和國的官方敘述把它作為「改革開放」的起點。",
"track": "政治外交",
"ctx": "世界",
"conf": "verified",
"aliases": [
{
"term": "改革開放",
"note": "中華人民共和國官方敘述把這次全會作為起點；這是後來的概括用語。"
}
],
"note": "會期起始日與決定依人民網收錄的全會公報；會期結束日，該頁沒有寫。與台灣的關係：全會之後不久，全國人大常委會於1978年12月26日通過、1979年1月1日發表《告台灣同胞書》（見事件）。兩件事之間的因果關係，各研究說法不同，本站不下結論。",
"rel": [
"letter-1979",
"announce-1978"
],
"src": [
{
"t": "人民網：中國共產黨第十一屆三中全會公報相關資料",
"u": "https://cpc.people.com.cn/BIG5/33837/2535013.html"
}
]
},
{
"y": 1979,
"md": "1月1日",
"t": "《告台灣同胞書》發表",
"key": "letter-1979",
"s": "告台灣同胞書",
"b": "1979年1月1日，中華人民共和國全國人大常委會發表《告台灣同胞書》（12月26日通過），宣布人民解放軍當日起停止對金門等島嶼的砲擊，主張兩岸通航通郵、發展貿易與經濟交流，並以和平方式實現統一。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "三通",
"note": "通航、通郵、通商；原文用語是「通航通郵」與「發展貿易」，「三通」是後來的概括稱法。"
}
],
"note": "內容依中國共產黨新聞網收錄的原文：包含「中國政府已經命令人民解放軍從今天起停止對金門等島嶼的炮擊」，並提到「尊重台灣現狀和台灣各界人士的意見」。1958年10月已有《告台灣同胞書》（見相關事件），本事件指1979年這份。台北方面的回應見「三不政策」。",
"rel": [
"ceasefire-1958",
"3noes-1979",
"announce-1978",
"normalization-1979"
],
"bg": "crossstrait",
"src": [
{
"t": "中國共產黨新聞網：全國人大常委會告台灣同胞書（1979）",
"u": "https://cpc.people.com.cn/BIG5/64162/64165/76621/76622/5230336.html"
}
]
},
{
"y": 1979,
"md": "4月",
"t": "「不接觸、不談判、不妥協」三不政策",
"key": "3noes-1979",
"s": "三不政策",
"b": "1979年4月起，蔣經國當局對中華人民共和國的和平統一攻勢，維持「不接觸、不談判、不妥協」的立場，簡稱「三不政策」。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "三不政策（Three Noes）",
"note": "英文維基百科稱 no contact, no negotiation and no compromise。"
}
],
"note": "英文維基百科寫三不政策確立於1979年4月、由蔣經國維持；提出的具體日期與場合，目前未見可引用來源。官方原始談話文本，目前未見可引用來源。",
"so": [
{
"t": "三不政策是後來台北處理兩岸往來的基本立場之一；1987年開放大陸探親（見事件）被視為在此立場上的重大調整，各方對調整程度的看法不同。",
"k": "s"
}
],
"rel": [
"letter-1979",
"visit-1987"
],
"who": [
"chiang-ching-kuo"
],
"bg": "crossstrait",
"src": [
{
"t": "English Wikipedia：Three Noes",
"u": "https://en.wikipedia.org/wiki/Three_Noes"
}
]
},
{
"y": 1979,
"md": "12月10日",
"t": "美麗島事件（高雄事件）",
"key": "formosa-1979",
"s": "美麗島事件",
"b": "1979年12月10日世界人權日，美麗島雜誌社在高雄舉辦紀念大會與火把遊行，鎮暴部隊與群眾發生衝突。之後當局展開大逮捕，12月13日起逮捕黨外人士，並成立「一二一○專案」。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "高雄事件",
"note": "官方當時與部分研究使用，以地點命名。"
},
{
"term": "美麗島事件",
"note": "以美麗島雜誌社命名，台灣社會與多數研究常用。"
}
],
"note": "衝突起因與責任歸屬，各方說法不同；官方原始文件與當事人說法的並列，目前未見可引用來源。逮捕人數：《二十一世紀》雙月刊記載1980年2月1日有50人交保釋放、37人交保候傳、在押61人（53人涉叛亂、8人涉藏匿叛徒），2月12日在押剩53人；總逮捕人數該文沒有記載。",
"so": [
{
"t": "1980年2月20日警備總部宣布黃信介、施明德、姚嘉文、張俊宏、林義雄、林弘宣、呂秀蓮、陳菊8人依叛亂罪以軍法公訴，依《懲治叛亂條例》第二條第一項論告（《二十一世紀》）。",
"k": "d"
}
],
"rel": [
"chungli-1977",
"treason-act-1949",
"formosa-trial-1980",
"lin-home-1980"
],
"who": [
"huang-xinjie",
"shi-mingde",
"lin-yixiong"
],
"bg": "formosa",
"src": [
{
"t": "關鍵評論網：美麗島事件相關報導（2023）",
"u": "https://www.thenewslens.com/article/195899"
},
{
"t": "中央社 2019-12-02：美麗島事件相關報導",
"u": "https://www.cna.com.tw/news/firstnews/201912020023.aspx"
},
{
"t": "陳佳宏：美麗島事件（《二十一世紀》雙月刊第177期，PDF）",
"u": "https://www.cuhk.edu.hk/ics/21c/media/articles/c177-201912002.pdf"
}
]
},
{
"y": 1980,
"md": "2月28日",
"t": "林宅血案",
"key": "lin-home-1980",
"s": "林宅血案",
"b": "1980年2月28日中午，林義雄的住家遭人闖入，他的母親與7歲的雙胞胎女兒林亮均、林亭均遇害，長女林奐均重傷、成為唯一倖存者。當時林義雄因美麗島事件被羈押受審。案件至今未破。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "林義雄滅門血案",
"note": "媒體常用稱法。"
}
],
"note": "細節並列：林義雄的母親，聯合報記為游阿妹（69歲），《關鍵評論網》記為游阿珠；長女林奐均，聯合報記為9歲，《關鍵評論網》記為8歲。公視2025年的報導稱全案至今仍是懸案。促轉會發現的國安局檔案，因《政治檔案條例》規定需至少到2030年才能公開（《關鍵評論網》）；案件的偵辦過程與各方推測，目前未見可引用的官方定論。2025年文化部公告林宅為具轉型正義意涵場址（公視）。",
"rel": [
"formosa-1979",
"formosa-trial-1980"
],
"who": [
"lin-yixiong"
],
"bg": "formosa",
"src": [
{
"t": "公視新聞網：林宅血案相關報導（2025）",
"u": "https://news.pts.org.tw/article/768497"
},
{
"t": "聯合新聞網：林宅血案現場申請轉型正義場址",
"u": "https://udn.com/news/story/6656/8979443"
},
{
"t": "關鍵評論網：林宅血案相關報導",
"u": "https://www.thenewslens.com/article/130182"
}
]
},
{
"y": 1980,
"md": "3月18日",
"t": "美麗島軍法大審",
"key": "formosa-trial-1980",
"s": "美麗島大審",
"b": "1980年3月18日至28日，警備總部軍事法庭在台北公開審理美麗島事件被告，共九天；被告依《懲治叛亂條例》被起訴。審判結果中，施明德被判無期徒刑、黃信介被判14年（英文維基百科）。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "軍法大審",
"note": "台灣常用稱法。"
}
],
"note": "開庭期間依《二十一世紀》雙月刊：3月10日警總宣布、3月18日上午9時於台北第一法庭公開審判，3月18日至28日共九天，旁聽記者60人（台灣40、國際20）。各被告判決：中央社記載陳菊被判12年；英文維基百科記載施明德「第二次無期徒刑」、黃信介14年。完整判決名單，目前未見可引用來源。後來陳菊等人的有罪判決被促進轉型正義委員會撤銷（中央社）。",
"rel": [
"formosa-1979",
"lin-home-1980",
"treason-act-1949"
],
"who": [
"huang-xinjie",
"shi-mingde",
"lin-yixiong"
],
"bg": "formosa",
"src": [
{
"t": "陳佳宏：美麗島事件（《二十一世紀》雙月刊第177期，PDF）",
"u": "https://www.cuhk.edu.hk/ics/21c/media/articles/c177-201912002.pdf"
},
{
"t": "中央社 2019-12-02：陳菊判決相關報導",
"u": "https://www.cna.com.tw/news/firstnews/201912020023.aspx"
},
{
"t": "English Wikipedia：Shih Ming-teh",
"u": "https://en.wikipedia.org/wiki/Shih_Ming-teh"
},
{
"t": "English Wikipedia：Huang Hsin-chieh",
"u": "https://en.wikipedia.org/wiki/Huang_Hsin-chieh"
}
]
},
{
"y": 1980,
"md": "12月15日",
"t": "新竹科學工業園區成立",
"key": "hsp-1980",
"s": "新竹科學園區",
"b": "1980年12月15日，新竹科學工業園區建設完成，設立隸屬行政院國家科學委員會的科學工業園區管理局。園區自1979年1月動工。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"note": "日期依英文維基百科與《風傳媒》評論（1980年12月15日成立、直屬國科會）。構想的提出年份不同：《風傳媒》寫1975年國科會主委徐賢修訪日後向行政院長蔣經國提出，英文維基百科寫1976年；設置的法源《科學工業園區設置管理條例》的日期，目前未見可引用來源。英文維基百科記載蔣經國原先傾向設在龍潭，徐賢修主張設於新竹以鄰近清華與交大，最後採納新竹；何宜慈負責籌設並任首任園區主任。",
"rel": [
"ten-projects-1974",
"kepz-1966",
"ntd-up-1987"
],
"who": [
"chiang-ching-kuo"
],
"src": [
{
"t": "English Wikipedia：Hsinchu Science Park",
"u": "https://en.wikipedia.org/wiki/Hsinchu_Science_Park"
},
{
"t": "風傳媒：竹科成立相關評論（江仁台，2020）",
"u": "https://www.storm.mg/article/3322955"
}
]
},
{
"y": 1981,
"md": "7月3日",
"t": "陳文成事件",
"key": "chen-wencheng-1981",
"s": "陳文成事件",
"b": "1981年7月2日，旅美學者陳文成被警備總部約談；7月3日他的遺體在台灣大學校園內被發現。官方先稱畏罪自殺，後改稱意外死亡。2020年促進轉型正義委員會報告認為他殺的可能高於自殺或意外，並稱警總「涉有嫌疑」。",
"track": "政權",
"conf": "disputed",
"aliases": [
{
"term": "陳文成命案",
"note": "媒體常用稱法。"
}
],
"note": "死因並列：官方當時的說法為自殺、後改為意外（《關鍵評論網》）；法醫認定為高處墜落致死，但難以認定自行跳下或被推下；美方 DeGroot、Wecht 的重新鑑定指向他殺（陳儀深說法，《關鍵評論網》轉述）；促轉會2020年5月4日的調查報告提出：陳及親友事前事後皆受情治機關嚴密監控、無法證明警總已讓陳脫離其支配；法醫判斷傷痕與第一現場不符、他殺可能高於自殺或意外；警總阻礙偵辦；結論是警總「涉有嫌疑」，但尚無直接證據證明兇手（公視、Taipei Times）。國安局部分檔案要到2031年才能閱覽（《關鍵評論網》）。事件發生前，陳文成曾捐款給《美麗島》雜誌（《關鍵評論網》）。",
"so": [
{
"t": "國史館2019年12月出版《陳文成案史料彙編》，收錄偵訊筆錄（《關鍵評論網》）。",
"k": "d"
}
],
"rel": [
"formosa-trial-1980",
"treason-act-1949"
],
"who": [
"chen-wencheng"
],
"bg": "terror-cases",
"src": [
{
"t": "公視新聞網 2020-05-04：促轉會陳文成事件調查報告",
"u": "https://news.pts.org.tw/article/477264"
},
{
"t": "Taipei Times 2020-05-05：陳文成案報告",
"u": "https://www.taipeitimes.com/News/taiwan/archives/2020/05/05/2003735851"
},
{
"t": "關鍵評論網：陳文成案史料彙編報導（2019）",
"u": "https://www.thenewslens.com/article/129409"
}
]
},
{
"y": 1981,
"md": "9月30日",
"t": "葉劍英談話（葉九條）",
"key": "ye9-1981",
"s": "葉九條",
"b": "1981年9月30日，中華人民共和國全國人大常委會委員長葉劍英就台灣回歸祖國、實現和平統一，發表九點方針政策的談話。要點包括：與國民黨對等談判、通郵通商通航探親、統一後台灣為特別行政區並可保留軍隊、現行社會經濟制度與生活方式不變、台灣各界代表可擔任全國性政治機構領導職務。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "葉九條",
"note": "台灣與媒體的簡稱。"
},
{
"term": "關於台灣回歸祖國，實現和平統一的方針政策",
"note": "談話的正式標題（中央社、日本外務省譯本標題）。"
}
],
"note": "日期依中央社與日本外務省《外交青書》譯本（9月30日、北京、國慶前夕）；英文維基百科寫10月1日對新華社記者提出，與前兩者不同，本站採9月30日。九點摘要依中央社與外務省譯文。英文維基百科把它描述為與美國售台戰機爭議相關的和平攻勢，這是該條目的說法；各方（北京、台北、華盛頓）的官方說明並列，不下結論。台北當局當時的官方回應，目前未見可引用來源。",
"rel": [
"letter-1979",
"3noes-1979",
"aug17-comm-1982"
],
"bg": "crossstrait",
"src": [
{
"t": "中央社 2019-01-02：葉九條與兩岸",
"u": "https://www.cna.com.tw/news/firstnews/201901025006.aspx"
},
{
"t": "日本外務省《外交青書》1982：葉剣英談話（日文譯本）",
"u": "https://www.mofa.go.jp/mofaj/gaiko/bluebook/1982/s57-shiryou-510.htm"
}
]
},
{
"y": 1986,
"md": "2月22–25日",
"t": "菲律賓人民力量革命",
"key": "world-edsa-1986",
"s": "菲律賓EDSA革命",
"b": "1986年2月22日至25日，馬尼拉的民眾與軍方人士在EDSA公路聚集，抗議總統大選舞弊；馬可仕流亡夏威夷，科拉松·阿基諾就任總統。",
"track": "政治外交",
"ctx": "世界",
"conf": "common",
"note": "大選於1986年2月7日舉行：選舉委員會公布馬可仕10,807,197票、阿基諾9,291,761票；民間監督團體 NAMFREL 依70%投開票所統計為阿基諾7,835,070票、馬可仕7,053,068票（英文維基百科）。同一時期東亞其他政治體制的變化、與台灣1986至1987年事件的關係，各研究說法不同；本站只收錄這一則單一事件，不下通論。",
"rel": [
"dpp-1986",
"martial-end-1987"
],
"src": [
{
"t": "English Wikipedia：People Power Revolution",
"u": "https://en.wikipedia.org/wiki/People_Power_Revolution"
}
]
},
{
"y": 1986,
"md": "9月28日",
"t": "民主進步黨成立",
"key": "dpp-1986",
"s": "民進黨成立",
"b": "1986年9月28日，在台北圓山大飯店舉行的「1986黨外選舉後援會」推薦大會上，黨外人士宣布組成民主進步黨。當時台灣仍在戒嚴中，政府沒有取締。11月10日第一次全國黨員代表大會選出江鵬堅為首任黨主席。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "組黨",
"note": "戒嚴時期禁止新政黨，當時用語為「組黨」；事後稱「創黨」。"
}
],
"note": "創黨人數並列：《新頭殼》寫黨名以132人掌聲通過、後又加3人，共135人；中央社寫132位與會人士簽名組建；中央社另記訪談稱「百位黨外人士」。政府反應：蔣經國「不承認、不取締」的立場（《新頭殼》）；游錫堃說法是國民黨直到宣布後才得知，面臨「抓人政治代價太大、不抓等於承認」的兩難（中央社專訪）。蔣經國1986年10月7日接受《華盛頓郵報》訪問，表示將制定相關國家安全法令後解除戒嚴、開放組黨；《新頭殼》記載11月8日在國民黨中常會說「時代在變、環境在變，潮流也在變」；遠見雜誌的措辭與日期與此不同（「世事在變、局勢在變、潮流也在變」），各來源並列。官方公報原件，目前未見可引用來源。",
"so": [
{
"t": "江鵬堅1986年11月10日以13票對12票險勝費希平，當選首任黨主席（《新頭殼》）。",
"k": "d"
},
{
"t": "1987年7月15日解除戒嚴（見相關事件）。",
"k": "d"
}
],
"rel": [
"formosa-1979",
"martial-end-1987",
"e228-peace-1987"
],
"who": [
"huang-xinjie"
],
"bg": "dpp86",
"src": [
{
"t": "新頭殼 2019-01-19：民進黨928在圓山組黨",
"u": "https://newtalk.tw/news/view/2019-01-19/196492"
},
{
"t": "中央社 2021-08-28：游錫堃談民進黨創黨十日",
"u": "https://www.cna.com.tw/news/firstnews/202108280043.aspx"
},
{
"t": "中央社 2017-07-14：解嚴三十年年表",
"u": "https://www.cna.com.tw/news/aipl/201707145011.aspx"
}
]
},
{
"y": 1987,
"md": "2月",
"t": "二二八和平日促進會成立",
"key": "e228-peace-1987",
"s": "二二八和平日促進會",
"b": "1987年2月，台灣內外各界人士成立二二八和平日促進會，發表《228和平日宣言》，要求政府公布真相、回復受難者名譽、定2月28日為和平日，並在各地舉辦演講與遊行。這是二二八事件滿40年後，台灣第一次全面性的紀念活動。",
"track": "政權",
"topic": "社會族群",
"conf": "common",
"aliases": [
{
"term": "二二八和平日運動",
"note": "當時與後來的運動名稱並用；1989年另有多團體共同發起「二二八公義和平運動」。"
}
],
"note": "活動範圍依公視報導：1987年2月14日起至3月共舉行20場遊行與演講，稱發起人包括《自由時代》創辦人鄭南榕。二二八事件紀念基金會的展板列出促進會人員與後續：1988年長老教會與民進黨加入、1989年1月多團體發起「228公義和平運動」、1989年8月在嘉義設立台灣第一座二二八紀念碑。促進會成員的正式職務，目前未見可引用來源。",
"so": [
{
"t": "1989年8月嘉義設立台灣第一座二二八紀念碑（二二八事件紀念基金會展板）。",
"k": "d"
}
],
"rel": [
"martial-end-1987",
"dpp-1986"
],
"bg": "e228",
"src": [
{
"t": "二二八事件紀念基金會：線上展覽（英文）",
"u": "https://www.228.org.tw/onlineexhibitdetailus/12"
},
{
"t": "公視新聞網：228和平日運動30年（2017）",
"u": "https://news.pts.org.tw/article/349274"
}
]
},
{
"y": 1987,
"md": "7月15日",
"t": "解除戒嚴",
"key": "martial-end-1987",
"s": "解除戒嚴",
"b": "1987年7月14日，蔣經國以總統令宣布，台灣自7月15日零時起解除戒嚴。戒嚴令實施約38年又56天。解嚴同時施行新制定的《動員戡亂時期國家安全法》（1992年更名為《國家安全法》），動員戡亂時期與臨時條款也沒有結束。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "解嚴",
"note": "通稱。"
},
{
"term": "解除戒嚴（宣布／生效）",
"note": "7月14日宣布，7月15日零時生效。"
}
],
"note": "日期依關鍵評論網、新頭殼與中央社年表（7月14日宣布、15日零時生效）；中央社年表另列「1987.7.7 立法院長倪文亞宣告通過解嚴案」，與7月14日宣布的關係，來源沒有說明。「38年56天」依 Taipei Times 與新頭殼的計算，起算日為1949年5月19日宣布或5月20日生效，各來源不同。《動員戡亂時期國家安全法》是為解嚴新制定的法律，條文與施行日期目前未見可引用來源；關鍵評論網記載，解嚴前後以修法與立法落實相關限制，涉及人民團體、集會遊行與選舉罷免等法律，其中《集會遊行法》於1988年1月11日立法院通過。動員戡亂時期於1991年終止、臨時條款廢止（見相關事件）。",
"why": [
{
"t": "解嚴前，黨外人士組成民主進步黨、蔣經國公開表示將解除戒嚴與開放組黨（見事件「民主進步黨成立」）；各研究對各因素的相對重要性說法不同。",
"k": "s"
}
],
"so": [
{
"t": "1988年1月1日開放報禁、新報紙登記；1988年1月13日蔣經國逝世，李登輝接任總統（中央社年表）；兩者屬下一批「民主化」。",
"k": "d"
}
],
"rel": [
"martial-1949",
"dpp-1986",
"e228-peace-1987",
"visit-1987",
"temp-provisions-1948"
],
"who": [
"chiang-ching-kuo"
],
"bg": "martial",
"src": [
{
"t": "關鍵評論網：解嚴三十專題（翁稷安，2017）",
"u": "https://www.thenewslens.com/feature/1987dml/73009"
},
{
"t": "中央社 2017-07-14：解嚴年表",
"u": "https://www.cna.com.tw/news/aipl/201707145011.aspx"
},
{
"t": "新頭殼 2017-07-16：解嚴30年",
"u": "https://newtalk.tw/news/view/2017-07-16/92413"
},
{
"t": "Taipei Times：Taiwan in Time: May 16 to May 22",
"u": "https://www.taipeitimes.com/News/feat/archives/2016/05/15/2003646284"
}
]
},
{
"y": 1987,
"md": "",
"t": "新臺幣對美元大幅升值（1985–1987）",
"key": "ntd-up-1987",
"s": "新臺幣升值",
"b": "新臺幣對美元的年平均匯率，1985年為39.85元、1986年為37.82元、1987年為31.77元；1987年12月月平均為28.91元。以年平均計，1985至1987年新臺幣約升值25%（本站依中央銀行數字計算）。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "verified",
"note": "數字依中央銀行「新臺幣對美元銀行間成交之收盤匯率」年資料與1987年月資料（1987年1月月平均35.244元、6月31.156元、12月28.912元）。頁面沒有提供年底收盤價、外匯存底與貿易順差；升值的原因（貿易順差、美方壓力等）與影響的官方說明，目前未見可引用來源。",
"rel": [
"hsp-1980",
"kepz-1966",
"ntd-1949"
],
"src": [
{
"t": "中央銀行：新臺幣對美元銀行間成交之收盤匯率（年資料）",
"u": "https://www.cbc.gov.tw/tw/cp-2151-27029-FFC31-1.html"
},
{
"t": "中央銀行：新臺幣對美元匯率（1987月資料）",
"u": "https://www.cbc.gov.tw/tw/cp-863-32063-1517E-1.html"
}
]
},
{
"y": 1987,
"md": "11月2日",
"t": "開放大陸探親",
"key": "visit-1987",
"s": "開放探親",
"b": "1987年11月2日，台灣開放民眾赴大陸探親。遠見雜誌1987年11月號記載，內政部長吳伯雄在10月15日正式宣布開放。這是兩岸分隔近四十年後，民間往來的重大轉折。",
"track": "政治外交",
"conf": "common",
"note": "日期並列：中央社年表與 Taipei Times 社論寫11月2日開放；遠見雜誌寫10月15日內政部長宣布，兩者的關係來源沒有解釋，本站把10月15日視為宣布、11月2日視為開放。紅十字會登記、探親條件與首批人數，目前未見可引用來源。背景：聲軌（公視英文稿）記載退伍老兵組成探親團體爭取返鄉，並獲黨外人士與人文學者支持，發起近一年的運動。",
"why": [
{
"t": "聲軌（公視英文稿）記載退伍老兵發起近一年的返鄉運動，並獲黨外人士與學者支持。",
"k": "d"
}
],
"rel": [
"3noes-1979",
"martial-end-1987"
],
"bg": "crossstrait",
"src": [
{
"t": "聲軌 Soundtraces：Taiwan Opens Family Visits to Mainland China",
"u": "https://soundtraces.tw/?p=103124"
},
{
"t": "遠見雜誌 1987-11：我的家在海的那一邊？",
"u": "https://www.gvm.com.tw/article/610"
},
{
"t": "Taipei Times 2017-11-04：社論",
"u": "https://www.taipeitimes.com/News/editorials/archives/2017/11/04/2003681609"
},
{
"t": "中央社 2017-07-14：解嚴年表",
"u": "https://www.cna.com.tw/news/aipl/201707145011.aspx"
}
]
},
{
"y": 1988,
"md": "1月1日",
"t": "解除報禁",
"key": "press-1988",
"s": "解除報禁",
"b": "1988年1月1日，台灣解除報禁。Taipei Times 專欄記載，1952年以來報紙數目長期維持31家，解除後到1988年底增為126家，報紙也可以增加版數。",
"track": "政治外交",
"topic": "文化生活",
"conf": "common",
"note": "日期與家數依 Taipei Times「Taiwan in Time」專欄（自由時報轉載）；政大學術集成收錄的林麗雲論文摘要只寫「1988年開放報禁」，沒有給日期。舊制曾限制報紙登記與印刷，但解除了哪些限制（登記、印刷地點、張數），目前未見可引用來源。",
"so": [
{
"t": "報紙由31家增為126家（1988年底），報紙可增加版數。",
"k": "d"
}
],
"rel": [
"martial-end-1987",
"cck-death-1988"
],
"src": [
{
"t": "Taipei Times「Taiwan in Time」：Unleashing the media free-for-all（自由時報轉載）",
"u": "https://news.ltn.com.tw/news/focus/breakingnews/3023472"
},
{
"t": "林麗雲：變遷與挑戰：解禁後的台灣報業（《新聞學研究》95期，政大學術集成）",
"u": "https://ah.lib.nccu.edu.tw/handle/140.119/101627"
}
]
},
{
"y": 1988,
"md": "1月13日",
"t": "蔣經國逝世，李登輝繼任總統",
"key": "cck-death-1988",
"s": "蔣逝世李繼任",
"b": "1988年1月13日，總統蔣經國病逝，副總統李登輝依憲法繼任總統，同時成為國民黨代理主席。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "繼任總統／代理總統",
"note": "中央社寫「以副總統身分繼任總統」；Soundtraces（聲軌）英文稿寫李登輝在死訊宣布約四小時後宣布自己為 acting president。兩種用語的差別，目前未見可引用來源說明。"
}
],
"note": "逝世日期兩個來源一致。逝世時間、李登輝的宣誓時間與地點、代理黨主席的日期，兩個來源都沒寫；李登輝線事件記載他1月27日出任國民黨代理主席。總統府或國史館的原始紀錄，目前未見可引用來源。",
"rel": [
"cck-president-1978",
"martial-end-1987",
"press-1988"
],
"who": [
"chiang-ching-kuo",
"lee-teng-hui"
],
"bg": "succession",
"src": [
{
"t": "中央社 2020-07-30：李登輝執政裂解國民黨 一黨獨大走向兩黨競爭",
"u": "https://www.cna.com.tw/news/aipl/202007300329.aspx"
},
{
"t": "Soundtraces：Chiang Ching-kuo Dies",
"u": "https://soundtraces.tw/?p=102814"
}
]
},
{
"y": 1988,
"md": "5月20日",
"t": "五二〇農民運動",
"key": "farmers-1988",
"s": "520農運",
"b": "1988年5月20日，雲林等農業縣市的農民北上到台北抗議，在立法院一帶與警察發生流血衝突，是解嚴後首次激烈的警民衝突。農民提出七項訴求，包括全面辦理農保、降低肥料售價、成立農業部。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"aliases": [
{
"term": "520事件",
"note": "新聞透鏡寫這場運動「又稱520事件」。"
}
],
"note": "起因有兩種說法並列：新聞透鏡寫起因是1988年政府決定擴大開放外國農產品進口；中央社引述陳吉仲，認為有四大引爆因素，包括1984年的中美米食協定。人數與被捕：中央社引相關文獻寫總指揮林國華、副總指揮蕭裕珍，帶領5000餘人北上；引戴振耀《鹽水大飯店》寫130多人被捕、96人移送法辦。傷亡人數、主辦團體的名稱，目前未見可引用來源。",
"why": [
{
"t": "新聞透鏡：政府決定擴大開放外國農產品進口。",
"k": "d"
},
{
"t": "中央社引陳吉仲：另有四大引爆因素，含1984年中美米食協定。",
"k": "s"
}
],
"so": [
{
"t": "七項訴求：全面辦理農保及農眷保、降低肥料售價、增加稻米保證收購價格與面積、廢止農會總幹事遴選、改革農田水利會、成立農業部、農地自由使用。",
"k": "d"
},
{
"t": "陳吉仲（新聞透鏡引述）：七項訴求中，政府大致做到肥料自由買賣、農田水利會改制、成立農業部三項。",
"k": "s"
}
],
"rel": [
"martial-end-1987",
"cheng-nanrong-1989"
],
"bg": "movements",
"src": [
{
"t": "中央社 2018-05-18：520農運30週年",
"u": "https://www.cna.com.tw/news/firstnews/201805180033.aspx"
},
{
"t": "新聞透鏡：台灣史上最大520農運三十年後，7大訴求落實了幾項？",
"u": "https://www.thenewslens.com/article/96071"
}
]
},
{
"y": 1989,
"md": "4月7日",
"t": "鄭南榕自焚",
"key": "cheng-nanrong-1989",
"s": "鄭南榕自焚",
"b": "1989年4月7日，《自由時代週刊》創辦人鄭南榕在警方攻堅雜誌社時自焚身亡。他因該刊1988年12月刊登《台灣新憲法草案》，被以涉嫌叛亂傳喚，自1989年1月起在雜誌社內自囚，主張「百分之百的言論自由」。",
"track": "政治外交",
"topic": "社會族群",
"conf": "verified",
"note": "自囚的起日：風傳媒寫1989年1月26日；風傳媒沒有寫「71天」這個說法。刊登的是《台灣新憲法草案》，風傳媒等來源只寫《台灣新憲法草案》，沒有提到許世楷或「台灣共和國憲法草案」這個名稱，目前未見可引用來源。4月7日後來被多個縣市訂為「言論自由日」：風傳媒（2015）寫台中市長林佳龍宣布，並稱當時已有7縣市；新聞透鏡寫台北市長柯文哲在2015年4月10日宣布，蔡英文2016年承諾執政後研議辦理。訂定的中央法規依據，目前未見可引用來源。",
"rel": [
"dpp-1986",
"martial-end-1987",
"farmers-1988"
],
"who": [
"cheng-nan-jung"
],
"bg": "movements",
"src": [
{
"t": "風傳媒 2015-04-07：鄭南榕自焚專題",
"u": "https://www.storm.mg/article/45738"
},
{
"t": "Newtalk 2018-04-08：鄭南榕自焚",
"u": "https://newtalk.tw/news/view/2018-04-08/120112"
},
{
"t": "公視新聞 2025-04-07：鄭南榕基金會",
"u": "https://news.pts.org.tw/article/745818"
},
{
"t": "新聞透鏡：蔡英文出席鄭南榕追思會",
"u": "https://www.thenewslens.com/article/39643"
}
]
},
{
"y": 1989,
"md": "6月3–4日",
"t": "六四天安門事件",
"key": "tiananmen-1989",
"s": "六四",
"b": "1989年4月15日胡耀邦逝世後，北京的學生與民眾在天安門廣場聚集，運動持續到6月初；6月3日夜到4日凌晨，軍隊進入北京市區並清場。死亡人數各方估計差距很大。",
"track": "政治外交",
"ctx": "中國大陸",
"conf": "disputed",
"note": "死亡人數並列（英文維基百科資訊框）：中共官方統計241人；獨立估計300至2,700人；近年學術研究700至2,600人。各數字的原始出處與紅十字會的數字，目前未見可引用來源。此處只有英文維基百科一個二手來源。",
"rel": [
"world-cold-war-1947"
],
"src": [
{
"t": "English Wikipedia：1989 Tiananmen Square protests and massacre",
"u": "https://en.wikipedia.org/wiki/1989_Tiananmen_Square_protests_and_massacre"
}
]
},
{
"y": 1990,
"md": "3月16–22日",
"t": "野百合學運",
"key": "wildlily-1990",
"s": "野百合學運",
"b": "1990年3月16日起，大專院校學生在中正紀念堂廣場靜坐，提出解散國民大會、廢除動員戡亂時期臨時條款、召開國是會議、提出政經改革時間表四項訴求；學生於3月22日撤離。",
"track": "政治外交",
"topic": "社會族群",
"conf": "common",
"note": "與總統的會面有兩種說法並列：遠見1990年4月號（傅崑成）寫3月21日晚間53位校際代表與李登輝會面約一小時，學生以22比1決定22日撤離；中央社與風傳媒2020年的回顧寫學生到總統府，與學生握手並回應的是秘書長李元簇，沒有寫李登輝本人說話。靜坐人數：風傳媒寫最多約6000名學生，遠見寫靜坐約150小時。國是會議後來的召開日期與內容，目前未見可引用來源。",
"so": [
{
"t": "解散國民大會與廢除臨時條款兩項訴求，之後見釋字第261號與1991年終止動員戡亂時期；兩者是先後關係，各方對學運影響程度的評價不同，這裡不下結論。",
"k": "d"
}
],
"rel": [
"i261-1990",
"temp-end-1991",
"lee-elect-1990"
],
"who": [
"lee-teng-hui"
],
"bg": "wildlily",
"src": [
{
"t": "Taipei Times：Taiwan in Time（March 14 to March 20）",
"u": "https://www.taipeitimes.com/News/feat/archives/2016/03/13/2003641448"
},
{
"t": "遠見 1990-04：傅崑成的野百合學運觀察",
"u": "https://www.gvm.com.tw/article/1700"
},
{
"t": "風傳媒 2020-03-23：野百合學運「改變所有參與者的人生」",
"u": "https://www.storm.mg/article/2432180"
},
{
"t": "中央社 2026-05-20：范雲回望野百合學運",
"u": "https://www.cna.com.tw/news/aipl/202605200117.aspx"
}
]
},
{
"y": 1990,
"md": "5月20日",
"t": "李登輝當選並就任第八任總統",
"key": "lee-elect-1990",
"s": "李登輝就任",
"b": "1990年3月21日，第一屆國民大會選舉李登輝為第八任總統；5月20日他就任。",
"track": "政權",
"conf": "common",
"note": "中央社2020年的報導把「獲第一屆國民大會選舉為第8屆總統」寫在1990年5月20日；遠見1990年4月號文章寫3月21日是選舉日。此處把選舉與就任分開寫；總統府的就職紀錄原件，目前未見可引用來源。",
"rel": [
"cck-death-1988",
"wildlily-1990",
"direct-1996"
],
"who": [
"lee-teng-hui"
],
"src": [
{
"t": "中央社 2020-07-30：李登輝執政裂解國民黨",
"u": "https://www.cna.com.tw/news/aipl/202007300329.aspx"
},
{
"t": "遠見 1990-04：傅崑成的野百合學運觀察",
"u": "https://www.gvm.com.tw/article/1700"
}
]
},
{
"y": 1990,
"md": "6月21日",
"t": "釋字第261號：資深中央民代限期退職",
"key": "i261-1990",
"s": "釋字261號",
"b": "1990年6月21日，司法院大法官作成釋字第261號解釋：第一屆中央民意代表中未定期改選者，應於1991年12月31日以前終止行使職權；事實上不能行使職權或經常不行使職權者，應查明解職。中央政府並應適時辦理次屆選舉，含全國不分區名額。",
"track": "政治外交",
"conf": "verified",
"aliases": [
{
"term": "萬年國會",
"note": "俗稱，指1948年選出後長期未全面改選的第一屆中央民意代表。"
}
],
"note": "日期、期限與要旨依司法院大法官網站的解釋文與理由書；聲請書於1990年4月提出，解釋附有李志鵬大法官的不同意見書。1991年12月31日當天的實際退職情形，目前未見可引用來源。",
"rel": [
"wildlily-1990",
"temp-end-1991",
"leg-1992"
],
"src": [
{
"t": "司法院：釋字第261號（中英對照）",
"u": "https://cons.judicial.gov.tw/download/download.aspx?id=395075"
},
{
"t": "司法院：Interpretation No. 261（英文）",
"u": "https://www2.judicial.gov.tw/FYDownload/en/p03_01.asp?expno=261"
}
]
},
{
"y": 1991,
"md": "4月30日",
"t": "宣告終止動員戡亂時期，廢止臨時條款",
"key": "temp-end-1991",
"s": "終止動員戡亂",
"b": "1991年4月30日，李登輝宣布廢止《動員戡亂時期臨時條款》；5月1日條款廢止、動員戡亂時期終止，同時公布《中華民國憲法增修條文》。5月17日立法院通過廢止《懲治叛亂條例》，6月3日廢止《檢肅匪諜條例》。",
"track": "政治外交",
"conf": "common",
"note": "日期並列：Taipei Times 寫4月30日記者會宣布與總統令簽署（並引述李登輝說不再以武力統一中國），條款維持到5月1日；中央社寫5月1日條款廢止、動員戡亂時期終止。李登輝線事件記載4月22日第一屆國民大會臨時會通過增修條文，但來源只寫「4月」，沒有日期。條款1948年5月10日公布。總統令原文，目前未見可引用來源。",
"so": [
{
"t": "中央社（「終止動員戡亂時期」一篇）：5月17日立法院通過廢止《懲治叛亂條例》，6月3日廢止《檢肅匪諜條例》。",
"k": "d"
}
],
"rel": [
"temp-provisions-1948",
"martial-1949",
"treason-act-1949",
"i261-1990",
"martial-end-1987"
],
"bg": "martial",
"src": [
{
"t": "Taipei Times：Taiwan in Time（April 26 to May 2）",
"u": "https://www.taipeitimes.com/News/feat/archives/2021/04/25/2003756299"
},
{
"t": "中央社 2021-05-01：動員戡亂時期臨時條款廢止",
"u": "https://www.cna.com.tw/news/aipl/202105010035.aspx"
},
{
"t": "中央社 2021-05-01：終止動員戡亂時期",
"u": "https://www.cna.com.tw/news/firstnews/202105010032.aspx"
}
]
},
{
"y": 1991,
"md": "",
"t": "兩岸交流機構成立（1990–1991）",
"key": "cross-orgs-1991",
"s": "兩岸機構成立",
"b": "1991年，兩岸各自成立處理交流事務的機構：台灣方面，大陸委員會於1月28日改為正式部會，海峽交流基金會（海基會）於2月19日成立；大陸方面，海峽兩岸關係協會（海協會）於12月16日成立。國家統一委員會則在1990年10月成立，《國家統一綱領》於1991年通過。",
"track": "政治外交",
"conf": "common",
"note": "陸委會、海基會、海協會的日期依遠見2015年文章。國統會：英文維基百科寫1990年10月7日成立；國統綱領的通過日有兩種寫法並列：英文維基百科寫行政院會議1991年2月23日通過，民進黨網頁寫國統會1991年2月23日通過、行政院3月14日通過，兩者可能指不同機關，來源沒有解釋。海基會成立日：李登輝線事件寫1990年11月21日，與遠見的1991年2月19日不同，可能指不同階段（例如籌設與正式成立），目前未見可引用來源釐清。海基會為半官方財團法人，海協會為社會團體法人（遠見）。",
"rel": [
"visit-1987",
"koo-wang-1993",
"hk-talks-1992",
"temp-end-1991"
],
"bg": "crossstrait",
"src": [
{
"t": "遠見 2015-12-18：曙光乍現 兩國論後急轉直下",
"u": "https://www.gvm.com.tw/article/21293"
},
{
"t": "English Wikipedia：National Unification Council",
"u": "https://en.wikipedia.org/wiki/National_Unification_Council"
},
{
"t": "English Wikipedia：Guidelines for National Unification",
"u": "https://en.wikipedia.org/wiki/Guidelines_for_National_Unification"
},
{
"t": "民進黨網站：國統綱領",
"u": "https://www.dpp.org.tw/news/contents/3641"
}
]
},
{
"y": 1992,
"md": "11月7日",
"t": "金門、馬祖解除戰地政務",
"key": "kinmen-1992",
"s": "金馬解除戰地政務",
"b": "1992年11月7日，金門與馬祖解除戰地政務。1994年4月28日修正通過的《金馬安輔條例》廢除金馬出入境管制，台灣本島人民才可自由出入。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "解除戒嚴／終止戰地政務",
"note": "公視新聞寫「解除戒嚴和終止戰地政務」，新聞透鏡有的寫解除戰地政務、有的寫解除戒嚴，用語並列。"
}
],
"note": "起點兩說不同：新聞透鏡一篇寫1949年戒嚴、1956年金門進入戰地政務體制；一般說法把戰地政務與戒嚴合稱，此處不下結論。金門戶籍約14萬人、實際居住約5萬人（新聞透鏡專題引述）。同期 Taipei Times 專欄另寫5月1日金馬宣布臨時戒嚴、同年11月解除，兩個說法的關係，目前未見可引用來源。",
"rel": [
"martial-end-1987",
"temp-end-1991"
],
"bg": "kinmen",
"src": [
{
"t": "新聞透鏡：金門解除戰地政務30週年",
"u": "https://www.thenewslens.com/article/176046"
},
{
"t": "公視新聞 2025-10-23：大膽島",
"u": "https://news.pts.org.tw/article/777882"
},
{
"t": "新聞透鏡：金門專題",
"u": "https://www.thenewslens.com/article/39093"
}
]
},
{
"y": 1992,
"md": "12月19日",
"t": "第二屆立法委員選舉",
"key": "leg-1992",
"s": "立委全面改選",
"b": "1992年12月19日舉行第二屆立法委員選舉，投票率72.02%；國民黨得票53.02%、民進黨31.03%、無黨籍14.03%，民進黨獲51席。這是第一屆立委（1948年選出）退職後的第一次選舉。",
"track": "政治外交",
"conf": "common",
"note": "席次：英文維基百科的正文表寫國民黨95席、資訊框寫102席，總席次161與162並存，國民黨席次這裡不採；民進黨51席、各黨得票率依該頁表格。「全面改選」依李登輝線事件與釋字第261號（退職期限1991年12月31日）的脈絡；第一屆立委的實際退職日與1991年第二屆國民大會選舉，目前未見可引用來源。中選會的原始資料，目前未見可引用來源。",
"rel": [
"i261-1990",
"amend3-1994"
],
"src": [
{
"t": "English Wikipedia：1992 Taiwanese legislative election",
"u": "https://en.wikipedia.org/wiki/1992_Taiwanese_legislative_election"
},
{
"t": "遠見 1992-09：省議會式微與二屆立委參選熱潮",
"u": "https://www.gvm.com.tw/article/2712"
}
]
},
{
"y": 1994,
"md": "4月10日",
"t": "四一〇教改遊行",
"key": "edu-1994",
"s": "四一〇教改",
"b": "1994年4月10日，「四一〇教改聯盟」（由人本教育基金會等民間團體發起）號召遊行，提出落實小班小校、廣設高中大學、推動教育現代化、制訂《教育基本法》四項訴求。同年9月，行政院成立教育改革審議委員會，由中研院院長李遠哲擔任召集人。",
"track": "政治外交",
"topic": "文化生活",
"conf": "common",
"note": "人數：只有黃武雄（2010年文章）寫「集結數萬人」，公視新聞沒有寫人數。教改會1996年底解散（黃武雄文章）。《教育基本法》的公布日期，黃武雄文章寫1996年12月，與其他記載不一致，此處不採，目前未見可引用來源。「廣設高中大學」引發反對聲浪，教育部1996年6月由吳京開闢「第二條教育國道」（同一篇）。教改的成效與副作用評價分歧，此處不下結論。教改會總諮議報告書，目前未見可引用來源。",
"so": [
{
"t": "同年9月成立行政院教育改革審議委員會，李遠哲任召集人（公視新聞）。",
"k": "d"
}
],
"rel": [
"farmers-1988",
"wildlily-1990"
],
"bg": "movements",
"src": [
{
"t": "公視新聞 2024-04-09：30年前發起410教改大遊行",
"u": "https://news.pts.org.tw/article/689557"
},
{
"t": "新聞透鏡：黃武雄談教改（2010）",
"u": "https://www.thenewslens.com/article/36746"
}
]
},
{
"y": 1994,
"md": "7月28日",
"t": "第三次修憲：總統改由人民直選",
"key": "amend3-1994",
"s": "第三次修憲",
"b": "1994年4月，國民黨中央臨時全體會議通過總統直選案；7月28日國民大會通過第三次修憲，增修條文第2條明定總統、副總統由自由地區全體人民直接選舉，任期由6年改為4年、得連任一次，自第九任總統選舉（1996年）實施。",
"track": "政治外交",
"conf": "common",
"note": "只有中央社「總統直選30週年」圖輯一個來源寫到這個過程；增修條文原文與國民大會的表決情形，目前未見可引用來源。",
"rel": [
"leg-1992",
"direct-1996",
"elections-1994"
],
"bg": "election96",
"src": [
{
"t": "中央社 2026-03-22：總統直選30週年",
"u": "https://www.cna.com.tw/news/aipl/202603225003.aspx"
}
]
},
{
"y": 1994,
"md": "12月3日",
"t": "台灣省長與北高直轄市長首次民選",
"key": "elections-1994",
"s": "省市長民選",
"b": "1994年12月3日，台灣省長、台北市長、高雄市長由人民投票選出：省長宋楚瑜（國民黨）得票率56.22%，台北市長陳水扁（民進黨）43.67%，高雄市長吳敦義（國民黨）54.46%。",
"track": "政治外交",
"conf": "common",
"note": "英文維基百科寫這是三個職位的首次選舉；省長原由中央任命，1994年《省縣自治法》通過後改為民選。台北市在1951至1967年（尚屬省轄市）曾有民選市長，升格直轄市後為官派，因此「首次」只指直轄市層級；高雄市在升格前的市長產生方式，目前未見可引用來源。得票數：宋楚瑜4,726,012票；陳水扁615,090票；吳敦義400,766票（同頁）。中選會原始資料，目前未見可引用來源。",
"rel": [
"amend3-1994",
"province-1997"
],
"who": [
"chen-shui-bian"
],
"bg": "province",
"src": [
{
"t": "English Wikipedia：1994 Taiwanese local elections",
"u": "https://en.wikipedia.org/wiki/1994_Taiwanese_local_elections"
},
{
"t": "遠見 1995-01：兩岸三邊瞭望台（選後）",
"u": "https://www.gvm.com.tw/article/3717"
}
]
},
{
"y": 1995,
"md": "2月28日",
"t": "李登輝代表政府向二二八受難者道歉",
"key": "e228-1995",
"s": "二二八道歉",
"b": "1995年2月28日，李登輝總統出席台北二二八紀念碑落成典禮，以國家元首身分向受難者與家屬道歉。2004年起，每年2月28日由在任總統出席中央紀念活動。",
"track": "政權",
"topic": "社會族群",
"conf": "verified",
"note": "二二八紀念基金會的線上展覽圖說稱這是「首次」向受難者與家屬道歉。同年制定《二二八事件處理及補償條例》（Taipei Times 引用國民黨團發言，只寫1995年）；條例的通過與公布日期、基金會的成立日期，目前未見可引用來源。道歉的內容與後續賠償、真相調查的評價，見專題。",
"rel": [
"e228-peace-1987",
"direct-1996"
],
"who": [
"lee-teng-hui"
],
"bg": "e228apology",
"src": [
{
"t": "二二八事件紀念基金會：線上展覽（淡江中學校友與二二八：李登輝）",
"u": "https://228.org.tw/en/onlineexhibit/31"
},
{
"t": "二二八事件紀念基金會：Online Exhibit（英文）",
"u": "https://www.228.org.tw/onlineexhibitdetailus/30"
},
{
"t": "Taipei Times 2009-02-26：Ma promises to seek truth of 228",
"u": "https://www.taipeitimes.com/News/front/archives/2009/02/26/2003437062"
}
]
},
{
"y": 1995,
"md": "3月1日",
"t": "全民健康保險開辦",
"key": "nhi-1995",
"s": "全民健保開辦",
"b": "1995年3月1日，全民健康保險開辦，把原本依職業別分立的各種社會保險整合進同一個制度；遠見1995年2月號寫，過去沒有公保、勞保、農保的約九百萬人，也將納入。",
"track": "政治外交",
"topic": "社會族群",
"conf": "common",
"note": "3月1日依聯合新聞網（轉載中央社，2026年）；生技新聞網寫「1995年3月開辦」；遠見是開辦前的報導。衛福部新聞稿只寫1995年開辦。開辦當時的投保率、《全民健康保險法》的通過與公布日，目前未見可引用來源。",
"rel": [
"direct-1996"
],
"src": [
{
"t": "聯合新聞網 2026-03-27（中央社）：全民健保",
"u": "https://udn.com/news/story/7266/9406915"
},
{
"t": "GeneOnline：台灣全民健保30年系列",
"u": "https://geneonline.news/taiwan-national-health-insurance-30-years-series-1/"
},
{
"t": "遠見 1995-02：健保開辦前的報導",
"u": "https://www.gvm.com.tw/article/3768"
}
]
},
{
"y": 1996,
"md": "3月23日",
"t": "首次總統直選",
"key": "direct-1996",
"s": "首次總統直選",
"b": "1996年3月23日，台灣舉行第一次總統、副總統直接選舉。李登輝、連戰得581萬3,699票，得票率約54%，當選；投票率76.04%。候選人共四組，另有林洋港／郝柏村、陳履安／王清峰、彭明敏／謝長廷。",
"track": "政權",
"conf": "verified",
"note": "當選組的票數與得票率依中央社圖輯；其他三組的得票數，目前未見可引用來源。中選會網站的檔案只有候選人資歷，沒有得票資料，中選會的原始統計，目前未見可引用來源。",
"rel": [
"amend3-1994",
"missile-mar-1996",
"lee-elect-1990"
],
"who": [
"lee-teng-hui"
],
"bg": "election96",
"src": [
{
"t": "中央社 2026-03-22：總統直選30週年",
"u": "https://www.cna.com.tw/news/aipl/202603225003.aspx"
}
]
},
{
"y": 1997,
"md": "7月",
"t": "第四次修憲與「精省」",
"key": "province-1997",
"s": "精省",
"b": "1996年12月國家發展會議就精簡台灣省政府達成共識；1997年7月修憲，增修條文第9條規定省長、省議員選舉停止辦理後，省政府的功能、業務與組織調整得以法律特別規定；1999年7月1日起，多數省府廳處裁併或改隸中央。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "精省／凍省／省虛級化",
"note": "民進黨網頁並列「凍省」「精省」與「虛級化」；不同用詞帶有不同評價，此處並列。"
}
],
"note": "1996年12月28日國發會共識與1999年7月1日調整，依行政院研考會2000年委託研究報告；增修條文第9條第3項的文字與「86年7月21日納為憲法規定」（公布日）依立法委員1998年4月釋憲聲請書。修憲案通過的日期（李登輝線寫1997年7月）、省政府改制的實際生效日、《台灣省政府功能業務與組織調整暫行條例》的頒定日，目前未見可引用來源。",
"rel": [
"elections-1994",
"amend3-1994"
],
"bg": "province",
"src": [
{
"t": "行政院研考會：臺灣省政府功能業務與組織調整初步效益評估（2000）",
"u": "https://ws.ndc.gov.tw/001/administrator/10/relfile/5644/3020/0058568_1.pdf"
},
{
"t": "立法委員釋憲聲請書（1998-04-21）",
"u": "https://cons.judicial.gov.tw/download/download.aspx?id=434601"
},
{
"t": "民進黨網站：精省相關",
"u": "https://www.dpp.org.tw/news/contents/8358"
}
]
},
{
"y": 1997,
"md": "7月2日",
"t": "亞洲金融風暴",
"key": "world-asia-1997",
"s": "亞洲金融風暴",
"b": "1997年7月2日，泰國政府讓泰銖浮動，亞洲金融風暴由此開始。危機波及東亞多國；聯準會專文記載，美國、IMF、世界銀行、亞洲開發銀行等對泰國、印尼與南韓提供約1,180億美元援助。",
"track": "政治外交",
"ctx": "世界",
"topic": "經濟產業",
"conf": "common",
"note": "用語並列：英文維基百科寫泰國「浮動」泰銖，聯準會專文寫泰國使貨幣「貶值」。英文維基百科把台灣列為受影響較小的經濟體之一，沒有給台灣的具體數字；IMF 的官方說明，目前未見可引用來源。",
"rel": [
"ntd-up-1987"
],
"src": [
{
"t": "Federal Reserve History：The Asian Financial Crisis",
"u": "https://www.federalreservehistory.org/essays/asian-financial-crisis"
},
{
"t": "English Wikipedia：1997 Asian financial crisis",
"u": "https://en.wikipedia.org/wiki/1997_Asian_financial_crisis"
}
]
},
{
"y": 1999,
"md": "7月9日",
"t": "李登輝提出「特殊的國與國關係」",
"key": "two-state-1999",
"s": "兩國論",
"b": "1999年7月9日，李登輝接受德國之聲專訪，談到台灣與大陸的現狀是「特殊的國與國關係」，被簡稱為「兩國論」。遠見記載，中共因此頓起戒心，汪道涵1998年與辜振甫會晤時答應、原訂1999年的訪台行程取消，兩會交流對話機制再度中斷。",
"track": "政治外交",
"conf": "disputed",
"aliases": [
{
"term": "兩國論",
"note": "遠見的寫法是「特殊的國與國關係，簡稱兩國論」；各方對這段話的定性與評價不同。"
}
],
"note": "定性有爭議：此處只記錄談話的日期、遠見記載的後續，不判斷它是現狀描述或政策變動。專訪逐字稿與中共正式聲明的原文，目前未見可引用來源。2000年陳水扁就職演說有「不推動兩國論入憲」一句（見該事件）。",
"rel": [
"koo-wang-1993",
"inaug-2000",
"missile-mar-1996"
],
"who": [
"lee-teng-hui"
],
"bg": "crossstrait",
"src": [
{
"t": "遠見 2015-12-18：曙光乍現 兩國論後急轉直下",
"u": "https://www.gvm.com.tw/article/21293"
}
]
},
{
"y": 1999,
"md": "9月21日",
"t": "九二一大地震",
"key": "quake-1999",
"s": "九二一地震",
"b": "1999年9月21日凌晨1時47分，南投縣發生大地震，造成嚴重傷亡與房屋損毀。9月25日總統發布緊急命令，9月27日成立行政院九二一震災災後重建推動委員會。",
"track": "政治外交",
"topic": "社會族群",
"conf": "common",
"note": "發生時間四個來源一致。數字並列：死亡人數——NOWnews 2,417人、新聞透鏡2,444人、學術PDF 2,455人（另失蹤50人）、Taipei Times 轉載氣象局資料2,456人；規模——氣象局報導7.3，美國地質調查局的地震矩規模7.6至7.7（NOWnews）；震央——集集鎮（新聞透鏡）、氣象局測報中心西南方7公里的魚池鄉（Taipei Times）。房屋全倒、半倒的單位有戶、棟、間之別，不直接相加。官方統計原始資料，目前未見可引用來源。",
"so": [
{
"t": "緊急命令1999年9月25日發布、施行至2000年3月24日；《九二一震災重建暫行條例》的公布日，目前未見可引用來源。",
"k": "d"
}
],
"rel": [
"election-2000"
],
"bg": "quake",
"src": [
{
"t": "謝志誠：921特別法法制（九二一震災重建基金會）",
"u": "https://e-info.org.tw/921/newpdf/ST005.pdf"
},
{
"t": "新聞透鏡：921地震研究",
"u": "https://www.thenewslens.com/article/180747"
},
{
"t": "NOWnews 2023-09-21：921大地震",
"u": "https://www.nownews.com/news/6265465"
},
{
"t": "Taipei Times（自由時報轉載）：Memories stirred by quake data",
"u": "https://news.ltn.com.tw/news/focus/breakingnews/3679213"
}
]
},
{
"y": 2000,
"md": "3月18日",
"t": "第十任總統選舉：陳水扁當選",
"key": "election-2000",
"s": "陳水扁當選",
"b": "2000年3月18日，陳水扁／呂秀蓮（民進黨）得4,977,697票、39.30%當選；宋楚瑜／張昭雄（無黨籍）4,664,972票、36.84%；連戰／蕭萬長（國民黨）2,925,513票、23.10%；投票率82.69%。這是國民黨以外的政黨首次在總統選舉中勝出。",
"track": "政權",
"conf": "verified",
"aliases": [
{
"term": "政黨輪替",
"note": "中文常用說法；英文來源寫的是 first transition of power、first time a party other than the KMT won the presidency。"
}
],
"note": "得票數依英文維基百科（引用中選會資料）與政大學術論文的總計表，兩者一致。Taipei Times 寫連戰約230萬票，與中選會數字不符，不採；學術論文正文寫宋楚瑜36.3%，但表格寫36.84%。宋楚瑜1999年11月被國民黨開除、以無黨籍參選；3月24日李登輝辭國民黨主席，連戰代理（Taipei Times）。票源分流與勝選原因的解釋各家不同，此處不下結論。",
"rel": [
"direct-1996",
"quake-1999",
"inaug-2000"
],
"who": [
"chen-shui-bian",
"lee-teng-hui"
],
"bg": "election96",
"src": [
{
"t": "English Wikipedia：2000 Taiwanese presidential election",
"u": "https://en.wikipedia.org/wiki/2000_Taiwanese_presidential_election"
},
{
"t": "政大學術集成：2000年中華民國總統選舉（論文章節）",
"u": "https://ah.lib.nccu.edu.tw/bitstream/140.119/33619/6/26300506.pdf"
},
{
"t": "Taipei Times：2000年大事回顧",
"u": "https://www.taipeitimes.com/News/local/archives/2000/12/25/0000066902"
}
]
},
{
"y": 2000,
"md": "5月20日",
"t": "陳水扁就任總統，發表兩岸承諾",
"key": "inaug-2000",
"s": "陳水扁就任",
"b": "2000年5月20日，陳水扁在台北總統府前就任總統。就職演說中他說，只要中共無意對台動武，他保證任期內不會宣布獨立、不會更改國號、不會推動兩國論入憲、不會推動改變現狀的統獨公投，也沒有廢除國統綱領與國統會的問題。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "四不一沒有",
"note": "後人對這段承諾的歸納稱呼；演說文本沒有這五個字，遠見2004年的評論稱它為事後標籤。"
}
],
"note": "演說文字依維基文庫（社群轉寫、簡體，未與總統府正體原稿核對）與 Taipei Times、VOA 的英文報導互相對照。中國方面的反應（Taipei Times 5月21日）：一份官方聲明稱陳水扁的善意和解「缺乏誠意」、批評他沒有接受一個中國；國台辦隨後的聲明表示，若台灣承諾不主張兩國論、遵守1992年共識，可以對話（報導沒寫確切時間）。2006年2月27日陳水扁宣布國統會終止運作、國統綱領終止適用（英文維基百科），「終止」與「廢除」的用語各方有爭議。總統府正體原稿，目前未見可引用來源。",
"rel": [
"election-2000",
"two-state-1999",
"cross-orgs-1991"
],
"who": [
"chen-shui-bian"
],
"bg": "crossstrait",
"src": [
{
"t": "維基文庫：中華民國第十任總統就職演說",
"u": "https://zh.wikisource.org/zh-hans/%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E7%AC%AC%E5%8D%81%E4%BB%BB%E7%B8%BD%E7%B5%B1%E5%B0%B1%E8%81%B7%E6%BC%94%E8%AA%AA"
},
{
"t": "Taipei Times 2000-05-21：就職與中國反應",
"u": "https://taipeitimes.com/News/front/archives/2000/05/21/36952"
},
{
"t": "VOA 電訊（GlobalSecurity 轉載）2000-05-20",
"u": "https://www.globalsecurity.org/wmd/library/news/taiwan/2000/000520-taiwan1.htm"
},
{
"t": "遠見 2004-06-17：張作錦專欄",
"u": "https://www.gvm.com.tw/article/9510"
}
]
},
{
"y": 2000,
"md": "10月27日",
"t": "行政院宣布停建核四，2001年2月復工",
"key": "nuke4-2000",
"s": "核四停建",
"b": "2000年10月，行政院長張俊雄宣布停建龍門（核四）核能電廠；英文維基百科記載停工期間為2000年10月27日至2001年2月14日。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"note": "英文維基百科的引言用「canceled」，正文用「suspension」，用語不一致；這裡依正文寫停建。英文維基百科寫2000年的行政命令後來被認定違憲，沒有寫是哪一號解釋，目前未見可引用來源。之後的發展依同一條目：2014年政府決定停工封存，2021年12月的復建公投未通過；封存的確切時間，該條目內有2014年與2015年兩種寫法，這裡不下結論。",
"rel": [
"election-2000",
"inaug-2000"
],
"src": [
{
"t": "English Wikipedia：Lungmen Nuclear Power Plant（Fourth Nuclear Power Plant）",
"u": "https://en.wikipedia.org/wiki/Fourth_Nuclear_Power_Plant"
}
]
},
{
"y": 2001,
"md": "1月",
"t": "金門、馬祖與福建之間開辦「小三通」",
"key": "mini3-2001",
"s": "小三通",
"b": "2001年1月，金門、馬祖與福建（廈門、馬尾，泉州同年加入）之間的直接往來開辦，稱為「小三通」。英文維基百科記載，2001年經小三通出入境21,377人次，2006年為341,152人次。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "小三通",
"note": "相對於北京1979年提出的「三通」（通郵、通航、通商）而稱；全面的三通見2008年12月15日。"
}
],
"note": "英文維基百科只寫2001年1月，沒有給日期；實施的具體日期與條件，目前未見可引用來源。",
"rel": [
"kinmen-1992",
"three-links-2008"
],
"bg": "crossstrait",
"src": [
{
"t": "English Wikipedia：Three Links",
"u": "https://en.wikipedia.org/wiki/Three_Links"
}
]
},
{
"y": 2002,
"md": "1月1日",
"t": "台灣成為世界貿易組織會員",
"key": "wto-2002",
"s": "加入WTO",
"b": "2001年11月12日，世界貿易組織在多哈的部長會議正式通過台灣入會案；立法院於11月16日通過。2002年1月1日，台灣以「台澎金馬個別關稅領域」的名義成為第144個會員。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "verified",
"aliases": [
{
"term": "台澎金馬個別關稅領域（Separate Customs Territory of Taiwan, Penghu, Kinmen and Matsu）",
"note": "外交部駐WTO代表團頁面使用的會員名稱。"
}
],
"note": "2002年1月1日成為第144個會員，美國商務部新聞稿（AIT 網站存檔）與外交部頁面一致；美方稿件的表頭年份寫成2001年，與內文不符，應為誤植。中國大陸入會的日期與先後，目前未見可引用來源。",
"rel": [
"mini3-2001"
],
"src": [
{
"t": "外交部駐WTO代表團：大事記",
"u": "https://roc-taiwan.org/wto_en/post/10.html"
},
{
"t": "美國商務部新聞稿（AIT 存檔）：Commerce Secretary congratulates Taiwan on WTO membership",
"u": "https://web-archive-2017.ait.org.tw/en/20020102-commerce-secretary-congratulates-taiwan-on-wto-membership.html"
}
]
},
{
"y": 2003,
"md": "7月5日",
"t": "WHO 將台灣自 SARS 感染地區名單移除",
"key": "sars-2003",
"s": "SARS疫情",
"b": "2003年7月5日，世界衛生組織宣布SARS的傳播已獲控制，台灣是名單上最後一個被移除的地區（最後病例是6月15日，已滿20天）。台灣疫情研究期間（3月14日至7月30日）有668例可能病例、181人死亡。",
"track": "政治外交",
"topic": "社會族群",
"conf": "common",
"aliases": [
{
"term": "Taiwan, China",
"note": "WHO 新聞稿的寫法；台灣方面與各方對這個稱謂的立場，目前未見可引用來源。"
}
],
"note": "病例與死亡數出自2005年發表於《International Journal of Infectious Diseases》的研究（署名 Taiwan SARS Response Team），另有3,032例「possible」病例；WHO 新聞稿與 China Daily 沒有台灣的病例數。和平醫院封院、台灣當時不是WHO會員的處境，來源沒有寫，目前未見可引用來源。",
"rel": [
"wto-2002"
],
"src": [
{
"t": "WHO：SARS outbreak contained worldwide（2003-07-05）",
"u": "https://www.who.int/news-room/detail/05-07-2003-sars-outbreak-contained-worldwide"
},
{
"t": "Chen 等：Taiwan SARS 疫情研究（PMC）",
"u": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7110635"
},
{
"t": "China Daily 2003-07-05",
"u": "https://www.chinadaily.com.cn/en/doc/2003-07/05/content_243230.htm"
}
]
},
{
"y": 2004,
"md": "3月20日",
"t": "總統選舉：陳水扁連任（前一日遭槍擊）",
"key": "election-2004",
"s": "陳水扁連任",
"b": "2004年3月19日，陳水扁與呂秀蓮在台南遭槍擊，傷勢均不致命。3月20日總統選舉，陳水扁得6,471,970票（50.11%），連戰得6,442,452票（49.89%），投票率80.28%。",
"track": "政權",
"conf": "common",
"note": "票數依英文維基百科：原始差距29,518票，重新計票後為25,563票；同日舉行諮詢性公投，結果目前未見可引用來源。槍擊案的調查結論與各方說法、對選舉結果的爭議，目前未見可引用來源，這裡只記錄事實。",
"rel": [
"election-2000"
],
"who": [
"chen-shui-bian"
],
"bg": "election96",
"src": [
{
"t": "English Wikipedia：2004 Taiwanese presidential election",
"u": "https://en.wikipedia.org/wiki/2004_Taiwanese_presidential_election"
}
]
},
{
"y": 2005,
"md": "3月14日",
"t": "中國通過《反分裂國家法》",
"key": "asl-2005",
"s": "反分裂國家法",
"b": "2005年3月14日，中華人民共和國全國人民代表大會通過《反分裂國家法》，表決結果是2,896票贊成、0票反對、2票棄權，另有3人未按表決機。第八條列出採取措施的幾種情況，其中一種是和平統一的可能性完全喪失。",
"track": "政治外交",
"conf": "verified",
"note": "日期與票數依英文維基百科；第八條另外兩種情況與法條原文，目前未見可引用來源。台灣方面對這部法律的官方稱法與反應，目前未見可引用來源。",
"rel": [
"lien-hu-2005",
"jiang8-1995"
],
"src": [
{
"t": "English Wikipedia：Anti-Secession Law",
"u": "https://en.wikipedia.org/wiki/Anti-Secession_Law"
}
]
},
{
"y": 2005,
"md": "4月29日",
"t": "連戰與胡錦濤在北京會面",
"key": "lien-hu-2005",
"s": "連胡會",
"b": "2005年4月29日，國民黨主席連戰與中共總書記胡錦濤在北京人民大會堂會談兩個多小時，會後公布五點願景：在九二共識基礎上恢復談判、促進終止敵對狀態、經貿與直航、協商台灣的國際空間、建立兩黨定期溝通平台。",
"track": "政治外交",
"conf": "common",
"note": "連戰訪問的起點兩說並列：半島電視台寫訪問於週二（4月26日）在南京開始；當代中國寫4月26日自台北出發、27日抵南京。五點內容依 Taipei Times 與當代中國的「新聞公報」摘要，兩者用語略有差異；公報原文，目前未見可引用來源。民進黨政府的官方反應，目前未見可引用來源。九二共識的意涵各方不同，見「香港商談與九二共識之爭」。",
"rel": [
"asl-2005",
"hk-talks-1992",
"ma-xi-2015"
],
"bg": "crossstrait",
"src": [
{
"t": "Taipei Times 2005-04-30",
"u": "https://www.taipeitimes.com/News/front/archives/2005/04/30/2003252532"
},
{
"t": "半島電視台 2005-04-29：Hu, Lien make history with handshake",
"u": "https://www.aljazeera.com/news/2005/4/29/hu-lien-make-history-with-handshake"
},
{
"t": "當代中國：連胡會",
"u": "https://www.ourchinastory.com/zh/3855"
}
]
},
{
"y": 2005,
"md": "6月7日",
"t": "第七次修憲：國民大會實質廢除",
"key": "amend7-2005",
"s": "第七次修憲",
"b": "2004年8月23日立法院提出修憲案；2005年6月7日國民大會（任務型）以298人出席、249人同意通過，6月10日公布。修憲後國民大會實質廢止，修憲與變更領土改為立法院四分之三決議、自由地區選民過半數複決。",
"track": "政治外交",
"conf": "common",
"note": "2008年立法院選舉頁寫立法委員由225席減為113席、任期由三年改為四年，採單一選區兩票制（73席區域、34席政黨名單、6席原住民）。席次與任期是否在同一次修憲訂定，來源沒有分開寫，目前未見可引用來源；增修條文原文，目前未見可引用來源。",
"rel": [
"amend3-1994",
"leg-2008"
],
"bg": "election96",
"src": [
{
"t": "English Wikipedia：Additional Articles of the Constitution of the Republic of China",
"u": "https://en.wikipedia.org/wiki/Additional_Articles_of_the_Constitution_of_the_Republic_of_China"
},
{
"t": "English Wikipedia：2008 Taiwanese legislative election",
"u": "https://en.wikipedia.org/wiki/2008_Taiwanese_legislative_election"
}
]
},
{
"y": 2008,
"md": "1月12日",
"t": "第一次單一選區兩票制立委選舉",
"key": "leg-2008",
"s": "立委選舉",
"b": "2008年1月12日舉行第七屆立法委員選舉，立法院113席：國民黨81席、民進黨27席，另有親民黨1席、無黨團結聯盟3席、無黨籍1席。區域選票國民黨得53.50%、民進黨38.17%。",
"track": "政治外交",
"conf": "common",
"note": "席次與得票率依英文維基百科；英文維基百科內有兩組選民數不一致（區域17,179,656與政黨票17,288,551），沒有說明。新黨政黨票3.95%，未過5%門檻。同日的兩項公投因投票率不足未通過。中選會原始資料，目前未見可引用來源。",
"rel": [
"amend7-2005",
"election-2008"
],
"src": [
{
"t": "English Wikipedia：2008 Taiwanese legislative election",
"u": "https://en.wikipedia.org/wiki/2008_Taiwanese_legislative_election"
}
]
},
{
"y": 2008,
"md": "3月22日",
"t": "總統選舉：馬英九當選",
"key": "election-2008",
"s": "馬英九當選",
"b": "2008年3月22日總統選舉，馬英九／蕭萬長（國民黨）得7,659,014票（58.45%），謝長廷／蘇貞昌（民進黨）得5,444,949票（41.55%），投票率76.33%。同日兩項與聯合國有關的公投，因投票率不足未通過。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "政黨輪替",
"note": "中文常用語；英文維基百科的寫法是「結束民進黨八年執政」，沒有使用序數。"
}
],
"note": "英文維基百科的正文寫馬英九7,658,724票、謝長廷5,445,239票，與表格的數字各差290票，總數相同，這裡依表格。副總統搭檔蕭萬長、蘇貞昌依一般記載，英文維基百科沒有寫出。",
"rel": [
"election-2004",
"leg-2008",
"three-links-2008"
],
"who": [
"ma-ying-jeou"
],
"bg": "election96",
"src": [
{
"t": "English Wikipedia：2008 Taiwanese presidential election",
"u": "https://en.wikipedia.org/wiki/2008_Taiwanese_presidential_election"
}
]
},
{
"y": 2008,
"md": "12月15日",
"t": "兩岸全面直接通航通郵（大三通）",
"key": "three-links-2008",
"s": "大三通",
"b": "2008年12月15日，兩岸全面直接通航、通海運與通郵正式開始。同年6月13日已簽署週末包機協議；2009年8月31日兩岸航班增至每週270班。",
"track": "政治外交",
"conf": "common",
"note": "英文維基百科寫12月15日開放直航、海運與直郵，沒有明確寫當天開放通商，這裡只寫通航、通海運、通郵。簽署的雙方與細節，目前未見可引用來源。",
"rel": [
"mini3-2001",
"election-2008",
"ecfa-2010"
],
"bg": "crossstrait",
"src": [
{
"t": "English Wikipedia：Three Links",
"u": "https://en.wikipedia.org/wiki/Three_Links"
}
]
},
{
"y": 2010,
"md": "6月29日",
"t": "簽署《兩岸經濟合作架構協議》（ECFA）",
"key": "ecfa-2010",
"s": "ECFA",
"b": "2010年6月29日，海基會董事長江丙坤與海協會會長陳雲林在重慶簽署《海峽兩岸經濟合作架構協議》，9月12日生效。早收清單涵蓋539項台灣產品與267項大陸產品。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"note": "行政院2010年7月2日通過、立法院8月17日通過（英文維基百科）。英文維基百科估計台灣受惠約138億美元、大陸約28.6億美元，這是該條目引用的估計，不是實際成果；協議的經濟與政治評價，贊成與反對各方說法不同，這裡不下結論。2013年服貿協議的簽署日，目前未見可引用來源。",
"rel": [
"three-links-2008",
"sunflower-2014",
"koo-wang-1993"
],
"bg": "crossstrait",
"src": [
{
"t": "English Wikipedia：Economic Cooperation Framework Agreement",
"u": "https://en.wikipedia.org/wiki/Economic_Cooperation_Framework_Agreement"
}
]
},
{
"y": 2014,
"md": "3月18日",
"t": "太陽花運動：占領立法院",
"key": "sunflower-2014",
"s": "太陽花運動",
"b": "2014年3月18日晚間，學生與民間團體進入立法院議場，抗議《海峽兩岸服務貿易協議》未經逐條審查；占領持續到4月10日（23天）。4月6日立法院長王金平到場宣布，監督兩岸協議的法律通過前，暫緩審查服貿協議。",
"track": "政治外交",
"topic": "社會族群",
"conf": "common",
"aliases": [
{
"term": "太陽花學運／318學運",
"note": "通行稱法；英文維基百科的標題為 Sunflower Student Movement。"
}
],
"note": "人數並列：議場內400人以上、議場外10,000人以上；3月30日遊行，主辦方稱50萬人，警方估計11.6萬人，兩個數字不調和。3月23日占領行政院，3月24日清場，英文維基百科記載150人以上受傷、61人被捕。「服貿協議未經逐條審查」是抗議者與英文維基百科的描述；國民黨與行政院方面的說法，目前未見可引用來源。",
"rel": [
"ecfa-2010",
"ma-xi-2015",
"wildlily-1990"
],
"bg": "movements",
"src": [
{
"t": "English Wikipedia：Sunflower Student Movement",
"u": "https://en.wikipedia.org/wiki/Sunflower_Student_Movement"
}
]
},
{
"y": 2015,
"md": "11月7日",
"t": "馬習會（新加坡）",
"key": "ma-xi-2015",
"s": "馬習會",
"b": "2015年11月7日，馬英九與習近平在新加坡會面，兩人互稱「先生」。馬英九提出的五點中，第一點是鞏固九二共識、維持和平現狀；習近平的致詞說堅持九二共識、鞏固共同政治基礎。",
"track": "政治外交",
"conf": "common",
"aliases": [
{
"term": "馬習會／習馬會",
"note": "台灣常稱馬習會；中國大陸有時把習近平放在前面，兩種稱法並存。"
}
],
"note": "握手時間有不同記載：風傳媒各篇寫1分10秒、約70秒、81秒，遠見寫二分鐘。陸方只公布習近平約5分鐘的致詞，馬方公布全文（遠見）。九二共識的意涵，兩岸各說各話，見「香港商談與九二共識之爭」。是否簽署文件、台灣內部各政黨的反應，目前未見可引用來源。",
"rel": [
"lien-hu-2005",
"hk-talks-1992",
"tsai-2016"
],
"who": [
"ma-ying-jeou"
],
"bg": "crossstrait",
"src": [
{
"t": "風傳媒 2015-11-07：馬習會",
"u": "https://www.storm.mg/article/73349"
},
{
"t": "遠見 2015-12：馬習會紀實",
"u": "https://www.gvm.com.tw/article/21299"
},
{
"t": "遠見 2015-11-07：馬習會現場",
"u": "https://www.gvm.com.tw/article/30428"
}
]
},
{
"y": 2016,
"md": "1月16日",
"t": "總統與立委選舉：蔡英文當選，民進黨國會過半",
"key": "election-2016",
"s": "蔡英文當選",
"b": "2016年1月16日總統選舉，蔡英文得6,894,744票（56.12%），朱立倫得3,813,365票（31.04%），宋楚瑜得1,576,861票（12.84%），投票率66.27%。同日立法院113席：民進黨68席（英文維基百科稱這是首次過半）、國民黨35席、時代力量5席、親民黨3席、無黨團結聯盟1席、無黨籍1席。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "政黨輪替",
"note": "中文常用語；英文維基百科只寫這是民進黨自2000年以來第二次贏得總統職位，沒有使用序數。"
}
],
"note": "投票率有三個數字：總統66.27%、立委政黨票66.25%、區域66.34%。時代力量的簡稱、席次依英文維基百科的表格。中選會原始資料，目前未見可引用來源。",
"rel": [
"election-2008",
"tsai-2016"
],
"who": [
"tsai-ing-wen"
],
"bg": "election96",
"src": [
{
"t": "English Wikipedia：2016 Taiwanese general election",
"u": "https://en.wikipedia.org/wiki/2016_Taiwanese_general_election"
}
]
},
{
"y": 2016,
"md": "5月20日",
"t": "蔡英文就任，兩岸官方溝通中止",
"key": "tsai-2016",
"s": "蔡英文就任",
"b": "2016年5月20日，蔡英文就任第十四任總統。英文維基百科概括她在就職演說中對九二共識的表述是：承認1992年的會談曾經舉行，但不同意九二共識的內容；北京批評這是「未完成的答卷」。2016年6月25日北京中止官方兩岸溝通。",
"track": "政權",
"conf": "disputed",
"aliases": [
{
"term": "九二共識",
"note": "各方用法不同：國民黨主張「一中各表」，中共把它與「一個中國原則」連在一起，民進黨主張未達成共識；見「香港商談與九二共識之爭」。"
}
],
"note": "就職演說的原文，英文維基百科沒有直接引用，目前未見可引用來源。同一條目另寫，2016年10月10日她提出「新四不」，2019年1月她回應習近平時，說北京把九二共識等同一國兩制，因此台灣也拒絕九二共識。對這些表述的評價，各黨說法不同，這裡不下結論。",
"rel": [
"election-2016",
"ma-xi-2015",
"hk-talks-1992",
"xi5-2019"
],
"who": [
"tsai-ing-wen"
],
"bg": "crossstrait",
"src": [
{
"t": "English Wikipedia：Presidency of Tsai Ing-wen",
"u": "https://en.wikipedia.org/wiki/Presidency_of_Tsai_Ing-wen"
}
]
},
{
"y": 2019,
"md": "5月24日",
"t": "同性婚姻專法施行",
"key": "ssm-2019",
"s": "同婚專法",
"b": "2017年5月24日，大法官釋字第748號解釋要求立法院在兩年內修法保障同性婚姻；2018年11月24日的公投中，三項反對方提案通過、兩項支持方提案否決；2019年5月17日立法院通過專法，5月22日公布，5月24日施行。",
"track": "政治外交",
"topic": "社會族群",
"conf": "common",
"note": "釋字748號的期限是2019年5月24日；公投票數，英文維基百科只寫差距很大，沒有給票數，目前未見可引用來源。專法的名稱、立法院表決票數，目前未見可引用來源。司法院的解釋原文，目前未見可引用來源。",
"rel": [
"election-2016"
],
"src": [
{
"t": "English Wikipedia：Same-sex marriage in Taiwan",
"u": "https://en.wikipedia.org/wiki/Same-sex_marriage_in_Taiwan"
}
]
},
{
"y": 2020,
"md": "1月11日",
"t": "總統與立委選舉：蔡英文連任",
"key": "election-2020",
"s": "蔡英文連任",
"b": "2020年1月11日總統選舉，蔡英文得8,170,231票（57.13%），韓國瑜得5,522,119票（38.61%），投票率74.90%。同日立法院113席：民進黨61席、國民黨38席、民眾黨5席、時代力量3席、台灣基進1席、無黨籍5席。",
"track": "政權",
"conf": "common",
"note": "英文維基百科的正文寫「開出90%時蔡英文約780萬票」，與資訊框的最終票數不同，這裡採資訊框。第三組候選人宋楚瑜／余湘得608,590票（4.26%），三組得票率合計100%。中選會原始資料，目前未見可引用來源。",
"rel": [
"election-2016",
"tsai-2016"
],
"who": [
"tsai-ing-wen"
],
"bg": "election96",
"src": [
{
"t": "English Wikipedia：2020 Taiwanese general election",
"u": "https://en.wikipedia.org/wiki/2020_Taiwanese_general_election"
}
]
},
{
"y": 2024,
"md": "1月13日",
"t": "總統與立委選舉：賴清德當選，三黨立院無一黨過半",
"key": "election-2024",
"s": "賴清德當選",
"b": "2024年1月13日總統選舉，賴清德／蕭美琴（民進黨）得5,586,019票（40.05%），侯友宜／趙少康（國民黨）得4,671,021票（33.49%），柯文哲／吳欣盈（民眾黨）得3,690,466票（26.46%），投票率71.86%。同日立法院113席：國民黨52席、民進黨51席、民眾黨8席、無黨籍2席，沒有一黨過半。",
"track": "政權",
"conf": "common",
"note": "立委政黨票得票率：民進黨36.16%、國民黨34.58%、民眾黨22.07%。英文維基百科2024年條目的區域投票率（74.93%）與2020年條目的寫成同一數字，其中一個可能有誤，這裡不用區域投票率。中選會原始資料，目前未見可引用來源。",
"rel": [
"election-2020",
"election-2016"
],
"who": [
"lai-ching-te"
],
"bg": "election96",
"src": [
{
"t": "English Wikipedia：2024 Taiwanese general election",
"u": "https://en.wikipedia.org/wiki/2024_Taiwanese_general_election"
}
]
},
{
"y": 2019,
"md": "1月2日",
"t": "習近平紀念《告台灣同胞書》40週年談話，蔡英文回應",
"key": "xi5-2019",
"s": "習近平談話",
"b": "2019年1月2日，習近平發表紀念《告台灣同胞書》40週年的談話，其中提到探索「一國兩制」台灣方案。蔡英文當天回應，說台灣始終沒有接受九二共識，並說北京定義的九二共識其實就是「一個中國」與「一國兩制」。1月3日國台辦發言人馬曉光說蔡英文是「兩岸衝突的製造者」，並說九二共識的核心是「兩岸同屬一個中國」。",
"track": "政治外交",
"conf": "disputed",
"aliases": [
{
"term": "習五點／習五條",
"note": "台灣媒體常把這次談話的五個要點稱為「習五點」；五個要點的原文，目前未見可引用來源。"
}
],
"note": "習近平談話的全文與要點，目前未見可引用來源；中央社刊出的蔡英文談話只轉述「提出了探索一國兩制台灣方案等相關內容」。九二共識的內涵各方不同：蔡英文把北京的定義等同一國兩制；國台辦1月16日說把九二共識與一國兩制「混為一談」是「刻意誤導台灣民眾」，並稱一國兩制是統一後的制度安排。國民黨的反應，目前未見可引用來源。",
"rel": [
"tsai-2016",
"hk-talks-1992",
"ma-xi-2015"
],
"who": [
"tsai-ing-wen"
],
"bg": "crossstrait",
"src": [
{
"t": "中央社 2019-01-02：蔡總統中英文談話全文",
"u": "https://www.cna.com.tw/news/acn/201901025004.aspx"
},
{
"t": "中央社 2019-01-03：國台辦回應",
"u": "https://www.cna.com.tw/news/acn/201901030109.aspx"
},
{
"t": "中央社 2019-01-16：國台辦記者會",
"u": "https://www.cna.com.tw/news/acn/201901160106.aspx"
}
]
},
{
"y": 2024,
"md": "5月20日",
"t": "賴清德就任，就職演說談兩岸關係",
"key": "inaug-2024",
"s": "賴清德就任",
"b": "2024年5月20日，賴清德就任總統。就職演說中他說，根據中華民國憲法，中華民國主權屬於國民全體，「由此可見，中華民國與中華人民共和國互不隸屬」。國台辦發言人陳斌華說這是「釋放了謀獨挑釁、破壞台海和平穩定的訊號」；陸委會的新聞稿呼籲對岸正視中華民國存在的事實、尊重台灣人民的選擇。",
"track": "政權",
"conf": "disputed",
"note": "演說原句依中央社刊出的全文；國台辦與陸委會的說法依中央社與 TVBS 報導，兩邊對「互不隸屬」的解讀不同，這裡並列、不下結論。國台辦另稱賴清德「頑固堅持台獨立場」，並稱「祖國必須統一，也必然統一」（TVBS）。總統府原稿，目前未見可引用來源。",
"rel": [
"election-2024",
"inaug-2000",
"tsai-2016"
],
"who": [
"lai-ching-te"
],
"bg": "crossstrait",
"src": [
{
"t": "中央社 2024-05-20：賴清德就職演說全文",
"u": "https://www.cna.com.tw/news/aipl/202405205002.aspx"
},
{
"t": "中央社 2024-05-20：就職與國台辦反應",
"u": "https://www.cna.com.tw/news/aipl/202405200244.aspx"
},
{
"t": "TVBS 2024-05-20：國台辦與陸委會反應",
"u": "https://news.tvbs.com.tw/politics/2492106"
}
]
},
{
"y": 2025,
"md": "",
"t": "大罷免：7月26日與8月23日兩階段投票（2025）",
"key": "recall-2025",
"s": "大罷免",
"b": "2025年7月26日，24位國民黨立委與新竹市長高虹安的罷免案投票；8月23日，另外7位國民黨立委的罷免案投票。立委罷免案共31案，報導者的報導寫31案「全數都不通過」；其中7位的同意票達到選區選舉人四分之一的門檻，但仍未通過。",
"track": "政治外交",
"topic": "社會族群",
"conf": "common",
"note": "門檻依商周的說明：同意票必須達到選區選舉人總數的四分之一以上，且多於不同意票。同意票達門檻的7位（報導者）：王鴻薇、李彥秀、徐巧芯、葉元之、鄭正鈐、羅廷瑋、傅崐萁，都在第一階段。商周把8月23日稱為「第三階段」，報導者稱「第二波」，階段的算法不一致，這裡依日期寫。報導者頁面的相關標題寫高虹安的罷免案在第一波也未通過；每案的總票數與同意票數、發起的原因與各方說法，目前未見可引用來源；報導者的數字以「催票率」計算，沒有註明出自中選會。",
"rel": [
"election-2024"
],
"src": [
{
"t": "報導者 2025-08-23：大罷免村里級結果",
"u": "https://www.twreporter.org/a/data-reporter-2025-823-recall-results"
},
{
"t": "商周 2025-08-23：大罷免懶人包",
"u": "https://www.businessweekly.com.tw/focus/blog/3018837"
}
]
},
{
"y": 1911,
"md": "10月10日",
"t": "武昌起義",
"key": "wuchang-1911",
"s": "武昌起義",
"b": "1911年10月10日，駐武昌的新軍發動起義，推動辛亥革命、推翻清朝。起義後湖北軍政府推黎元洪為領導人；英文維基百科寫，1911年底前南方與中部十八省宣布脫離清廷，1912年1月1日各省代表宣布成立中華民國。",
"track": "政權",
"ctx": "中國大陸",
"conf": "verified",
"aliases": [
{
"term": "辛亥革命",
"note": "通行稱法，指1911年起義到1912年清帝退位的一連串事件。"
}
],
"note": "日期依英文維基百科。起義後，漢口於11月1日、漢陽於11月27日被北洋軍收復。起義的組織過程與各派別的角色，目前未見可引用來源。",
"rel": [
"provisional-gov-1912",
"abdication-1912"
],
"bg": "roc-terms",
"src": [
{
"t": "English Wikipedia：Wuchang Uprising",
"u": "https://en.wikipedia.org/wiki/Wuchang_Uprising"
}
]
},
{
"y": 1919,
"md": "5月4日",
"t": "五四運動",
"key": "may4-1919",
"s": "五四運動",
"b": "1919年5月4日，北京學生聚集抗議巴黎和會把德國在山東的權益交給日本，運動擴散成全國的罷課與罷工；6月12日北洋政府罷免曹汝霖、章宗祥、陸宗輿，中國代表拒簽和約。",
"track": "政治外交",
"ctx": "中國大陸",
"topic": "文化生活",
"conf": "common",
"note": "人數並列：英文維基百科寫約3,000名學生（來自13所大學），也寫5月4日下午超過4,000人。5月4日在中國大陸是青年節，在台灣是文藝節（英文維基百科寫 Literary Day）。評價並列：毛澤東1939年稱它是資產階級民主革命的一個階段；國民黨方面有人批評它破壞傳統，也有人聲稱國民黨曾領導運動，英文維基百科稱國民黨的影響微小；蔣介石反對其反傳統，新生活運動推崇儒家。對台灣的影響，目前未見可引用來源。",
"rel": [
"kmt-rename-1919"
],
"bg": "roc-terms",
"src": [
{
"t": "English Wikipedia：May Fourth Movement",
"u": "https://en.wikipedia.org/wiki/May_Fourth_Movement"
}
]
},
{
"y": 1921,
"md": "7月23日",
"t": "中國共產黨第一次全國代表大會",
"key": "ccp-1921",
"s": "中共一大",
"b": "1921年7月23日至8月3日，中國共產黨第一次全國代表大會先在上海法租界開會，13名代表出席；後來因租界巡捕搜查，轉到嘉興南湖的一艘遊船上續會。當時黨員共57人，陳獨秀、李大釗未出席。",
"track": "政權",
"ctx": "中國大陸",
"conf": "common",
"note": "中共後來有建黨紀念日，與7月23日的關係，目前未見可引用來源。大會選舉結果（陳獨秀為書記等），目前未見可引用來源。",
"rel": [
"kmt-reorg-1924",
"nanjing-gov-1927"
],
"bg": "roc-terms",
"src": [
{
"t": "English Wikipedia：1st National Congress of the Chinese Communist Party",
"u": "https://en.wikipedia.org/wiki/1st_National_Congress_of_the_Chinese_Communist_Party"
}
]
},
{
"y": 1927,
"md": "4月12日",
"t": "四一二事件（上海清黨）",
"key": "purge-1927",
"s": "四一二清黨",
"b": "1927年4月12日，蔣介石的支持者與上海的幫會勢力襲擊中共組織與工會，展開清黨；國民黨隨後分裂，7月15日武漢國民政府分共，第一次國共合作結束。",
"track": "政權",
"ctx": "中國大陸",
"conf": "disputed",
"aliases": [
{
"term": "四一二事件／清黨／上海屠殺／四一二反革命政變",
"note": "各方稱法不同：「清黨」是國民黨方面的用語；中共史學稱「四一二反革命政變」「四一二慘案」；英文維基百科的標題是 Shanghai massacre of 1927。"
}
],
"note": "死亡人數各說不一（同一條目並列）：有的來源寫逮捕超過1,000人、約300人被處決、5,000多人失蹤；有的寫5,000名共產黨人與左派被殺；另有最高一萬人的說法；4月12日解除工人武裝時，死傷共超過300人。這些數字的原始出處，目前未見可引用來源。",
"rel": [
"northern-exp-1926",
"nanjing-gov-1927",
"kmt-reorg-1924"
],
"who": [
"chiang-kai-shek"
],
"bg": "roc-terms",
"src": [
{
"t": "English Wikipedia：Shanghai massacre of 1927",
"u": "https://en.wikipedia.org/wiki/Shanghai_massacre_of_1927"
}
]
},
{
"y": 1931,
"md": "9月18日",
"t": "九一八事變（瀋陽事變）",
"key": "mukden-1931",
"s": "九一八事變",
"b": "1931年9月18日夜，瀋陽附近的南滿鐵路軌道發生爆炸；日軍隨後攻擊北大營、佔領瀋陽，進而佔領東北主要城市。1932年3月，日本在東北扶植滿洲國。",
"track": "政治外交",
"ctx": "中國大陸",
"conf": "disputed",
"aliases": [
{
"term": "九一八事變／瀋陽事變／柳條湖事件／Mukden Incident",
"note": "中國大陸與台灣常稱九一八事變；日本稱滿洲事變；英文維基百科的標題是 Mukden Incident。"
}
],
"note": "爆炸的責任，說法並列：當時日本陸軍指是中國人所為；中方的瀋陽九一八博物館（1991年開放）認為炸藥是日方放置；英文維基百科寫，目前證據指向關東軍的年輕軍官，炸藥由河本末守中尉放置，計畫由板垣征四郎與石原莞爾擬定；1932年10月李頓報告書否定了日本「自衛」的說法。爆炸約在晚間10時20分，只損壞約1.5公尺軌道。中共2017年起改以九一八為抗戰的起點（見盧溝橋事變）。李頓報告書與日方檔案的原文，目前未見可引用來源。",
"rel": [
"marco-1937",
"xian-1936"
],
"src": [
{
"t": "English Wikipedia：Mukden Incident",
"u": "https://en.wikipedia.org/wiki/Mukden_Incident"
}
]
},
{
"y": 1936,
"md": "12月12日",
"t": "西安事變",
"key": "xian-1936",
"s": "西安事變",
"b": "1936年12月12日，張學良與楊虎城在西安扣留蔣介石，要求停止內戰、聯合中共抗日；12月25日張學良釋放蔣介石並陪同返回南京，之後張學良被軟禁。英文維基百科記載，事件促成第二次國共合作（統一戰線）。",
"track": "政權",
"ctx": "中國大陸",
"conf": "common",
"note": "日期：12月12日扣留蔣介石，12月25日張學良釋放蔣並陪同返回南京；另有27日抵達南京的記載。評價並列：國民黨方面認為失去消滅中共的機會；中共視為抗日的象徵；修正派學者認為蔣已選擇對日對抗，中共與蔣都沒有因此被消滅。張學良被軟禁到1990年。",
"rel": [
"marco-1937",
"kmt-reorg-1924",
"purge-1927"
],
"who": [
"chiang-kai-shek"
],
"bg": "roc-terms",
"src": [
{
"t": "English Wikipedia：Xi'an Incident",
"u": "https://en.wikipedia.org/wiki/Xi%27an_Incident"
}
]
},
{
"y": 1937,
"md": "7月7日",
"t": "盧溝橋事變（七七事變）",
"key": "marco-1937",
"s": "盧溝橋事變",
"b": "1937年7月7日夜，北平西南的宛平城外，日軍與中國第29軍交火。英文維基百科寫，這個事件一般被視為第二次中日戰爭的開端；7月28日日軍全面進攻，8月9日上海事件使衝突升級為全面戰爭。",
"track": "政治外交",
"ctx": "中國大陸",
"conf": "disputed",
"aliases": [
{
"term": "七七事變／盧溝橋事變／盧溝橋事件／北支事變",
"note": "中國大陸與台灣稱七七事變或盧溝橋事變；日本稱盧溝橋事件，7月11日起把整場衝突改稱「北支事變」（North China Incident，英文維基百科）。"
}
],
"note": "開火的原因至今不明：有學者認為精心策劃的說法被廣泛否定，有人提出中共挑釁的說法但仍認為偶發的一槍較可能，也有人認為是互不信任下失控的小事件。事件持續三天，一說7月7至9日。全面戰爭的起點，這裡並列：七七事變、1937年8月上海事件；中共2017年改以九一八為抗戰起點。",
"rel": [
"mukden-1931",
"xian-1936",
"surrender-1945"
],
"bg": "roc-terms",
"src": [
{
"t": "English Wikipedia：Marco Polo Bridge Incident",
"u": "https://en.wikipedia.org/wiki/Marco_Polo_Bridge_Incident"
}
]
},
{
"y": 1943,
"md": "12月1日",
"t": "開羅宣言發表",
"key": "cairo-1943",
"s": "開羅宣言",
"b": "1943年11月22日至26日，中華民國、美國與英國在開羅舉行會議；12月1日公報以廣播發表，其中寫道，日本從中國竊取的領土，如東北、福爾摩沙（台灣）與澎湖列島，應歸還中華民國。",
"track": "政治外交",
"conf": "disputed",
"aliases": [
{
"term": "開羅宣言／開羅公報（Cairo Communiqué）",
"note": "英文維基百科寫宣言是以公報的形式廣播發表；稱「宣言」或「公報」的法律意涵，各方看法不同。"
}
],
"note": "原文（耶魯 Avalon 專案）：「all the territories Japan has stolen from the Chinese, such as Manchuria, Formosa, and the Pescadores, shall be restored to the Republic of China」，發布日12月1日。法律地位並列：美國視為意向聲明；1950年11月美國國務院稱尚無恢復台澎主權的正式行為；1955年邱吉爾稱它只是共同目的的聲明；2014年中華民國外交部（引馬英九）主張宣言具條約地位、有拘束力；中華人民共和國與中華民國都引為一個中國原則的依據；部分主張台灣獨立的人稱它沒有拘束力。另有論者指出，因為內戰，不清楚應歸還給哪個中國政府。各方的完整論述，目前未見可引用來源。",
"rel": [
"potsdam-1945",
"surrender-1945",
"takeover-1945",
"sf-1951",
"taipei-treaty-1952"
],
"bg": "takeover",
"src": [
{
"t": "耶魯法學院 Avalon Project：Cairo Conference, 1943",
"u": "https://avalon.law.yale.edu/wwii/cairo.asp"
},
{
"t": "English Wikipedia：1943 Cairo Declaration",
"u": "https://en.wikipedia.org/wiki/1943_Cairo_Declaration"
},
{
"t": "English Wikipedia：Cairo Conference",
"u": "https://en.wikipedia.org/wiki/Cairo_Conference"
}
]
},
{
"y": 1945,
"md": "7月26日",
"t": "波茨坦公告發表",
"key": "potsdam-1945",
"s": "波茨坦公告",
"b": "1945年7月26日，美國、英國與中華民國三國發表波茨坦公告，要求日本投降；其中一條寫道：「開羅宣言之條件必將實施」（The terms of the Cairo Declaration shall be carried out）。",
"track": "政治外交",
"conf": "verified",
"note": "發布者列杜魯門、邱吉爾與蔣介石；英文維基百科寫，蔣介石與邱吉爾的「簽名」都是杜魯門的筆跡。條文編號第8條。公告發表本身沒有爭議；開羅宣言與波茨坦公告對台灣主權歸屬的意義，各方解讀不同，見「開羅宣言發表」。",
"rel": [
"cairo-1943",
"surrender-1945",
"takeover-1945",
"sf-1951"
],
"bg": "takeover",
"src": [
{
"t": "English Wikipedia：Potsdam Declaration",
"u": "https://en.wikipedia.org/wiki/Potsdam_Declaration"
},
{
"t": "English Wikipedia：1943 Cairo Declaration",
"u": "https://en.wikipedia.org/wiki/1943_Cairo_Declaration"
},
{
"t": "耶魯法學院 Avalon Project：柏林（波茨坦）會議文件",
"u": "https://avalon.law.yale.edu/20th_century/decade17.asp"
}
]
},
{
"y": 1946,
"md": "6月26日",
"t": "國共全面內戰爆發",
"key": "civil-war-1946",
"s": "國共內戰",
"b": "英文維基百科以1946年6月26日為國共全面內戰爆發的日期；在此之前有1945年8月28日至10月10日的重慶談判，以雙十協定告終，但沒有產生具體結果。",
"track": "政權",
"ctx": "中國大陸",
"conf": "disputed",
"aliases": [
{
"term": "國共內戰／解放戰爭",
"note": "中共史學稱「解放戰爭」（英文維基百科）；台灣方面的稱法，目前未見可引用來源。"
}
],
"note": "起點有多種算法：英文維基百科寫內戰在日本戰敗迫近時就重新爆發，並把內戰分成1927至1937年、1945至1949年兩段；全面戰爭的日期，各家不同。重慶談判與1946年1月協議的細節、1946年6月26日的具體事件，目前未見可引用來源。戰場的勝敗與傷亡數字，目前未見可引用來源。",
"rel": [
"surrender-1945",
"const-1946",
"resign-1949"
],
"bg": "retreat1949",
"src": [
{
"t": "English Wikipedia：Chinese Civil War",
"u": "https://en.wikipedia.org/wiki/Chinese_Civil_War"
}
]
},
{
"y": 1949,
"md": "1月21日",
"t": "蔣介石引退，李宗仁代理總統",
"key": "resign-1949",
"s": "蔣引退",
"b": "1949年1月21日，蔣介石宣布引退，副總統李宗仁代行總統職權。英文維基百科記載，1月19日蔣已告訴李宗仁他將退休；李宗仁擔任代總統的期間是1949年1月21日至11月20日。",
"track": "政權",
"ctx": "中國大陸",
"conf": "common",
"aliases": [
{
"term": "引退／下野／stepped down",
"note": "各方用詞不同；英文維基百科寫他「stepped down」，但沒有正式辭去總統職務。"
}
],
"note": "蔣沒有正式辭職；他的其他職位與實際角色，目前未見可引用來源。李宗仁後來的行蹤：5月8日返廣州、10月13日離廣州赴桂林、11月20日由南寧飛香港（稱就醫）、12月5日離港赴美。",
"rel": [
"civil-war-1946",
"yangtze-1949",
"inauguration-1948",
"taipei-1949"
],
"who": [
"chiang-kai-shek"
],
"bg": "retreat1949",
"src": [
{
"t": "English Wikipedia：Li Zongren",
"u": "https://en.wikipedia.org/wiki/Li_Zongren"
},
{
"t": "English Wikipedia：Yangtze River Crossing campaign",
"u": "https://en.wikipedia.org/wiki/Yangtze_River_Crossing_Campaign"
}
]
},
{
"y": 1949,
"md": "4月20日",
"t": "渡江戰役，南京易手",
"key": "yangtze-1949",
"s": "渡江戰役",
"b": "1949年4月20日夜，人民解放軍開始渡過長江；英文維基百科記載，4月20日至21日約30萬人渡江，4月23日解放軍攻佔南京；整場戰役的資訊框寫為4月20日至6月2日。",
"track": "政權",
"ctx": "中國大陸",
"conf": "common",
"aliases": [
{
"term": "渡江戰役",
"note": "中華人民共和國的稱法；台灣方面的稱法，目前未見可引用來源。"
}
],
"note": "日期與人數依英文維基百科。雙方兵力、傷亡與國民政府遷廣州的時間，目前未見可引用來源。",
"rel": [
"resign-1949",
"prc-1949",
"taipei-1949"
],
"bg": "retreat1949",
"src": [
{
"t": "English Wikipedia：Yangtze River Crossing campaign",
"u": "https://en.wikipedia.org/wiki/Yangtze_River_Crossing_Campaign"
}
]
},
{
"y": 1683,
"md": "7月",
"t": "澎湖海戰：清軍擊敗鄭軍",
"key": "penghu-1683",
"s": "澎湖海戰",
"b": "1683年7月，清軍水師提督施琅在澎湖擊敗鄭氏政權的劉國軒；英文維基百科記載清軍238艘船、21,000人，鄭軍200餘艘、20,000人，鄭軍約12,000人死亡。澎湖失守後，鄭克塽投降。",
"track": "政權",
"conf": "common",
"aliases": [
{
"term": "鄭氏政權／東寧王國／延平王國",
"note": "稱法不同：英文維基百科的條目名稱是 Kingdom of Tungning（東寧王國），並列出鄭氏王朝、延平王國等稱法；台灣常稱明鄭或鄭氏政權，「明鄭」目前未見可引用來源。各方稱法並列，不下評價。"
}
],
"note": "日期與兵力各來源不一致，並列：英文維基百科 Battle of Penghu 的摘要欄寫7月10至16日，正文寫清軍7月8日出航、7月17日海戰結束、7月18日占領澎湖；國防部網站的文章寫7月8日自銅山島出發、7月10日進攻、7月16日總攻；Taipei Times 專欄寫施琅6月率約300艘戰船到澎湖，約一週內獲勝（可能是農曆）。鄭軍兵力，摘要欄寫20,000人，正文寫澎湖有30,000人。西曆與農曆的對照，目前未見可引用來源。",
"rel": [
"surrender-1683",
"prefecture-1684"
],
"bg": "rulers",
"src": [
{
"t": "English Wikipedia：Battle of Penghu",
"u": "https://en.wikipedia.org/wiki/Battle_of_Penghu"
},
{
"t": "國防部網站：施琅攻台相關研究文章",
"u": "https://www.mnd.gov.tw/File/32218"
},
{
"t": "Taipei Times 2017-08-13：Taiwan in Time（Aug. 14 to Aug. 20）",
"u": "https://www.taipeitimes.com/News/feat/archives/2017/08/13/2003676424"
}
]
},
{
"y": 1683,
"md": "8月18日",
"t": "鄭克塽向施琅投降",
"key": "surrender-1683",
"s": "鄭克塽降清",
"b": "1683年，鄭克塽向清朝投降，鄭氏政權結束。Taipei Times 專欄與國防部文章寫8月18日施琅接受鄭克塽的降書；英文維基百科 Kingdom of Tungning 的摘要欄把投降日列為9月5日（第二份降表送抵澎湖），10月5日施琅一行抵達台灣。投降後沒有人被處決，鄭克塽被封為漢軍公、編入八旗，在台的17位明朝宗室被送回大陸。",
"track": "政權",
"conf": "disputed",
"note": "投降日期有三種寫法並列：8月18日（Taipei Times、國防部）、9月5日（英文維基百科 Kingdom of Tungning 的摘要欄，並寫第二份投降書抵澎湖）、10月（國防部文章的另一段寫鄭克塽10月降清，與同一篇的8月18日不一致）。處置依英文維基百科（Battle of Penghu 與 Kingdom of Tungning 兩篇一致）。西曆與農曆的差異，目前未見可引用來源。",
"rel": [
"penghu-1683",
"prefecture-1684"
],
"src": [
{
"t": "Taipei Times 2017-08-13：Taiwan in Time（Aug. 14 to Aug. 20）",
"u": "https://www.taipeitimes.com/News/feat/archives/2017/08/13/2003676424"
},
{
"t": "國防部網站：施琅攻台相關研究文章",
"u": "https://www.mnd.gov.tw/File/32218"
},
{
"t": "English Wikipedia：Kingdom of Tungning",
"u": "https://en.wikipedia.org/wiki/Kingdom_of_Tungning"
},
{
"t": "English Wikipedia：Battle of Penghu",
"u": "https://en.wikipedia.org/wiki/Battle_of_Penghu"
}
]
},
{
"y": 1684,
"md": "4月",
"t": "清朝設台灣府，隸屬福建省",
"key": "prefecture-1684",
"s": "設台灣府",
"b": "1684年4月，台灣正式併入清朝，設台灣府隸屬福建省，下轄臺灣、諸羅、鳳山三縣。",
"track": "政權",
"conf": "common",
"note": "月份依 Taipei Times（4月14日台灣成為福建省的一部分）與英文維基百科（1684年4月正式併入）；英文維基百科另寫最後的建議於5月27日呈上，之後獲康熙批准，沒有給批准日期，兩者的關係目前未見可引用來源。官方的詔令與地方志原文，目前未見可引用來源。",
"rel": [
"surrender-1683",
"migration-1684",
"boundary-1722"
],
"bg": "migration",
"src": [
{
"t": "English Wikipedia：Taiwan under Qing rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Qing_rule"
},
{
"t": "Taipei Times 2017-08-13：Taiwan in Time（Aug. 14 to Aug. 20）",
"u": "https://www.taipeitimes.com/News/feat/archives/2017/08/13/2003676424"
}
]
},
{
"y": 1684,
"md": "",
"t": "渡台限制：禁攜眷與家眷入台的反覆（1684–1788）",
"key": "migration-1684",
"s": "渡台限制",
"b": "1684年起，清朝規定到台灣要有許可、不准攜帶家眷（英文維基百科）；Taipei Times 另寫禁止東粵（含客家）的移民。學術論文整理，家眷入台在1683至1788年的105年中，至少68年被禁止，1732年首次有限制開放，乾隆二十五年五月二十六日至二十六年五月二十五日（農曆，約1760至1761年）開放一年，1788年再度開放，此後不再反覆。",
"track": "政權",
"topic": "社會族群",
"conf": "disputed",
"aliases": [
{
"term": "渡台禁令",
"note": "通行稱法；英文維基百科 Taiwan under Qing rule 沒有用這個詞，只列出入台須許可、禁止攜眷的規定。"
}
],
"note": "解除的年份有兩種說法並列：英文維基百科寫1875年所有入台限制廢止；學術論文寫家眷入台的限制在1788年解除，後者談的是家眷。「渡台須給照」「粵地不准渡台」的條文與頒布年份，來源沒有逐條寫出，目前未見可引用來源。1761年唯一的出發港是廈門，1784年起從台灣返回大陸可免許可，但只能由鹿耳門出港（英文維基百科）。",
"rel": [
"prefecture-1684",
"shen-1875"
],
"bg": "migration",
"src": [
{
"t": "English Wikipedia：Taiwan under Qing rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Qing_rule"
},
{
"t": "方圣华：康雍乾時期主要移民地區的家眷移入政策比較——兼駁清政府對台治理特殊化與消極化觀點（《廣州社會主義學院學報》2017年第2期）",
"u": "https://core.ac.uk/download/323952216.pdf"
},
{
"t": "Taipei Times 2017-08-13：Taiwan in Time（Aug. 14 to Aug. 20）",
"u": "https://www.taipeitimes.com/News/feat/archives/2017/08/13/2003676424"
}
]
},
{
"y": 1722,
"md": "",
"t": "劃定番界，立碑隔離",
"key": "boundary-1722",
"s": "劃界立碑",
"b": "1722年，清朝把劃定漢人與原住民的界線訂為官方政策，立碑54座；界線在1750、1760、1784、1790年又重新劃定。",
"track": "政權",
"topic": "社會族群",
"conf": "common",
"note": "英文維基百科只寫年份與座數；界線的位置、實際執行與對原住民與漢人的影響，目前未見可引用來源。「土牛溝」等名稱的由來，目前未見可引用來源。",
"rel": [
"prefecture-1684",
"migration-1684"
],
"bg": "migration",
"src": [
{
"t": "English Wikipedia：Taiwan under Qing rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Qing_rule"
}
]
},
{
"y": 1721,
"md": "",
"t": "朱一貴事件（1721）",
"key": "zhu-1721",
"s": "朱一貴事件",
"b": "1721年，朱一貴在今高雄內門一帶起事，攻下府城，自稱王；清廷派兵渡海平定，朱一貴被捕處死。",
"track": "政權",
"conf": "disputed",
"note": "日期在英文維基百科 Zhu Yigui 一文中前後不一致，並列：摘要欄寫「永和」年號起訖為1721年5月26日至7月30日；內文寫4月19日攻下竿津林一帶、5月1日稱王、6月16日清軍登陸、6月28日朱一貴被捕處死；摘要欄的死亡日期寫1722年2月22日。起事的原因與參加者的組成，目前未見可引用來源。",
"rel": [
"lin-1786",
"prefecture-1684"
],
"src": [
{
"t": "English Wikipedia：Zhu Yigui",
"u": "https://en.wikipedia.org/wiki/Zhu_Yigui"
}
]
},
{
"y": 1786,
"md": "",
"t": "林爽文事件（1786–1788）",
"key": "lin-1786",
"s": "林爽文事件",
"b": "1786年清朝官員查禁天地會，1787年1月16日林爽文殺官起事，根據地在彰化；清廷派福康安率兩萬兵力平定，1788年結束。",
"track": "政權",
"conf": "common",
"note": "起訖並列：摘要欄寫1786至1788年，開頭段寫1787至1788年。人數並列：叛軍一度達5萬人，最多約30萬人參與；清軍摘要欄寫1786年1萬人、1788年福康安2萬人，內文另寫動用不到4萬人。雙方傷亡，英文維基百科寫不明。英文維基百科寫林爽文於1788年2月10日被清軍俘獲；處決的日期，目前未見可引用來源。",
"rel": [
"zhu-1721",
"migration-1684"
],
"src": [
{
"t": "English Wikipedia：Lin Shuangwen rebellion",
"u": "https://en.wikipedia.org/wiki/Lin_Shuangwen_rebellion"
}
]
},
{
"y": 1858,
"md": "6月",
"t": "《天津條約》：台南、淡水列為通商口岸",
"key": "tianjin-1858",
"s": "天津條約",
"b": "1858年6月，清朝與各國簽訂《天津條約》，台南（舊稱 Taiwan-fu）與淡水被列為新增的通商口岸；英文維基百科記載，淡水在1862年依條約對外貿易開放。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"note": "各國定稿日不同：俄6月13日、美6月18日、英6月26日、法6月27日。1860年《北京條約》的英文維基百科條目沒有提到台灣；淡水1860年開港的說法，兩篇英文維基百科都沒有寫，目前未見可引用來源。安平與打狗的開港年份，目前未見可引用來源。",
"rel": [
"mudan-1874",
"sino-french-1884"
],
"bg": "rulers",
"src": [
{
"t": "English Wikipedia：Treaty of Tientsin（Treaty of Tianjin）",
"u": "https://en.wikipedia.org/wiki/Treaty_of_Tianjin"
},
{
"t": "English Wikipedia：Tamsui District",
"u": "https://en.wikipedia.org/wiki/Tamsui"
}
]
},
{
"y": 1874,
"md": "",
"t": "牡丹社事件：日本出兵南台灣",
"key": "mudan-1874",
"s": "牡丹社事件",
"b": "1871年12月，琉球宮古島的船隻遇颱風漂到台灣東南岸，54人遇害；1874年日本以此為由出兵南台灣。日方要求清朝負責，清朝以教化未及該地為由拒絕。",
"track": "政治外交",
"conf": "disputed",
"aliases": [
{
"term": "牡丹社事件／八瑤灣事件／宮古島島民遭難事件／琉球漂流民殺害事件",
"note": "各方稱法不同：英文維基百科列出 Mudan incident、中文「八瑤灣事件」、日文「宮古島島民遭難事件」或「琉球漂流民殺害事件」；同一篇並註明案發地在高士佛（Kuskus），不在牡丹。"
}
],
"note": "日期：1871年11月30日四艘船離開首里，12月12日遇颱風，12月17日66人上岸，12月18日在高士佛遇害，12名倖存者獲救。出兵的月份、清日談判與賠款金額、1874年北京專約，英文維基百科沒有寫，目前未見可引用來源。琉球的歸屬與國際法意義，各方說法不同，目前未見可引用來源。",
"rel": [
"shen-1875",
"tianjin-1858"
],
"bg": "rulers",
"src": [
{
"t": "English Wikipedia：Mudan incident",
"u": "https://en.wikipedia.org/wiki/Mudan_incident"
},
{
"t": "English Wikipedia：Taiwan under Qing rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Qing_rule"
}
]
},
{
"y": 1875,
"md": "",
"t": "沈葆楨改革：設台北府、恆春縣，廢除入台限制",
"key": "shen-1875",
"s": "沈葆楨治台",
"b": "1874年牡丹社事件後，沈葆楨奉命來台；英文維基百科記載，1875年清朝在北部設台北府、南部設恆春縣，並廢除入台的各項限制。沈葆楨提升了2府、4廳、4縣的建置，也對原住民發動軍事行動。",
"track": "政權",
"conf": "common",
"note": "英文維基百科 Shen Baozhen 一文只寫他親自赴台、改革行政，未寫赴台年份與恆春縣、台北府；設府縣與廢除限制的年份來自 Taiwan under Qing rule 的年表。「開山撫番」的內容與對原住民的影響，目前未見可引用來源。",
"rel": [
"mudan-1874",
"migration-1684",
"province-1885"
],
"who": [
"shen-baozhen"
],
"bg": "rulers",
"src": [
{
"t": "English Wikipedia：Shen Baozhen",
"u": "https://en.wikipedia.org/wiki/Shen_Baozhen"
},
{
"t": "English Wikipedia：Taiwan under Qing rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Qing_rule"
}
]
},
{
"y": 1884,
"md": "8月5日",
"t": "清法戰爭在台灣：基隆與淡水之役",
"key": "sino-french-1884",
"s": "清法戰爭",
"b": "1884年8月5日，法國艦隊砲擊基隆的砲台；法軍登陸後因劉銘傳率軍到來，8月6日重新上船。10月1日法軍約1,800名海軍陸戰隊登陸基隆；10月8日法軍攻淡水，被孫開華部擊退。之後法軍對基隆、淡水、台南、打狗等台灣港口實施有限封鎖。",
"track": "政治外交",
"conf": "common",
"note": "英文維基百科的清法戰爭條目寫戰爭期間為1884年8月22日至1885年4月4日。人數並列：10月1日登陸基隆的法軍，Sino-French War 與 Liu Mingchuan 兩篇英文維基百科寫1,800人，Tamsui District 一篇的註腳寫2,250人。英文維基百科 Sino-French War 寫雙方沒有正式宣戰；另有說法稱清廷於1884年8月26日宣戰，這一說的來源目前未見可引用。清軍與法軍的兵力、停戰與條約的日期，目前未見可引用來源。",
"rel": [
"province-1885",
"shen-1875"
],
"who": [
"liu-mingchuan"
],
"bg": "rulers",
"src": [
{
"t": "English Wikipedia：Sino-French War",
"u": "https://en.wikipedia.org/wiki/Sino-French_War"
},
{
"t": "English Wikipedia：Liu Mingchuan",
"u": "https://en.wikipedia.org/wiki/Liu_Mingchuan"
},
{
"t": "English Wikipedia：Tamsui District",
"u": "https://en.wikipedia.org/wiki/Tamsui"
}
]
},
{
"y": 1885,
"md": "10月12日",
"t": "台灣建省",
"key": "province-1885",
"s": "台灣建省",
"b": "Taipei Times 專欄寫，1885年10月12日清廷決定把台灣從福建分出，成為第20個省；1887年台灣正式成為獨立的省，劉銘傳是第一任巡撫（英文維基百科稱 first governor）。",
"track": "政權",
"conf": "disputed",
"note": "建省的年份並列：1885年決定分省（Taipei Times 2015）與1887年正式建省（英文維基百科 Taiwan under Qing rule 與 Liu Mingchuan、Taipei Times 2018）。省會也有不同寫法：英文維基百科 Liu Mingchuan 寫省會由台南移到今天的台中，台北是臨時省會、1893年成為正式省會；Taipei Times 2018 寫劉銘傳提議遷往台中因經費停止，邵友濂（至1894年）才把首府遷出台南，最後落在台北。上諭的原文，目前未見可引用來源。",
"rel": [
"shen-1875",
"sino-french-1884",
"railway-1891"
],
"who": [
"liu-mingchuan"
],
"bg": "rulers",
"src": [
{
"t": "Taipei Times 2015-10-11：Taiwan in Time（Oct. 12 to Oct. 18）",
"u": "https://www.taipeitimes.com/News/feat/archives/2015/10/11/2003629762"
},
{
"t": "Taipei Times 2018-02-27：Gerrit van der Wees 專欄",
"u": "https://www.taipeitimes.com/News/feat/archives/2018/02/27/2003688328"
},
{
"t": "English Wikipedia：Liu Mingchuan",
"u": "https://en.wikipedia.org/wiki/Liu_Mingchuan"
},
{
"t": "English Wikipedia：Taiwan under Qing rule",
"u": "https://en.wikipedia.org/wiki/Taiwan_under_Qing_rule"
}
]
},
{
"y": 1891,
"md": "",
"t": "基隆至台北鐵路通車",
"key": "railway-1891",
"s": "基隆台北鐵路",
"b": "1891年，台灣第一條鐵路基隆至台北段（28.6公里）通車，使用9輛歐洲製造的蒸汽機車；英文維基百科 Taiwan Railway Administration 寫基隆至新竹段在清朝時期於1893年完成。同一年（1891年6月），劉銘傳以健康為由辭去台灣巡撫。",
"track": "政治外交",
"topic": "經濟產業",
"conf": "common",
"note": "鐵路計畫在1887年開始施工（劉銘傳條目）；兩篇英文維基百科所寫的通車與完工範圍不同，這裡並列。劉銘傳任內其他建設，英文維基百科 Liu Mingchuan 寫1887年台北城內裝設街燈、並鋪設淡水至福州的海底電報線；清賦的年份，目前未見可引用來源。「台灣鐵道之父」究竟是誰，各方說法不同，目前未見可引用來源核對。",
"rel": [
"province-1885",
"sino-french-1884"
],
"who": [
"liu-mingchuan"
],
"src": [
{
"t": "English Wikipedia：Liu Mingchuan",
"u": "https://en.wikipedia.org/wiki/Liu_Mingchuan"
},
{
"t": "English Wikipedia：Taiwan Railways Administration",
"u": "https://en.wikipedia.org/wiki/Taiwan_Railway_Administration"
}
]
}
];
const H=H_RAW.map((h,i)=>({id:"h"+i,...h})).sort((a,b)=>a.y-b.y||(parseInt(a.md)||0)-(parseInt(b.md)||0));
