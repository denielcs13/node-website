const express = require('express');const hbs = require('hbs');const fs = require('fs');var app = express();hbs.registerPartials(__dirname + '/views/includes');app.set('view engine', 'hbs');// app.use((req, res, next)=>{//     res.render('maintaince.hbs')// });app.use(function(req, res, next){    // var now = new Date().toString();    // var log = `${now}: ${req.method} ${req.url}`;    // console.log(log);    // fs.appendFile('server.log', log + '\n', function(err){    //     if(err){    //         console.log('sorry');    //     }    // });    next();});hbs.registerHelper('copyrite', function(){   return new Date().getFullYear();});app.get('/', function (req, res) {    res.render('home.hbs', {        pageTitle: 'Home Section',    })});app.get('/about', function(req, res) {    res.render('about.hbs', {        pageTitle: 'About Section',    });});app.listen(3000, function () {    console.log('Your website is on port 3000');});