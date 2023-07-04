const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname +"/indx.html");
});

app.listen(3000, function(){
  console.log("server initiated");
});



app.get("/index.css", function(req, res){
    res.sendFile(__dirname +"/index.css");
});

app.get("/index.js", function(req, res){
    res.sendFile(__dirname + "/index.js");
});

app.use(express.static('public'));
app.use("/images", express.static("images"));