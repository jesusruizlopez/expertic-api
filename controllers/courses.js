'use strict';

var Course = require('../models/course');

exports.create = function(req, res) {
	Course.create(req.body)
	.then(function(response) {
  		res.status(201).send(response);
	})
	.then(undefined, function(err) {
		res.status(500).send(err);
	});
};

exports.getAll = function(req, res) {
	Course.find().exec()
	.then(function(response) {
		if (response.length == 0)
			res.status(204).end();
		else
			res.send(response);
	})
	.then(undefined, function(err) {
    	res.status(500).send(err);
  	});
};

exports.getById = function(req, res) {
	Course.findOne({_id: req.param('id')}).exec()
	.then(function(response) {
		if (!response)
			res.status(204).end();
		else
			res.send(response);
	})
	.then(undefined, function(err) {
    	res.status(500).send(err);
  	});
};
