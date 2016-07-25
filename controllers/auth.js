// load all the things we need
var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy  = require('passport-twitter').Strategy;
var GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
var userModel      = require('../models/user');

// load the auth variables
var configAuth = require('../config/auth'); // use this one for testing

module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        userModel.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        // asynchronous
        process.nextTick(function() {
            userModel.findOne({ 'email' :  email }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);

                // if no user is found, return the message
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.'));

                if (!userModel.validPassword(password,user.local_password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

                // all is well, return user
                else
                    return done(null, user);
            });
        });

    }));

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        // asynchronous
        process.nextTick(function() {
            //  Whether we're signing up or connecting an account, we'll need
            //  to know if the email address is in use.
            userModel.findOne({'email': email}, function(err, existingUser) {
                // if there are any errors, return the error
                if (err)
                    return done(err);

                // check to see if there's already a user with that email
                if (existingUser) 
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));

                //  If we're logged in, we're connecting a new local account.
                if(req.user) {
                    var user            = req.user;
                    user.email    = email;
                    user.local_password = userModel.generateHash(password);
                    userModel.update(user,function(err) {
                        if (err)
                            throw err;
                        return done(null, user);
                    });
                } 
                //  We're not logged in, so we're creating a brand new user.
                else {
                    // create the user
                    var newUser= {};
                    newUser.email    = email;
                    newUser.local_password = userModel.generateHash(password);

                    userModel.save(newUser,function(err,user) {
                        if (err){
                            return done(err, null);
                        }else{
                            return done(null, user);
                        }
                    });
                }

            });
        });

    }));

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
        passReqToCallback : true, // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
   

    },
    function(req, token, refreshToken, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // check if the user is already logged in
            if (!req.user) {

                userModel.findOne({ 'email' : profile.emails[0].value}, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {

                        // if there is a user id already but no token (user was linked at one point and then removed)
                        if (!user.facebook_token) {
                            user.facebook_token = token;
                            user.facebook_name  = profile.name.givenName + ' ' + profile.name.familyName;
                            user.email = profile.emails[0].value;
                            //user.facebook_email = profile.emails[0].value;

                            userModel.update(user,function(err) {
                                if (err)
                                    throw err;
                                return done(null, user);
                            });
                        }

                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user, create them
                        var newUser= {};

                        newUser.facebook_id    = profile.id;
                        newUser.facebook_token = token;
                        newUser.facebook_name  = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.email = profile.emails[0].value;
                        //newUser.facebook_email = profile.emails[0].value;

                        userModel.save(newUser,function(err,user) {
                            if (err)
                                throw err;
                                
                            newUser.id=user.id;
                            return done(null, newUser);
                        });
                    }
                });

            } else {
                // user already exists and is logged in, we have to link accounts
                var user            = req.user; // pull the user out of the session

                user.facebook_id    = profile.id;
                user.facebook_token = token;
                user.facebook_name  = profile.name.givenName + ' ' + profile.name.familyName;
                user.email = profile.emails[0].value;
                //user.facebook_email = profile.emails[0].value;

                userModel.update(user,function(err) {
                    if (err)
                        throw err;
        
                    return done(null, user);
                });

            }
        });

    }));

    // =========================================================================
    // TWITTER =================================================================
    // =========================================================================
    passport.use(new TwitterStrategy({

        consumerKey     : configAuth.twitterAuth.consumerKey,
        consumerSecret  : configAuth.twitterAuth.consumerSecret,
        callbackURL     : configAuth.twitterAuth.callbackURL,
        passReqToCallback : true, // allows us to pass in the req from our route (lets us check if a user is logged in or not)
         profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified'],
        userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"

    },
    function(req, token, tokenSecret, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // check if the user is already logged in
            if (!req.user) {

                userModel.findOne({ 'twitter_id' : profile.id }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        // if there is a user id already but no token (user was linked at one point and then removed)
                        if (!user.twitter_token) {
                            user.twitter_token       = token;
                            user.twitter_username    = profile.username;
                            user.twitter_displayName = profile.displayName;

                            userModel.update(user,function(err) {
                                if (err)
                                    throw err;
                                return done(null, user);
                            });
                        }

                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user, create them
                        var newUser ={};

                        newUser.twitter_id          = profile.id;
                        newUser.twitter_token       = token;
                        newUser.twitter_username    = profile.username;
                        newUser.twitter_displayName = profile.displayName;

                        userModel.save(newUser,function(err,user) {
                            if (err)
                                throw err;
                                newUser.id=user.id;
                            return done(null, newUser);
                        });
                    }
                });

            } else {
                // user already exists and is logged in, we have to link accounts
                var user                 = req.user; // pull the user out of the session

                user.twitter_id          = profile.id;
                user.twitter_token       = token;
                user.twitter_username    = profile.username;
                user.twitter_displayName = profile.displayName;

                userModel.update(user,function(err) {
                    if (err)
                        throw err;
                    return done(null, user);
                });
            }

        });

    }));

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new GoogleStrategy({

        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

    },
    function(req, token, refreshToken, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // check if the user is already logged in
            if (!req.user) {

                userModel.findOne({ 'email' : profile.emails[0].value }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {

                        // if there is a user id already but no token (user was linked at one point and then removed)
                        if (!user.google_token) {
                            user.google_token = token;
                            user.google_name  = profile.displayName;
                            user.email = profile.emails[0].value; // pull the first email
                            //user.google_email = profile.emails[0].value; // pull the first email

                            userModel.update(user,function(err) {
                                if (err)
                                    throw err;
                                return done(null, user);
                            });
                        }

                        return done(null, user);
                    } else {
                        var newUser ={};  

                        newUser.google_id    = profile.id;
                        newUser.google_token = token;
                        newUser.google_name  = profile.displayName;
                        newUser.email = profile.emails[0].value; // pull the first email
                        //newUser.google_email = profile.emails[0].value; // pull the first email

                        userModel.save(newUser,function(err,user) {
                            if (err)
                                throw err;
                            newUser.id=user.id;
                            return done(null, newUser);
                        });
                    }
                });

            } else {
                // user already exists and is logged in, we have to link accounts
                var user               = req.user; // pull the user out of the session

                user.google_id    = profile.id;
                user.google_token = token;
                user.google_name  = profile.displayName;
                user.email = profile.emails[0].value; // pull the first email
                //user.google_email = profile.emails[0].value; // pull the first email

                userModel.update(user,function(err) {
                    if (err)
                        throw err;
                    return done(null, user);
                });

            }

        });

    }));

};
