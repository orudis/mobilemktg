// Load required packages
var express = require('express');

var accountController = require('../controllers/account');

// Create our Express router
var router = express.Router();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}

// Create endpoint handlers for /accounts for get autenticated user

router.route('/accounts')
  .get(isLoggedIn, accountController.getAccounts);
  //.post(isLoggedIn, usersController.postAccount)
  //.put(isLoggedIn, usersController.putAccount);
 
 
router.route('/accounts/users')
  .get(isLoggedIn, accountController.getUsersAccount);
  
router.route('/accounts/:id')
  .get(isLoggedIn, accountController.getAccount)
  .delete(isLoggedIn, accountController.deleteAccount);
  
module.exports = router;