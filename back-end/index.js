const express = require('express');
const mysql = require('mysql');

const app = express();


app.get('/contact/get_data', (req, res) => {
    res.send('Hello World')
}); app.listen(3000)







var connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();

