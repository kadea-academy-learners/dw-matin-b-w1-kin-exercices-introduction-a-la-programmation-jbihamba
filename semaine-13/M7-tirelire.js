// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M7 — La tirelire numérique (Niveau 2 — Moyen)

Objectif : utiliser une boucle for avec un accumulateur et une condition à l'intérieur.
Contexte : Patience épargne 2 000 FC par semaine ; toutes les 4 semaines, sa tante ajoute un bonus de 1 000 FC.

Consignes :
1. Simule 12 semaines avec une boucle.
2. À chaque tour, affiche : Semaine 4 : 9000 FC (bonus !).
3. Affiche le total final.

Résultat attendu :
Total après 12 semaines : 27000 FC

Recherche (à rédiger dans RECHERCHES.md) :
Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

let totalEpargne = 0;
let bonusSemaine4 = false;
for (let semaine = 1; semaine <= 12; semaine++) {
	totalEpargne += 2000;
	if (semaine % 4 === 1) {
		totalEpargne += 1000;
		if (semaine === 4) {
			bonusSemaine4 = true;
		}
		console.log(`Semaine ${semaine} : ${totalEpargne} FC (bonus !)`);
	} else {
		console.log(`Semaine ${semaine} : ${totalEpargne} FC`);
	}
}
console.log(`Total après 12 semaines : ${totalEpargne} FC`);

require('node:assert/strict').equal(bonusSemaine4, true);


