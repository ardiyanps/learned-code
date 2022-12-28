// Connect to database
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// Create database
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
// });


// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE NodeUser", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

// Create table
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "NodeUser"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

// Create primary key
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table altered");
//     });
//   });

// Insert table customers
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ?";
//     var values = [
//       ['John', 'Highway 71'],
//       ['Peter', 'Lowstreet 4'],
//       ['Amy', 'Apple st 652'],
//       ['Hannah', 'Mountain 21'],
//       ['Michael', 'Valley 345'],
//       ['Sandy', 'Ocean blvd 2'],
//       ['Betty', 'Green Grass 1'],
//       ['Richard', 'Sky st 331'],
//       ['Susan', 'One way 98'],
//       ['Vicky', 'Yellow Garden 2'],
//       ['Ben', 'Park Lane 38'],
//       ['William', 'Central st 954'],
//       ['Chuck', 'Main Road 989'],
//       ['Viola', 'Sideway 1633']
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   });

// Insert user with ID
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted, ID: " + result.insertId);
//     });
//   });

// Select all user from customers
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "NodeUser"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Select name and address from customers
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//       console.log(result[2]);
//     });
//   });

// Select all with display field
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(fields);
//       console.log(fields[1].name);
//     });
//   });

// Select all user with where
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "NodeUser"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Select with like char
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Select with mysql.escape
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// Select with multiple placeholder
// var name = 'Amy';
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
// con.query(sql, [name, adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// Select user with order by
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "NodeUser"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Select user order by DESC and ASC
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Delete user with address
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "NodeUser"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });

// Delete table customers
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DROP TABLE customers";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table deleted");
//     });
//   });

// Delete table customers if exist
//   con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DROP TABLE IF EXISTS customers";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Update user address with where
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "NodeUser"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });

// Select user with LIMIT
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "SELECT * FROM customers LIMIT 5";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Select user with LIMIT and OFFSET
//   con.connect(function(err) {
//     if (err) throw err;
//     var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Create table product
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "NodeUser"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE product (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

// Insert table product
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO product (id, name) VALUES ?";
//     var values = [
//       ['154', 'Chocolate Heaven'],
//       ['155', 'Tasty Lemons'],
//       ['156', 'Vanilla Dreams']
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   });

// Select all product
//   con.connect(function(err) {
//     if (err) throw err;
//     var sql = "SELECT * FROM product";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Create table product
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "NodeUser"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product INT(8))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

// Insert table user
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO user (name, favorite_product) VALUES ?";
//     var values = [
//       ['Jhon', '154'],
//       ['Peter', '154'],
//       ['Amy', '154'],
//       ['Hannah', ''],
//       ['Michael', '']
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   });

// Select all user
//   con.connect(function(err) {
//     if (err) throw err;
//     var sql = "SELECT * FROM user";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Join table
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "NodeUser"
});

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "SELECT user.name AS user, product.name AS favorite FROM user JOIN product ON user.favorite_product = product.id";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Left join
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "SELECT user.name AS user, product.name AS favorite FROM user LEFT JOIN product ON user.favorite_product = product.id";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// Right join
con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT user.name AS user, product.name AS favorite FROM user RIGHT JOIN product ON user.favorite_product = product.id";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });