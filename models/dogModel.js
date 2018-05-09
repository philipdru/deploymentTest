'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DogSchema = new Schema({  
    dogName: 
    {
      type: String
    }
}, { collection: 'Dog' });

module.exports = mongoose.model('Dog', DogSchema);