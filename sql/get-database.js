const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mern_db"
});

con.connect(function(err) {
  if (err) throw err;
  //Select only "name" and "address" from "customers":
  con.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});