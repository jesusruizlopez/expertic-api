'use strict';

// Controllers

var courses = require('./controllers/courses');

module.exports = function(app) {

	app.all('*', function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
    	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    	res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization, Apikey');
    	if (req.method === 'OPTIONS')
    		res.status(200).end();
    	next();
	});
	
	app.get('/', function(req, res) {
		res.send({status: 'ON', name: "RESTful API - ExperTIC"});
	});

	// Rutas con autorización básica
	// NIVEL DE SEGURIDAD: 1

	app.all('*', function(req, res, next) {
		if (req.headers.apikey === "9631331C014C4CC1786D4B4DDEA7BC377797307")
			next();
		else
			res.status(401).end();
	});

	app.post('/courses', courses.create);
	app.get('/courses', courses.getAll);
	app.get('/courses/:id', courses.getById);
};