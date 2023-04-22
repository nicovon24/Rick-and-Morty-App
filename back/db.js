const pg = require("pg");
// require('dotenv').config();
require("dotenv").config();
const { Sequelize } = require("sequelize");
const ModelCharacter = require("./src/models/Character");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, DB_NAME } = process.env;

// const DB_USER = "postgres"
// const DB_PASSWORD = "Nico110500"
// const DB_HOST = "localhost:5431"

/*
EJERCICIO 01
*/

// const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

// const db = new Sequelize(
// 	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
// 	{
// 		logging: false, // set to console.log to see the raw SQL queries
// 		native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// 	}
// );

const database = new Sequelize(DB_DEPLOY, { logging: false, native: false });

/* conexion */
// const database = new Sequelize(
//    // URL
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//    { logging: false, native: false }
// );

ModelCharacter(database);

/* modelos */

module.exports = {
	...database.models,
	database,
};
