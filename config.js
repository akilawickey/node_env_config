//Application Configuration
'use strict'
require('dotenv').config();

var config = module.exports;

//your test platform1 configs

config.platform1 = {
	user: 'root',
	name: 'database1',
	password : process.env.DB_PASS,
	host: '127.0.0.1',
	port: '3000'
};

//your test platform2 configs

config.platform2 = {
	user: 'akila',
	name: 'dbpwd',
	host: '127.0.0.1',
	port: '8080'
};


