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

//insert un produit
app.post('/api/user/add', (req, res) => 
{

  const nom = req.body.nom;
  const username = req.body.username;
  const prenom = req.body.prenom;
  const age = req.body.age;

  const InsertQuery = "INSERT INTO users (username, nom, prenom, age) VALUES (?, ?, ?, ?)";
  db.query(InsertQuery, [username, nom, prenom, age], (err, result) => {
    res.send(true);
  })
});

//insert un produit
app.delete('/api/user/delete/:username', (req, res) => 
{
  const username = req.params.username;
  console.log(username);
  const InsertQuery = "DELETE FROM users WHERE username = '"+username+"'";
  
  try
  {
    db.query(InsertQuery, (err, result) => {
      console.log(result)
      res.send(true);
    })
  }
  catch(e)
  {
    res.send(false);
  }
 
});

 //get product by name
 app.get('/api/user/getUserByUsername/:username', (req, res) => 
 {
   const username = req.params.username;
   console.log(username);
   const InsertQuery = "SELECT * FROM users WHERE username = '"+username+"'";
   db.query(InsertQuery, (err, result) => {
     res.send(result[0]);
   })
 });

 //insert un produit
app.put('/api/user/update', (req, res) => 
{

  const nom = req.body.nom;
  const username = req.body.username;
  const prenom = req.body.prenom;
  const age = req.body.age;
  
  const InsertQuery = "UPDATE users SET nom = '"+nom+"', username = '"+username+"', prenom = '"+prenom+"',  age = "+age+" WHERE username = '"+username+"'";
  db.query(InsertQuery, (err, result) => {
    res.send(true);
  })
});

app.listen(port, () => console.log('Server running on port 5010'));

