# The Name Game
Un mini jeu dans lequel le joueur doit trouver à quel genre correspond un prénom.

# Prérequis

Vous aurez besoin de ces deux dépendances installées sur votre ordinateur :

- **MySQL**
- **Node.js**

Vous aurez également besoin de créer un [**compte Gender-Api**](https://gender-api.com/fr) qui vous fournira une clé API. Récupérez-la depuis la page de votre compte et collez-la dans la variable **api_key** dans le fichier `src/javascript.js`.

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

# Comment le jeu fonctionne / Aspect technique

*The Name Game* utilise le framework **Express.js** pour afficher la page principale (avec **EJS** pour les templates HTML), ainsi que **Node.js** côté serveur.

Quand le joueur appuie deux fois sur le bouton **Play**, l'application établit une connexion à sa base de données locale et récupère tous les noms qu'elle contient. Ensuite, à chaque fois qu'il appuie sur un "bouton de genre", l'application appelle la **Gender-API** et compare sa réponse au genre déterminé par l'API. Si ce sont les mêmes, alors le joueur gagne un point. Sinon, il en perd un.
Si la précision de la réponse de l'API est inférieure à 85%, le nom est considéré comme mixte. Appuyer sur un tout autre bouton que le "Mixed" fera alors perdre un point au joueur.

## Comment il pourrait être amélioré

Je pense que beaucoup d'aspects de ce projet pourraient être améliorés avec un peu plus de temps. Voici quelques idées que j'ai eues :

- L'UI du jeu pourrait probablement être grandement améliorée de manière générale : une interface plus propre, des boutons plus élégants..., tout ce qui pourrait la rendre plus agréable. Pour le moment, elle a été gardé la plus simple possible. Les changements devraient alors être faits dans le fichier CSS, et je pourrais probablement ajouter quelques éléments dans les templates EJS.
- Une petite fenêtre de notification qui apparaîtrait pour indiquer que le prénom précédant était mixte, dans le cas où le joueur aurait eu une mauvaise réponse ; en effet, les prénoms mixtes ne sont pas toujours évidents, et perdre un point peut alors perturber le joueur, le faisant penser qu'un bug est survenu.
- L'application pourrait demander sa clé d'API à l'utilisateur lorsqu'il lance le jeu pour la première fois ; ce qui signifie qu'il faudrait vérifier si la variable est déjà remplie (avec une valeur correcte, et pas seulement avec "Enter your API key here"), et si elle ne l'est pas, demander à l'utilisateur de la remplir.
- Actuellement, le joueur est obligé d'appuyer deux fois sur le bouton **Play**, autrement le jeu ne démarrera pas. Il s'agit d'un bug que j'ai rencontré à partir du moment où j'ai implémenté la connexion à la base de données (pour une raison qui m'échappe, la connexion n'est pas faite instantanément et cela empêche les données d'être récupérées, et par conséquent d'afficher un prénom aléatoire) et que je souhaite corriger.

J'ai dû créer cette application assez rapidement, je n'ai donc pas eu le temps de faire quelque chose de parfait pour sa "première version", autrement j'aurais probablement mis trop de temps à le rendre, mais je compte l'améliorer au fur et à mesure !

## Combien de temps cela a pris ?

J'ai travaillé sur ce projet entre deux et quatre heures pendant trois soirées de suite car je devais travailler sur d'autres projets pour mon école durant la journée, je dirais donc que j'ai mis entre neuf et dix heures pour le terminer. Cela peut sembler beaucoup pour un tel projet, mais notez bien que j'ai dû apprendre les bases d'Express.js ainsi que d'EJS, que je ne connaissais pas jusqu'ici, et que je me suis vraiment appliqué afin de rendre cette application aussi propre et professionnelle que possible, avec un code clair et commenté.

## Conclusion

J'ai beaucoup aimé travailler sur ce projet, qui m'a permis d'acquérir de nouvelles connaissances en Express *et* en Node. Le sujet était intéressant et amusant à mettre en place tout en étant un bon défi, et je compte bien continuer à travailler dessus afin de l'améliorer !

<sub><sup>PS: J'ai choisi le nom de mon projet en référence à la deuxième saison d'*American Horror Story* 👀.</sup></sub>