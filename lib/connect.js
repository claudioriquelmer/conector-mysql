const dotenv = require('dotenv');
dotenv.config();

const mysql = require("mysql2")
const connection = mysql.createConnection(process.env.DATABASE_URL);

console.log("Connected to DataBase");

module.exports = connection;