/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Emission = require('./emission.model');

// Get list of emissions
exports.index = function(req, res) {
  Emission.find(function (err, emissions) {      
    if(err) { return handleError(res, err); }
    return res.json(200, emissions);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}