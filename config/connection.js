var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Gcakatmac20",
    database: "wishes_db"
  });

  module.exports = {connection}