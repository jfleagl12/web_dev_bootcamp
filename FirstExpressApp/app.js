var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there.");
});

app.get("/bye", function(req, res){
    res.send("goodbye");
});

app.get("/dog", function(req, res){
    res.send("MEOW");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " Subreddit.");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("Welcome to the Comments Page!");
});

app.get("*", function(req, res){
    res.send("you are a star!");
});

//the code below will be used for every Express application.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});