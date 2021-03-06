const express = require('express');const hbs = require('hbs');const fs = require('fs');var app = express();var port = process.env.port || 3000;hbs.registerPartials(__dirname + '/views/includes');app.set('view engine', 'hbs');hbs.registerHelper('copyrite', function(){   return new Date().getFullYear();});app.get('/', function (req, res) {    res.render('home.hbs', {        pageTitle: 'Home Section',    })});app.get('/about', function(req, res) {    res.render('about.hbs', {        pageTitle: 'About Section',    });});app.listen(port, function () {    console.log('your website is on ' + port);});