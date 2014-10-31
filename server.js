'use strict';

// Dependencies

var express         = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    app             = express(),
    mongoose        = require('mongoose');

// Database

var connectionString = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || '127.0.0.1:27017/expertic';

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect(connectionString, function(err, res) {
    if (err)
    	console.log("Error al conectarse a la base de datos: " + err);
	else
    	console.log("Conexión con la base de datos");
});

// Configurations

app.use(bodyParser.json());
app.use(methodOverride());
require('./routes')(app);

// Server

var PORT = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var HOST = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(PORT, HOST, function(err) {
    if (err)
        console.log(err);
    else
        console.log("Servidor: http://" + HOST + ":" + PORT + "/");
});
