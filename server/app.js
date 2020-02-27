require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./controllers');

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));


app.set('port', process.env.PORT || 5000);

app.use(router);

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', 'public', '404.html'));
});


app.use((err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', 'public', '500.html'));
});


module.exports = app;
