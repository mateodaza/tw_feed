const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: process.env.TW_CONSUMER_KEY,
  consumer_secret: process.env.TW_CONSUMER_SECRET,
  access_token_key: process.env.TW_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET
});

app.prepare()
  .then(() => {
    const server = express()

    server.get('/api/v1/tweets', function(req, res, next) {
      // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
      client.get('statuses/user_timeline', { screen_name: 'nodejs', count: 20 }, function(error, tweets, response) {
        if (!error) {
          res.status(200).render('index', { title: 'Express', tweets: tweets });
        }
        else {
          res.status(500).json({ error: error });
        }
      });
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })