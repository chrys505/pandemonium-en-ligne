// Les pictogrammes de Pandémonium : chaque emoji affiché est remplacé par un dessin au trait,
// à la couleur de l'appli (doré, ou rouge en version sombre). Les emojis sans dessin sont teintés en monochrome.
(function () {
  // Les dessins : des tracés au trait sur une grille de 24 × 24
  const D = {
    fiole: "M9 3h6M10 3v6L5 18a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3L14 9V3M7.5 14h9",
    alambic: "M6 15a5 5 0 1 0 10 0 5 5 0 0 0-3-4.6V4h-4v6.4A5 5 0 0 0 6 15zM13 6l7 3v6M8 15h6",
    flamme: "M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1 1 2 2 2 4 1-2 1-4 1-7z",
    flocon: "M12 2v20M4 7l16 10M20 7L4 17M9 3l3 2 3-2M9 21l3-2 3 2",
    demon: "M5 3l3 5M19 3l-3 5M12 21a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM9 13h.01M15 13h.01M9 17c2 1.5 4 1.5 6 0",
    soleil: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
    cerveau: "M10 4H9a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h1zM14 4h1a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h-1zM10 10H8M14 14h2",
    plume: "M20 4c-6 0-11 5-12 12l-3 4M8 16c5 0 9-3 10-8M11 13h4",
    etincelle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z",
    profil: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c1-4 4-6 8-6s7 2 8 6",
    spirale: "M12 12a1.5 1.5 0 0 1 3 0 3 3 0 0 1-6 0 4.5 4.5 0 0 1 9 0 6 6 0 0 1-12 0 7.5 7.5 0 0 1 15 0",
    boule: "M12 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM6 21h12M8 17l-1 4M16 17l1 4M9 8a3 3 0 0 1 3-2",
    baguette: "M4 20L15 9M17 3l.9 2.1L20 6l-2.1.9L17 9l-.9-2.1L14 6l2.1-.9zM20 12v2M10 3v2M13 11l1 1",
    livre: "M3 5c3-1 6-1 9 1v14c-3-2-6-2-9-1zM21 5c-3-1-6-1-9 1v14c3-2 6-2 9-1z",
    parchemin: "M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7M7 4a2 2 0 0 0-2 2v1h4V6a2 2 0 0 0-2-2zM7 20a2 2 0 0 1-2-2M10 9h6M10 13h6",
    temple: "M3 9l9-5 9 5M5 9v9M9 9v9M15 9v9M19 9v9M3 20h18",
    tour: "M9 21l1-14h4l1 14M8 7h8M10 7V4l2-2 2 2v3M9 14h6",
    masques: "M4 5h7v5a3.5 3.5 0 0 1-7 0zM13 9h7v5a3.5 3.5 0 0 1-7 0zM6 8h.01M9 8h.01M15 12h.01M18 12h.01M6 11c.7.6 1.6.6 2.3 0M15 15.5c.7-.6 1.6-.6 2.3 0",
    epees: "M4 4l10 10M20 4L10 14M14 14l2 2-2 2-2-2M10 14l-2 2 2 2 2-2M16 18l3 3M8 18l-3 3",
    dague: "M19 5L9 15M9 15l-2-2M9 15l2 2M7 17l-3 3M14 4h6v6",
    loup: "M4 3l4 6h8l4-6v9a8 8 0 0 1-16 0zM9 13h.01M15 13h.01M10.5 17h3",
    chaine: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
    corde: "M12 2v7M9 9h6v3a3 3 0 0 1-6 0zM12 15v7M8 22h8",
    clap: "M3 9h18v11H3zM3 9l2-5h15l1 5M8 4l-2 5M13 4l-2 5M18 4l-2 5",
    crane: "M12 3a7 7 0 0 0-7 7c0 3 2 4 2 6v2h10v-2c0-2 2-3 2-6a7 7 0 0 0-7-7zM9 11h.01M15 11h.01M10 18v3M14 18v3M11 14l1-1 1 1",
    loupe: "M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM14.5 14.5L20 20",
    micro: "M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3",
    son: "M4 9h4l5-4v14l-5-4H4zM17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11",
    muet: "M4 9h4l5-4v14l-5-4H4zM17 9l4 6M21 9l-4 6",
    appareil: "M3 8h4l2-3h6l2 3h4v11H3zM12 10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z",
    partager: "M12 15V3M8 7l4-4 4 4M5 12v8h14v-8",
    de: "M5 5h14v14H5zM9 9h.01M15 15h.01M12 12h.01M15 9h.01M9 15h.01",
    sablier: "M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9",
    coche: "M5 12l5 5 9-10",
    croix: "M6 6l12 12M18 6L6 18",
    gemme: "M6 4h12l3 5-9 11L3 9zM3 9h18M9 4l3 16M15 4l-3 16",
    bulle: "M4 5h16v10H9l-5 4z",
    bougie: "M10 10h4v11h-4zM12 10V7M12 2.5c1.2 1.2 1.2 2.6 0 3.8-1.2-1.2-1.2-2.6 0-3.8z",
    coeur: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z",
    coeurbrise: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10zM12 7.5l-1.5 4 3 2-1.5 3",
    oeil: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    eclair: "M13 2L5 14h6l-1 8 8-12h-6z",
    coupe: "M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M10 17h4",
    medaille: "M12 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM8 3l3 7M16 3l-3 7M12 13v4",
    etoile: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
    cadenas: "M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3",
    ouvert: "M6 11h12v9H6zM8 11V8a4 4 0 0 1 7.5-2",
    goutte: "M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z",
    lune: "M20 14A8 8 0 1 1 10 4a6 6 0 0 0 10 10z",
    calendrier: "M4 6h16v14H4zM4 10h16M8 3v5M16 3v5",
    piece: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 7v10M15 9.5h-4a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H9",
    bouclier: "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z",
    cible: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
    porte: "M6 21V9a6 6 0 0 1 12 0v12M4 21h16M14.5 14.5h.01M12 3v18",
    toile: "M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4M8.5 5c2 1.5 5 1.5 7 0M19 8.5c-1.5 2-1.5 5 0 7M15.5 19c-2-1.5-5-1.5-7 0M5 15.5c1.5-2 1.5-5 0-7",
    carte: "M6 3h12v18H6zM12 8l2.5 4-2.5 4-2.5-4z",
    verre: "M7 3h10v4a5 5 0 0 1-10 0zM12 12v8M8 21h8",
    couronne: "M3 8l4 4 5-7 5 7 4-4-2 11H5z",
    portevoix: "M3 10v4h3l9 5V5l-9 5zM18 9a4 4 0 0 1 0 6",
    balance: "M12 3v18M7 21h10M5 7h14M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z",
    brume: "M4 9h12M4 13h16M8 17h12",
    cadre: "M4 4h16v16H4zM4 16l5-5 4 4 3-3 4 4M15 9h.01",
    triangle: "M12 4l9 16H3z",
    note: "M5 4h10l4 4v12H5zM9 12h6M9 16h6",
    regard: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM3 21c1-4 5-6 9-6M17 14l4 4-4 4",
    musique: "M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
    pinceau: "M18 3l3 3-9 9-3-3zM9 12c-3 0-5 2-5 5 0 2-1 3-2 4 4 0 8-1 9-5",
    globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
    eau: "M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11zM9 15a3 3 0 0 0 3 3",
    rire: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 10h.01M16 10h.01M7.5 14a5 5 0 0 0 9 0z"
  };
  // Quel emoji devient quel dessin
  const CARTE = {
    "🧪": "fiole", "🍯": "fiole", "⚗": "alambic", "🔥": "flamme", "❄": "flocon", "😈": "demon", "👿": "demon",
    "☀": "soleil", "🌞": "soleil", "🧠": "cerveau", "✍": "plume", "🪶": "plume", "🖋": "plume", "✨": "etincelle", "🎉": "etincelle",
    "👤": "profil", "🌀": "spirale", "🔮": "boule", "🪄": "baguette", "📖": "livre", "📚": "livre", "📕": "livre", "📜": "parchemin",
    "🏛": "temple", "🗼": "tour", "🎭": "masques", "⚔": "epees", "🤺": "epees", "🗡": "dague", "🔪": "dague", "🐺": "loup",
    "🔗": "chaine", "🪢": "corde", "🎬": "clap", "🎞": "clap", "💀": "crane", "☠": "crane", "🔎": "loupe", "🔍": "loupe", "🕵": "loupe",
    "🎤": "micro", "🔊": "son", "🔈": "son", "🔇": "muet", "📸": "appareil", "📷": "appareil", "📤": "partager", "🎲": "de",
    "⏳": "sablier", "⌛": "sablier", "✅": "coche", "✔": "coche", "❌": "croix", "💎": "gemme", "💬": "bulle", "🗨": "bulle",
    "🕯": "bougie", "❤": "coeur", "♥": "coeur", "💖": "coeur", "💔": "coeurbrise", "🖤": "coeurbrise", "👁": "oeil", "👀": "oeil",
    "⚡": "eclair", "🏆": "coupe", "🥉": "medaille", "🥈": "medaille", "🥇": "medaille", "🏅": "medaille", "🌟": "etoile", "⭐": "etoile",
    "🔒": "cadenas", "🔓": "ouvert", "🩸": "goutte", "💧": "goutte", "🌕": "lune", "🌙": "lune", "🗓": "calendrier", "📅": "calendrier",
    "🪙": "piece", "💰": "piece", "🛡": "bouclier", "🎯": "cible", "🚪": "porte", "🕸": "toile", "🃏": "carte", "🍷": "verre",
    "👑": "couronne", "📣": "portevoix", "📢": "portevoix", "⚖": "balance", "🌫": "brume", "🖼": "cadre", "🔺": "triangle",
    "📝": "note", "🎵": "musique", "🎶": "musique", "🎨": "pinceau", "🌍": "globe", "🌎": "globe", "🗺": "globe", "🌊": "eau", "😂": "rire", "😄": "rire"
  };
  // Les caractères de texte qu'on laisse tels quels (des glyphes typographiques, pas des emojis)
  const GARDER = /^[✦❦↺◀▶✕→←↑↓©®™·•…]$/;
  const EMOJI = /\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic}️?|[\u{1F3FB}-\u{1F3FF}])*/gu;
  const IGNORER = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, OPTION: 1, TITLE: 1, CANVAS: 1, SVG: 1, svg: 1, NOSCRIPT: 1 };
  const NS = "http://www.w3.org/2000/svg";

  // Le style des pictogrammes
  const style = document.createElement("style");
  style.textContent =
    ".picto{display:inline-block;width:1.12em;height:1.12em;vertical-align:-0.17em;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;flex:none}" +
    ".emoji-dore{display:inline-block;filter:grayscale(1) sepia(1) saturate(3.2) hue-rotate(-8deg) brightness(1.05)}" +
    "body.maudit .emoji-dore{filter:grayscale(1) sepia(1) saturate(6) hue-rotate(-45deg) brightness(.95)}" +
    ".titre-sceau .picto{width:.95em;height:.95em;stroke-width:1.9;color:rgba(25,14,0,.88)}" +
    ".titre-sceau .emoji-dore{filter:grayscale(1) brightness(.22) drop-shadow(0 1px 0 rgba(255,255,255,.35))}" +
    ".etiquette .picto,.etiquette .emoji-dore{margin-right:.15em}";
  document.head.appendChild(style);

  function dessin(nom) {
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "picto picto-" + nom);
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", D[nom]);
    svg.appendChild(p);
    return svg;
  }

  function convertirTexte(noeud) {
    const t = noeud.nodeValue;
    if (!t || !EMOJI.test(t)) { EMOJI.lastIndex = 0; return; }
    EMOJI.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let dernier = 0, m, change = false;
    while ((m = EMOJI.exec(t))) {
      const brut = m[0], base = brut.replace(/[️‍]|[\u{1F3FB}-\u{1F3FF}]/gu, "");
      if (GARDER.test(base)) continue;
      const premier = Array.from(base)[0];
      if (m.index > dernier) frag.appendChild(document.createTextNode(t.slice(dernier, m.index)));
      const nom = CARTE[premier];
      if (nom && D[nom]) frag.appendChild(dessin(nom));
      else { const s = document.createElement("span"); s.className = "emoji-dore"; s.textContent = brut; frag.appendChild(s); }
      dernier = m.index + brut.length; change = true;
    }
    if (!change) return;
    if (dernier < t.length) frag.appendChild(document.createTextNode(t.slice(dernier)));
    noeud.parentNode.replaceChild(frag, noeud);
  }

  function parcourir(racine) {
    if (!racine) return;
    if (racine.nodeType === 3) { if (racine.parentNode && !IGNORER[racine.parentNode.nodeName] && !(racine.parentNode.classList && racine.parentNode.classList.contains("emoji-dore"))) convertirTexte(racine); return; }
    if (racine.nodeType !== 1 || IGNORER[racine.nodeName] || racine.classList.contains("emoji-dore") || racine.closest("[data-sans-picto]")) return;
    const marcheur = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        const p = n.parentNode;
        if (!p || IGNORER[p.nodeName] || (p.classList && p.classList.contains("emoji-dore")) || p.closest("svg,[data-sans-picto]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textes = [];
    while (marcheur.nextNode()) textes.push(marcheur.currentNode);
    textes.forEach(convertirTexte);
  }

  // On convertit la page au départ, puis tout ce qui s'affiche ensuite
  let enAttente = new Set(), prevu = false;
  function traiter() { prevu = false; const l = Array.from(enAttente); enAttente.clear(); l.forEach(function (n) { if (n.isConnected) parcourir(n); }); }
  const observateur = new MutationObserver(function (muts) {
    muts.forEach(function (m) {
      if (m.type === "characterData") enAttente.add(m.target);
      else m.addedNodes.forEach(function (n) { enAttente.add(n); });
    });
    if (!prevu && enAttente.size) { prevu = true; requestAnimationFrame(traiter); }
  });
  function demarrer() {
    parcourir(document.body);
    observateur.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", demarrer); else demarrer();
})();
