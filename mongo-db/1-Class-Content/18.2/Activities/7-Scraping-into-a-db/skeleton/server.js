/* Scraping into DB (18.2.5)
* ========================== */


/* Students: Using the tools and techniques you learned so far,
 * you will scrape a website of your choice, then place the data
 * in a MongoDB database. Be sure to make the database and collection
 * before running this exercise.

 * Consult the assignment files from earlier in class
 * if you need a refresher on Cheerio. */


// Dependencies
var express = require("express");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");


// Initialize Express
var app = express();

// Database configuration


// Hook mongojs configuration to the db variable
// Use mongojs to hook the database to the db variable
var connect = require('./db').connect;


// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});


/* TODO: make two more routes
* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)
// Retrieve data from the db
app.get("/all", function (req, res) {
  // Find all results from the scrapedData collection in the db
  connect().then(function (db) {
    return db.collection('scrapedData')
    .find({})
    .toArray()
  })
  .then(function (scrapedData) {
      // send response json
      res.json(scrapedData)
    })
});

// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?

/* -/-/-/-/-/-/-/-/-/-/-/-/- */
app.get('/scrape', function (req, res){
  request('http://www.nytimes.com', function (error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var result = [];

  // Select each instance of the HTML body that you want to scrape
  // NOTE: Cheerio selectors function similarly to jQuery's selectors, 
  // but be sure to visit the package's npm page to see how it works
  $('h2.story-heading').each(function(i, element){

    var link = $(element).children().attr("href");
    var title = $(element).children().text();

    // Save these results in an object that we'll push into the result array we defined earlier
    result.push({
      title: title,
      link: link
    });
  });
})


// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
