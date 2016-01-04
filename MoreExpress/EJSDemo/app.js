var express = require("express");
var app = express();

app.use(express.static("public")); //for allowing links to stylesheet with each view file.
app.set("view engine", "ejs"); //for getting rid of the .ejs on end of each filename

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
    
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My Adorable Pet Bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
        ];
        
        res.render("posts", {posts: posts})
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening.");
});