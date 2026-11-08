'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./Routes');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tienda', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});


//habilitar Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Habilitar cors
app.use(cors());

app.use('/', routes());

app.listen(5000, function() {

    console.log('servidor en ejecucion')
});