const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'));
const etudiants = [
  { id: 1, name: "Alain", age: 22 },
  { id: 2, name: "Céline", age: 40 }
]
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'welcome.html');
  res.sendFile(filePath);
});

app.get('/etudiant/:id', (req, res) => {
  const id = req.params.id
  let etudiant = etudiants.filter(etudiant => etudiant.id === id)
  res.json(etudiant)
})

app.listen(80, function () { console.log("serveur express start") });

module.exports = app