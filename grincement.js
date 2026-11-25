// 🚪 Le grincement d'une porte en bois, façon film, fabriqué par le code (aucun fichier son).
// Principe : le gond « accroche puis glisse » des centaines de fois par seconde (c'est la note qu'on entend),
// la note hésite et tremble selon la vitesse de la porte, puis le bois du battant résonne.
var portesGrincantes = {
  manoir:  { titre: "La porte du manoir", duree: 1.9, corps: 0.0055, volume: 1,
    hauteurs: [[0, 170], [0.15, 320], [0.35, 450], [0.55, 380], [0.75, 520], [0.9, 300], [1, 220]] },
  grenier: { titre: "La porte du grenier", duree: 1.3, corps: 0.0035, volume: 0.8,
    hauteurs: [[0, 380], [0.2, 700], [0.45, 620], [0.7, 880], [1, 540]] },
  crypte:  { titre: "La porte de la crypte", duree: 2.4, corps: 0.008, volume: 1.15,
    hauteurs: [[0, 110], [0.2, 190], [0.5, 260], [0.7, 210], [0.9, 150], [1, 120]] },
  // La même crypte, sans grésillement : frottement plus doux, aigus coupés, moins d'écho, pas de compresseur
  crypteDouce: { titre: "La crypte, adoucie", duree: 2.4, corps: 0.008, volume: 1.2, attaque: 0.1, extinction: 3.5,
    coupe: 2200, retourCorps: 0.3, sansLimiteur: true,
    hauteurs: [[0, 110], [0.2, 190], [0.5, 260], [0.7, 210], [0.9, 150], [1, 120]] },
  crypteFeutree: { titre: "La crypte, feutrée", duree: 2.4, corps: 0.009, volume: 1.5, attaque: 0.18, extinction: 2.5,
    coupe: 1400, retourCorps: 0.2, sansLimiteur: true,
    hauteurs: [[0, 110], [0.2, 190], [0.5, 260], [0.7, 210], [0.9, 150], [1, 120]] }
};

function hauteurPorte(cles, x) {
  for (var i = 1; i < cles.length; i++) {
    if (x <= cles[i][0]) {
      var a = cles[i - 1], b = cles[i], r = (x - a[0]) / (b[0] - a[0] || 1);
      return a[1] + (b[1] - a[1]) * r;
    }
  }
  return cles[cles.length - 1][1];
}

// Fabrique le grincement dans le contexte audio « ctx », à l'instant « t ». Renvoie sa durée.
function grincement(ctx, t, nom) {
  var p = portesGrincantes[nom] || portesGrincantes.manoir;
  var sr = ctx.sampleRate, n = Math.floor(sr * p.duree);
  var tampon = ctx.createBuffer(1, n, sr), d = tampon.getChannelData(0);
  var phase = 0, amp = 1, gigue = 1, colle = 0;
  for (var k = 0; k < n; k++) {
    var s = k / sr, x = k / n;
    if (colle > 0) { colle--; d[k] = 0; continue; }       // le gond reste collé : un court silence
    var f = hauteurPorte(p.hauteurs, x) * gigue *
      (1 + 0.04 * Math.sin(2 * Math.PI * 7.5 * s) + 0.025 * Math.sin(2 * Math.PI * 13 * s + 1));
    phase += f / sr;
    if (phase >= 1) {                                      // un nouveau « glissement » du gond
      phase -= 1;
      amp = 0.6 + 0.4 * Math.random();
      gigue = 1 + (Math.random() - 0.5) * 0.06;
      if (Math.random() < 0.006 && x > 0.05 && x < 0.92) colle = Math.floor(sr * (0.03 + 0.05 * Math.random()));
    }
    // Une impulsion qui claque puis s'éteint : riche en harmoniques, comme un frottement
    var att = p.attaque || 0.02;
    d[k] = amp * Math.exp(-phase * (p.extinction || 6)) * (phase < att ? phase / att : 1);
  }
  var src = ctx.createBufferSource(); src.buffer = tampon;
  var passeHaut = ctx.createBiquadFilter(); passeHaut.type = "highpass"; passeHaut.frequency.value = 150;
  src.connect(passeHaut);
  // Les résonances du battant en bois
  var melange = ctx.createGain(); melange.gain.value = 1;
  [[600, 4, 1], [1250, 5, 0.8], [2400, 6, 0.5], [3600, 8, 0.25]].forEach(function (r) {
    var bp = ctx.createBiquadFilter(), g = ctx.createGain();
    bp.type = "bandpass"; bp.frequency.value = r[0]; bp.Q.value = r[1]; g.gain.value = r[2];
    passeHaut.connect(bp); bp.connect(g); g.connect(melange);
  });
  var sec = ctx.createGain(); sec.gain.value = 0.25; passeHaut.connect(sec); sec.connect(melange);
  // Le corps creux de la porte : un écho très court qui se répète
  var retard = ctx.createDelay(0.05), retour = ctx.createGain(), assourdi = ctx.createBiquadFilter(), sortieCorps = ctx.createGain();
  retard.delayTime.value = p.corps; retour.gain.value = p.retourCorps || 0.45; assourdi.type = "lowpass"; assourdi.frequency.value = 3000; sortieCorps.gain.value = 0.6;
  melange.connect(retard); retard.connect(assourdi); assourdi.connect(retour); retour.connect(retard); assourdi.connect(sortieCorps);
  // Le volume : la porte démarre, grince, puis s'arrête
  var env = ctx.createGain(), v = 0.9 * p.volume;
  env.gain.setValueAtTime(0.0001, t);
  env.gain.exponentialRampToValueAtTime(v, t + 0.12);
  env.gain.setValueAtTime(v, t + p.duree * 0.8);
  env.gain.exponentialRampToValueAtTime(0.0001, t + p.duree);
  melange.connect(env); sortieCorps.connect(env);
  var fin = env;
  if (p.coupe) { var doux = ctx.createBiquadFilter(); doux.type = "lowpass"; doux.frequency.value = p.coupe; doux.Q.value = 0.5; env.connect(doux); fin = doux; }
  if (p.sansLimiteur) fin.connect(ctx.destination);
  else { var limiteur = ctx.createDynamicsCompressor(); limiteur.threshold.value = -10; limiteur.ratio.value = 8; fin.connect(limiteur); limiteur.connect(ctx.destination); }
  src.start(t); src.stop(t + p.duree + 0.05);
  return p.duree;
}
