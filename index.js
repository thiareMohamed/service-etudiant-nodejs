const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/students');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes des étudiants
app.use('/api', studentRoutes);

app.listen(port, () => {
  console.log(`Le serveur est démarré sur http://localhost:${port}`);
});
