### What is this?
This is sample app which able to run with env specific configs (e.g. local, dev, stage, prod). And also made the process automated (CI/CD) using jenkins.

## Follow these Steps

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


### 1. Using Dockerfile

```
git clone https://github.com/akilawickey/node_env_config
docker build -t <your username>/node_env_config .
docker run user/node_env_config
```
  
### 2. Run Normally

git clone https://github.com/akilawickey/node_env_config.git

```
cd node_env_config
npm install
```

### Starting the Server
In order to start the app run:

```
node server/index.js
```
### Adding app for production
In order to put the app for production first install pm2:

```
npm install pm2 -g
pm2 start server/index.js
```
