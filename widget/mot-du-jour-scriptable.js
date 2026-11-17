// Pandémonium des mots : le widget « mot du jour » pour l'appli Scriptable (iPhone, gratuite)
// À copier dans un nouveau script Scriptable, puis à ajouter comme widget sur l'écran d'accueil.

const SITE = "https://chrys505.github.io/pandemonium-en-ligne/";

// 1. On récupère la liste des mots sur le site (la même que dans l'appli)
async function lire(adresse) {
  return await new Request(adresse).loadString();
}

let mot = { mot: "Pandémonium", definition: "Ouvre l'appli pour découvrir le mot du jour." };
try {
  const code = (await lire(SITE + "mots-plus.js")) + "\n" + (await lire(SITE + "mots.js")) + "\n; mots;";
  const mots = eval(code);
  const maintenant = new Date();
  const numeroJour = Math.floor(Date.UTC(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate()) / 86400000);
  mot = mots[numeroJour % mots.length];
} catch (e) {
  // Pas d'Internet : on garde le message par défaut
}

// 2. On dessine le widget : noir, lueur de braise, mot en jaune
const widget = new ListWidget();
const fond = new LinearGradient();
fond.colors = [new Color("#0a0a0a"), new Color("#2a0d07")];
fond.locations = [0.45, 1];
widget.backgroundGradient = fond;
widget.setPadding(16, 16, 16, 16);

const etiquette = widget.addText("LE MOT DU JOUR");
etiquette.font = Font.semiboldSystemFont(10);
etiquette.textColor = new Color("#ffb800");

widget.addSpacer(6);

const titre = widget.addText(mot.mot);
titre.font = Font.heavySystemFont(28);
titre.textColor = new Color("#ffb800");
titre.lineLimit = 1;
titre.minimumScaleFactor = 0.5;

widget.addSpacer(6);

const definition = widget.addText(mot.definition);
definition.font = Font.italicSystemFont(13);
definition.textColor = new Color("#f6ecd9");
definition.lineLimit = 3;

widget.addSpacer();

const signature = widget.addText("Pandémonium des mots");
signature.font = Font.mediumSystemFont(9);
signature.textColor = new Color("#bdb3a2");

// 3. Toucher le widget ouvre l'appli ; il se met à jour toutes les 6 heures
widget.url = SITE + "app/";
widget.refreshAfterDate = new Date(Date.now() + 6 * 60 * 60 * 1000);

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  await widget.presentMedium();
}
Script.complete();
