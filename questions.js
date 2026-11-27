// Huquq fanidan savollar bazasi (ikki tilda: uz - o'zbekcha, kk - qaraqalpaqsha).
//
// Yangi savol qo'shish uchun kerakli mavzu ichiga quyidagi obyektni qo'shing:
//   q: { uz: "Savol", kk: "Soraw" }
//   o: [ { uz: "Variant", kk: "Variant" }, ... ]   (4 ta variant)
//   a: to'g'ri javobning indeksi (0 dan boshlanadi; ilovada variantlar avtomatik aralashtiriladi)
//   e: { uz: "Izoh", kk: "Túsindirme" }
//
// Qaraqalpaqcha matnlarni qaraqalpoq tilini biladigan mutaxassis tekshirib chiqishi tavsiya etiladi.

// Bo'limlar: "topics" ichida mavzu id'lari turadi (ular quyidagi TOPICS ro'yxatida).
window.SECTIONS = [
  {
    id: "attestatsiya", icon: "clipcheck",
    title: { uz: "Atestatsiyaga tayyorlanish", kk: "Attestatsiyaǵa tayarlanıw" },
    desc: { uz: "Darslik mavzulari bo'yicha savollar", kk: "Dárislik temaları boyınsha sorawlar" },
    topics: ["sinf8", "sinf9", "sinf10", "sinf11"]
  },
  {
    id: "sertifikat", icon: "award",
    title: { uz: "Milliy sertifikat imtihoniga tayyorgarlik", kk: "Milliy sertifikat imtixanına tayarlıq" },
    desc: { uz: "Mavzular bo'yicha savollar", kk: "Temalar boyınsha sorawlar" },
    topics: ["nazariya", "konst", "fuqaro", "jinoyat", "mehnat"]
  }
];

window.TOPICS = [
  // PULLIK darsliklar (paid: true). Ularning savollari bu faylda EMAS, botdagi paid_questions.json
  // faylida turadi va to'lov tasdiqlangach Firebase orqali foydalanuvchiga beriladi.
  { id: "sinf8", title: { uz: "8-sinf huquq darsligi", kk: "8-klass huqıq dárisligi" }, icon: "book", paid: true },
  { id: "sinf9", title: { uz: "9-sinf huquq darsligi", kk: "9-klass huqıq dárisligi" }, icon: "book", paid: true },
  { id: "sinf10", title: { uz: "10-sinf huquq darsligi", kk: "10-klass huqıq dárisligi" }, icon: "book", paid: true },
  { id: "sinf11", title: { uz: "11-sinf huquq darsligi", kk: "11-klass huqıq dárisligi" }, icon: "book", paid: true },
  // Umumiy mavzular
  { id: "nazariya", title: { uz: "Davlat va huquq nazariyasi", kk: "Mámleket hám huqıq teoriyası" }, icon: "scales" },
  { id: "konst", title: { uz: "Konstitutsiyaviy huquq", kk: "Konstitutsiyalıq huqıq" }, icon: "doc" },
  { id: "fuqaro", title: { uz: "Fuqarolik huquqi", kk: "Puqaralıq huqıq" }, icon: "handshake" },
  { id: "jinoyat", title: { uz: "Jinoyat huquqi", kk: "Jinayat huqıqı" }, icon: "lock" },
  { id: "mehnat", title: { uz: "Mehnat huquqi", kk: "Miynet huqıqı" }, icon: "briefcase" }
];

