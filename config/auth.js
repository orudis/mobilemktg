// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1587355341576878', // your App ID
		'clientSecret' 	: 'e6577184ce00f2986f35916dd8cc9055', // your App Secret
		//'callbackURL' 	: 'http://localhost/auth/facebook/callback'
        'callbackURL' 	: 'https://mobilemktg.herokuapp.com/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 	: 'AEPzFuoxQ8hwTNri7exvueDYo',
		'consumerSecret': 'NBvaVu24DoPKLtQDrIeRDbvVFDi8x8kXCZ8k9abYFAcgyWAAIs',
		//'callbackURL' 	: 'http://localhost/auth/twitter/callback'
        'callbackURL' :	'https://mobilemktg.herokuapp.com/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '158894070910-2svha3m0p5o43v59ac9tj3c9uvspnu3m.apps.googleusercontent.com',
		'clientSecret' 	: 'GJCt0kU0uRTk5cRPg53TJQK0',
		//'callbackURL' 	: 'http://localhost/auth/google/callback'
        'callbackURL' 	: 'https://mobilemktg.herokuapp.com/auth/google/callback'
	},
	'githubAuth' : {
		'clientID' 		: '57cb7478b5babdd69f7b',
		'clientSecret' 	: 'bdef0ec5ab0e317a080d1dded20b7a2ffdccfdf9',
		'callbackURL' 	: 'https://mobiletrck.herokuapp.com/auth/github/callback'
	}

};


//CONSUMER_KEY=AEPzFuoxQ8hwTNri7exvueDYo CONSUMER_SECRET=NBvaVu24DoPKLtQDrIeRDbvVFDi8x8kXCZ8k9abYFAcgyWAAIs node server.js