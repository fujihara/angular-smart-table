// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by angular-smart-table.js.
import { name as packageName } from "meteor/angular-smart-table";

// Write your tests here!
// Here is an example.
Tinytest.add('angular-smart-table - example', function (test) {
  test.equal(packageName, "angular-smart-table");
});
