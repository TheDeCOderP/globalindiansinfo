const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'prabisha_globalindiansinfo', // Replace with your MySQL database name
});

module.exports = db;