window.QUESTIONS = {
  nazariya: [
    {
      q: { uz: "Huquqning eng muhim belgilaridan biri qaysi?", kk: "Huqıqtıń eń áhmiyetli belgilerinen biri qaysı?" },
      o: [
        { uz: "Umummajburiylik", kk: "Hámmege májbúriyligi" },
        { uz: "Ixtiyoriylik", kk: "Ixtiyarlıq" },
        { uz: "Faqat urf-odatga tayanish", kk: "Tek ádet-ǵurıplarǵa tayanıw" },
        { uz: "Faqat jamoatchilik fikri", kk: "Tek jámiyetlik pikir" }
      ],
      a: 0,
      e: { uz: "Huquq normalari davlat tomonidan o'rnatiladi yoki sanksiyalanadi va hamma uchun majburiydir.", kk: "Huqıq normaları mámleket tárepinen belgilenedi yamasa sanksiyalanadı hám hámme ushın májbúriy esaplanadı." }
    },
    {
      q: { uz: "Huquqiy munosabatning subyekti kim?", kk: "Huqıqıy qatnastıń subyekti kim?" },
      o: [
        { uz: "Huquq va majburiyatlar egasi bo'lgan shaxs", kk: "Huqıq hám májbúriyetlerge iye bolǵan shaxs" },
        { uz: "Faqat davlat organi", kk: "Tek mámleket organı" },
        { uz: "Faqat mulk", kk: "Tek múlik" },
        { uz: "Faqat sud", kk: "Tek sud" }
      ],
      a: 0,
      e: { uz: "Subyektlar: fuqarolar, tashkilotlar va davlat bo'lib, huquq va majburiyatlarning tashuvchisidir.", kk: "Subyektler: puqaralar, shólkemler hám mámleket bolıp, huqıq hám májbúriyetlerdiń iyesi esaplanadı." }
    },
    {
      q: { uz: "Qonunning yuridik kuchi qaysi hujjatdan past bo'ladi?", kk: "Nızamnıń yuridikalıq kúshi qaysı hújjetten tómen boladı?" },
      o: [
        { uz: "Konstitutsiyadan", kk: "Konstitutsiyadan" },
        { uz: "Hukumat qarorlaridan", kk: "Húkimet qararlarınan" },
        { uz: "Vazirlik buyrug'idan", kk: "Ministrlik buyrıǵınan" },
        { uz: "Hokim qarorlaridan", kk: "Hákim qararlarınan" }
      ],
      a: 0,
      e: { uz: "Konstitutsiya eng yuqori yuridik kuchga ega, boshqa barcha hujjatlar unga zid bo'lmasligi shart.", kk: "Konstitutsiya eń joqarı yuridikalıq kúshke iye, basqa barlıq hújjetler oǵan qarama-qarsı bolmawı shárt." }
    },
    {
      q: { uz: "Huquqbuzarlik nima?", kk: "Huqıqbuzarlıq degen ne?" },
      o: [
        { uz: "Huquqqa zid, aybli va jazolanadigan qilmish", kk: "Huqıqqa qarsı, ayıplı hám jazalanatuǵın is-háreket" },
        { uz: "Har qanday noxush hodisa", kk: "Hár qanday unamsız waqıya" },
        { uz: "Faqat jinoyat", kk: "Tek jinayat" },
        { uz: "Faqat ma'muriy jarima", kk: "Tek ákimshilik jarıyma" }
      ],
      a: 0,
      e: { uz: "Huquqbuzarlik huquqqa xilof, ayblilik va javobgarlik bilan bog'liq qilmishdir.", kk: "Huqıqbuzarlıq huqıqqa qarsı, ayıplılıq hám juwapkershilik penen baylanıslı is-háreket." }
    }
  ],

  konst: [
    {
      q: { uz: "O'zbekiston Respublikasi Konstitutsiyasi qachon qabul qilingan?", kk: "Ózbekstan Respublikası Konstitutsiyası qashan qabıl etilgen?" },
      o: [
        { uz: "1992-yil 8-dekabr", kk: "1992-jıl 8-dekabr" },
        { uz: "1991-yil 31-avgust", kk: "1991-jıl 31-avgust" },
        { uz: "1995-yil 1-yanvar", kk: "1995-jıl 1-yanvar" },
        { uz: "1990-yil 20-iyun", kk: "1990-jıl 20-iyun" }
      ],
      a: 0,
      e: { uz: "Konstitutsiya 1992-yil 8-dekabrda qabul qilingan, shu sana Konstitutsiya kuni sifatida nishonlanadi.", kk: "Konstitutsiya 1992-jıl 8-dekabrde qabıl etilgen, usı sáne Konstitutsiya kúni retinde belgilenedi." }
    },
    {
      q: { uz: "O'zbekistonda davlat hokimiyati qanday prinsip asosida tashkil etiladi?", kk: "Ózbekstanda mámleketlik húkimet qanday princip tiykarında shólkemlestiriledi?" },
      o: [
        { uz: "Hokimiyatlar bo'linishi", kk: "Húkimetlerdiń bólisiwi" },
        { uz: "Hokimiyatning yagona markazga jamlanishi", kk: "Húkimettiń bir orayǵa jıynalıwı" },
        { uz: "Faqat ijro hokimiyati", kk: "Tek atqarıw húkimeti" },
        { uz: "Cheklanmagan hokimiyat", kk: "Sheklenbegen húkimet" }
      ],
      a: 0,
      e: { uz: "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyatlari bir-biridan ajratilgan.", kk: "Nızam shıǵarıwshı, atqarıwshı hám sud húkimetleri bir-birinen ajıratılǵan." }
    },
    {
      q: { uz: "Fuqarolik huquq va erkinliklari kim tomonidan kafolatlanadi?", kk: "Puqaralıq huqıq hám erkinlikler kim tárepinen kepillendiriledi?" },
      o: [
        { uz: "Davlat", kk: "Mámleket" },
        { uz: "Faqat sud", kk: "Tek sud" },
        { uz: "Faqat prokuratura", kk: "Tek prokuratura" },
        { uz: "Faqat jamoat tashkilotlari", kk: "Tek jámiyetlik shólkemler" }
      ],
      a: 0,
      e: { uz: "Inson huquq va erkinliklarini hurmat qilish va himoyalash davlatning burchidir.", kk: "Insan huqıq hám erkinliklerin húrmet etiw hám qorǵaw mámlekettiń minneti." }
    },
    {
      q: { uz: "O'zbekiston Respublikasining davlat tili qaysi?", kk: "Ózbekstan Respublikasınıń mámleketlik tili qaysı?" },
      o: [
        { uz: "O'zbek tili", kk: "Ózbek tili" },
        { uz: "Rus tili", kk: "Rus tili" },
        { uz: "Ingliz tili", kk: "Ingliz tili" },
        { uz: "Qoraqalpoq tili", kk: "Qaraqalpaq tili" }
      ],
      a: 0,
      e: { uz: "O'zbek tili davlat tili hisoblanadi, Qoraqalpog'iston hududida qoraqalpoq tili ham davlat tilidir.", kk: "Ózbek tili mámleketlik til esaplanadı, Qaraqalpaqstan aymaǵında qaraqalpaq tili de mámleketlik til." }
    }
  ],

  fuqaro: [
    {
      q: { uz: "Jismoniy shaxsning huquq layoqati qachon vujudga keladi?", kk: "Jismoniy shaxstıń huqıq qábileti qashan payda boladı?" },
      o: [
        { uz: "Tug'ilgan paytdan", kk: "Tuwılǵan waqıttan" },
        { uz: "18 yoshdan", kk: "18 jastan" },
        { uz: "16 yoshdan", kk: "16 jastan" },
        { uz: "Nikohdan so'ng", kk: "Neke qıyılǵannan keyin" }
      ],
      a: 0,
      e: { uz: "Huquq layoqati tug'ilgan paytdan boshlanadi va vafot etish bilan tugaydi.", kk: "Huqıq qábileti tuwılǵan waqıttan baslanadı hám qaytıs bolıw menen tamamlanadı." }
    },
    {
      q: { uz: "Muomala layoqati to'liq hajmda qachondan boshlanadi?", kk: "Háreket qábileti tolıq kólemde qashan baslanadı?" },
      o: [
        { uz: "18 yoshdan", kk: "18 jastan" },
        { uz: "14 yoshdan", kk: "14 jastan" },
        { uz: "16 yoshdan", kk: "16 jastan" },
        { uz: "21 yoshdan", kk: "21 jastan" }
      ],
      a: 0,
      e: { uz: "Voyaga yetgan, ya'ni 18 yoshga to'lgan fuqaro to'liq muomala layoqatiga ega bo'ladi.", kk: "Kámeletke tolǵan, yaǵnıy 18 jasqa tolǵan puqara tolıq háreket qábiletine iye boladı." }
    },
    {
      q: { uz: "Shartnoma tuzishning umumiy shartlaridan biri qaysi?", kk: "Shártnama dúziwdiń ulıwma shártlerinen biri qaysı?" },
      o: [
        { uz: "Tomonlarning erkin irodasi", kk: "Tárepleriń erkin erki" },
        { uz: "Faqat yozma shakl", kk: "Tek jazba forma" },
        { uz: "Albatta notarial tasdiq", kk: "Májbúriy túrde notarial tastıyıqlaw" },
        { uz: "Davlat ruxsati", kk: "Mámleket ruxsatı" }
      ],
      a: 0,
      e: { uz: "Shartnoma tomonlarning erkin va mos irodasiga asoslanadi.", kk: "Shártnama tárepleriń erkin hám óz-ara kelisken erkine tiykarlanadı." }
    },
    {
      q: { uz: "Mulk huquqi tarkibiga nima kiradi?", kk: "Múlik huqıqı quramına ne kiredi?" },
      o: [
        { uz: "Egalik qilish, foydalanish va tasarruf etish", kk: "Iyelik etiw, paydalanıw hám tasarrıf etiw" },
        { uz: "Faqat foydalanish", kk: "Tek paydalanıw" },
        { uz: "Faqat egalik qilish", kk: "Tek iyelik etiw" },
        { uz: "Faqat sotish", kk: "Tek satıw" }
      ],
      a: 0,
      e: { uz: "Mulkdorning uch vakolati: egalik qilish, foydalanish va tasarruf etish.", kk: "Múlik iyesiniń úsh ókilligi: iyelik etiw, paydalanıw hám tasarrıf etiw." }
    }
  ],

  jinoyat: [
    {
      q: { uz: "Jinoyat huquqida javobgarlikning asosi nima?", kk: "Jinayat huqıqında juwapkershiliktiń tiykarı ne?" },
      o: [
        { uz: "Jinoyat tarkibining mavjudligi", kk: "Jinayat quramınıń bar bolıwı" },
        { uz: "Shubha", kk: "Gúman" },
        { uz: "Jamoatchilik fikri", kk: "Jámiyetlik pikir" },
        { uz: "Faqat zarar yetishi", kk: "Tek zıyan jetiwi" }
      ],
      a: 0,
      e: { uz: "Javobgarlik qilmishda jinoyat tarkibi (obyekt, obyektiv tomon, subyekt, subyektiv tomon) bo'lgandagina yuzaga keladi.", kk: "Juwapkershilik is-háreketde jinayat quramı (obyekt, obyektiv tárep, subyekt, subyektiv tárep) bar bolǵanda ǵana payda boladı." }
    },
    {
      q: { uz: "Jinoyat tarkibining elementlari nechta?", kk: "Jinayat quramınıń elementleri neshew?" },
      o: [
        { uz: "4 ta", kk: "4 ew" },
        { uz: "2 ta", kk: "2 ew" },
        { uz: "3 ta", kk: "3 ew" },
        { uz: "5 ta", kk: "5 ew" }
      ],
      a: 0,
      e: { uz: "Jinoyat obyekti, obyektiv tomoni, subyekti va subyektiv tomoni.", kk: "Jinayat obyekti, obyektiv tárepi, subyekti hám subyektiv tárepi." }
    },
    {
      q: { uz: "Zarurat holatida zarar yetkazish qachon jinoyat hisoblanmaydi?", kk: "Zárúrlik jaǵdayında zıyan jetkeriw qashan jinayat esaplanbaydı?" },
      o: [
        { uz: "Xavfni boshqa yo'l bilan bartaraf etib bo'lmaganda va zarar yo'l qo'yilmaganidan kam bo'lganda", kk: "Qáwipti basqa jol menen bartaraf etip bolmaǵanda hám jetkerilgen zıyan jol qoyılmaǵan zıyannan az bolǵanda" },
        { uz: "Har doim", kk: "Hámme waqıt" },
        { uz: "Hech qachon", kk: "Hesh qashan" },
        { uz: "Faqat mulkka zarar bo'lganda", kk: "Tek múlikke zıyan bolǵanda" }
      ],
      a: 0,
      e: { uz: "Zarurat holati javobgarlikni istisno qiladigan holat bo'lib, qat'iy shartlarga bog'liq.", kk: "Zárúrlik jaǵdayı juwapkershilikti joq etetuǵın jaǵday bolıp, qatań shártlerge baylanıslı." }
    },
    {
      q: { uz: "Aybdorlik shakllari qaysilar?", kk: "Ayıplılıq formaları qaysılar?" },
      o: [
        { uz: "Qasd va ehtiyotsizlik", kk: "Qasıt hám abaysızlıq" },
        { uz: "Faqat qasd", kk: "Tek qasıt" },
        { uz: "Faqat ehtiyotsizlik", kk: "Tek abaysızlıq" },
        { uz: "Tasodif va qasd", kk: "Tosattan hám qasıt" }
      ],
      a: 0,
      e: { uz: "Jinoyat huquqida ayb ikki shaklda: qasddan va ehtiyotsizlik oqibatida sodir etiladi.", kk: "Jinayat huqıqında ayıp eki formada: qasıtlap hám abaysızlıq nátiyjesinde isleniledi." }
    }
  ],

  mehnat: [
    {
      q: { uz: "Mehnat shartnomasi tomonlari kimlar?", kk: "Miynet shártnamasınıń tárepleri kimler?" },
      o: [
        { uz: "Xodim va ish beruvchi", kk: "Xızmetker hám jumıs beriwshi" },
        { uz: "Xodim va davlat", kk: "Xızmetker hám mámleket" },
        { uz: "Ikki ish beruvchi", kk: "Eki jumıs beriwshi" },
        { uz: "Xodim va sud", kk: "Xızmetker hám sud" }
      ],
      a: 0,
      e: { uz: "Mehnat shartnomasi xodim bilan ish beruvchi o'rtasidagi kelishuvdir.", kk: "Miynet shártnaması xızmetker menen jumıs beriwshi arasındaǵı kelisim." }
    },
    {
      q: { uz: "Xodim ishga qabul qilinganda dastlab nima tuziladi?", kk: "Xızmetker jumısqa qabıllanǵanda dáslep ne dúziledi?" },
      o: [
        { uz: "Mehnat shartnomasi", kk: "Miynet shártnaması" },
        { uz: "Fuqarolik shartnomasi", kk: "Puqaralıq shártnama" },
        { uz: "Ijara shartnomasi", kk: "Ijara shártnaması" },
        { uz: "Sovg'a shartnomasi", kk: "Sıylıq shártnaması" }
      ],
      a: 0,
      e: { uz: "Mehnat munosabatlari mehnat shartnomasi tuzilishi bilan rasmiylashtiriladi.", kk: "Miynet qatnasları miynet shártnaması dúziliwi menen rásmiylestiriledi." }
    },
    {
      q: { uz: "Dam olish huquqi nimani o'z ichiga oladi?", kk: "Dem alıw huqıqı neni óz ishine aladı?" },
      o: [
        { uz: "Dam olish kunlari va yillik ta'til", kk: "Dem alıw kúnleri hám jıllıq ruxsat" },
        { uz: "Faqat bayram kunlari", kk: "Tek mereke kúnleri" },
        { uz: "Faqat ta'til", kk: "Tek ruxsat" },
        { uz: "Hech qanday kafolat yo'q", kk: "Hesh qanday kepillik joq" }
      ],
      a: 0,
      e: { uz: "Xodimlarga dam olish kunlari, bayramlar va haq to'lanadigan yillik mehnat ta'tili kafolatlanadi.", kk: "Xızmetkerlerge dem alıw kúnleri, merekeler hám haqı tólenetuǵın jıllıq miynet ruxsatı kepillendiriledi." }
    }
  ]
};

// Pullik bloklar uchun BEPUL SINOV savollari (to'lashdan oldin ko'rsatiladi, ochiq turadi).
// Har bir blokka 1-2 ta savol qo'ying. Hozir sinf8 ga NAMUNA sifatida "nazariya"dagi birinchi savol qo'yilgan:
// uni 8-sinf darsligidan olingan haqiqiy savol bilan almashtiring.
window.PREVIEW = {
  sinf8: [window.QUESTIONS.nazariya[0]]
};
