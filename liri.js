// Message to notify that the script is running
console.log("Liri is listening");
// Importing packages for use and keys
require("dotenv").config();
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var command = process.argv[2];
// -------------------------------------Twitter functionality
function myTweets() {
  var params = {
    screen_name: 'BillNye'
  };
  // Display tweets in console
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error) {
      console.log(error);
    }
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log(tweets[i].text);
        console.log("-----------------------")
      }
    }
  });
}
// -------------------------------------Spotify functionality
function spotifySong() {
  var songName = "";
  if (!process.argv[3]) {
    songName = "The Sign"
    console.log("YOU TOTALLY SEARCHED FOR: " + songName);
  } else {
    for (var i = 3; i < process.argv.length; i++) {
      songName += process.argv[i] + " ";
    }
    console.log("YOU SEARCHED FOR: " + songName);
  }
  spotify.search({
    type: 'track',
    query: songName,
    limit: 1
  }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var info = data.tracks.items[0];
    // console.log(info);
    // console.log("YOU SEARCHED FOR: " + songName);
    console.log("Artists: " + info.artists[0].name);
    console.log("Track: " + info.name);
    console.log("Preview Song: " + info.external_urls.spotify);
    console.log("Album: " + info.album.name);
  });
}
// ----------------------------------------OMDB functionality
function omdbMovieInfo() {
  var movieName = "";
  if (!process.argv[3]) {
    movieName = "Mr. Nobody"
    console.log("YOU TOTALLY SEARCHED FOR: " + movieName);
  } else {
    for (var i = 3; i < process.argv.length; i++) {
      movieName += process.argv[i] + " ";
    }
    console.log("YOU SEARCHED FOR: " + movieName);
  }
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var movieData = JSON.parse(body);
      // console.log(JSON.parse(body), null, 2);
      console.log("*Title: " + movieData.Title);
      console.log("*Release Year: " + movieData.Year);
      console.log("*IMDB Rating: " + movieData.imdbRating);
      console.log("* Rotten Tomatoes Rating of the movie");
      console.log("*Country: " + movieData.Country);
      console.log("*Language(s): " + movieData.Language);
      console.log("*Plot:  " + movieData.Plot);
      console.log("*Actors: " + movieData.Actors);
    }
  });
}
// -------------------------------------------File System
function readRandomTxt() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    // console.log(data.split(","));
    var txtArray = data.split(",");
    command = txtArray[0];
    // console.log(command);
    if (txtArray[1]){
      process.argv[3] = txtArray[1];
    }
    runCommands();
  });
}
// ----------------------------------------Data Structure
runCommands();
function runCommands() {
  if (command === "my-tweets") {
    myTweets();
  } else if (command === "spotify-this-song") {
    spotifySong();
  } else if (command === "movie-this") {
    omdbMovieInfo();
  } else if (command === "do-what-it-says") {
    readRandomTxt();
  }
}
