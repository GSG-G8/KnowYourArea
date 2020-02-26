const express = require('express');
const path = require('path');


const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..','public')));


app.set('port', process.env.PORT || 5000);


module.exports = app;
