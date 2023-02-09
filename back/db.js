const pg = require('pg')
// require('dotenv').config();
require('dotenv').config();
const { Sequelize } = require('sequelize');
const ModelCharacter = require('./src/models/Character');
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;

// const DB_USER = "postgres"
// const DB_PASSWORD = "Nico110500"
// const DB_HOST = "localhost:5431"

/*
EJERCICIO 01
*/

/* conexion */
const database = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

ModelCharacter(database)

/* modelos */

module.exports = {
   ...database.models,
   database,
};
