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

const twitter = require("twitter");
const client = new twitter({
  consumer_key: "yvH5llggp3DsIskacPVO5u1r7",
  consumer_secret: "GWeF6t03w4uE2HJAT6wDLRFURgzaMz3sIMWLaR2NRwgY86gSA2",
  access_token_key: "1234778847876222976-UCCSwhMJKbR1Vu1MP1bUbu7xQrtNcJ",
  access_token_secret: "vIcEK20IhwrbGzjOzj5KGMm44gIRBPiKNAP3TJLZuZcfH"
});

// const tweet_texts = [
//   "TEST 1: TWEET BOT",
//   "TEST 2: TWEET BOT",
//   "TEST 3: TWEET BOT",
//   "TEST 4: TWEET BOT",
//   "TEST 5: TWEET BOT"
// ];

// Tweet every {interval} ms(milliseconds)
// setInterval(function post_tweet() {
//   var choice_text = tweet_texts[Math.floor(Math.random() * tweet_texts.length)];
//   bot.post("statuses/update", { status: choice_text }, function(
//     error,
//     tweet,
//     response
//   ) {
//     if (!error) {
//       console.log(tweet);
//     }
//   });
// }, 3000); //　every 3 seconds

async function searchTweet(queryArg, nextResultsMaxIdArg = null) {
  client.get(
    "search/tweets",
    { q: queryArg, count: 1, max_id: nextResultsMaxIdArg },
    async (error, searchData, response) => {
      if (error) console.log(error);

      for (item in searchData.statuses) {
        const tweet = searchData.statuses[item];

        await client.post(
          // "https://api.twitter.com/1.1/friendships/create.json",
          "https://api.twitter.com/1.1/favorites/create.json",
          // { screen_name: tweet.user.screen_name },
          { screen_name: tweet.text },

          () => {
            console.log(
              `\nI liked ${tweet.text}\n`
              // `\n${tweet.user.screen_name}さんをフォローしました。\n`
            );
          }
        );

        //検索に失敗
        if (searchData.search_metadata == undefined) {
          console.log("no metadata");
        } else if (searchData.search_metadata.next_results) {
          let maxId = searchData.search_metadata.next_results.match(
            /\?max_id=(\d*)/
          );
          searchTweet(queryArg, maxId[1]);
        }
      }
    }
  );
}

searchTweet("#42Tokyo");
// setInterval(searchTweet("#42tokyo") {
//     if (!error) {
//       console.log(tweet);
//     }
//   });
// }, 3000); //　every 3 seconds
