// Le moteur de rimes : il devine le son final d'un mot (à l'oreille, pas à l'orthographe)
// pour trouver les mots qui riment. C'est une approximation : le français a beaucoup d'exceptions.

const REGLES_RIMES = [
  [/(tions?|sions?|ssions?|xions?)$/, "sion"],
  [/ments?$/, "man"],
  [/ismes?$/, "isme"],
  [/iques?$/, "ik"],
  [/esques?$/, "esk"],
  [/ables?$/, "abl"],
  [/ibles?$/, "ibl"],
  [/(illes?)$/, "iy"],
  [/(ailles?|ail)$/, "ay"],
  [/(ères?|aires?|erres?|airs?)$/, "èr"],
  [/(eurs?|eures?|œurs?)$/, "eur"],
  [/(euses?)$/, "euz"],
  [/(eux|eus|eu|œux)$/, "eu"],
  [/(ances?|ences?|anses?)$/, "ans"],
  [/(ennes?|aines?|eines?|ènes?)$/, "èn"],
  [/(ines?)$/, "inn"],
  [/(ommes?|omes?|ômes?)$/, "om"],
  [/(ones?|onnes?)$/, "onn"],
  [/(eaux?|aux|auds?|ots?|os|o|ô)$/, "o"],
  [/(ées?|és|é|er|ez)$/, "é"],
  [/(ais|ait|aient|aie|aies|ès|et|ets|ai)$/, "è"],
  [/(ants?|ents?|ands?|ans|an|en|emps)$/, "an"],
  [/(ains?|eins?|ints?|aints?|ins?)$/, "in"],
  [/(ons?|onts?|onds?)$/, "on"],
  [/(ois|oit|oies?|oi|oix|oids)$/, "oi"],
  [/(ouses?|ouzes?)$/, "ouz"],
  [/(ous?|out|oux|oup|oues?)$/, "ou"],
  [/(ues?|us|ut|u)$/, "u"],
  [/(ies?|is|it|ix|ys?)$/, "i"]
];

const VOYELLES = "aeiouyàâäéèêëîïôöùûüœ";

// Le son final d'un mot (ou du dernier mot d'une expression)
function sonFinal(texte) {
  const mots = texte.toLowerCase().trim().split(/[\s'’-]+/).filter(Boolean);
  const w = mots.length ? mots[mots.length - 1] : "";
  if (!w) return "";
  for (let i = 0; i < REGLES_RIMES.length; i++) {
    if (REGLES_RIMES[i][0].test(w)) return REGLES_RIMES[i][1];
  }
  // Sinon : la dernière voyelle et ce qui suit (sans le « e » muet ni le « s » final)
  // On simplifie ce qui s'entend pareil : â = a, ô = o, « mm » = « m »…
  const court = w.replace(/(es|e|s|x)$/, "")
    .replace(/[âà]/g, "a").replace(/[ôö]/g, "o").replace(/[îï]/g, "i").replace(/[ûù]/g, "u")
    .replace(/([^aeiouyéèêë])\1/g, "$1");
  const m = court.match(new RegExp("[" + VOYELLES + "]+[^" + VOYELLES + "]*$"));
  return m ? "#" + m[0] : "#" + court;
}

// Une réserve de mots courants, pour avoir toujours de quoi rimer (en plus des mots de l'appli)
const MOTS_COURANTS_RIMES = (
  "rime frime abîme cime crime intime prime sublime estime victime ultime légitime unanime anime déprime " +
  "rire sourire dire écrire délire empire soupir désir plaisir saphir avenir souvenir finir mourir martyr zéphyr " +
  "nuit bruit fruit minuit ennui conduit détruit séduit produit fortuit " +
  "cœur peur fleur douleur couleur chaleur rancœur honneur bonheur malheur rêveur menteur sueur lueur moteur auteur " +
  "âme flamme drame lame femme larme charme arme alarme vacarme " +
  "temps vent sang argent moment instant présent néant océan enfant talent serment tourment printemps silence " +
  "ciel miel fiel réel éternel cruel appel soleil sommeil réveil pareil conseil " +
  "rue vue nue venue perdue rue tenue issue statue " +
  "mot trop tôt beau peau eau château chapeau couteau tombeau bateau rideau ego radio solo micro tempo " +
  "nom son fond rond prison maison raison passion question saison chanson frisson démon pardon horizon " +
  "roi loi foi voix choix fois croix émoi effroi froid doigt toit " +
  "cri pluie vie envie folie mélodie poésie magie génie survie ami abri défi pari " +
  "fou cou loup tout bout coup goût dégoût jaloux doux genou caillou " +
  "mer fer hiver enfer amer clair éclair air chair hier fier univers vers travers pervers " +
  "rêve trêve grève sève glaive " +
  "noir soir espoir miroir savoir pouvoir devoir trottoir couloir histoire gloire victoire mémoire " +
  "rage page image visage orage voyage courage nuage sage outrage passage " +
  "monde ronde onde seconde profonde blonde " +
  "fin main demain chemin destin matin refrain parfum festin venin dessin instinct " +
  "beauté vérité liberté fierté clarté été bonté cité humanité éternité " +
  "pensée idée épée armée fumée rosée destinée " +
  "rap cap trap " +
  "flow ghetto tableau " +
  "style exil fil profil subtil " +
  "street beat " +
  "crise mise brise surprise église " +
  "force écorce " +
  "lumière poussière prière frontière rivière guerrière colère misère terre pierre guerre verre " +
  "rose prose chose pose dose cause pause " +
  "ombre sombre nombre décombres " +
  "verbe superbe gerbe herbe proverbe " +
  "rue cohue " +
  "masque casque fiasque " +
  "plume brume écume enclume amertume " +
  "larme arme " +
  "bitume costume coutume"
).split(" ").filter(Boolean);

// Les mots qui riment avec « mot » : d'abord ceux de l'appli (avec leur définition), puis des mots courants
function rimesPour(mot, liste) {
  const cle = sonFinal(mot);
  const base = mot.toLowerCase();
  const vus = {};
  const resultat = [];
  liste.forEach(function (m) {
    const nom = m.mot.toLowerCase();
    if (nom !== base && !vus[nom] && sonFinal(m.mot) === cle) { vus[nom] = 1; resultat.push(m); }
  });
  MOTS_COURANTS_RIMES.forEach(function (w) {
    if (w !== base && !vus[w] && sonFinal(w) === cle) { vus[w] = 1; resultat.push({ mot: w, definition: "", courant: true }); }
  });
  return resultat;
}
