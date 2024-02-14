## Gestion des Étudiants avec Node.js, Express et SQLite
### @THIARE

Ce projet est une application simple de gestion des étudiants qui utilise Node.js, Express et SQLite pour créer un serveur HTTP et stocker les données des étudiants dans une base de données relationnelle.

### Prérequis
Avant de commencer, assurez-vous d'avoir installé Node.js sur votre système. Vous pouvez le télécharger à partir du site officiel de Node.js.

### Installation
Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/thiaremohamed/service-etudiant-nodejs.git
```
Accédez au répertoire du projet :

```bash
cd service-etudiant-nodejs
```
Installez les dépendances npm :

```bash
npm install
```
Démarrage
Pour démarrer le serveur de développement, exécutez la commande suivante :

```bash
npm start
```
Le serveur démarrera sur http://localhost:3000.

### Routes API
L'application expose les routes suivantes pour gérer les étudiants :

GET /api/students : Récupérer la liste de tous les étudiants.

POST /api/students : Ajouter un nouvel étudiant. Requiert un corps de requête JSON avec les propriétés name et email.

DELETE /api/students/:id : Supprimer un étudiant par son identifiant.

### Structure du Projet
index.js : Point d'entrée de l'application. Configure le serveur Express.

database.js : Configuration de la base de données SQLite.

routes/students.js : Définition des routes pour la gestion des étudiants.

package.json : Fichier de configuration npm contenant les dépendances et les scripts de l'application.

### Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez créer une issue pour discuter des changements que vous souhaitez apporter, ou bien soumettre directement une pull request.

