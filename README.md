# Liri-Node-App
A Siri-inspired clone that takes in node command line commands and returns data to you, the user.
## Used Tech
* Node.js

## How To Run Liri
You can run Liri by typing:
```javascript
node liri.js <your-command-here>
```
You will need your own twitter keys found here: https://apps.twitter.com/app/new.

You will also need your own spotify keys that can be found here: https://developer.spotify.com/my-applications/#!/.
## List of commands
Liri responds to the follow commands:
### 1.) my-tweets
```
node liri.js my-tweets
```
This command will return the latest 20 tweets and dates of those tweets of the assigned twitter user.
### 2.) spotify-this-song
```
node liri.js spotify-this-song <song-name-here>
```
This command will return the following information of the song you have searched:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album the song is from

If no song is specified, Liri will search the song "The Sign" by default.
### 3.) movie-this
```
node liri.js movie-this <movie-name>
```
This command will return the following information of the movie you input:
* Title of the movie
* Year the movie came out
* IMDB Rating of the movie
* Rotten Tomatoes Rating of the movie
* Country where the movie was produced
* Language of the movie
* Plot of the movie
* Actors in the movie

If no movie is specified, Liri will automatically search for the movie "Mr. Nobody".
### 4.) do-what-it-says
```
node liri.js do-what-it-says
```
This command uses the fs Node package. Liri will take the text inside the random.txt file and use it to call one of Liri's commands listed above.
