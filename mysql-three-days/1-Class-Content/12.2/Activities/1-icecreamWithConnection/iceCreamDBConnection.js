var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

  // Your username
  user: "newuser",

  // Your password
  password: "happy12",
    database: "ice_creamDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query(
  'SELECT * FROM products',
  function (err, res) {
    if (err) {
      throw err;
    }
    console.log(res);
    connection.end(function(err) {
      // The connection is terminated now
      if (err) {
        throw err;
      }
    });
  });


connection.query(
  "INSERT INTO products SET ?",
  [
    {
      flavor: "Rocky Road",
      price: 3.0000000000001,
      quantity: 50
    }
  ],
  function (err, res) {
    if (err) {
      throw err;
    }
    console.log('SUCCESS, inserted ', res.affectedRows, 'rows');
  });

connection.query(
  "UPDATE products SET ? WHERE (id = 7)",
  [
    {
      quantity: 100
    },
    {
      id: 7
    }
  ],
  function (err, res) {
    if (err) {
      throw err;
    }
    console.log('SUCCESS, updated ', res.affectedRows, 'rows');
  }
);

connection.query(
  "DELETE FROM products WHERE ?",
  [
    {
      flavor: 'Rocky Road'
    }
  ],
  function (err, res) {
    if (err) {
      throw err;
    }
    console.log('SUCCESS, updated ', res.affectedRows, 'rows');
  }
);





connection.end();