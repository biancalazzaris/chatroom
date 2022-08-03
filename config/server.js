// parametrizando as libs
const express = require("express");
const consign = require("consign");
const expressValidator = require('express-validator');

//chama o express
const app = express();

//config assests e public 
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app)

module.exports = app;