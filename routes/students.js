const express = require('express');
const router = express.Router();
const db = require('../database');

// Récupérer tous les étudiants
router.get('/students', (req, res) => {
  db.all('SELECT * FROM students', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Ajouter un nouvel étudiant
router.post('/students', (req, res) => {
    console.log("post");
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ error: 'Le nom et l\'email sont requis' });
    return;
  }
  db.run('INSERT INTO students (name, email) VALUES (?, ?)', [name, email], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

// Supprimer un étudiant
router.delete('/students/:id', (req, res) => {
  db.run('DELETE FROM students WHERE id = ?', req.params.id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Étudiant supprimé avec succès' });
  });
});

module.exports = router;
