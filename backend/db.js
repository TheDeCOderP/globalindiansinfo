const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host:'127.0.0.1',
        user:'prabisha',
        password:'Prabisha@2024!',
        database : 'globalindians'
    }
);

connection.connect((error) => {
    if (error) throw error;
    console.log("DB Connected Successfully");
})

module.exports = connection;

