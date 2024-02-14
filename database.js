const sqlite3 = require('sqlite3').verbose();

// Ouvrir la connexion à la base de données
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error('Erreur lors de l\'ouverture de la base de données', err.message);
  } else {
    console.log('Base de données SQLite connectée avec succès');
  }
});

// Créer la table 'students'
db.serialize(() => {
    db.run('CREATE TABLE students (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)');
    console.log('Table des étudiants créée avec succès');
});
  

// Fermer la connexion à la base de données lors de l'arrêt de l'application
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      return console.error('Erreur lors de la fermeture de la base de données', err.message);
    }
    console.log('Base de données SQLite déconnectée avec succès');
    process.exit(0);
  });
});

module.exports = db;
