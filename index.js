const express = require('express');
const app = express();
var mysql = require('mysql');
const port = process.env.PORT || 3000;

app.get('/admin', (req, res) => {
  res.send('Hello World!')
})

app.get('/',function(req,res){
   
    var mysqlHost = process.env.MYSQL_HOST || 'localhost';
    var mysqlPort = process.env.MYSQL_PORT || '3306';
    var mysqlUser = process.env.MYSQL_USER || 'root';
    var mysqlPass = process.env.MYSQL_PASS || 'root';
    var mysqlDB   = process.env.MYSQL_DB   || 'moe_db';
 
    var connectionOptions = {
      host: mysqlHost,
      port: mysqlPort,
      user: mysqlUser,
      password: mysqlPass,
      database: mysqlDB
    };
 
    console.log('MySQL Connection config:');
    console.log(connectionOptions);
 
    var connection = mysql.createConnection(connectionOptions);
 
    connection.connect();
  
    connection.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;
      res.status(200).send(results);
    });
     
    connection.end();
 });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})