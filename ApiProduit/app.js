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
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 80;

app.get('/api/produit/getall', (req, res) => {

    const SelectQuery = " SELECT * FROM produits";
    db.query(SelectQuery, (err, result) => {
      res.send(result)
    });

  });

  app.post('/api/produit/add', (req, res) => 
  {

    const nom = req.body.nom;
    const description = req.body.description;
    const prix = req.body.prix;
    const qty = req.body.qty;

    const InsertQuery = "INSERT INTO produits (nom, description, prix, qty) VALUES (?, ?, ?, ?)";
    db.query(InsertQuery, [nom, description, prix, qty], (err, result) => {
      console.log(result)
      res.send(true);
    })
  });

  app.delete('/api/produit/delete/:nom', (req, res) => 
  {
    const nom = req.params.nom;
    console.log(nom);
    const InsertQuery = "DELETE FROM produits WHERE nom = '"+nom+"'";
    db.query(InsertQuery, (err, result) => {
      console.log(result)
      res.send(true);
    })
  });

app.listen(port, () => console.log('Server running on port 5020'))



