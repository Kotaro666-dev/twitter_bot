/* Tweet a certain message once */

/*
var twitter = require("twitter");
var bot = new twitter({
  consumer_key: "xxxxxxxx",
  consumer_secret: "xxxxxxxx",
  access_token_key: "xxxxxxxx",
  access_token_secret: "xxxxxxxx"
});

bot.post(
  "statuses/update",
  { status: "THIS IS TEST FOR TWITTER BOT." },
  function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    }
  }
);

*/

/* Tweet a certain message from array automatically */

var twitter = require("twitter");
var bot = new twitter({
  consumer_key: "xxxxxxxx",
  consumer_secret: "xxxxxxxx",
  access_token_key: "xxxxxxxx",
  access_token_secret: "xxxxxxxx"
});

var tweet_texts = [
  "TEST 1: TWEET BOT",
  "TEST 2: TWEET BOT",
  "TEST 3: TWEET BOT",
  "TEST 4: TWEET BOT",
  "TEST 5: TWEET BOT"
];

// Tweet every {interval} ms(milliseconds)
setInterval(function post_tweet() {
  var choice_text = tweet_texts[Math.floor(Math.random() * tweet_texts.length)];
  bot.post("statuses/update", { status: choice_text }, function(
    error,
    tweet,
    response
  ) {
    if (!error) {
      console.log(tweet);
    }
  });
}, 10000); //　every 10 seconds
