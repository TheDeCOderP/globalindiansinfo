const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database : 'globalindians'
    }
);

connection.connect((error) => {
    if (error) throw error;
    console.log("DB Connected Successfully");
})

module.exports = connection;

