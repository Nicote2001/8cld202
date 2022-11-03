const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
  host: '195.179.236.52',
  port: '3306', // the host name MYSQL_DATABASE: node_mysql
  user: 'u936724655_admin12345', // database user MYSQL_USER: MYSQL_USER
  password: 'Admin12345', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: 'u936724655_articles' // database name MYSQL_HOST_IP: mysql_db
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 80;

app.get('/api/user/getall', (req, res) => {

  const SelectQuery = " SELECT * FROM users";
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  });

  });

app.listen(port, () => console.log('Server running on port 5010'));

