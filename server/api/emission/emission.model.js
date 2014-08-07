'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmissionSchema = new Schema({
  name: String
});

module.exports = mongoose.model('emissions', EmissionSchema);