"use strict";

var Nightmare = require("nightmare");
var should = require("chai").should();

describe("Codecademy", function() {

  var login = "#header__sign-in";

  it("should require me to login", function() {
    // ID for the login button.

    Nightmare({ show : true })
      .goto("https://codecademy.com")
      // Just to be safe.
      .wait(login)
      // Click the login button.
      .click(login)
      // Assert the title is as expected.
      .evaluate(function() {
        return document.title;
      }, function (title) {
        title.should.equal("Log in | Codecademy");
        done();
      })
      .run();
  });

  it("should present a link to course catalog after login", function() {

    Nightmare({ show : true })
      .goto("https://codecademy.com")
      // Just to be safe.
      .wait(login)
      // Click the login button.
      .click(login)
      // Assert the title is as expected.
      .evaluate(function() {
        document.title.should.equal("Log in | Codecademy");
      })
      // Actually log in
      .type("#user_login", "ResilD")
      .type("#user_password", "dummy*password")
      .click("#user_submit")
      // Make sure there is a link to the course catalog
      .evaluate(function() {
        return document.querySelector("a[href='/learn/all']");
      }, function(catalog) {
        catalog.should.not.equal(undefined);
        done();
      })
      .run();
  });

  it("should ", function() {
    throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
  });

});
