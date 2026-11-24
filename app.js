(function () {
  "use strict";

  var tg = window.Telegram && window.Telegram.WebApp;
  if (tg) { try { tg.ready(); tg.expand(); tg.setHeaderColor("#0F1E3D"); tg.setBackgroundColor("#0F1E3D"); } catch (e) {} }

  // ---------- Matnlar (uz / kk) ----------
  var I18N = {
    uz: {
      appName: "Huquq Test",
      tabs: { topics: "Mavzular", results: "Natijalar", rating: "Reyting", profile: "Profil" },
      pickTopic: "Mavzuni tanlang",
      topicHint: "Savollar aralashtiriladi. Har bir savolga 1 daqiqa vaqt beriladi.",
      questionsN: function (n) { return n + " ta savol"; },
      mixed: "Aralash testni boshlash",
      questionOf: function (i, n) { return "Savol " + i + " / " + n; },
      confirm: "Javobni tasdiqlash", next: "Keyingi savol", finish: "Natijani ko'rish", exit: "Chiqish",
      exitAsk: "Testdan chiqasizmi? Natija saqlanmaydi.",
      correctWord: "To'g'ri", wrongWord: "Noto'g'ri", correctAnswer: "To'g'ri javob: ",
      resultTitle: "natija",
      verdict: function (p) { return p >= 85 ? "Ajoyib natija!" : p >= 60 ? "Yaxshi natija!" : "Yana urinib ko'ring"; },
      verdictSub: function (p) { return "Siz " + p + "% to'g'ri javob berdingiz."; },
      rightAnswers: "to'g'ri javob", spent: "sarflangan vaqt", points: "ball",
      mistakes: "Xatolar ustida ishlash", toTopics: "Mavzularga qaytish", noMistakes: "Xato yo'q. Barakalla!",
      mistakeN: function (n) { return "Xato javob: " + n + "-savol"; },
      resultsTitle: "Natijalar", noResults: "Hali test topshirilmagan.",
      ratingTitle: "Reyting", ratingHint: "Har bir mavzu bo'yicha eng yaxshi natijangiz.", ratingNone: "natija yo'q",
      profileTitle: "Profil", total: "jami ball", tests: "topshirilgan test", avg: "o'rtacha natija",
      language: "Til", languageHint: "Tanlangan til menyu va test savollariga qo'llanadi.",
      guest: "Foydalanuvchi", timeUp: "Vaqt tugadi"
    },
    kk: {
      appName: "Huqıq Test",
      tabs: { topics: "Temalar", results: "Nátiyjeler", rating: "Reyting", profile: "Profil" },
      pickTopic: "Temanı saylań",
      topicHint: "Sorawlar aralastırıladı. Hár bir sorawǵa 1 minut waqıt beriledi.",
      questionsN: function (n) { return n + " soraw"; },
      mixed: "Aralas testti baslaw",
      questionOf: function (i, n) { return "Soraw " + i + " / " + n; },
      confirm: "Juwaptı tastıyıqlaw", next: "Keyingi soraw", finish: "Nátiyjeni kóriw", exit: "Shıǵıw",
      exitAsk: "Testten shıǵasızba? Nátiyje saqlanbaydı.",
      correctWord: "Durıs", wrongWord: "Qáte", correctAnswer: "Durıs juwap: ",
      resultTitle: "nátiyje",
      verdict: function (p) { return p >= 85 ? "Ájayıp nátiyje!" : p >= 60 ? "Jaqsı nátiyje!" : "Jáne urınıp kóriń"; },
      verdictSub: function (p) { return "Siz " + p + "% durıs juwap berdińiz."; },
      rightAnswers: "durıs juwap", spent: "sarıplanǵan waqıt", points: "bal",
      mistakes: "Qátelikler ústinde islew", toTopics: "Temalarǵa qaytıw", noMistakes: "Qátelik joq. Baraka!",
      mistakeN: function (n) { return "Qáte juwap: " + n + "-soraw"; },
      resultsTitle: "Nátiyjeler", noResults: "Ele test tapsırılmaǵan.",
      ratingTitle: "Reyting", ratingHint: "Hár bir tema boyınsha eń jaqsı nátiyjeńiz.", ratingNone: "nátiyje joq",
      profileTitle: "Profil", total: "jámi bal", tests: "tapsırılǵan test", avg: "ortasha nátiyje",
      language: "Til", languageHint: "Saylanǵan til menyu hám test sorawlarına qollanıladı.",
      guest: "Paydalanıwshı", timeUp: "Waqıt tamamlandı"
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
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    chart: '<path d="M5 20V10"/><path d="M12 20V4"/><path d="M19 20v-7"/>',
    cup: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H4v1a3 3 0 0 0 3 3"/><path d="M16 6h4v1a3 3 0 0 1-3 3"/><path d="M12 13v4"/><path d="M9 20h6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    clock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2"/><path d="M9 3h6"/>'
  };

  // ---------- Holat ----------
  var STORE_KEY = "huquq_test_v1";
  var LANG_KEY = "huquq_test_lang";

  function safeGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }

  function detectLang() {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q === "uz" || q === "kk") { safeSet(LANG_KEY, q); return q; }
    var s = safeGet(LANG_KEY);
    return s === "kk" ? "kk" : "uz";
  }

  function loadHistory() {
    try { var h = JSON.parse(safeGet(STORE_KEY) || "[]"); return Array.isArray(h) ? h : []; } catch (e) { return []; }
  }
  function saveHistory(h) { safeSet(STORE_KEY, JSON.stringify(h.slice(-200))); }

  var state = { lang: detectLang(), tab: "topics", view: "tabs", quiz: null, result: null, history: loadHistory(), timer: null };

  function t() { return I18N[state.lang]; }
  function L(obj) { return obj[state.lang] || obj.uz; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function fmt(sec) { sec = Math.max(0, sec); var m = Math.floor(sec / 60), s = sec % 60; return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s; }
  function topicById(id) { return window.TOPICS.filter(function (x) { return x.id === id; })[0]; }
  function haptic(kind) { try { tg && tg.HapticFeedback && tg.HapticFeedback.notificationOccurred(kind); } catch (e) {} }

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
      var order = shuffle(q.o.map(function (_, i) { return i; }));
      return { q: q, order: order, picked: null, checked: false };
    });
    return { topicId: topicId, items: items, i: 0, startedAt: Date.now(), deadline: Date.now() + items.length * 60000 };
  }

  function startQuiz(topicId) {
    stopTimer();
    state.quiz = buildQuiz(topicId);
    if (!state.quiz.items.length) { state.quiz = null; return; }
    state.view = "quiz";
    render();
    state.timer = setInterval(tick, 1000);
  }
  function stopTimer() { if (state.timer) { clearInterval(state.timer); state.timer = null; } }

  function tick() {
    var el = document.getElementById("timer");
    if (!state.quiz) { stopTimer(); return; }
    var left = Math.round((state.quiz.deadline - Date.now()) / 1000);
    if (el) el.textContent = fmt(left);
    if (left <= 0) { finishQuiz(); }
  }

  function finishQuiz() {
    var qz = state.quiz; if (!qz) return;
    stopTimer();
    var correct = 0, wrong = [];
    qz.items.forEach(function (it, idx) {
      var ok = it.picked !== null && it.order[it.picked] === it.q.a;
      if (ok) correct++; else wrong.push({ n: idx + 1, it: it });
    });
    var total = qz.items.length;
    var secs = Math.min(Math.round((Date.now() - qz.startedAt) / 1000), total * 60);
    var res = { topicId: qz.topicId, correct: correct, total: total, secs: secs, points: correct * 10, date: Date.now() };
    state.history.push(res); saveHistory(state.history);
    state.result = { res: res, wrong: wrong, items: qz.items };
    state.quiz = null; state.view = "result";
    render();
  }

  // ---------- Ko'rinishlar ----------
  function topicTitle(id) { return id === "mixed" ? t().mixed.replace(/ (ni )?(boshlash|baslaw)$/i, "") : L(topicById(id).title); }

  function viewTopics() {
    var cards = window.TOPICS.map(function (tp) {
      var n = (window.QUESTIONS[tp.id] || []).length;
      return '<button class="card" data-act="start" data-id="' + tp.id + '"><div class="ico">' + svg(ICON[tp.icon] || ICON.doc, 22, "#C9A24B") +
        '</div><div class="grow"><div class="name">' + esc(L(tp.title)) + '</div><div class="meta">' + t().questionsN(n) + "</div></div></button>";
    }).join("");
    return '<div class="screen">' + topbar() +
      '<div class="list" style="gap:8px"><h1>' + t().pickTopic + '</h1><p class="sub">' + t().topicHint + "</p></div>" +
      '<div class="list">' + cards + "</div>" +
      '<button class="btn gold spacer" data-act="start" data-id="mixed">' + t().mixed + "</button></div>";
  }

  function topbar() {
    var pts = state.history.reduce(function (s, h) { return s + h.points; }, 0);
    return '<div class="row topbar"><div class="row brand"><div class="logo">' + svg(ICON.scales, 20, "#0F1E3D") + "</div>" + t().appName +
      '</div><div class="chip">' + pts + " " + t().points + "</div></div>";
  }

  function viewQuiz() {
    var qz = state.quiz, it = qz.items[qz.i], n = qz.items.length;
    var keys = ["A", "B", "C", "D", "E", "F"];
    var left = Math.round((qz.deadline - Date.now()) / 1000);
    var pct = Math.round((qz.i / n) * 100);
    var opts = it.order.map(function (orig, pos) {
      var cls = "opt";
      if (it.checked) { if (orig === it.q.a) cls += " ok"; else if (pos === it.picked) cls += " bad"; }
      else if (pos === it.picked) cls += " sel";
      return '<button class="' + cls + '" data-act="pick" data-pos="' + pos + '"' + (it.checked ? " disabled" : "") + '><span class="key">' + keys[pos] +
        "</span><span>" + esc(L(it.q.o[orig])) + "</span></button>";
    }).join("");
    var note = "";
    if (it.checked) {
      var ok = it.order[it.picked] === it.q.a;
      note = '<div class="note ' + (ok ? "ok" : "bad") + '"><b>' + (ok ? t().correctWord : t().wrongWord) + "</b>" +
        (ok ? "" : "<span>" + t().correctAnswer + esc(L(it.q.o[it.q.a])) + "</span>") + "<span>" + esc(L(it.q.e)) + "</span></div>";
    }
    var last = qz.i === n - 1;
    var action = it.checked
      ? '<button class="btn gold" data-act="next">' + (last ? t().finish : t().next) + "</button>"
      : '<button class="btn gold" data-act="confirm"' + (it.picked === null ? " disabled" : "") + ">" + t().confirm + "</button>";
    return '<div class="screen"><div class="row topbar"><div class="brand">' + esc(topicTitle(qz.topicId)) +
      '</div><div class="chip gold">' + svg(ICON.clock, 16, "#C9A24B") + '<span id="timer">' + fmt(left) + "</span></div></div>" +
      '<div class="progress"><div class="labels"><span>' + t().questionOf(qz.i + 1, n) + "</span><span>" + pct + '%</span></div><div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
      '<h1 class="q-title">' + esc(L(it.q.q)) + "</h1>" +
      '<div class="list">' + opts + "</div>" + note +
      '<div class="footer spacer"><button class="btn ghost" data-act="exit">' + t().exit + "</button>" + action + "</div></div>";
  }

  function viewResult() {
    var r = state.result.res, pct = Math.round((r.correct / r.total) * 100);
    var first = state.result.wrong[0];
    var mistakeBox = first
      ? '<div class="note"><b>' + t().mistakeN(first.n) + "</b><span>" + t().correctAnswer + esc(L(first.it.q.o[first.it.q.a])) + "</span><span>" + esc(L(first.it.q.e)) + "</span></div>"
      : '<div class="note ok"><b>' + t().noMistakes + "</b></div>";
    return '<div class="screen"><div class="brand row" style="font-size:14px;font-weight:600;color:var(--ink-2)">' + esc(topicTitle(r.topicId)) + ": " + t().resultTitle + "</div>" +
      '<div class="score"><strong>' + r.correct + "/" + r.total + "</strong><span>" + t().rightAnswers + "</span></div>" +
      '<div class="list center" style="gap:8px"><h1 style="font-size:28px">' + t().verdict(pct) + '</h1><p class="sub">' + t().verdictSub(pct) + "</p></div>" +
      '<div class="stats"><div class="stat"><b>' + fmt(r.secs) + "</b><span>" + t().spent + '</span></div><div class="stat"><b>+' + r.points + "</b><span>" + t().points + "</span></div></div>" +
      mistakeBox +
      '<div class="list spacer"><button class="btn gold" data-act="retry" data-id="' + r.topicId + '">' + t().mistakes + '</button><button class="btn ghost" data-act="home">' + t().toTopics + "</button></div></div>";
  }

  function fmtDate(ts) { var d = new Date(ts); var p = function (x) { return (x < 10 ? "0" : "") + x; }; return p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear(); }

  function viewResults() {
    var h = state.history.slice().reverse();
    var body = h.length ? '<div class="list">' + h.map(function (r) {
      var pct = Math.round((r.correct / r.total) * 100);
      return '<div class="card"><div class="grow"><div class="name">' + esc(topicTitle(r.topicId)) + '</div><div class="meta">' + fmtDate(r.date) + " · " + fmt(r.secs) +
        " · " + r.correct + "/" + r.total + '</div></div><div class="pct">' + pct + "%</div></div>";
    }).join("") + "</div>" : '<div class="empty">' + t().noResults + "</div>";
    return '<div class="screen"><h1>' + t().resultsTitle + "</h1>" + body + "</div>";
  }

  function viewRating() {
    var rows = window.TOPICS.map(function (tp) {
      var best = null;
      state.history.forEach(function (r) { if (r.topicId === tp.id) { var p = Math.round((r.correct / r.total) * 100); if (best === null || p > best) best = p; } });
      return '<div class="card"><div class="ico">' + svg(ICON[tp.icon] || ICON.doc, 22, "#C9A24B") + '</div><div class="grow"><div class="name">' + esc(L(tp.title)) +
        '</div></div><div class="pct">' + (best === null ? '<span class="meta">' + t().ratingNone + "</span>" : best + "%") + "</div></div>";
    }).join("");
    return '<div class="screen"><div class="list" style="gap:8px"><h1>' + t().ratingTitle + '</h1><p class="sub">' + t().ratingHint + '</p></div><div class="list">' + rows + "</div></div>";
  }

  function viewProfile() {
    var u = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) || null;
    var name = u ? [u.first_name, u.last_name].filter(Boolean).join(" ") : t().guest;
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
    var tabs = [["topics", ICON.grid], ["results", ICON.chart], ["rating", ICON.cup], ["profile", ICON.user]];
    return "<nav aria-label=\"menu\">" + tabs.map(function (x) {
      var on = state.tab === x[0];
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
      html = { topics: viewTopics, results: viewResults, rating: viewRating, profile: viewProfile }[state.tab]() + viewNav();
    }
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  // ---------- Hodisalar ----------
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]");
    if (!el || el.disabled) return;
    var act = el.getAttribute("data-act");
    if (act === "tab") { state.tab = el.getAttribute("data-tab"); state.view = "tabs"; render(); }
    else if (act === "start" || act === "retry") { startQuiz(el.getAttribute("data-id")); }
    else if (act === "home") { state.view = "tabs"; state.tab = "topics"; render(); }
    else if (act === "pick") { var it = state.quiz.items[state.quiz.i]; if (!it.checked) { it.picked = +el.getAttribute("data-pos"); render(); } }
    else if (act === "confirm") {
      var cur = state.quiz.items[state.quiz.i];
      if (cur.picked === null) return;
      cur.checked = true;
      haptic(cur.order[cur.picked] === cur.q.a ? "success" : "error");
      render();
    }
    else if (act === "next") { if (state.quiz.i >= state.quiz.items.length - 1) finishQuiz(); else { state.quiz.i++; render(); } }
    else if (act === "exit") { if (window.confirm(t().exitAsk)) { stopTimer(); state.quiz = null; state.view = "tabs"; render(); } }
    else if (act === "lang") { state.lang = el.getAttribute("data-lang"); safeSet(LANG_KEY, state.lang); render(); }
  });

  render();
})();
