// Sample word-to-explanation mapping
const wordDictionary = {
  "maretlo-puo": {
    explanation: "Ke 1. LEIKEMISA <br><br> 2. SEPHAFI <br><br> 3. SEBOLELI <br><br> 4. SEHOKELO <br><br> 5. SEFETOLI <br><br> 6. LEKHOTSA",
    audioSrc: 'audio/maretlopuo.mp3'},
  "leikemisa": {
    explanation: "Ke mofuta oa maretlo-puo oo e leng moetsi kapa moetsuoa polelong. MOHLALA<: Motho o fepa ntja. TLHALOSO: 'Motho' ke moetsi. MOHLALA: Ntja e fepuoa ke motho. TLHALOSO: 'motho' ke moetsuoa. Mefuta ea leikemisa ke LEREHO le SEEMELI.",
    audioSrc: 'audio/leikemisa.mp3'},
  "lereho": {
    explanation: "Ke lebitso la ntho efe kapa efe le LIKAROLO li peli HLOOHO le KUTU. MOHLALA: motho. THLALOSO: 'mo' ke HLOOHO 'tho' ke KUTU.",
    audioSrc: "audio/lereho.mp3"},
  "lereho_": {
    explanation: "Ke lebitso la ntho efe kapa efe. TOKOMANE e ka tlase e le hlalositse ka botlalo. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lereho.html'>Sheba PDF</a>",
    audioSrc: "audio/lereho.mp3"},
  "seemeli": {
    explanation: "Ke mofuta oa leikemisa se mefuta e 'meli SEEMELI-TU le SEEMELI-PHAFO",
    audioSrc: "audio/seemeli.mp3"},
  "seemeli-tu": {
    explanation: "Se ikamahanya le lethathamo la mareho. Mosebetsi oa sona ke HO EMELA LEREHO kapa HO TSOELLISA MOSEBETSI OA LEREHO. <br> MOHLALA: 1.Lineo o teng.  2.Eena o teng. <br> TLHALOSO: Polelo 1. ho sebelisitsoe lereho LINEO ebe Polelo 2. hosebelisitsoe seemeli-tu EENA",
    audioSrc: "audio/seemelitu.mp3"},
  "seemeli-phafo": {
    explanation: "Se na le mefuta e latelang. <br><br> 1. SEEMELI-TLHAKISO <br><br> 2. SEEMELI-THUO <br><br> 3. SEEMELI-TS'UPO",
    audioSrc: "audio/seemeliphafo.mp3"},
  "seakaretsi": {
    explanation: "Ke mofuta oa sephafi o phafang leikemisa ka ho bonts'a KAKARETSO. MOHLALA: Tsohle li tsamaile hantle. TLHALOSO: TSOHLE ke seakaretsi",
    audioSrc: "audio/seakaretsi.mp3"},
  "sehloai": {
    explanation: "Ke mofuta oa sephafi o phafang lereho ka hore se tle hang ka mora leikemisa. MOHLALA: Ngoana ea thotseng o teng. TLHALOSO: EA ke sehloai",
    audioSrc: "audio/sehloai.mp3"},
  "seqolli": {
    explanation: "Ke mofuta oa sephafi o phafang leikemisa ka ho bonts'a kapa ho batla mofuta oa leikemisa. MOHLALA: Ke motho mong ea keneng? TLHALOSO: MONG ke seqolli.",
    audioSrc: "audio/seqolli.mp3"},
  "sebali": {
    explanation: "Ke mofuta oa sephafi o phafang leikemisa ka ho bonts'a hore ntho eo ho buuoang ka eona ke eona feela ha ho e 'ngoe.",
    audioSrc: "audio/sebali.mp3"},
  "seruisa": {
    explanation: "Ke mofuta oa sephafi o phafang leikemisa ka ho bonts'a thuo. MOHLALA: Ngoana oa hae o teng. TLHALOSO: OA HAE ke seruisa",
    audioSrc: "audio/seruisa.mp3"},
  "lesupa": {
    explanation: "Ke mofuta oa sephafi o phafang leikemisa polelong ka ho lesupa. <br> MEFUTA: Haufi MOHLALA: Enoa Hojana MOHLALA: Eno Hole MOHLALA:Eane",
    audioSrc: "audio/lesupa.mp3"},
  "sehlakisi": {
    explanation: "Ke mofuta oa sephafi o hlakisang leikemisa 'me le hlaha kamr'a leikemisa. Se bopuoe ka LITUMELA TLHAKISO le LIKUTU TLHAKISO. MOHLALA: Ngoana e motle o teng. TLHALOSO: E MOTLE ke ke sehlakisi E MO- ke tumala tlakiso -TLE ke kutu tlhakiso.",
    audioSrc: "audio/sehlakisi.mp3"},
  "litumela tlhakiso": {
    explanation: "1. E MO- <br><br> 2. BA BA- <br><br> 3. O MO- <br><br> 4. E MO- <br><br> 5. LE LE- <br><br> 6. A MA- <br><br> 7. SE SE- <br><br> 8. TSE N- <br><br> 9. E N- <br><br> 10. TSE N- <br><br> 14. BO BO- <br><br> 15. HO HO-",
    audioSrc: "audio/litumelatlhakiso.mp3"},
  "likutu tlhakiso": {
    explanation: "Li mefuta e meraro. <br> Tsa 'mala. MOHLALA: ts'ehla, soeu, ts'o. <br> Tsa sebopeho. MOHLALA: be, tle, tenya, lelele. <br> Tsa palo. MOHLALA: 'ngoe, beli, tharo, ne, hlano.",
    audioSrc: "audio/likututlhakiso.m4a"},
  "seboleli": {
    explanation: "Ke karolo ea polelo e bolelang se etsahalang kapa boenmo bo itseng. MEFUTA: SEBOLELI SA LEETSI le SEBOLELI SA BOEMO.",
    audioSrc: "audio/seboleli.mp3"},
  "seboleli sa leetsi": {
    explanation: "Ke karolo ea pele e fitisang molaetsa 'me se bopiloe ka HLOOHO-POLELI le KUTU-POLELI",
    audioSrc: "audio/sebolelisaleetsi.mp3"},
  "kutu ketso": {
    explanation: "Ke karolo ea seboleli e its'etlehileng ka leetsi, 'me ke eona e supang ketso. MEFUTA EA LIKUTU-KETSO: Ke tsa MAHLOMELA le tsa MATHOMO. Tsa mahlohomela li bopiloe ka motso-leetsi, katoloso le mohatlana -A-. Tsa mathomo li bopiloe ka motso-leetsi le mohatlana -A-",
    audioSrc: "audio/kutuketso.mp3"},
  "likutu-ketso tsa mahlomela": {
    explanation: "Ke 1. BOETSUOA <br><br> 2. KETSAHALO <br><br> 3. KETSETSO <br><br> 4. KETSISO <br><br> 5. KETSISISO <br><br> 6. KETSETSANO <br><br> 7. KETSOLLO <br><br> 8. PHETAKO",
    audioSrc: "audio/likutuketsotsamahlomela.mp3"},
  "kutu-ketso e ho boetsuoa": {
    explanation: "Kutu-ketso e ho boetsuoa e bonts'a hore ketso e etsoa ho ntho kapa motho emong. E sebelisa likatoloso tse latelang -O-, -UA-. MOHLALA: Ntja e bol(au)oa ke mang ka lesapo? TLHALOSO: Mona katoloso ke -UA",
    audioSrc: "audio/boetsuoa.mp3"},
  "kutu-ketso e ho ketsahalo": {
    explanation: "Kutu-ketso e ho KETSAHALO e supa boemo boo lereho la sehloho le leng ho lona. E sebelisa likatoloso tse latelang -AHAL- le -EH-. MOHLALA: Thabang  u bon(ahal)a a le mots'o haholo. TLHALOSO: Mona katolosa ke '-AHAL-'.",
    audioSrc: "audio/ketsahalo.mp3"},
  "kutu-ketso e ho ketsetso": {
    explanation: "Kutu-ketso tsena li supa hore ketso e etsetsoa ntho kapa motho emong hofapana le moetsi. E sebelisa likatoloso tsena -EL- le -ETS-. MOHLALA: Basali ba khib(el)a mokete. TLHALOSO: Mona katoloso ke -EL-.",
    audioSrc: "audio/ketsetso.mp3"},
  "kutu-ketso e ho ketsiso": {
    explanation: "Ke kutu-ketso e bonts'ang hore naa moetsi ke ke eena ea bakang ketso e hlalosoa ke motso-leetsi. E sebelisa likatoloso tse latelang -ES-, -TS'- le -IS-. MOHLALA: Bashamane ba ts'el(is)a khomo. TLHALOSO: Mona katolosoke -IS-",
    audioSrc: "audio/ketsiso.mp3"},
  "kutu-ketso e ho ketsisiso": {
    explanation: "Kutu-ketso eho ketsisiso e supa hore ketso e etsoa ka matla kapa haholo ka ts'oanelo hore ho ikholisoe hore efela e entsoe hantle E sebelisa katoloso ena -ISIS-. MOHLALA: Lineo o sheb(isi)sa mochine ha ngola. TLHALOSO: Mona katoloso ke -ISIS-",
    audioSrc: "audio/ketsisiso.mp3"},
 "kutu-ketso e ho ketsetsano": {
    explanation: "Mofuta ona o bonts'a hore ketso e hlalosoang ke motso-leetsi oa mathomo ea buseletsana, ea etsetsana. E sebelisa katoloso tsena -AN- le -AHAN-. MOHLALA: Bana ba rael(an)a bolo. TLHALOSO: Mona katoloso ke -AN-.",
    audioSrc: "audio/ketsetsano.mp3"},
  "kutu-ketso e ho ketsollo": {
    explanation: "Kutu-kesto e ho ketsollo e bolela hore ketso ea etsolloa. E sebelisa likatoloso tsena -OLL-, -OLOH-, -HO- le -OL-. MOHLALA: Ts'epo qhan(oll)a pere e fule. TLHALOSO: Mona katoloso ke -OLL-.",
    audioSrc: "audio/ketsollo.mp3"},
  "kutu-ketso e ho phetako": {
    explanation: "Kutu-kesto e ho phethako e supa hore ketso e etsoa ka matla a maholo, hape e supa hore ketso e etsoa ha ngata ke hore e phetoa ka makhetlo-khetlo. E sebelisa katoloso ena -AK-. MOHLALA: Mophehi o ngoath(ak)a lijo. TLHALOSO: Mona katoloso ke -AK-",
    audioSrc: "audio/phethako.mp3"},
  "mefuta ea mareho": {
    explanation: "Ke MAREHO-SEMELO, MAREHO-MAHLOMELO le MAREHO-MELATA",
    audioSrc: "audio/Lereho.m4a"},
  "mareho-semelo": {
    explanation: "Ke mareho a saleng a le joalo ho tloha sethathong. MOHLALA: Lejoe, mosali le sefate",
    audioSrc: "audio/Lereho.m4a"},
  "mareho semelo": {
    explanation: "Ke mareho a saleng a le joalo ho tloha sethathong. MOHLALA: Lejoe, mosali le sefate",
    audioSrc: "audio/Lereho.m4a"},
  "mareho-mahlomela": {
    explanation: "Ke mareho a bopuoeng ka maretlo-puo a mang. MOHLALA: Bomolimo TLHALOSO: bo(hlooho-theo) + Molimo(lereho)",
    audioSrc: "audio/Lereho.m4a"},
  "mareho mahlomela": {
    explanation: "Ke mareho a bopuoeng ka maretlo-puo a mang. MOHLALA: Bomolimo TLHALOSO: bo(hlooho-theo) + Molimo(lereho)",
    audioSrc: "audio/Lereho.m4a"},
  "mareho-melata": {
    explanation: "Ke mareho oohle ao re a kalimileng lipuong tse ling. MOHLALA: Fesetere, Fatuku le Tafole",
    audioSrc: "audio/Lereho.m4a"},
  "mareho melata": {
    explanation: "Ke mareho oohle ao re a kalimileng lipuong tse ling. MOHLALA: Fesetere, Fatuku le Tafole",
    audioSrc: "audio/Lereho.m4a"},
  "litumala tlhakiso": {
    explanation: "Ke 1.e mo- 2.ba ba- 3.o mo- 4.e me- 5.le le- 6.a ma- 7.se se- 8.tse n- 9.e N- 10.tse n- 14.bo bo- 15.ho ho-",
    audioSrc: "audio/Lereho.m4a"},
  "seboleli sa boemo": {
    explanation: "Ke mofuta oa seboleli o bonts'ang seo motho kapa ntho e leng sona e leng JOANG kapa HOKAE",
    audioSrc: "audio/Lereho.m4a"},
  "mefuta ea seboleli sa boemo": {
    explanation: "Ke BOEMO-TIEO, BOEMO-TLHAKISO le BOEMO-THUO",
    audioSrc: "audio/Lereho.m4a"},
  "boemo-tieo": {
    explanation: "Ke boemo bo bolelang boemo bo itseng ba motho kapa ntho.",
    audioSrc: "audio/Lereho.m4a"},
  "boemo tieo": {
    explanation: "Ke boemo bo bolelang boemo bo itseng ba motho kapa ntho.",
    audioSrc: "audio/Lereho.m4a"},
  "mefuta ea boemo-tieo": {
    explanation: "Ke BOEMO-TIEO MOTHO le BOEMO-TIEO NTHO.",
    audioSrc: "audio/Lereho.m4a"},
  "mefuta ea boemo tieo": {
    explanation: "Ke BOEMO-TIEO MOTHO le BOEMO-TIEO NTHO.",
    audioSrc: "audio/Lereho.m4a"},
  "boemo-tieo motho": {
    explanation: "Bo bolela boemo ba motho hore na motho ke eng kapa ke mang. Ke boemo boo lihlooho tsa bona e leng litumala-moetsi tsa 'mui le 'moisoa bonngoeng le bongateng. MOHLALA: SEHLOPHA 'Mui' BONNGOENG 'ke' BONGATENG 're' SEHLOPHA 'Muisoa' BONNGOENG 'u' BONGATENG 'le'",
    audioSrc: "audio/Lereho.m4a"},
  "boemo tieo motho": {
    explanation: "Bo bolela boemo ba motho hore na motho ke eng kapa ke mang. Ke boemo boo lihlooho tsa bona e leng litumala-moetsi tsa 'mui le 'moisoa bonngoeng le bongateng. MOHLALA: SEHLOPHA 'Mui' BONNGOENG 'ke' BONGATENG 're' SEHLOPHA 'Muisoa' BONNGOENG 'u' BONGATENG 'le'",
    audioSrc: "audio/Lereho.m4a"},
  "boemo tieo ntho": {
    explanation: "Ke boemo bo sebelisang 'Ke' e sehalo se phahameng, 'me ho se tumela-moetsi kaha ha ena bonngoe le bongata. MOHLALA: Ts'epo ke morena. TLHALOSO: 'ke' e sehalo se phameng",
    audioSrc: "audio/Lereho.m4a"},
  "boemo tieo-ntho": {
    explanation: "Ke boemo bo sebelisang 'Ke' e sehalo se phahameng, 'me ho se tumela-moetsi kaha ha ena bonngoe le bongata. MOHLALA: Ts'epo ke morena. TLHALOSO: 'ke' e sehalo se phameng",
    audioSrc: "audio/Lereho.m4a"},
  "boemo tlhalosi": {
    explanation: "Ke mofuta oa boemo boo hlooho ea bone e leng litumela-moetsi tsa lihlopha tsena kaofela. Bo batla ho hlalosa moetsi empa bo sa bolele hore na moesti ke mang ka ke eng. Bo sebelisa maretlo-puo a latelang: 1.Liemeli-phafo 2.Maeketsi.",
    audioSrc: "audio/Lereho.m4a"},
  "boemo-tlhalosi": {
    explanation: "Ke mofuta oa boemo boo hlooho ea bone e leng litumela-moetsi tsa lihlopha tsena kaofela. Bo batla ho hlalosa moetsi empa bo sa bolele hore na moesti ke mang ka ke eng. Bo sebelisa maretlo-puo a latelang: 1.Liemeli-phafo 2.Maeketsi.",
    audioSrc: "audio/Lereho.m4a"},
  "boemo-tlhalosi bo bopuoeng ka liemeli-tlhakisa": {
    explanation: "Bo bopiloeng ka SEEMELI-TLHAKISO: U motle ba seila-tsatsi, bo bopiloeng ka SEEMELI-TLHOAEO: O khopo, bo bopiloeng ka SEEMELI-PALO: Ke mong heso",
    audioSrc: "audio/Lereho.m4a"},
  "boemo tlhalosi bo bopuoeng ka liemeli-tlhakisa": {
    explanation: "Bo bopiloeng ka SEEMELI-TLHAKISO: U motle ba seila-tsatsi, bo bopiloeng ka SEEMELI-TLHOAEO: O khopo, bo bopiloeng ka SEEMELI-PALO: Ke mong heso",
    audioSrc: "audio/Lereho.m4a"},
  "boemo-tlhalosi bo bopuoeng ka maeketsi": {
    explanation: "Bo bopiloeng ka KEKETSO-SEBAKA: O thabeng o ilo roalla, bo bopiloeng ka KEKETSO-MOKHOA: Ho tjana ho se mamele likeletso.",
    audioSrc: "audio/Lereho.m4a"},
  "boemo tlhalosi bo bopuoeng ka maeketsi": {
    explanation: "Bo bopiloeng ka KEKETSO-SEBAKA: O thabeng o ilo roalla, bo bopiloeng ka KEKETSO-MOKHOA: Ho tjana ho se mamele likeletso.",
    audioSrc: "audio/Lereho.m4a"},
  "Boemo-thuo": {
    explanation: "Ke boemo bo bonts'ang ntho eo moetsi a e ruileng kapa e teng ho eena. Le bopiloe ka tumela-moetsi, na, keketso-khokelo(le), leikemisa. MOHLALA: Ke na le chelete. TLHALOSO: 'Ke' ke tumela-moetsi, na, 'le' ke keketso-khokelo, 'chelete' leikemisa. Bo botjoa ka maikemisa a latelang: Mareho, liemeli-tu le liemeli-phafo",
    audioSrc: "audio/Lereho.m4a"},
  "boemo thuo": {
    explanation: "Ke boemo bo bonts'ang ntho eo moetsi a e ruileng kapa e teng ho eena. Le bopiloe ka tumela-moetsi, na, keketso-khokelo(le), leikemisa. MOHLALA: Ke na le chelete. TLHALOSO: 'Ke' ke tumela-moetsi, na, 'le' ke keketso-khokelo, 'chelete' leikemisa. Bo botjoa ka maikemisa a latelang: Mareho, seemeli-tu le seemeli-phafo",
    audioSrc: "audio/Lereho.m4a"},
  "boemo-thuo bo bopuoeng ka lereho": {
    explanation: "MOHLALA: Re na le likhomo. TLHALOSO: Ho rueo lereho 'likhomo'",
    audioSrc: "audio/Lereho.m4a"},
  "boemo thuo bo bopuoeng ka lereho": {
    explanation: "MOHLALA: Re na le likhomo. TLHALOSO: Ho rueo lereho 'likhomo'",
    audioSrc: "audio/Lereho.m4a"},
  "boemo thuo bo bopuoeng ka seemeli-tu": {
    explanation: "MOHLALA: Ke na le sona. TLHALOSO: Ho rueo seemeli-tu 'sona'",
    audioSrc: "audio/Lereho.m4a"},
  "boemo-thuo bo bopuoeng ka seemeli-tu": {
    explanation: "MOHLALA: Ke na le sona. TLHALOSO: Ho rueo seemeli-tu 'sona'",
    audioSrc: "audio/Lereho.m4a"},
  "boemo thuo bo bopuoeng ka seemeli-phafo": {
    explanation: "MOHLALA: Ke na le e kholo. TLHALOSO: Ho rueo seemeli-tlhakiso 'e kholo' MOHLALA: o na le oa hae. TLHALOSO: Ho rueo seemeli-thuo 'ea hae' MOHLALA: Le na le tsee. TLHALOSO: Ho rueo seemeli-ts'upo 'le tsee'",
    audioSrc: "audio/Lereho.m4a"},
  "boemo-thuo bo bopuoeng ka seemeli-phafo": {
    explanation: "MOHLALA: Ke na le e kholo. TLHALOSO: Ho rueo seemeli-tlhakiso 'e kholo' MOHLALA: o na le oa hae. TLHALOSO: Ho rueo seemeli-thuo 'ea hae' MOHLALA: Le na le tsee. TLHALOSO: Ho rueo seemeli-ts'upo 'le tsee'",
    audioSrc: "audio/Lereho.m4a"},
  "sephafi": {
    explanation: "Ke lentsoe le hlalosang leikemisa 'me se kopanngoa le lona ke tumela-phafo. MEFUTA EA LONA: 1.Sehlakisi 2.Sebali 3.Seqolli 4.Lesupa 5.Seakaretsi 6.Sehloai 7.Seruisa",
    audioSrc: "audio/Lereho.m4a"},
  "sefetoli": {
    explanation: "Ke mofuta oa maretlo-puo o nang le mefuta e 'meli e leng LEEKETSI le SERE.",
    audioSrc: "audio/Lereho.m4a"},
  "leeketsi": {
    explanation: "Ke mofuta oa sefetoli o eketsang moelelo oa seboleli, sephafi le leetsi le leng polelong. MEFUTA EA LONA: 1.Keketso-nako 2.Keketso-sebaka 3.Keketso-mokhoa",
    audioSrc: "audio/Lereho.m4a"},
  "keketso-nako": {
    explanation: "Ke mofuta oa leeketsi o supang nako eo ketso e etsahalang, e etsahetseng kapa e tlang ho etsahala ka eona. MOHLALA: Bana ba fihlile ka khitla TLHALOSO: 'ka khitla' ke keketso-nako",
    audioSrc: "audio/Lereho.m4a"},
  "keketso nako": {
    explanation: "Ke mofuta oa leeketsi o supang nako eo ketso e etsahalang, e etsahetseng kapa e tlang ho etsahala ka eona. MOHLALA: Bana ba fihlile ka khitla TLHALOSO: 'ka khitla' ke keketso-nako",
    audioSrc: "audio/Lereho.m4a"},
  "keketso sebaka": {
    explanation: "Ke mofuta oa leeketsi o supang sebaka seo ketso e etsahalang, e etsahetseng kapa e tlang ho etsahala ho sona. MOHLALA: Mosali o tsoa patsing. TLHALOSO: 'patsing' ke keketso-sebaka",
    audioSrc: "audio/Lereho.m4a"},
  "keketso-sebaka": {
    explanation: "Ke mofuta oa leeketsi o supang sebaka seo ketso e etsahalang, e etsahetseng kapa e tlang ho etsahala ho sona. MOHLALA: Mosali o tsoa patsing. TLHALOSO: 'patsing' ke keketso-sebaka",
    audioSrc: "audio/Lereho.m4a"},
  "keketso mokhoa": {
    explanation: "Ke mofuta oa leeketsi o supang mokhoa oo ketso e etsoang, e etsahetseng kapa e tlang ho etsahala ka eona. MOHLALA: Ba binne hamonate. TLHALOSO: 'hamonate' ke keketso-mokhoa",
    audioSrc: "audio/Lereho.m4a"},
  "sere": {
    explanation: "Ke mofuta oa sefetoli o ka bonts'ang mokhoa oo ntho e leng ka oona kapa boemo ba ntho. MOHLALA: Maoto a hae a bata po! TLHALOSO: 'po!' ke sere. Se ka bonts'a MONKO, MOTSAMAO, 'MALA, MOLUMO kapa SEBOPEHO sa ntho kapa motho. ",
    audioSrc: "audio/Lereho.m4a"},
  "sere se bonts'ang monko": {
    explanation: "MOHLALA: Ho nkha phu! Ka matloaneng. TLHALOSO: 'phu!' ke sere se bonts'ang monko.",
    audioSrc: "audio/Lereho.m4a"},
  "sere se bonts'ang motsamao": {
    explanation: "MOHLALA: Moloi shoathi! shoathi! ka holima ntlo. TLHALOSO: 'shoathi! shoathi!' ke sere se bonts'ang motsamao",
    audioSrc: "audio/Lereho.m4a"},
  "sere se bonts'ang 'mala": {
    explanation: "MOHLALA: Ba apere baki tse ts'oeu toa!. TLHALOSO: 'toa!' ke sere se bonts'ang 'mala.",
    audioSrc: "audio/Lereho.m4a"},
  "sere se bonts'ang molumo": {
    explanation: "MOHLALA: Khalase bjara! fats'e. TLHALOSO: 'bjara!' ke sere se bonts'ang molumo.",
    audioSrc: "audio/Lereho.m4a"},
  "sere se bonts'ang sebopeho sa ntho kapa motho": {
    explanation: "MOHLALA: Barali ba hae ba batle tle!. TLHALOSO: 'tle!' ke sere se bonts'ang sebopeho.",
    audioSrc: "audio/Lereho.m4a"},
  "sehokelo": {
    explanation: "Ke lentsoe le kopanyang lipolelo tse fetang bonngoe. MEHLALA: Hobane, 'Me, Hoja. MOHLALA OA POLELO: Ke tsamaile hobane ke lapile. TLHALOSO: 'hobane' ke sehokelo.",
    audioSrc: "audio/Lereho.m4a"},
  "lilotho ka lijo": {
    explanation: "Ke litho tseo likarabo tsa tsona e leng lijo. MOHLALA: Ts'oeli moraheng KARABO: Lebese. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liloto ka lijo.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "liboko": {
    explanation: "Ke likarolo tseo Basotho ba ikarotseng ka tsona ho latela mekhoa le meetlo. MOHLALA: Bafokeng. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='bafokeng.html'>Bafokeng</a><br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='bakoena.html'>Bakoena</a><br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Bataung</a><br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Bahlakoana</a><br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Boakhatla</a><br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Makholokoe</a><br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Makhoakhoa</a> <br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Bathepu</a> <br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Matebele</a> <br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Batloung</a> <br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Baphuthing</a> <br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Bakubung</a> <br class='md:hidden'><br class='md:hidden'> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liboko.html'>Banareng</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lijo tsa basotho": {
    explanation: "Ke lijo tse ne li jeoa ke basotho mehleng ea pele che le hona joale ho ntsona le basotho ba ntseng ba lija . MOHLALA: Likhe. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lijo.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lilotho ka liselisoa": {
    explanation: "Ke litho tseo likarabo tsa tsona e leng lisebelisoa. MOHLALA: Senya ka 'mele' KARABO: Motlhotlo. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='Lilotho ka lisebelisoa.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lenyalo la basotho": {
    explanation: "Ke tsela eo Basotho ba neng ba nyalana ka eona mehleng ea pele. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lenyalo la basotho.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "mefuta ea bana": {
    explanation: "Bana ba ne aroloa kapa ba bitsoa ho latela naa ba hlaile joang, maemong a feng kapa kamor'a mang. MOHLALA: Fusi TLHALOSO: Ke ngoana a hlahileng kamor'a mafahla. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='mefuta_bana.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "liphoofolo tse hlaho": {
    explanation: "Ke liphoofolo tse phelang naheng. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liphoofolo tse hlaha.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lisebelisoa tsa lapeng": {
    explanation: "Ke lisebelisoa tse sebelisoang lapeng. MOHLALA: Motlhotlo. TLHALOSO: Ke sesebelisoa se arolang joala ho moroko. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='Lisebelisoa tsa lapeng.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "marena a sehloho": {
    explanation: "Ke marena a maholo-holo a libake tse fapaneng tsa Lesotho. MOHLALA: Morena oa Tsieng ke Cheif Masupha David Seeiso. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='Marena a se hlooho.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "litereke tsa lesotho": {
    explanation: "Litereke tsa Lesotho li leshome. MOHLALA: Maseru MOTSE-MOHOLO Maseru. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='litereke.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lebollo la bashemane": {
    explanation: "Ke moetlo moo bashamane ba etsoang banna ka fuoa litaelo tse matla le thuto. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lebollo la bashemane.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lipapali tsa sesotho": {
    explanation: "Ke papali tse neng li bapaloa ka lebaka ekaba ho chorisa kelello, ho bapalla lefereho kapa ho bapalla ketsahalo e itseng. MOHLALA: Lesokoana le bapaloa ho nesa pula. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lipapali tsa basotho.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lipina tsa sesotho": {
    explanation: "Ke pina tse neng li binoa kapa ho bapaloa ka lebaka ekaba ho chorisa kelello kapa ho bapalla lefereho  MOHLALA: Selia-lia ke pina ea lefereho. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lipina tsa basotho.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lesokoana": {
    explanation: "Ke papali e bapaloa ha hona le komello ka sepheo sa ho rapella pula. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='Papali ea lesokoana.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "selia-lia": {
    explanation: "Ke pina ea lefereho. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='Papali ea selia lia.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "mots'eo": {
    explanation: "Ke sebaka seo basali ba hlekelang lintho tsa ka tlung teng. TS'EBELISO: Lijana kapa lipitsa.",
    audioSrc: "audio/Lereho.m4a"},
  "kosene": {
    explanation: "Ke karolo ea monyako moo lemati le kenang.",
    audioSrc: "audio/Lereho.m4a"},
  "monyako": {
    explanation: "Ke moo batho ba kenang kapa batsoang le teng ekaba ho kena ka tlung kapa kamoreng. TS'EBELISO: Bokang o tsoile MONYAKO a matha. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='monyako.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lemati": {
    explanation: "(LEHLAFI) Ke karolo ea monyako e sebelisoang ho koala kapa ho bula monyako. TS'EBELISO: Bokang o robile LEMATI. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lemati.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lehlafi": {
    explanation: "(LEMATI) Ke lemati. TS'EBELISO: Bokang o robile LEHLAFI. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lemati.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "lebota": {
    explanation: "Ke karolo ea ntlo kapa moaho e ahuoang ka setene kapa majoe. TS'EBELISO: Ntate o aha LEBOTA ka setene. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lebota.html'>Penya mona</a>",
    audioSrc: "audio/Lereho.m4a"},
  "marulelo": {
      explanation: "Ke karolo ea ntlo kapa moaho e koaelang ntlo ka holimo. Ho ka sebelisoa masenke kapa joang(mohlomo) ho a etsa. TS'EBELISO: Moea o fefola MARULELO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='marulelo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "maballo": {
      explanation: "Ke karolo ea marulelo e entsoeng ka mapolanka kapa lithupa. TS'EBELISO: MABALLO a patsi ts'oarella ho feta a mapolanka. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='maballo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "fesetere": {
      explanation: "Ke karolo ea ntlo kapa moaho e entsoeng ka khalase mosebetsi oa eona ke ho kenya khanya ka tlung. TS'EBELISO: Bokang choatlile FESETERE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='fesetere.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "leifo": {
      explanation: "Ke sebaka seo ho besetsoang mollo ho sona e ka ba mollo o phehang, o besang nama kapa poone kapa mollo o oruoang ka tsela ea ifuthumetsa. Le ka ba ka ntle kapa ka tlung. Lisebelisoa tsa morao-rao tse kang setofo le tsona li na le leifo e ka ba la lelakabe kapa le futhumalang feela la motlakase. TS'EBELISO: LEIFO le tletse molora. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='leifo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "khampoto": {
      explanation: "Ke pitsa e kholo-kholo ha ngata e etsoa ka mokomo oa lesenke. TS'EBELISO: Bokang o phehile setoto ka KHAMPOTO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='khampoto.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "'malikotoana": {
      explanation: "Ke pitsa e nyane haholo. TS'EBELISO: Selemeng o phehile mahe ka 'MALIKOTOANA. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='malikotoana.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "pitsa": {
      explanation: "Ke sesebelisoa se sebelisoang ho pheha e ka ba pitsa ea fats'e kapa k'hasetorole. TS'EBELISO: Bokang o hlatsoa PITSA. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='pitsa.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "lijana": {
      explanation: "Ke lisebelisoa tse kang likotlo le mabekere. TS'EBELISO: Sephiwe o hlatsoa LIJANA. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lijana.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "khaba": {
      explanation: "Ke sesebelisoa se sebelisoang ho hoja, ho fuluoa lijo kapa tee. TS'EBELISO: Rethabile o ja ka KHABA. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='khaba.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "sekotlolo": {
      explanation: "Ke sesebelisoa se sebelisoang ho hojella, ho hlatsoetsa ljana. TS'EBELISO: SEKOTLOLO se se fubelu se lits'ila. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='sekotlolo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "lebekere": {
      explanation: "Ke sesebelisoa se sebelisoang ho noella e ka ba metsi, senoamapholi kapa joala. TS'EBELISO: LEBEKERE le lits'ila le lutse tafoleng. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lebekere.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
      "lihlopha tsa mareho": {
        explanation: "1. MO-, M- le NGO-. <br> MOHLALA: motho, 'muso le ngoana <br><br> 1.(a) Ke sehlopha sa mareho sieo. <br> MOHLALA: Bokang <br><br> 2. BA- le BE-. <br> MOHLALA: benghali(BE-) le batho(BA-) Ke sehlopha mareho a sehlopha sa pele bongateng. <br><br> 2.(a) Ke sehlopha sa mareho sieo bongateng. <br> MOHLALA: bo Bokang <br><br> 3. MO-, M- le NGO . <br> MOHLALA: mosamo, ngoaha le 'muso. Sehlopha sena se fapana le sehlopha sa pele ka hore lihlooho MO- le NGO- sehlopheng sa pele li sebelisoa ho bopa mareho motho <br><br> 4. ME-. <br> MOHLALA: mesamo. Ke sehlopha sa mareho a sehlopha sa boraro bongateng. <br><br>  5. LE-. <br> MOHLALA: lesaka. <br><br> 6. MA-. <br> MOHLALA: masaka Ke sehlopha sa mareho a sehlopha sa bohlano bongateng. <br><br> 7. SE-. <br> MOHLALA: selepe. <br><br> 8. LI-. <br> MOHLALA: lilepe Ke sehlopha sa mareho a sehlopha sa bosupa bongateng. <br><br> 9. N-. <br> MOHLALA: nko. <br><br> 10. LI-. <br> MOHLALA: linko Ke sehlopha sa mareho a sehlopha sa borobong bogateng. <br><br> 14. BO-. <br> MOHLALA: bolele. <br><br> 15. HO-. <br> MOHLALA: ho ja",
        audioSrc: "audio/Lereho.m4a"},
  "litho tsa 'mele": {
      explanation: "Ke likarolo tsa 'mele. MOHLALA: Nko. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='litho tsa mele.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "hlooho": {
      explanation: "Ke karolo ea 'mele e ts'etseng boko hape ho fumaneha lekarolo tse kang mahlo, nko, molomo le litsebe. Bongata ba teng ke lihlooho Hape lentoe lena le ka bolela ntho kapa motho ea laolang hape le ka bolela motho kapa ntho e qalang. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='hlooho.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "nko": {
      explanation: "Ke karolo ea 'mele e sebetsang haholo ho hema. Bongata ba teng ke LINKO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='nko.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "linko": {
      explanation: "Ke karolo ea 'mele e sebetsang haholo ho hema. Bongoe ba teng ke NKO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='nko.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "leihlo": {
      explanation: "Ke karolo ea 'mele e sebetsang haholo ho sheba. Bongata ba teng ke MAHLO. Motho kapa phoofo ha e le sefofu ho bo ho lemetse mahlo. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='leihlo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "mahlo": {
      explanation: "Ke karolo ea 'mele e sebetsang haholo ho sheba. Bongoe ba teng ke LEIHLO. Motho kapa phoofo ha e le sefofu ho bo ho lemetse mahlo. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='leihlo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "lints'i": {
      explanation: "Ke likarolo tsa 'mele tse ka holimo ho mahlo. Bongoe ba teng ke NTS'I. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lintsi.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "molomo": {
      explanation: "(LIPOUNAMA)Ke karolo ea 'mele e sebelisoang ho ja, ho hema le ho meta. Bongata ba teng ke MELOMO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='molomo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "lipounama": {
      explanation: "Ke molomo. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='molomo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "selelu": {
      explanation: "Ke karolo ea sefahleho e ka tlasa molomo moo ho hlahang litelu ho batho ba banna che le basali ntse ba hlaha litelu. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='selelu.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "litelu": {
      explanation: "Ke moriri kapa boea bo hlahang selelung. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='litelu.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "tsebe": {
      explanation: "Ke karolo ea 'mele e sebelisoang ho utloa. Bongata ba teng ke LITSEBE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='tsebe.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "litsebe": {
      explanation: "Ke karolo ea 'mele e sebelisoang ho utloa. Bongoe ba teng ke TSEBE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='tsebe.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "fonane": {
      explanation: "Ke bo ka morao ba hlooho. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='fonane.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "molala": {
      explanation: "Ke karolo e pakeng tsa hlooho le mahetla. <br><br> <br><br> <a class='bg-sky-400 py-2 text-center px-2 text-white rounded-md' href='molala.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "sekolo": {
      explanation: "(MOHANO)Ke bo ka morao ba molala. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='sekotlo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "mohano": {
      explanation: "(SEKOTLO)Ke bo ka morao ba molala. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='sekotlo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "lehetla": {
      explanation: "Ke qetello ea sephaka ka letsoho. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lehetla.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "phatla": {
      explanation: "Ke karolo e lipakeng tsa qalo ea moriri le lints'i. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='phatla.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "bebebe": {
      explanation: "Ke litelu tse ka tlase ho molomo. TS'EBELISO: Ntate o kuta BEBEBE ka makhethe. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='bebebe.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "meno": {
      explanation: "Ke karolo ea 'mele e sebelisoang ho ho loma le ho hlafuna lijo. TS'EBELISO: Bokang o opeloa ke MENO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='meno.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "leino": {
      explanation: "Ke bongoe ba MENO. Le sebelisoa ho loma kapa ho hlafunya lijo. TS'EBELISO: Sephiwe o tsoa ho nts'a LEINO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='leino.html'>Penya mona</a>",
      audioSrc: "audio/leino.m4a"},
  "mahanana": {
      explanation: "Ke bo ka holimo ba lehono moo linama li leng bonolo. TS'EBELISO: Bokang rurohile MAHANANA.",
      audioSrc: "audio/leino.m4a"},
  "'metso": {
      explanation: "Ke qetello ea lehano. TS'EBELISO: Sephiwe o ts'oeroe ke 'METSO.",
      audioSrc: "audio/leino.m4a"},
  "lehano": {
      explanation: "Ke bo ka hare ba molomo. Ho na le li karolo tse kang meno le lelemo. TS'EBELISO: Bokang o tsukunya LEHANO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lehano.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "leleme": {
      explanation: "Ke karolo e ka hare ho lehano. Le sebetsa haholo ho latsoa lintho. TS'EBELISO: Sephiwe o tsoele liso LELEMENG. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='leleme.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "qoqotho": {
      explanation: "(KOENYALEBELE) Ke lefufuru le ka hare ho molala ka tlasa 'metso. TS'EBELISO: Lijo li lutse Sephiwe QOQOTHONG LELEMENG. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='qoqotho.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "koenyalebele": {
      explanation: "Ke qoqothong. TS'EBELISO: Sephiwe o lutse Bokang KOENYALEBELE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='qoqotho.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "sefuba": {
      explanation: "Ke karolo e ka tlase ho molala. Hangata eba le nama e ngata ts'uts'u kapa lits'ika. Ho batho ba basali ke sebaka seo matsoele a leng ho sona. TS'EBELISO: Peo o SEFUBA se lits'i-ts'ika. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='sefuba.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "matsoele": {
      explanation: "Ke setho sa 'mele se fumanehang ho basali le ho liphoofolo tse ts'ehali. Se sebelisoa ho nyants'a. TS'EBELISO: MATSOELE a Refiloe a sa emele. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='matsoele.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "letsoele": {
      explanation: "Ke bongoe ba matsoele. Le sebelisoa ho nyants'a. TS'EBELISO: Nthabiseng o rurohile LETSOELE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='letsoele.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "mehlare": {
      explanation: "Ke meno a sephara. TS'EBELISO: Sephiwe o opeloa ke  MEHLARE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='mehlare.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "mohlare": {
      explanation: "Ke bongoe ba mehlare. TS'EBELISO: Sephiwe o opeloa ke  MOHLARE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='leino.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "lemeno la ntja": {
      explanation: "Ke leino le motsu ho feta a mang. TS'EBELISO: Sephiwe o nts'itse LEMENO LA NTJA. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lantja.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "leleme le nyane": {
      explanation: "Ke nama e leketleng 'metsong. TS'EBELISO: Sephiwe o ts'ehile hoo LELEME LE NYANE le haileng. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lelenyane.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "mats'oafo": {
      explanation: "Ke karolo engoe ea likahre e fumaneheng ke sefubeng. Mosebetsi oa eona ke ho thusa ho hema. TS'EBELISO: Sephiwe o na le bothata ba MATS'OAFO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='matsoafo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "pelo": {
      explanation: "Ke karolo engoe ea likahre e fumaneheng ke sefubeng. Mosebetsi oa eona ke ho pompa kapa hona ho suthumetsa mali ho ea likarolong tsohle tsa 'mele. TS'EBELISO: PELO ea Bokang e otla ka matla. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='pelo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "likhopo": {
      explanation: "Ke masapo a sireletsang sefuba le karolo ea mpa. TS'EBELISO: Sephiwe o robehile LIKHOPO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='likhopo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "mpa": {
      explanation: "Ke engoe ea li karolo tsa 'mele eo ka hare ho eona ho fumanehang likahare tse kang mala le sebete.. TS'EBELISO: Sephiwe o MPA e tenga <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='mpa.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "moholu": {
      explanation: "Ke karolo ea likahare eo lijo li fihlelang teng ha li tsoa ka hanong. Mosebetsi oa teng ke ho etsa karolo engoe ea ts'ilo ea lijo TS'EBELISO: Papa ke MOHOLU e monate. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='moholu.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "sebete": {
      explanation: "Ke karolo ea likahare e hloekisang mali. TS'EBELISO: Bokang o na le bathata ba SEBETE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='sebete.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "nyoko": {
      explanation: "Ke karolo ea likahare e ts'elang lero le le tala le babang. Mosebetsi oa lero leo ke ho thusana ts'ilong ea lijo. TS'EBELISO: Sephiwe o qhalanetse NYOKO ka mpeng. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='nyoko.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "manyeme": {
      explanation: "Ke karolo ea likahare e thusang ts'ilong ea lijo. Motho a nang le lefu tsoekere MANYEME a be a na le bothata. TS'EBELISO: Sephiwe o na le bothata ba MANYEME hoo ngake e ilng ea mofa lihlare tsa tsoekere. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='manyeme.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "mala": {
      explanation: "Ke karolo ea likahare e thusang ho qelisa ts'ilong ea lijo le hore li monyele maling. TS'EBELISO: Bokang o ts'oeroe ke mala. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='mala.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "mokokotlo": {
      explanation: "Ke lesapo le ka morao ho 'mele le tlohang hloohong ho isa thekeng. Lentsoe lena le ka bolela bo ka morao ba 'mele. TS'EBELISO: Bokang o ts'oeroe ke MOKOKOTLO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='mokokotlo.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "liphieo": {
      explanation: "Ke karolo ea likahare eo mosebetsi oa teng e le ho hloekisa mali le ho laola metsi maling. TS'EBELISO: Sephiwe o ts'oeroe ke LIPHIEO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liphio.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "liatla": {
      explanation: "Ke karolo ea letsoho e nang le menoana. TS'EBELISO: Sephiwe o opa LIATLA. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liatla.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "seatla": {
      explanation: "Ke karolo ea letsoho e nang le menoana. TS'EBELISO: Sephiwe o phahamisitse SEATLA. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='liatla.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "sephaka": {
      explanation: "Ke karolo ea letsoho ea ho tloha seatleng ho isa le hetleng. TS'EBELISO: Sephiwe o opeloa ke SEPHAKA. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='sephaka.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "setsu": {
      explanation: "Ke lenonyeletso le bohareng ba letsoho. TS'EBELISO: Sephiwe o robehile SETSU. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='setsu.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "letheka": {
      explanation: "Ke moo mokokotlo o fellang teng. Ke moo karolo e ka holimo ea 'mele e kopanang e ka tlase. TS'EBELISO: Ke opeloa ke LETHEKA. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='letheka.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "libono": {
      explanation: "Ke linama tse ka morao ka tlase ho lethka. TS'EBELISO: Bokang o LIBONO li kholo. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='libono.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "senya": {
      explanation: "Ke karolo ea likahare e bolokang moroto. TS'EBELISO: Bokang o opeloa ke SENYA. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='senya.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "letsoho": {
      explanation: "Ke karolo ea ho tloha monoaneng ho isa lehetleng. TS'EBELISO: Bokang o robehile LETSOHO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='sephaka.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "moriri": {
      explanation: "(SEHLOTHO) Ke boea bo hlahang hloohong. TS'EBELISO: Bokang o kuta MORIRI. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='moriri.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "sehlotho": {
      explanation: "Ke moriri o mo ngata. TS'EBELISO: Bokang o SEHLOTHO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='moriri.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "leoto": {
      explanation: "Ke karolo ea ho tloha thekeng ho isa menoaneng ea maoto. Hape e ka bolele karolo ea ho tloha lekakaijaneng ho isa bohatong ba leoto. TS'EBELISO: Bokang o robehile LEOTO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='leoto.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "maoto": {
      explanation: "Ke karolo ea ho tloha thekeng ho isa menoaneng ea maoto. Hape e ka bolele karolo ea ho tloha lekakaijaneng ho isa bohatong ba leoto. TS'EBELISO: Bokang o robehile LEOTO. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='leoto.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "serope": {
      explanation: "Ke karolo ea ho tloha thekeng ho isa mangoleng. TS'EBELISO: Sephiwe o SEROPE se se tenya. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='serope.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "lengole": {
      explanation: "Ke lenonyeletso le bohareng ba leoto. TS'EBELISO: Sephiwe o robehile LENGOLE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='magole.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "mangole": {
      explanation: "Ke manonyeletso ba bohareng ba maoto. TS'EBELISO: Bokang o robehile LENGOLE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='magole.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "tlhafu": {
      explanation: "Ke karolo ea ho tlaha lengoleng ho isa makakaijaneng. TS'EBELISO: Bokang o TLHAFU e ntle. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='litlhafu.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "litlhafu": {
      explanation: "Ke karolo ea ho tlaha lengoleng ho isa makakaijaneng. TS'EBELISO: Bokang o LITLHAFU li ntle. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='litlhafu.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "lipotomane": {
      explanation: "Ke lits'ika tse fumaneheng litlhafung le liphakeng. TS'EBELISO: Thomello o LIPOTOMANE li kholo. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='potomane.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "potomane": {
      explanation: "Ke ts'ika e fumaneheng tlhafung le sephakeng. TS'EBELISO: Thomello o POTOMANE e kholo. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='potomane.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "lekakaijane": {
      explanation: "Ke lenonyeletso le qelelong ea tlhafu kapa qalong ea bohato ba leoto. TS'EBELISO: Sephiwe robehile LEKAKAIJANE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lekakaijane.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "makakaijane": {
      explanation: "Ke manonyeletso a qelelong ea litlhafu kapa qalong ea bohato ba maeoto. TS'EBELISO: Sephiwe robehile MAKAKAIJANE. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='lekakaijane.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "serethe": {
      explanation: "Ke qetello ea bohato ba leoto. TS'EBELISO: SERETHE sa Sephiwe se se nyane. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='serethe.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "lirethe": {
      explanation: "Ke qetello ea bohato ba leoto. TS'EBELISO: LIRETHE tsa Sephiwe li nyane. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='serethe.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "menoana": {
      explanation: "Ke litho tse fumanehang qetelong ea letsoho kapa leoto. TS'EBELISO: MENOANA ea Sephiwe e menyane. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='menoana.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "monoana": {
      explanation: "Ke setho se fumanehang qetelong ea letsoho kapa leoto. TS'EBELISO: MONOANA oa Sephiwe o monyane. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='menoana.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "thelleli": {
      explanation: "Ke lesapo le sa tsitsing le fumaneheng lengoleng. TS'EBELISO: Sephiwe o sothehile THELLELI. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='thelleli.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},
  "boko": {
      explanation: "Ke setho se fumanehang ka hloohong. Bo laola boholo ba liketso tsa 'mele. <br><br> <a class='bg-sky-400 py-2 px-2 text-white rounded-md' href='boko.html'>Penya mona</a>",
      audioSrc: "audio/Lereho.m4a"},


      
};

function getLevenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () => []);
  
  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (i === 0) matrix[i][j] = j;
      else if (j === 0) matrix[i][j] = i;
      else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // deletion
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1) // substitution
        );
      }
    }
  }
  
  return matrix[a.length][b.length];
}


// Function to find the closest match for the input word from the dictionary
function getClosestMatch(input, dictionaryWords) {
let closestMatch = null;
let minDistance = Infinity;

for (const word of dictionaryWords) {
const distance = getLevenshteinDistance(input, word);
if (distance < minDistance) {
  minDistance = distance;
  closestMatch = word;
}
}

// Define a threshold to consider a match as a suggestion
const threshold = 2; // Adjust the threshold as needed
return minDistance <= threshold ? closestMatch : null;
}

// Function to save recent searches to localStorage
function saveRecentSearch(word) {
let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
if (!recentSearches.includes(word)) {
recentSearches.unshift(word);
if (recentSearches.length > 5) recentSearches.pop(); // Keep only the 5 most recent searches
localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
}
}

// Function to display recent searches
function displayRecentSearches() {
const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
const recentSearchesContainer = document.getElementById('recentSearches');
recentSearchesContainer.innerHTML = '';
recentSearches.forEach(search => {
const searchButton = document.createElement('button');
searchButton.textContent = search;
searchButton.className = 'bg-yellow-500 text-white font-bold px-4 max-h-11 py-2 m-2 rounded-lg';
searchButton.onclick = () => performSearch(search);
recentSearchesContainer.appendChild(searchButton);
});
}

// Function to search for word explanation
function searchWord() {
const wordInput = document.getElementById('wordInput').value.trim().toLowerCase();
performSearch(wordInput);
}

// Function to perform the search
function performSearch(wordInput) {
if (wordInput === '') {
alert("Kenya lentsoe kapa polelo."); // "Please enter a word or phrase."
return; // Exit the function if the input is empty
}

if (wordDictionary.hasOwnProperty(wordInput)) {
saveRecentSearch(wordInput);
window.location.href = `explanation.html?word=${encodeURIComponent(wordInput)}`;
} else {
// Auto-correct logic
const closestMatch = getClosestMatch(wordInput, Object.keys(wordDictionary));
if (closestMatch) {
  saveRecentSearch(closestMatch);
  window.location.href = `explanation.html?word=${encodeURIComponent(closestMatch)}`;
} else {
  alert("Kenya lentsoe le nepahetseng u shebe mats'oao."); // "Please enter a valid word and check the punctuation."
}
}
displayRecentSearches(); // Refresh the display of recent searches
}

document.getElementById('searchBtn').addEventListener('click', searchWord);

// Listen for Enter key press on the input field
document.getElementById('wordInput').addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
searchWord();
}
});

// Display recent searches when the page loads
window.onload = displayRecentSearches;