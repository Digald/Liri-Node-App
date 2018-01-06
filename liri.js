// Message to notify that the script is running
console.log("Liri is listening");
// Read and set any enviornment variables with the dotenv package
require("dotenv").config();
var keys = require('./keys.js');
var Twitter = require('twitter');
// Add code required to import the keys.js file and store it in a variable
// var spotify = new Spotify(keys.spotify);
var client = new Twitter(Twitter.twitter);
// console.log(client);

// if (process.argv[2] === "my-tweets") {
client.get('search/tweets', {
  q: 'node.js'
}, function(error, tweets, response) {
  console.log(tweets);
});
// }
