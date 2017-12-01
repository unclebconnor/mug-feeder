const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//set up express app
const app = express();

//log requests to the console
app.use(logger('dev'));

//parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//default catch-all route with welcome message
app.get('*', (req, res) => res.status(200).send({
	message: 'We are nowhere and its now'
}));

module.exports = app;