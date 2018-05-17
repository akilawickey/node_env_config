### node_prod_server
App with different env configs

### Follow these Steps

git clone https://github.com/akilawickey/node_prod_server.git

```
cd node_prod_server
npm install

```
To add develepment configurations create .env.dev file inside this folder and add following

```
APP_HOST = localhost
APP_PORT=7000

DB_HOST=localhost
DB_USER=dev_environment
DB_PASS=pwd

``` 
To add production configurations create .env.stage file inside this folder and add following

```
APP_HOST = localhost
APP_PORT= 3000

DB_HOST=localhost
DB_USER=production_stage
DB_PASS=pwd

``` 

Edit the app/server.js to change which envirment configs needed to run the application. Following is for dev stage

```
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


```

Edit following line to make application run in production configuration

```
var envFromRealEnvironment = process.env.NODE_ENV || 'stage' // Specife the environment here dev or stage

```

### Starting the Server
In order to start the app run:

```
node app/server.js

```

