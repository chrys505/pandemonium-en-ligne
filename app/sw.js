// Le « service worker » : il garde une copie de l'appli sur le téléphone pour qu'elle marche sans Internet.
// Quand on modifie l'appli, on change ce numéro pour que les téléphones prennent la nouvelle version.
const VERSION = "pandemonium-v97";

const FICHIERS = [
  "./",
  "./index.html",
  "./fil.html",
  "./app.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icones/icone-192.png",
  "./icones/icone-512.png",
  "./icones/apple-touch-icon.png",
  "../mots-plus.js",
  "../mots.js",
  "../citations-plus.js",
  "../contenus.js",
  "../exemples.js",
  "../exemples-plus.js",
  "../fiches.js",
  "../carnet.js",
  "../livres.js",
  "../phrases.js",
  "../oracle.js", "../astro.js", "../grincement.js", "../sons/porte-bois.mp3",
  "../tableaux.js",
  "../niveaux.js",
  "../illustrations.js",
  "../rimes.js",
  "../noms-propres.js",
  "../conversation.js",
  "../maudit.js",
  "../quintessence.js",
  "../pictos.js",
  "../sublimer.js",
  "../images/fond.jpg"
];

// À l'installation : on met tous les fichiers de côté
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (cache) { return cache.addAll(FICHIERS); }));
  self.skipWaiting();
});

// À l'activation : on efface les anciennes versions
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (c) { return c !== VERSION; }).map(function (c) { return caches.delete(c); }));
  }));
  self.clients.claim();
});

// À chaque demande : on essaie Internet, et sinon on sert la copie gardée
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  // « no-cache » : on demande toujours au serveur si le fichier a changé (sinon le téléphone peut garder une vieille copie)
  // La page elle-même aussi : la page et le programme doivent toujours être de la même version
  const demande = e.request.mode === "navigate"
    ? fetch(e.request.url, { cache: "no-cache", credentials: "same-origin" })
    : fetch(new Request(e.request, { cache: "no-cache" }));
  e.respondWith(
    demande
      .then(function (reponse) {
        const copie = reponse.clone();
        caches.open(VERSION).then(function (cache) { cache.put(e.request, copie); });
        return reponse;
      })
      .catch(function () { return caches.match(e.request); })
  );
});
