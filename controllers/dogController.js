'use strict';
var mongoose = require('mongoose'),
Dog = mongoose.model('Dog');

exports.addDog = function(req, res) 
{
    if(req.body != null)
    {
        var dogNameFromRequest = req.body.dogName;

        var dog = new Dog({
           dogName : dogNameFromRequest
        });

        dog.save(function (err, results) {
          console.log(results);
          res.send(results);
        });
    }    
 };