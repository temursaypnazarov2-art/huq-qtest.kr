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
      guest: "Foydalanuvchi"
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
      guest: "Paydalanıwshı"
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

  var state = { lang: detectLang(), tab: "home", view: "tabs", quiz: null, result: null, sheet: false, history: loadHistory(), timer: null };

  function t() { return I18N[state.lang]; }
  function L(obj) { return obj[state.lang] || obj.uz; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function fmt(sec) { sec = Math.max(0, sec); var m = Math.floor(sec / 60), s = sec % 60; return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s; }
  function topicById(id) { return window.TOPICS.filter(function (x) { return x.id === id; })[0]; }
  function topicTitle(id) { return id === "mixed" ? t().mixedName : L(topicById(id).title); }
  function pctOf(r) { return Math.round((r.correct / r.total) * 100); }
  function haptic(kind) { try { tg && tg.HapticFeedback && tg.HapticFeedback.impactOccurred(kind || "light"); } catch (e) {} }
  function answeredCount(qz) { return qz.items.filter(function (i) { return i.picked !== null; }).length; }
  function userName() {
    var u = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) || null;
    return u ? ([u.first_name, u.last_name].filter(Boolean).join(" ") || t().guest) : t().guest;
  }

  // ---------- Test ----------
  function buildQuiz(topicId) {
    var pool = [];
    if (topicId === "mixed") {
      Object.keys(window.QUESTIONS).forEach(function (id) { window.QUESTIONS[id].forEach(function (q) { pool.push(q); }); });
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
    state.history.push(res); saveHistory(state.history);
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
    var cards = window.TOPICS.map(function (tp) {
      var n = (window.QUESTIONS[tp.id] || []).length;
      return '<button class="card" data-act="start" data-id="' + tp.id + '"><div class="ico">' + svg(ICON[tp.icon] || ICON.doc, 22, "#C9A24B") +
        '</div><div class="grow"><div class="name">' + esc(L(tp.title)) + '</div><div class="meta">' + t().questionsN(n) + "</div></div></button>";
    }).join("");
    return '<div class="screen"><div class="list" style="gap:8px"><h1>' + t().pickTopic + '</h1><p class="sub">' + t().topicHint + "</p></div>" +
      '<div class="list">' + cards + "</div>" +
      '<button class="btn gold spacer" data-act="start" data-id="mixed">' + t().mixed + "</button></div>";
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
    var rows = window.TOPICS.map(function (tp) {
      var best = null;
      state.history.forEach(function (r) { if (r.topicId === tp.id) { var p = pctOf(r); if (best === null || p > best) best = p; } });
      return '<div class="card"><div class="ico">' + svg(ICON[tp.icon] || ICON.doc, 22, "#C9A24B") + '</div><div class="grow"><div class="name">' + esc(L(tp.title)) +
        '</div></div><div class="pct">' + (best === null ? '<span class="meta">' + t().ratingNone + "</span>" : best + "%") + "</div></div>";
    }).join("");
    return '<div class="screen"><div class="list" style="gap:8px"><h1>' + t().ratingTitle + '</h1><p class="sub">' + t().ratingHint + '</p></div><div class="list">' + rows + "</div></div>";
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
      '">O\'zbekcha</button><button data-act="lang" data-lang="kk" class="' + (state.lang === "kk" ? "on" : "") + '">Qaraqalpaqsha</button></div><p class="sub" style="font-size:13px">' + t().languageHint + "</p></div></div>";
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
    if (act === "tab") { state.tab = el.getAttribute("data-tab"); state.view = "tabs"; render(); window.scrollTo(0, 0); }
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
})();
