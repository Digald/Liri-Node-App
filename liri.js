// Read and set any enviornment variables with the dotenv package
require("dotenv").config();
var Twitter = require('twitter');
// Add code required to import the keys.js file and store it in a variable
// var spotify = new Spotify(keys.spotify);
var client = new Twitter(Twitter.twitter);
console.log(client.get);
// if (process.argv[2] === "my-tweets") {
client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
  console.log(tweets);
});
// }
