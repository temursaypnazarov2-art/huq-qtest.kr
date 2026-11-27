(function () {
  "use strict";

  var tg = window.Telegram && window.Telegram.WebApp;
  if (tg) { try { tg.ready(); tg.expand(); tg.setHeaderColor("#0F1E3D"); tg.setBackgroundColor("#0F1E3D"); } catch (e) {} }

  // ---------- Matnlar (uz / kk) ----------
  var I18N = {
    uz: {
      appName: "Huquq Test",
      tabs: { home: "Bosh", topics: "Testlar", rating: "Reyting", profile: "Profil" },
      hello: function (n) { return "Salom, " + n; },
      helloSub: "Bugun ham bilimingizni sinab ko'ring.",
      best: "eng yaxshi natija", avg: "o'rtacha natija", attempts: "jami urinish", streak: "kunlik seriya", dayWord: "kun",
      yourResults: "Natijalaringiz", lastN: function (n) { return "oxirgi " + n + " urinish"; }, noResults: "Hali test topshirilmagan.",
      startTest: "Test boshlash",
      pickTopic: "Mavzuni tanlang",
      topicHint: "Savollar aralashtiriladi. Har bir savolga 1 daqiqa vaqt beriladi.",
      questionsN: function (n) { return n + " ta savol"; },
      mixed: "Aralash testni boshlash", mixedName: "Aralash test",
      questionOf: function (i, n) { return "Savol " + i + " / " + n; },
      marked: function (a, n) { return a + "/" + n + " belgilandi"; },
      prev: "Oldingi", next: "Keyingi", finish: "Tugatish", finishTest: "Testni tugatish",
      questions: "Savollar", sheetSub: function (a, n) { return a + "/" + n + " ta savolga javob belgilandi"; }, close: "Yopish", gridLabel: "Savollar ro'yxati",
      finishAsk: function (k) { return k + " ta savolga javob berilmagan. Testni tugatasizmi?"; },
      finishAskAll: "Testni tugatasizmi?",
      correctAnswer: "To'g'ri javob: ", noAnswer: "Javob berilmagan",
      resultTitle: "natija",
      verdict: function (p) { return p >= 85 ? "Ajoyib natija!" : p >= 60 ? "Yaxshi natija!" : "Yana urinib ko'ring"; },
      verdictSub: function (p) { return "Siz " + p + "% to'g'ri javob berdingiz."; },
      rightAnswers: "to'g'ri javob", spent: "sarflangan vaqt", points: "ball",
      mistakesTitle: "Xatolar tahlili", retry: "Qayta urinish", toTopics: "Testlarga qaytish", noMistakes: "Xato yo'q. Barakalla!",
      mistakeN: function (n) { return n + "-savol"; },
      ratingTitle: "Reyting", ratingHint: "Har bir mavzu bo'yicha eng yaxshi natijangiz.", ratingNone: "natija yo'q",
      profileTitle: "Profil", total: "jami ball", tests: "topshirilgan test",
      language: "Til", languageHint: "Tanlangan til menyu va test savollariga qo'llanadi.",
      guest: "Foydalanuvchi",
      back: "Orqaga", comingSoon: "Tez orada", sectionHint: "Tayyorgarlik bo'limini tanlang.", mixedSection: "Aralash test",
      paidLabel: "Pullik", unlocked: "Ochilgan", payTitle: "Blokni ochish", payPrice: "Narxi", cardLabel: "Karta raqami",
      payStep1: "Narxni yuqoridagi kartaga o'tkazing.", payStep2: "«To'lov qildim» tugmasini bosib, chek rasmini botga yuboring.",
      payStep3: "To'lov tasdiqlangach blok avtomatik ochiladi.", iPaid: "To'lov qildim", copy: "Nusxalash", copied: "Karta raqami nusxalandi",
      loading: "Yuklanmoqda...", loadErr: "Yuklab bo'lmadi. Keyinroq urinib ko'ring.", unlockedMsg: "Blok ochildi!",
      mine: "Mening testlarim", mineDesc: "Sotib olinganlar va ishlanganlar", bought: "Sotib olinganlar", doneTab: "Ishlanganlar", noBought: "Hali sotib olingan test yo'q.",
      ratingAll: "Umumiy", ratingTopics: "Mavzular", lbHint: "Eng ko'p ball to'plagan foydalanuvchilar.", lbEmpty: "Reyting hozircha bo'sh.", lbErr: "Reytingni yuklab bo'lmadi.",
      you: "siz", testsN: function (n) { return n + " ta test"; },
      syncOn: "Natijalar qurilmalar o'rtasida sinxronlanadi.", syncOff: "Sinxronlash va reyting uchun botga /start yuboring va chatdagi menyu tugmasi orqali oching.",
      previewBtn: "Bepul sinov savoli", previewName: "sinov"
    },
    kk: {
      appName: "Huqıq Test",
      tabs: { home: "Bas", topics: "Testler", rating: "Reyting", profile: "Profil" },
      hello: function (n) { return "Sálem, " + n; },
      helloSub: "Búgin de bilimińizdi sınap kóriń.",
      best: "eń jaqsı nátiyje", avg: "ortasha nátiyje", attempts: "jámi urınıs", streak: "kúnlik seriya", dayWord: "kún",
      yourResults: "Nátiyjelerińiz", lastN: function (n) { return "sońǵı " + n + " urınıs"; }, noResults: "Ele test tapsırılmaǵan.",
      startTest: "Test baslaw",
      pickTopic: "Temanı saylań",
      topicHint: "Sorawlar aralastırıladı. Hár bir sorawǵa 1 minut waqıt beriledi.",
      questionsN: function (n) { return n + " soraw"; },
      mixed: "Aralas testti baslaw", mixedName: "Aralas test",
      questionOf: function (i, n) { return "Soraw " + i + " / " + n; },
      marked: function (a, n) { return a + "/" + n + " belgilendi"; },
      prev: "Aldınǵı", next: "Keyingi", finish: "Tamamlaw", finishTest: "Testti tamamlaw",
      questions: "Sorawlar", sheetSub: function (a, n) { return a + "/" + n + " sorawǵa juwap belgilendi"; }, close: "Jabıw", gridLabel: "Sorawlar dizimi",
      finishAsk: function (k) { return k + " sorawǵa juwap berilmegen. Testti tamamlaysızba?"; },
      finishAskAll: "Testti tamamlaysızba?",
      correctAnswer: "Durıs juwap: ", noAnswer: "Juwap berilmegen",
      resultTitle: "nátiyje",
      verdict: function (p) { return p >= 85 ? "Ájayıp nátiyje!" : p >= 60 ? "Jaqsı nátiyje!" : "Jáne urınıp kóriń"; },
      verdictSub: function (p) { return "Siz " + p + "% durıs juwap berdińiz."; },
      rightAnswers: "durıs juwap", spent: "sarıplanǵan waqıt", points: "bal",
      mistakesTitle: "Qátelikler talqılawı", retry: "Qayta urınıw", toTopics: "Testlerge qaytıw", noMistakes: "Qátelik joq. Baraka!",
      mistakeN: function (n) { return n + "-soraw"; },
      ratingTitle: "Reyting", ratingHint: "Hár bir tema boyınsha eń jaqsı nátiyjeńiz.", ratingNone: "nátiyje joq",
      profileTitle: "Profil", total: "jámi bal", tests: "tapsırılǵan test",
      language: "Til", languageHint: "Saylanǵan til menyu hám test sorawlarına qollanıladı.",
      guest: "Paydalanıwshı",
      back: "Artqa", comingSoon: "Jaqında", sectionHint: "Tayarlıq bólimin saylań.", mixedSection: "Aralas test",
      paidLabel: "Pullı", unlocked: "Ashılǵan", payTitle: "Blokti ashıw", payPrice: "Bahası", cardLabel: "Karta nomeri",
      payStep1: "Bahasın joqarıdaǵı kartaǵa ótkeriń.", payStep2: "«Tólem ettim» túymesin basıp, chek suwretin botqa jiberiń.",
      payStep3: "Tólem tastıyıqlanǵannan keyin blok avtomat túrde ashıladı.", iPaid: "Tólem ettim", copy: "Kóshiriw", copied: "Karta nomeri kóshirildi",
      loading: "Júklenbekte...", loadErr: "Júklep bolmadı. Keyinirek urınıp kóriń.", unlockedMsg: "Blok ashıldı!",
      mine: "Meniń testlerim", mineDesc: "Satıp alınǵanlar hám islengenler", bought: "Satıp alınǵanlar", doneTab: "Islengenler", noBought: "Ele satıp alınǵan test joq.",
      ratingAll: "Ulıwma", ratingTopics: "Temalar", lbHint: "Eń kóp bal toplaǵan paydalanıwshılar.", lbEmpty: "Reyting házirshe bos.", lbErr: "Reytingti júklep bolmadı.",
      you: "siz", testsN: function (n) { return n + " test"; },
      syncOn: "Nátiyjeler qurılmalar arasında sinxronlanadı.", syncOff: "Sinxronlaw hám reyting ushın botqa /start jiberip, chattaǵı menyu túymesi arqalı ashıń.",
      previewBtn: "Biypul sınaq soraw", previewName: "sınaq"
    }
  };

  // ---------- Ikonkalar ----------
  function svg(inner, size, color) {
    return '<svg width="' + (size || 22) + '" height="' + (size || 22) + '" viewBox="0 0 24 24" fill="none" stroke="' + (color || "currentColor") +
      '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + "</svg>";
  }
  var ICON = {
    scales: '<path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0z"/><path d="M19 7l-3 7a3 3 0 0 0 6 0z"/>',
    doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h7"/><path d="M9 17h7"/>',
    handshake: '<path d="M3 12l4-4 4 3 4-3 6 5"/><path d="M3 12v5l5 3 4-2 5 2 4-3v-5"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    briefcase: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><path d="M3 13h18"/>',
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    tests: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9z"/><path d="M9 12h6"/><path d="M9 16h4"/>',
    cup: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H4v1a3 3 0 0 0 3 3"/><path d="M16 6h4v1a3 3 0 0 1-3 3"/><path d="M12 13v4"/><path d="M9 20h6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    clock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2"/><path d="M9 3h6"/>',
    check: '<path d="M5 12l5 5 9-10"/>',
    left: '<path d="M15 5l-7 7 7 7"/>',
    right: '<path d="M9 5l7 7-7 7"/>',
    gridsq: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    x: '<path d="M6 6l12 12"/><path d="M18 6L6 18"/>',
    book: '<path d="M4 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4z"/><path d="M20 5h-7"/><path d="M20 5v13h-7"/>',
    clipcheck: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9z"/><path d="M9 14l2 2 4-4"/>',
    award: '<circle cx="12" cy="9" r="5"/><path d="M9 13.5L8 21l4-2 4 2-1-7.5"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8"/>',
    flame: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
    list: '<path d="M9 6h11"/><path d="M9 12h11"/><path d="M9 18h11"/><path d="M4 6h.01"/><path d="M4 12h.01"/><path d="M4 18h.01"/>'
  };

  // ---------- Holat ----------
  var STORE_KEY = "huquq_test_v1";
  var LANG_KEY = "huquq_test_lang";

  function safeGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }

  function detectLang() {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q === "uz" || q === "kk") { safeSet(LANG_KEY, q); return q; }
    return safeGet(LANG_KEY) === "kk" ? "kk" : "uz";
  }
  function loadHistory() {
    try { var h = JSON.parse(safeGet(STORE_KEY) || "[]"); return Array.isArray(h) ? h : []; } catch (e) { return []; }
  }
  function saveHistory(h) { safeSet(STORE_KEY, JSON.stringify(h.slice(-200))); }

  var state = { lang: detectLang(), tab: "home", section: null, grants: {}, pay: null, view: "tabs", quiz: null, result: null, sheet: false, history: loadHistory(), timer: null };

  function t() { return I18N[state.lang]; }
  function L(obj) { return obj[state.lang] || obj.uz; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function fmt(sec) { sec = Math.max(0, sec); var m = Math.floor(sec / 60), s = sec % 60; return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s; }
  function topicById(id) { return window.TOPICS.filter(function (x) { return x.id === id; })[0]; }
  function sectionById(id) { return (window.SECTIONS || []).filter(function (x) { return x.id === id; })[0]; }
  function qCount(id) { return (window.QUESTIONS[id] || []).length; }
  function hasQ(tp) { return qCount(tp.id) > 0; }
  function topicTitle(id) {
    if (id.indexOf("mixed") === 0) { return t().mixedName; }
    if (id.indexOf("preview:") === 0) { var pt = topicById(id.slice(8)); return (pt ? L(pt.title) : id) + " (" + t().previewName + ")"; }
    var tp = topicById(id);
    return tp ? L(tp.title) : id;
  }
  function pctOf(r) { return Math.round((r.correct / r.total) * 100); }
  function haptic(kind) { try { tg && tg.HapticFeedback && tg.HapticFeedback.impactOccurred(kind || "light"); } catch (e) {} }
  function answeredCount(qz) { return qz.items.filter(function (i) { return i.picked !== null; }).length; }
  function userName() {
    var u = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) || null;
    return u ? ([u.first_name, u.last_name].filter(Boolean).join(" ") || t().guest) : t().guest;
  }

  // ---------- Pullik bloklar (Firebase) ----------
  var GRANTS_KEY = "grants";
  var fsdb = null;
  function db() {
    if (fsdb) return fsdb;
    var cfg = window.CONFIG && window.CONFIG.firebase;
    if (!window.firebase || !cfg || !cfg.projectId) return null;
    try { if (!window.firebase.apps.length) window.firebase.initializeApp(cfg); fsdb = window.firebase.firestore(); } catch (e) { return null; }
    return fsdb;
  }
  function notify(msg) { try { if (tg && tg.showAlert) { tg.showAlert(msg); return; } } catch (e) {} window.alert(msg); }
  function priceOf(id) { var p = window.CONFIG && window.CONFIG.prices; return p && p[id] ? p[id] : ""; }
  function cloud() { return tg && tg.CloudStorage && tg.isVersionAtLeast && tg.isVersionAtLeast("6.9") ? tg.CloudStorage : null; }
  function parseGrants(s) { try { var o = JSON.parse(s || "{}"); return o && typeof o === "object" ? o : {}; } catch (e) { return {}; } }
  function loadGrants(done) {
    var c = cloud();
    if (!c) { done(parseGrants(safeGet(GRANTS_KEY))); return; }
    try { c.getItem(GRANTS_KEY, function (err, v) { done(err || !v ? parseGrants(safeGet(GRANTS_KEY)) : parseGrants(v)); }); }
    catch (e) { done(parseGrants(safeGet(GRANTS_KEY))); }
  }
  function saveGrants() {
    var s = JSON.stringify(state.grants);
    safeSet(GRANTS_KEY, s);
    var c = cloud(); if (c) { try { c.setItem(GRANTS_KEY, s, function () {}); } catch (e) {} }
  }
  function fetchGrant(key, cb) {
    var d = db(); if (!d) { cb("nodb"); return; }
    d.collection("grants").doc(key).get().then(function (snap) {
      if (!snap.exists) cb("missing"); else cb(null, snap.data());
    }).catch(function () { cb("error"); });
  }
  function openBot(param) {
    var bot = window.CONFIG && window.CONFIG.botUsername;
    var url = "https://t.me/" + bot + "?start=" + param;
    try { if (tg && tg.openTelegramLink) { tg.openTelegramLink(url); return; } } catch (e) {}
    window.open(url, "_blank");
  }
  function copyText(text) {
    var done = function () { notify(t().copied); };
    try { navigator.clipboard.writeText(text).then(done, function () {}); } catch (e) {}
  }
  function initGrants() {
    loadGrants(function (g) {
      state.grants = g;
      if (state.view === "tabs") render();
      var key = new URLSearchParams(window.location.search).get("grant");
      if (key && /^[A-Za-z0-9_-]{16,64}$/.test(key)) {
        fetchGrant(key, function (err, data) {
          if (err || !data || !data.topicId) return;
          state.grants[data.topicId] = key; saveGrants();
          var sec = (window.SECTIONS || []).filter(function (s) { return s.topics.indexOf(data.topicId) >= 0; })[0];
          state.tab = "topics"; state.view = "tabs"; state.section = sec ? sec.id : null;
          render(); notify(t().unlockedMsg);
        });
      }
    });
  }

  // ---------- Natijalarni sinxronlash va umumiy reyting (Firebase) ----------
  var UKEY_KEY = "ukey";
  function initUkey() {
    var k = new URLSearchParams(window.location.search).get("k");
    if (k && /^[A-Za-z0-9_-]{16,64}$/.test(k)) { safeSet(UKEY_KEY, k); return k; }
    var s = safeGet(UKEY_KEY);
    return s && /^[A-Za-z0-9_-]{16,64}$/.test(s) ? s : null;
  }
  state.ukey = initUkey(); state.ratingTab = "all"; state.lb = null; state.myLb = null;

  function hashKey(key, cb) {
    try {
      window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(key)).then(function (buf) {
        var hex = Array.prototype.map.call(new Uint8Array(buf), function (b) { return (b < 16 ? "0" : "") + b.toString(16); }).join("");
        cb(hex.slice(0, 16));
      }, function () { cb(null); });
    } catch (e) { cb(null); }
  }
  function entryOf(r) { return { topicId: String(r.topicId), correct: r.correct, total: r.total, secs: r.secs, points: r.points, date: r.date }; }
  function mergeHistory(a, b) {
    var seen = {}, out = [];
    a.concat(b).forEach(function (r) {
      if (!r || typeof r.date !== "number" || !r.total || r.topicId == null) return;
      var k = r.date + "|" + r.topicId;
      if (!seen[k]) { seen[k] = true; out.push(entryOf(r)); }
    });
    out.sort(function (x, y) { return x.date - y.date; });
    return out.slice(-200);
  }
  function pushHistory() {
    var d = db(); if (!d || !state.ukey) return;
    try {
      d.collection("histories").doc(state.ukey).set({
        entries: state.history.map(entryOf),
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      }).then(function () { state.sync = "ok"; }).catch(function () { state.sync = "err"; });
    } catch (e) {}
  }
  function pullHistory() {
    var d = db(); if (!d || !state.ukey) return;
    d.collection("histories").doc(state.ukey).get().then(function (snap) {
      var remote = snap.exists && Array.isArray(snap.data().entries) ? snap.data().entries : [];
      var merged = mergeHistory(state.history, remote);
      var changed = merged.length !== state.history.length || merged.length !== remote.length;
      state.history = merged; saveHistory(merged);
      state.sync = "ok";
      if (changed) pushHistory();
      if (state.view === "tabs") render();
    }).catch(function () { state.sync = "err"; });
  }
  function loadLeaderboard() {
    var d = db(); if (!d) { state.lb = { err: true }; return; }
    state.lb = { loading: true };
    if (state.ukey && !state.myLb) hashKey(state.ukey, function (h) { state.myLb = h; if (state.lb && state.lb.rows && state.tab === "rating") render(); });
    d.collection("leaderboard").orderBy("points", "desc").limit(20).get().then(function (qs) {
      var rows = []; qs.forEach(function (doc) { var x = doc.data(); x.id = doc.id; rows.push(x); });
      state.lb = { rows: rows };
      if (state.tab === "rating" && state.view === "tabs") render();
    }).catch(function () { state.lb = { err: true }; if (state.tab === "rating" && state.view === "tabs") render(); });
  }

  // ---------- Test ----------
  function buildQuiz(topicId) {
    var pool = [];
    if (topicId.indexOf("mixed") === 0) {
      var sec = sectionById(topicId.split(":")[1]);
      var ids = sec ? sec.topics : Object.keys(window.QUESTIONS);
      ids.forEach(function (id) { (window.QUESTIONS[id] || []).forEach(function (q) { pool.push(q); }); });
      pool = shuffle(pool).slice(0, 10);
    } else {
      pool = shuffle(window.QUESTIONS[topicId] || []);
    }
    var items = pool.map(function (q) {
      return { q: q, order: shuffle(q.o.map(function (_, i) { return i; })), picked: null };
    });
    return { topicId: topicId, items: items, i: 0, startedAt: Date.now(), deadline: Date.now() + items.length * 60000 };
  }

  function startQuiz(topicId) {
    var tp = topicById(topicId);
    if (tp && tp.paid) {
      var key = state.grants[topicId];
      if (!key) { state.pay = topicId; state.view = "pay"; render(); return; }
      state.view = "loading"; render();
      fetchGrant(key, function (err, data) {
        if (!err && data && data.questions && data.questions.length) {
          window.QUESTIONS[topicId] = data.questions;
          beginQuiz(topicId);
          return;
        }
        if (err === "missing") { delete state.grants[topicId]; saveGrants(); state.pay = topicId; state.view = "pay"; }
        else { state.view = "tabs"; notify(t().loadErr); }
        render();
      });
      return;
    }
    beginQuiz(topicId);
  }

  function beginQuiz(topicId) {
    stopTimer();
    state.quiz = buildQuiz(topicId);
    if (!state.quiz.items.length) { state.quiz = null; return; }
    state.view = "quiz"; state.sheet = false;
    render();
    state.timer = setInterval(tick, 1000);
  }
  function stopTimer() { if (state.timer) { clearInterval(state.timer); state.timer = null; } }

  function tick() {
    if (!state.quiz) { stopTimer(); return; }
    var left = Math.round((state.quiz.deadline - Date.now()) / 1000);
    var el = document.getElementById("timer");
    if (el) el.textContent = fmt(left);
    if (left <= 0) finishQuiz();
  }

  function finishQuiz() {
    var qz = state.quiz; if (!qz) return;
    stopTimer();
    var correct = 0, wrong = [];
    qz.items.forEach(function (it, idx) {
      if (it.picked !== null && it.order[it.picked] === it.q.a) correct++;
      else wrong.push({ n: idx + 1, it: it });
    });
    var total = qz.items.length;
    var secs = Math.min(Math.round((Date.now() - qz.startedAt) / 1000), total * 60);
    var res = { topicId: qz.topicId, correct: correct, total: total, secs: secs, points: correct * 10, date: Date.now() };
    if (qz.topicId.indexOf("preview:") !== 0) { state.history.push(res); saveHistory(state.history); pushHistory(); state.lb = null; }
    state.result = { res: res, wrong: wrong };
    state.quiz = null; state.sheet = false; state.view = "result";
    render();
  }

  function requestFinish() {
    var qz = state.quiz; if (!qz) return;
    var left = qz.items.length - answeredCount(qz);
    var msg = left > 0 ? t().finishAsk(left) : t().finishAskAll;
    if (window.confirm(msg)) finishQuiz();
  }

  // ---------- Kunlik seriya ----------
  function dayKey(ts) { var d = new Date(ts); return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate(); }
  function streakDays() {
    var set = {}; state.history.forEach(function (h) { set[dayKey(h.date)] = true; });
    var d = new Date(); var n = 0;
    if (!set[dayKey(d.getTime())]) d.setDate(d.getDate() - 1);
    while (set[dayKey(d.getTime())]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  // ---------- Ko'rinishlar ----------
  function fmtDate(ts) { var d = new Date(ts); var p = function (x) { return (x < 10 ? "0" : "") + x; }; return p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear(); }

  function statCard(icon, color, value, label) {
    return '<div class="stat big"><div class="sico" style="color:' + color + '">' + svg(ICON[icon], 22, color) + "</div><b>" + value + "</b><span>" + label + "</span></div>";
  }

  function viewHome() {
    var h = state.history, n = h.length;
    var best = n ? Math.max.apply(null, h.map(pctOf)) : null;
    var avg = n ? Math.round(h.reduce(function (s, r) { return s + r.correct / r.total; }, 0) / n * 100) : 0;
    var st = streakDays();
    var recent = h.slice(-5).reverse();
    var list = recent.length ? '<div class="list">' + recent.map(function (r) {
      return '<div class="card"><div class="grow"><div class="name">' + esc(topicTitle(r.topicId)) + '</div><div class="meta">' + fmtDate(r.date) + " · " + fmt(r.secs) +
        " · " + r.correct + "/" + r.total + '</div></div><div class="pct">' + pctOf(r) + "%</div></div>";
    }).join("") + "</div>" : '<div class="empty">' + t().noResults + "</div>";
    return '<div class="screen"><div class="row topbar"><div class="row brand"><div class="logo">' + svg(ICON.scales, 20, "#0F1E3D") + "</div>" + t().appName + "</div></div>" +
      '<div class="list" style="gap:6px"><h1>' + esc(t().hello(userName())) + '</h1><p class="sub">' + t().helloSub + "</p></div>" +
      '<button class="cta" data-act="tab" data-tab="topics"><div class="sico gold">' + svg(ICON.tests, 22, "#0F1E3D") + '</div><div class="grow"><div class="name">' + t().startTest +
      '</div><div class="meta">' + t().pickTopic + "</div></div>" + svg(ICON.right, 20, "#C9A24B") + "</button>" +
      '<div class="grid2">' +
      statCard("cup", "#C9A24B", best === null ? "—" : best + "%", t().best) +
      statCard("target", "#6FB7FF", avg + "%", t().avg) +
      statCard("list", "#9AA7FF", n, t().attempts) +
      statCard("flame", "#FFA45C", st + " " + t().dayWord, t().streak) + "</div>" +
      '<div class="row topbar" style="margin-top:6px"><div class="name">' + t().yourResults + '</div>' + (recent.length ? '<div class="meta">' + t().lastN(recent.length) + "</div>" : "") + "</div>" + list + "</div>";
  }

  function viewTopics() {
    if (state.section === "mine") return viewMine();
    var sec = state.section ? sectionById(state.section) : null;
    if (!sec) {
      var cards = (window.SECTIONS || []).map(function (s, idx) {
        var first = idx === 0;
        return '<button class="sec' + (first ? " first" : "") + '" data-act="section" data-id="' + s.id + '"><div class="row" style="justify-content:space-between;width:100%">' +
          '<div class="sico' + (first ? " gold" : "") + '" style="width:52px;height:52px">' + svg(ICON[s.icon] || ICON.doc, 26, first ? "#0F1E3D" : "#C9A24B") + "</div>" + svg(ICON.right, 22, "#C9A24B") + "</div>" +
          '<div class="sec-t">' + esc(L(s.title)) + '</div><div class="meta" style="font-size:14px">' + esc(L(s.desc)) + "</div></button>";
      }).join("");
      return '<div class="screen"><div class="list" style="gap:8px"><h1>' + t().tabs.topics + '</h1><p class="sub">' + t().sectionHint + "</p></div>" +
        '<div class="list" style="gap:14px">' + cards +
        '<button class="card" data-act="section" data-id="mine"><div class="ico">' + svg(ICON.list, 22, "#C9A24B") + '</div><div class="grow"><div class="name">' + t().mine +
        '</div><div class="meta">' + t().mineDesc + "</div></div>" + svg(ICON.right, 20, "#AAB3CC") + "</button></div></div>";
    }
    var tps = sec.topics.map(topicById).filter(Boolean);
    var total = tps.reduce(function (s, tp) { return s + qCount(tp.id); }, 0);
    var rows = tps.map(function (tp) {
      var n = qCount(tp.id), paid = !!tp.paid, open = paid && !!state.grants[tp.id];
      var enabled = paid || n > 0;
      var meta = paid ? (open ? t().unlocked : t().paidLabel + (priceOf(tp.id) ? " · " + priceOf(tp.id) : "")) : (n ? t().questionsN(n) : t().comingSoon);
      var tail = paid ? (open ? svg(ICON.check, 20, "#5FD39A") : svg(ICON.lock, 20, "#C9A24B")) : (n ? svg(ICON.right, 20, "#AAB3CC") : "");
      return '<button class="card" data-act="start" data-id="' + tp.id + '"' + (enabled ? "" : " disabled") + '><div class="ico">' + svg(ICON[tp.icon] || ICON.doc, 22, "#C9A24B") +
        '</div><div class="grow"><div class="name">' + esc(L(tp.title)) + '</div><div class="meta">' + meta + "</div></div>" + tail + "</button>";
    }).join("");
    return '<div class="screen"><div class="row" style="gap:8px"><button class="xbtn" data-act="sectionBack" aria-label="' + t().back + '">' + svg(ICON.left, 20) + '</button><div class="meta" style="font-size:14px;font-weight:600;color:var(--ink-2)">' + t().tabs.topics + "</div></div>" +
      '<div class="list" style="gap:8px"><h1 style="font-size:28px">' + esc(L(sec.title)) + '</h1><p class="sub">' + t().pickTopic + "</p></div>" +
      '<div class="list">' + rows + "</div>" +
      (total ? '<button class="btn gold spacer" data-act="start" data-id="mixed:' + sec.id + '">' + t().mixedSection + "</button>" : "") + "</div>";
  }

  function viewQuiz() {
    var qz = state.quiz, it = qz.items[qz.i], n = qz.items.length;
    var keys = ["A", "B", "C", "D", "E", "F"];
    var left = Math.round((qz.deadline - Date.now()) / 1000);
    var ans = answeredCount(qz);
    var pct = Math.round((ans / n) * 100);
    var opts = it.order.map(function (orig, pos) {
      return '<button class="opt' + (pos === it.picked ? " sel" : "") + '" data-act="pick" data-pos="' + pos + '"><span class="key">' + keys[pos] +
        "</span><span>" + esc(L(it.q.o[orig])) + "</span></button>";
    }).join("");
    var first = qz.i === 0, last = qz.i === n - 1;
    var html = '<div class="screen" style="padding-bottom:12px"><div class="row topbar"><div class="chip timer">' + svg(ICON.clock, 18, "#C9CFDD") + '<span id="timer">' + fmt(left) + "</span></div>" +
      '<button class="finish" data-act="finish">' + svg(ICON.check, 18, "#fff") + t().finish + "</button></div>" +
      '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
      '<div class="row topbar"><div class="meta" style="font-size:14px"><b style="color:var(--ink)">' + t().questionOf(qz.i + 1, n).replace(/(\d+)/, "$1") + '</b></div><div class="meta">' + t().marked(ans, n) + "</div></div>" +
      '<div class="meta" style="margin-top:-8px">' + esc(topicTitle(qz.topicId)) + "</div>" +
      '<h1 class="q-title">' + esc(L(it.q.q)) + "</h1>" +
      '<div class="list">' + opts + "</div></div>" +
      '<div class="qbar"><button class="qb prev" data-act="prev"' + (first ? " disabled" : "") + ">" + svg(ICON.left, 18) + t().prev + "</button>" +
      '<button class="qb gridbtn" data-act="grid" aria-label="' + t().gridLabel + '">' + svg(ICON.gridsq, 22) + "</button>" +
      '<button class="qb nextb" data-act="next"' + (last ? " disabled" : "") + ">" + t().next + svg(ICON.right, 18, "currentColor") + "</button></div>";
    if (state.sheet) html += viewSheet(qz, ans, n);
    return html;
  }

  function viewSheet(qz, ans, n) {
    var cells = qz.items.map(function (it, idx) {
      var cls = "num" + (idx === qz.i ? " cur" : it.picked !== null ? " done" : "");
      return '<button class="' + cls + '" data-act="jump" data-i="' + idx + '">' + (idx + 1) + "</button>";
    }).join("");
    return '<div class="sheet-back" data-act="closeSheet"><div class="sheet" role="dialog" aria-label="' + t().questions + '">' +
      '<div class="row topbar"><div class="list" style="gap:4px"><div class="name" style="font-size:20px">' + t().questions + '</div><div class="meta">' + t().sheetSub(ans, n) +
      '</div></div><button class="xbtn" data-act="closeSheet" aria-label="' + t().close + '">' + svg(ICON.x, 20) + "</button></div>" +
      '<div class="nums">' + cells + "</div>" +
      '<button class="btn green" data-act="finish">' + svg(ICON.check, 20, "#fff") + '<span style="margin-left:8px">' + t().finishTest + "</span></button></div></div>";
  }

  function viewResult() {
    var r = state.result.res, pct = pctOf(r), wrong = state.result.wrong;
    var keys = ["A", "B", "C", "D", "E", "F"];
    var mistakes = wrong.length ? wrong.map(function (w) {
      var it = w.it;
      var mine = it.picked === null ? t().noAnswer : esc(L(it.q.o[it.order[it.picked]]));
      return '<div class="note bad"><b>' + t().mistakeN(w.n) + "</b><span style=\"color:var(--ink);font-weight:500\">" + esc(L(it.q.q)) + "</span>" +
        '<span style="color:var(--bad)">× ' + mine + "</span><span style=\"color:var(--ok)\">✓ " + esc(L(it.q.o[it.q.a])) + "</span><span>" + esc(L(it.q.e)) + "</span></div>";
    }).join("") : '<div class="note ok"><b>' + t().noMistakes + "</b></div>";
    return '<div class="screen"><div class="brand row" style="font-size:14px;font-weight:600;color:var(--ink-2)">' + esc(topicTitle(r.topicId)) + ": " + t().resultTitle + "</div>" +
      '<div class="score"><strong>' + r.correct + "/" + r.total + "</strong><span>" + t().rightAnswers + "</span></div>" +
      '<div class="list center" style="gap:8px"><h1 style="font-size:28px">' + t().verdict(pct) + '</h1><p class="sub">' + t().verdictSub(pct) + "</p></div>" +
      '<div class="stats"><div class="stat"><b>' + fmt(r.secs) + "</b><span>" + t().spent + '</span></div><div class="stat"><b>+' + r.points + "</b><span>" + t().points + "</span></div></div>" +
      (wrong.length ? '<div class="name">' + t().mistakesTitle + "</div>" : "") + '<div class="list">' + mistakes + "</div>" +
      '<div class="list spacer"><button class="btn gold" data-act="retry" data-id="' + r.topicId + '">' + t().retry + '</button><button class="btn ghost" data-act="goTopics">' + t().toTopics + "</button></div></div>";
  }

  function viewRating() {
    var tab = state.ratingTab === "topics" ? "topics" : "all";
    var seg = '<div class="seg"><button data-act="ratingTab" data-tab="all" class="' + (tab === "all" ? "on" : "") + '">' + t().ratingAll +
      '</button><button data-act="ratingTab" data-tab="topics" class="' + (tab === "topics" ? "on" : "") + '">' + t().ratingTopics + "</button></div>";
    if (tab === "topics") return viewTopicRating(seg);
    if (!state.lb) loadLeaderboard();
    var body, lb = state.lb || {};
    if (lb.loading || !lb.rows && !lb.err) body = '<div class="empty">' + t().loading + "</div>";
    else if (lb.err) body = '<div class="empty">' + t().lbErr + "</div>";
    else if (!lb.rows.length) body = '<div class="empty">' + t().lbEmpty + "</div>";
    else body = '<div class="list">' + lb.rows.map(function (r, i) {
      var me = state.myLb && r.id === state.myLb;
      return '<div class="card"' + (me ? ' style="border-color:var(--gold)"' : "") + '><div class="num' + (i < 3 ? " cur" : "") + '" style="width:36px;min-height:36px;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + (i + 1) +
        '</div><div class="grow"><div class="name">' + esc(r.name || "?") + (me ? ' <span class="meta">(' + t().you + ")</span>" : "") + '</div><div class="meta">' + t().testsN(r.tests || 0) + " · " + (r.avg || 0) + '%</div></div><div class="pct">' + (r.points || 0) + "</div></div>";
    }).join("") + "</div>";
    return '<div class="screen"><div class="list" style="gap:8px"><h1>' + t().ratingTitle + '</h1><p class="sub">' + t().lbHint + "</p></div>" + seg + body + "</div>";
  }

  function viewTopicRating(seg) {
    var rows = window.TOPICS.filter(function (tp) {
      return hasQ(tp) || state.history.some(function (r) { return r.topicId === tp.id; });
    }).map(function (tp) {
      var best = null;
      state.history.forEach(function (r) { if (r.topicId === tp.id) { var p = pctOf(r); if (best === null || p > best) best = p; } });
      return '<div class="card"><div class="ico">' + svg(ICON[tp.icon] || ICON.doc, 22, "#C9A24B") + '</div><div class="grow"><div class="name">' + esc(L(tp.title)) +
        '</div></div><div class="pct">' + (best === null ? '<span class="meta">' + t().ratingNone + "</span>" : best + "%") + "</div></div>";
    }).join("");
    return '<div class="screen"><div class="list" style="gap:8px"><h1>' + t().ratingTitle + '</h1><p class="sub">' + t().ratingHint + "</p></div>" + seg + '<div class="list">' + rows + "</div></div>";
  }

  function viewProfile() {
    var u = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) || null;
    var name = userName();
    var handle = u && u.username ? "@" + u.username : "";
    var pts = state.history.reduce(function (s, h) { return s + h.points; }, 0);
    var n = state.history.length;
    var avg = n ? Math.round(state.history.reduce(function (s, h) { return s + h.correct / h.total; }, 0) / n * 100) : 0;
    return '<div class="screen"><h1>' + t().profileTitle + "</h1>" +
      '<div class="row" style="gap:14px"><div class="avatar">' + esc((name || "?").charAt(0).toUpperCase()) + '</div><div class="grow"><div class="name" style="font-size:18px">' + esc(name) +
      '</div><div class="meta">' + esc(handle) + "</div></div></div>" +
      '<div class="stats"><div class="stat"><b>' + pts + "</b><span>" + t().total + '</span></div><div class="stat"><b>' + n + "</b><span>" + t().tests +
      '</span></div><div class="stat"><b>' + avg + "%</b><span>" + t().avg + "</span></div></div>" +
      '<div class="list" style="gap:10px"><div class="label">' + t().language + '</div><div class="seg"><button data-act="lang" data-lang="uz" class="' + (state.lang === "uz" ? "on" : "") +
      '">O\'zbekcha</button><button data-act="lang" data-lang="kk" class="' + (state.lang === "kk" ? "on" : "") + '">Qaraqalpaqsha</button></div><p class="sub" style="font-size:13px">' + t().languageHint + "</p></div>" +
      '<p class="sub" style="font-size:13px">' + (state.ukey ? t().syncOn : t().syncOff) + "</p></div>";
  }

  function viewMine() {
    var tab = state.mineTab === "done" ? "done" : "bought";
    var boughtTopics = window.TOPICS.filter(function (tp) { return tp.paid && state.grants[tp.id]; });
    var doneList = state.history.slice().reverse().slice(0, 50);
    var body;
    if (tab === "bought") {
      body = boughtTopics.length ? '<div class="list">' + boughtTopics.map(function (tp) {
        return '<button class="card" data-act="start" data-id="' + tp.id + '"><div class="ico">' + svg(ICON[tp.icon] || ICON.doc, 22, "#C9A24B") +
          '</div><div class="grow"><div class="name">' + esc(L(tp.title)) + '</div><div class="meta">' + t().unlocked + "</div></div>" + svg(ICON.check, 20, "#5FD39A") + "</button>";
      }).join("") + "</div>" : '<div class="empty">' + t().noBought + "</div>";
    } else {
      body = doneList.length ? '<div class="list">' + doneList.map(function (r) {
        return '<button class="card" data-act="start" data-id="' + esc(r.topicId) + '"><div class="grow"><div class="name">' + esc(topicTitle(r.topicId)) + '</div><div class="meta">' +
          fmtDate(r.date) + " · " + fmt(r.secs) + " · " + r.correct + "/" + r.total + '</div></div><div class="pct">' + pctOf(r) + "%</div></button>";
      }).join("") + "</div>" : '<div class="empty">' + t().noResults + "</div>";
    }
    return '<div class="screen"><div class="row" style="gap:8px"><button class="xbtn" data-act="sectionBack" aria-label="' + t().back + '">' + svg(ICON.left, 20) +
      '</button><div class="meta" style="font-size:14px;font-weight:600;color:var(--ink-2)">' + t().tabs.topics + "</div></div>" +
      '<h1 style="font-size:28px">' + t().mine + "</h1>" +
      '<div class="seg"><button data-act="mineTab" data-tab="bought" class="' + (tab === "bought" ? "on" : "") + '">' + t().bought + " (" + boughtTopics.length +
      ')</button><button data-act="mineTab" data-tab="done" class="' + (tab === "done" ? "on" : "") + '">' + t().doneTab + " (" + state.history.length + ")</button></div>" + body + "</div>";
  }

  function viewPay() {
    var tp = topicById(state.pay), card = (window.CONFIG && window.CONFIG.card) || {};
    var price = priceOf(tp.id);
    return '<div class="screen"><div class="row" style="gap:8px"><button class="xbtn" data-act="payBack" aria-label="' + t().back + '">' + svg(ICON.left, 20) +
      '</button><div class="meta" style="font-size:14px;font-weight:600;color:var(--ink-2)">' + t().payTitle + "</div></div>" +
      '<div class="list center" style="gap:12px"><div class="sico gold" style="width:64px;height:64px;border-radius:32px">' + svg(ICON.lock, 30, "#0F1E3D") + "</div>" +
      '<h1 style="font-size:26px">' + esc(L(tp.title)) + "</h1>" +
      (price ? '<div class="chip gold" style="font-size:16px">' + t().payPrice + ": " + esc(price) + "</div>" : "") + "</div>" +
      '<div class="card" style="justify-content:space-between"><div class="grow"><div class="meta">' + t().cardLabel + '</div><div class="name" style="font-size:20px;letter-spacing:1px">' +
      esc(card.number || "") + '</div><div class="meta">' + esc(card.owner || "") + '</div></div><button class="xbtn" data-act="copy" data-text="' + esc(card.number || "") +
      '" aria-label="' + t().copy + '">' + svg(ICON.copy, 20) + "</button></div>" +
      '<div class="note"><span>1. ' + t().payStep1 + "</span><span>2. " + t().payStep2 + "</span><span>3. " + t().payStep3 + "</span></div>" +
      (window.PREVIEW && window.PREVIEW[tp.id] && window.PREVIEW[tp.id].length ? '<button class="btn ghost spacer" data-act="preview" data-id="' + tp.id + '">' + t().previewBtn + "</button>" : "") +
      '<button class="btn gold' + (window.PREVIEW && window.PREVIEW[tp.id] ? "" : " spacer") + '" data-act="iPaid" data-id="' + tp.id + '">' + t().iPaid + "</button></div>";
  }

  function viewNav() {
    var tabs = [["home", ICON.home], ["topics", ICON.tests], ["rating", ICON.cup], ["profile", ICON.user]];
    return '<nav aria-label="menu">' + tabs.map(function (x) {
      var on = state.tab === x[0] && state.view === "tabs";
      return '<button data-act="tab" data-tab="' + x[0] + '" class="' + (on ? "on" : "") + '">' + svg(x[1], 24, on ? "#C9A24B" : "#AAB3CC") + t().tabs[x[0]] + "</button>";
    }).join("") + "</nav>";
  }

  function render() {
    var app = document.getElementById("app");
    document.documentElement.lang = state.lang === "kk" ? "kk" : "uz";
    var html;
    if (state.view === "quiz" && state.quiz) html = viewQuiz();
    else if (state.view === "result" && state.result) html = viewResult() + viewNav();
    else if (state.view === "pay" && state.pay) html = viewPay() + viewNav();
    else if (state.view === "loading") html = '<div class="screen"><div class="empty" style="margin:auto 0">' + t().loading + "</div></div>" + viewNav();
    else {
      state.view = "tabs";
      html = { home: viewHome, topics: viewTopics, rating: viewRating, profile: viewProfile }[state.tab]() + viewNav();
    }
    app.innerHTML = html;
  }

  function renderKeepScroll() { var y = window.scrollY; render(); window.scrollTo(0, y); }

  // ---------- Hodisalar ----------
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]");
    if (!el || el.disabled) return;
    var act = el.getAttribute("data-act");
    // Oyna fonini bosganda yopiladi, lekin ichidagi tugmalar yopmasin
    if (act === "closeSheet" && el.classList.contains("sheet-back") && e.target !== el) return;
    if (act === "tab") { state.tab = el.getAttribute("data-tab"); state.view = "tabs"; state.section = null; if (state.tab === "rating") state.lb = null; render(); window.scrollTo(0, 0); }
    else if (act === "ratingTab") { state.ratingTab = el.getAttribute("data-tab"); render(); }
    else if (act === "preview") { var pid = el.getAttribute("data-id"); window.QUESTIONS["preview:" + pid] = window.PREVIEW[pid]; beginQuiz("preview:" + pid); window.scrollTo(0, 0); }
    else if (act === "section") { state.section = el.getAttribute("data-id"); render(); window.scrollTo(0, 0); }
    else if (act === "sectionBack") { state.section = null; render(); window.scrollTo(0, 0); }
    else if (act === "iPaid") { openBot("pay_" + el.getAttribute("data-id")); }
    else if (act === "payBack") { state.view = "tabs"; render(); window.scrollTo(0, 0); }
    else if (act === "copy") { copyText(el.getAttribute("data-text")); }
    else if (act === "mineTab") { state.mineTab = el.getAttribute("data-tab"); render(); }
    else if (act === "start" || act === "retry") { startQuiz(el.getAttribute("data-id")); window.scrollTo(0, 0); }
    else if (act === "goTopics") { state.view = "tabs"; state.tab = "topics"; render(); window.scrollTo(0, 0); }
    else if (act === "pick") { state.quiz.items[state.quiz.i].picked = +el.getAttribute("data-pos"); haptic("light"); renderKeepScroll(); }
    else if (act === "prev") { if (state.quiz.i > 0) { state.quiz.i--; render(); window.scrollTo(0, 0); } }
    else if (act === "next") { if (state.quiz.i < state.quiz.items.length - 1) { state.quiz.i++; render(); window.scrollTo(0, 0); } }
    else if (act === "grid") { state.sheet = true; render(); }
    else if (act === "closeSheet") { state.sheet = false; render(); }
    else if (act === "jump") { state.quiz.i = +el.getAttribute("data-i"); state.sheet = false; render(); window.scrollTo(0, 0); }
    else if (act === "finish") { requestFinish(); }
    else if (act === "lang") { state.lang = el.getAttribute("data-lang"); safeSet(LANG_KEY, state.lang); render(); }
  });

  render();
  initGrants();
  pullHistory();
})();
