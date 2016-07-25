// Load required packages
var express = require('express');

var usersController = require('../controllers/user');

// Create our Express router
var router = express.Router();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}

// Create endpoint handlers for /user for get autenticated user
router.route('/user')
  .get(isLoggedIn, usersController.getUserAuth);
  
  
router.route('/users')
  .get(isLoggedIn, usersController.getUsers)
  .post(isLoggedIn, usersController.postUser)
  .put(isLoggedIn, usersController.putUser);
 
  
router.route('/users/:id')
  .get(isLoggedIn, usersController.getUser)
  .delete(isLoggedIn, usersController.deleteUser);
  
module.exports = router;