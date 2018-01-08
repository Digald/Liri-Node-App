// Message to notify that the script is running
console.log("Liri is listening");
// Read and set any enviornment variables with the dotenv package
require("dotenv").config();
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(Spotify);
var client = new Twitter(Twitter.twitter);
// --------------------------------------Twitter functionality
// var params = {
//   screen_name: 'BillNye'
// };
// // Display tweets in console
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (error) {
//     console.log(error);
//   }
//   if (!error) {
//     for (var i = 0; i < tweets.length; i++) {
//       console.log(tweets[i].created_at);
//       console.log(tweets[i].text);
//       console.log("-----------------------")
//     }
//   }
// });
// -------------------------------------Spotify functionality
// console.log(spotify);
spotify.search({
  type: 'track',
  query: 'All the Small Things'
}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  console.log(data);
});
