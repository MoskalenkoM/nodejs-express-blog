const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const data = [`Привет`, `Мир`, `JavaScript`];

app.get('/', (req, res) => res.render('index', { data: data }));

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
  data.push(req.body.text);
  res.redirect('/');
});

module.exports = app;
