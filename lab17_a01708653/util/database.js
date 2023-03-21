const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'barbie',
    password: '',
});

module.exports = pool.promise();