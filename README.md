Bien penser à drop la base de données démarrage des tests pour éviter tous problèmes éventuels.

Des éléments vides dans la liste des stories et dans la liste des sprints sont présent à la création d'une partie.

**Auto Evaluation :**

Grille frontend: (sur 40 points)

- l'écran d'accueil s'affiche correctement (logo + bouton créer partie + bouton rejoindre partie).
  partie:
- on peut créer une partie : 3 ok
- on peut rejoindre une partie : 3 ok
- on peut quitter une partie : 1 ok
- on affiche le nom d'utilisateur sur chaque page : 1 ok
- l'écran d'accueil de la partie s'affiche correctement : 1 ok
  - on voit : nom du user, nom de la partie, code de la partie, numéro du jour (de 1 à l'infini) ok
    sprints
- on peut lister les sprints : 3 ok
- on peut créer un sprint : 3 ok
- on peut modifier un sprint : 1 ok
- on peut supprimer un sprint : 1 ok
  stories:
- on peut lister les stories : 3 ok
- on peut créer une story : 3 ok
- on peut modifier une story : 1 ok
- on peut attacher une story à un sprint : 1
- on peut supprimer une story : 1 ok
  daily:
- on peut démarrer un daily : 1 ok
- on peut cloturer un daily (et passer au jour suivant) : 1 ok
- on peut valider une productivité en répondant à un QCM : 3 ' y'a les fenetres au moins.
- on peut subir un aléa de productivité : 3
  tests:
- des tests automatisés permettent de valider 3 stories (du projet, pas du jeu) : 6

bonus:

- on peut afficher le Burndown chart du projet (release plan) : 3
- on peut afficher le Burndown chart du sprint : 3

27/40

Grille backend (sur 30 points) :

- des routes permettent de créer/supprimer une partie : 2 ok
- une route permet d'ajouter un user à une partie : 1
- une route permet d'enlever un user d'une partie : 1
- les routes CRUD sont correctement paramétrées pour les sprints : 5 ok
- les routes CRUD sont correctement paramétrées pour les stories : 5 ok
- une route permet d'attacher une story à un sprint : 1
- une route permet de détacher une story d'un sprint : 1
- des routes permettent de générer une productivité (choix d'une story, réponse au QCM) : 2
- des routes permettent de démarrer/cloturer un daily (passer au jour suivant) : 2 ok
- les modèles de données BDD sont créés correctement : 2 ok
- les routes sont correctement connectées à la BDD : 2 ok
  tests:
- des tests unitaires permettent de tester le calcul d'une productivité : 1
- des tests unitaires permettent de tester l'aléa d'une productivité : 1
- des tests unitaires permettent de tester le validation QCM d'une productivité : 1
- des tests d'integration permettent de tester les routes de participation au daily (routes + productivités) : 3

18/30