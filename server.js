
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var friends = [
  {
    routeName: "",
    name: "", 
    pictureLink: ""
  },
  {
    routeName: "",
    name: "", 
    pictureLink: ""
  },
  {
    routeName: "",
    name: "", 
    pictureLink: ""
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {

  // res.send("Welcome to FriendFinder!")
  res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all friends
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// Displays a single name, or returns false
app.get("/api/friends/:survey", function(req, res) {
  var chosen = req.params.name;

  console.log(chosen);

  for (var i = 0; i < name.length; i++) {
    if (chosen === friends[i].routeName) {
      return res.json(friends[i]);
    }
  }

  return res.json(false);
});

// Create New friends - takes in JSON input
app.post("/api/friends", function(req, res) {

  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newfriend = req.body;

  console.log(newfriend);

  // We then add the json the user sent to the namef array
  friends.push(newfriend);

  // We then display the JSON to the users
  res.json(newfriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
