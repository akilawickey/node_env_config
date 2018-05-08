require('dotenv').config(); // Getting .env content

var config = require('../config'); //getting the general config data to the app
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.APP_PORT)

console.log('Server running is running on ' + process.env.APP_HOST + " " + process.env.APP_PORT);

//getting from config.js public data
console.log('\n User 1 Data = ' + config.platform1.userdata1);
//getting from .env which is not published to the github
console.log('\n DB_PASS = ' + process.env.DB_PASS);

