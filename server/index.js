require('dotenv').config();

const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      next = require('next'),
      port = process.env.PORT || 3000,
      dev = process.env.NODE_ENV !== 'production',
      app = next({ dev }),
      handle = app.getRequestHandler(),
      passport = require('passport'),
      TwitterStrategy = require('passport-twitter').Strategy,
      Twitter = require('twitter');

var hostname = 'http://localhost:3000'

// Still have to check how to get env host and set tw redirection right
// e.g heroku deploy

if(process.env.NODE_ENV){
  hostname = 'http://dexfreight-twfeed.herokuapp.com'
}

//PASSPORT SETUP
passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: `${hostname}/auth/twitter/callback`
  },
  function(token, tokenSecret, profile, cb) {
    return cb(null, {token, tokenSecret, profile});
  }
));
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

//Step for NextJS
app.prepare()
  .then(() => {
    const server = express()
    server.use(cors())
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({extended: false}))
    server.use(cookieParser())
    server.use(session({
      secret: process.env.SESSION_SECRET || 'mylittlesecret',
      resave: true,
      saveUninitialized: false
    }))
    server.use(passport.initialize())
    server.use(passport.session())
    // Will redirect to the callback and respond with the requested data
    server.get('/oauth_request',
      passport.authenticate('twitter')); 
      // It will skip the "oauth_request" and directly give all info

    server.post('/connect', function(req, res, next) {
      if(req.session.passport){
        var userProfile = req.session.passport.user.profile
        res.status(200).json({ profile: userProfile });
      }else{
        res.status(403).json({ error: 'not allowed' });
      }
    });

    server.post('/disconnect', function(req, res, next) {
      if(req.session.passport){
        var userId = req.session.passport.user.profile.id
        res.status(200).json({ twitterId: userId });
      }else{
        res.status(403).json({ error: 'not allowed' });
      }
    });

    server.get('/auth/twitter/callback', 
      passport.authenticate('twitter', { successRedirect: '/profile', failureRedirect: '/' }),
      function(req, res) {
        // Successful authentication, gives response and also sets session
        res.status(200).json({ 
          auth_url: req.url,
          token: req.user.token, 
          secret: req.user.tokenSecret,
          profile: req.user.profile
        });
    });

    server.get('/tweets', function(req, res, next) {
      // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
      // Checks authorization via passport and then responds with 100 latest tweets
      if(req.session.passport){
        const client = new Twitter({
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          access_token_key: req.session.passport.user.token,
          access_token_secret: req.session.passport.user.tokenSecret
        });
        client.get('statuses/user_timeline', 
          { screen_name: req.session.passport.user.profile.username, count: 100 }, 
          function(error, tweets, response) {
            if (!error) {
              res.status(200).json({ tweets: tweets });
            }
            else {
              res.status(500).json({ error: error });
            }
        });
      }else{
        res.status(401).json({ error: 'unauthorized' });
      }
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on port: ${port}`)
    })
  })