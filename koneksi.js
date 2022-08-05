const pg = require('pg');

//create database connection

const conn = new pg({
    user: 'postgres',
    host: 'localhost',
    database: 'rtkita',
    password: 'P@ssw0rd',
    port: 5432,
  })