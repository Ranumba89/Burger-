const { connection } = require("./connection")

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

const orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      console.log("_____________________")
      console.log(result);
      cb(result)
    });
  },
  find: function (tableInput, colSearch, colVal, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colSearch, colVal], function (err, result) {
      if (err) throw err;
      console.log("_____________________")
      console.log(result);
      cb(result)
    });
  },

  insertOne: function (table, cols, vals, cb) {
    
    var queryString = `INSERT INTO  ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`



  

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function (table, field, fieldVal, id, idVal, cb) {
   
    var queryString = `UPDATE ?? set ?? = ? where  ?? = ?`

    connection.query(queryString, [table, field, fieldVal, id, idVal], function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
}



module.exports = { orm }