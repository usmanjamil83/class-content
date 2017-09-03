var MongoClient =  require('mongodb').MongoClient;
var db;

// returns a Promise which resolves to the new or existing database connection
module.exports.connect = function connect() {
  if (db) {
    // wrap db in a Promise
    return Promise.resolve(db);
  }

  // Database configuration
  // Save the URL of our database as well as the name of our collection
  return MongoClient.connect('mongodb://localhost/zoo', { promiseLibrary: Promise })
    .then(function(dbConn) {
    db = dbConn;
    console.log('Connected correctly to host for mongodb');
    return db;
  });
};
