# The Name Game
Un mini jeu dans lequel le joueur doit trouver à quel genre correspond un prénom.

# Prérequis

Vous aurez besoin de ces deux dépendances installées sur votre ordinateur :

- **MySQL**
- **Node.js**

Si nécessaire, veillez à bien procéder à l'installation complète de **MySQL** avant de continuer, et assurez-vous d'entrer les bonnes informations dans la fonction **databaseConnect** située dans le fichier `src/routes.js`.

# Installation

D'abord, ouvrez une fenêtre de terminal à la racine du projet. Entrez la commande permettant de vous connecter à **MySQL**, et indiquez au programme de lancer le script fourni sur la même ligne.

> Exemple :
> `mysql -u root -p < DatabaseScript.sql`

Une fois la base de données mise en place, installez les dépendances du projet grâce à la commande `npm install`, puis lancez le serveur avec `node src/server.js`.

Et voilà ! Le jeu devrait maintenant être prêt. Accédez à [localhost:3000](http://localhost:3000) et jouez !

# Comment jouer

C'est aussi simple que ça en a l'air. Un nom aléatoire va apparaître au milieu de la page, et vous devrez deviner le genre qui lui correspond. Vous gagnez un point par bonne réponse, et à l'inverse, en perdez un pour chaque mauvaise réponse. En revanche, faites attention, car certains noms sont mixtes, et choisir **Male** ou **Female** ne comptera pas comme une bonne réponse !

Une fois que vous atteignez 20 points, vous gagnez ! Et si vous descendez jusqu'à 0... eh bien, vous vous doutez de ce qui se passe.

<sub><sup>PS: J'ai choisi le nom de mon projet en référence à la deuxième saison d'*American Horror Story* 👀.</sup></sub>