
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express     = require('express');           // call express
var app         = express();                    // define our app using express
var mongoose    = require('mongoose');

// if our user.js file is at app/models/user.js
var User = require('./app/models/user');

mongoose.connect('mongodb://localhost/appDB'); 
  
// create a new user
// var newUser = User({
//   name: 'Peter Quill',
//   username: 'starlord55',
//   password: 'password',
//   admin: true
// });

// // call the built-in save method to save to the database
// newUser.save(function(err) {
//   if (err) throw err;
//   console.log('User saved successfully!');
// });

// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});