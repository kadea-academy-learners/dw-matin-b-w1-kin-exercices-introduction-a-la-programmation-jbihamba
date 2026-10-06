# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-06 14:36 UTC · commit `7e3c649` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **1 / 15**

Exercices : **42 / 95** · Parfaits : 4 / 19 · Non rendus : 0

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **4** | 🟡 Règles non respectées | 5/5 | 0 | ❌ | Le résultat est bon, mais les règles ne sont pas toutes respectées : const par défaut, justification en commentaire, un seul gabarit littéral.<br>• Justifie en commentaire le choix de `const` ou `let` pour tes variables.<br>📚 Recherche non rédigée. |
| **F2** — Le convertisseur de saisie | **1** | ❌ Erreur d'exécution | — | 0 | ✅ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **F3** — Pair ou impair : le tirage des tickets | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **F4** — Le contrôleur du bus | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **F5** — Ma première fonction fléchée | **1** | ❌ Erreur d'exécution | — | 0 | ✅ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **F6** — Le compte à rebours | **5** | ✅ Parfait | 2/2 | 0 | ❌ | Parfait ! Les 3 parties de la boucle `for` sont maîtrisées et `continue` est bien placé.<br>📚 Recherche non rédigée. |
| **M1** — FizzBuzz kinois | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **M2** — Le distributeur automatique (DAB) | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **M4** — Le score par défaut : \|\| contre ?? | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **M5** — La vitre teintée (portée de bloc) | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Le programme s'arrête encore sur une erreur : une variable déclarée avec const dans un bloc { } n'existe pas en dehors. Une ReferenceError stoppe tout le script, c'est pour ça que afficher() ne s'exécutait jamais.<br>• ReferenceError: secret is not defined<br>📚 Recherche non rédigée. |
| **M6** — Le détective du return | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **M7** — La tirelire numérique | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **M8** — La batterie qui se décharge | **1** | ❌ Erreur d'exécution | — | 0 | ❌ | Le programme ne se termine pas ou plante : vérifie que la batterie diminue bien à chaque tour, sinon la condition du while reste vraie (boucle infinie).<br>• ReferenceError: require is not defined<br>📚 Recherche non rédigée. |
| **A1** — Kadea Express v2 : le calculateur de livraison | **3** | 🟠 Résultat incorrect | 8/9 | 0 | ❌ | Au moins un tarif est faux : « jusqu'à 5 km » inclut 5 (<=), « plus de 10 kg » exclut 10 (>), l'urgence multiplie tout le montant avant la TVA, puis Math.round().<br>• `calculerLivraison(5, 2)` renvoie 4640 au lieu de 2320.<br>• Calcule le tarif de base avec `if / else if / else`.<br>📚 Recherche non rédigée. |
| **A2** — Le moteur de paie v2 | **5** | ✅ Parfait | 7/7 | 0 | ❌ | Parfait ! Accumulateur avec .forEach(), heures supplémentaires et recherche du maximum corrects.<br>📚 Recherche non rédigée. |
| **A3** — L'inventaire en console | **3** | 🟠 Résultat incorrect | 6/7 | 0 | ❌ | Un résultat est faux ou introuvable : stocke chaque résultat (filter, map) dans une variable ou affiche-le, et gère le cas undefined de .find() avec « Produit introuvable ».<br>• `chercherProduit(999)` renvoie undefined au lieu de 'Produit introuvable'.<br>📚 Recherche non rédigée. |
| **A4** — Le classement de la promo | **5** | ✅ Parfait | 9/9 | 0 | ❌ | Parfait ! Fonctions, boucles, conditions et méthodes de tableau bien combinées ; bulletin vérifié avec console.table().<br>📚 Recherche non rédigée. |
| **A5** — Le nombre mystère | **5** | ✅ Parfait | 4/4 | 0 | ❌ | Parfait ! Jeu complet et robuste : saisies invalides refusées sans compter l'essai, 7 essais maximum.<br>📚 Recherche non rédigée. |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Débutant : Insuffisant (32 %) | **0** | Utilisation de var, variables non déclarées ou redéclarées (SyntaxError). Incapable d'identifier le type d'une valeur.<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | Débutant : Insuffisant (16 %) | **0** | == ou affectation = dans un if, branches manquantes, résultats faux selon les valeurs testées.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | Débutant : Insuffisant (16 %) | **0** | Aucune fonction, le code est copié-collé ; ou fonctions déclarées mais jamais appelées.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | En développement : À améliorer (40 %) | **1** | Erreur de bornes (un tour en trop ou en moins), accumulateur remis à zéro dans la boucle, break / continue mal placés.<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | Débutant : Insuffisant (12 %) | **0** | Pas de RECHERCHES.md ou aucune source. Code non poussé sur GitHub.<br>_Recherches 0 % · commits par exercice 11 % · règles de code 37 %_ |
| **Total** | | **1 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
