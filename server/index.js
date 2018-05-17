var envFromRealEnvironment = process.env.NODE_ENV || 'dev' // Specife the environment here dev or stage
var path = `.env.${ envFromRealEnvironment }`

require('dotenv').config({path}); // Getting .env content

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.APP_PORT)

console.log('Server running is running on ' + process.env.APP_HOST + " " + process.env.APP_PORT);
console.log('\n DB_PASS = ' + process.env.DB_PASS);

