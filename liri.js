// Message to notify that the script is running
console.log("Liri is listening");
// Read and set any enviornment variables with the dotenv package
require("dotenv").config();
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(Spotify.spotify);
var client = new Twitter(Twitter.twitter);
var request = require("request");
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

// spotify.search({
//   type: 'track',
//   query: 'All the Small Things',
//   limit: 1
// }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
//   var info = data.tracks.items[0];
//   // console.log(info);
//   console.log("Artists: " + info.artists[0].name);
//   console.log("Track: " + info.name);
//   console.log("Preview Song: " + info.external_urls.spotify);
//   console.log("Album: " + info.album.name);
// });

// ----------------------------------------OMDB functionality
// var movieName = "pokemon";
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// request(queryUrl, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     console.log("The release year of the movie is " + JSON.parse(body).Year);
//   }
// });
