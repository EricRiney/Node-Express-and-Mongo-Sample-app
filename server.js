// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express     = require('express');           // call express
var app         = express();                    // define our app using express
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/appDB'); 

// if our user.js file is at app/models/user.js
var User = require('./app/models/user');

// Build some users
// =============================================================================

// create a new user called chris
// var chris = new User({
//   name: 'Chris',
//   username: 'sevilayha',
//   password: 'password' 
// });  

// chris.save(function(err) {
//   if (err) throw err;
//   console.log('User saved successfully!');
// });

// var newUser = User({
//   name: 'Peter Quill',
//   username: 'starlord55',
//   password: 'password',
//   admin: true
// });

// newUser.save(function(err) {
//   if (err) throw err;
//   console.log('User saved successfully!');
// });

// get all the users
// =============================================================================

// User.find({}, function(err, users) {
//   if (err) throw err;

//   // object of all the users
//   console.log(users);
// });

// get the user starlord55
// =============================================================================

// User.find({ username: 'starlord55' }, function(err, user) {
//   if (err) throw err;

//   // object of the user
//   console.log(user);
// });

// get a user with ID of 59546bcaafca4c8059eb7b9c
// =============================================================================

// User.findById('59546bcaafca4c8059eb7b9c', function(err, user) {
//   if (err) throw err;

//   // show the one user
//   console.log(user);
// });

// get any admin that was created in the past month
// =============================================================================

// get the date 1 month ago
// var monthAgo = new Date();
// monthAgo.setMonth(monthAgo.getMonth() - 1);

// User.find({ admin: true }).where('created_at').gt(monthAgo).exec(function(err, users) {
//   if (err) throw err;

//   // show the admins in the past month
//   console.log(users);
// });

// get a user with ID of 59546bcaafca4c8059eb7b9c
// =============================================================================

// User.findById('59546bcaafca4c8059eb7b9c', function(err, user) {
//   if (err) throw err;

//   // change the users location
//   user.location = 'uk';

//   // save the user
//   user.save(function(err) {
//     if (err) throw err;

//     console.log('User successfully updated!');
//   });

// });

// find the user starlord55
// update him to starlord88
// =============================================================================

// User.findOneAndUpdate({ username: 'starlord88' }, { username: 'starlord89' }, 
//     function(err, user) {
//   if (err) throw err;

//   // we have the updated user returned to us
//   console.log(user);
// });