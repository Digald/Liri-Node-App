// Read and set any enviornment variables with the dotenv package
require("dotenv").config();
var Twitter = require('twitter');
// Add code required to import the keys.js file and store it in a variable
// var spotify = new Spotify(keys.spotify);
var client = new Twitter(Twitter.twitter);
console.log(client);
// if (process.argv[2] === "my-tweets") {
client.stream('statuses/filter', {track:'twitter'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });
  stream.on('error', function(error) {
    console.log(error);
  });
});
// }
