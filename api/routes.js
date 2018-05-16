var express = require('express');
var dogController = require('../controllers/dogController');

module.exports = function(app) {
    app.post('/addDog', dogController.addDog);

    app.get('/', function(req, res){
        res.send('hello world');
    });
}