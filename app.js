var express = require("express");
var app = express();

// root page
app.get("/", function(req, res){
    res.send("Welcome to my assignment");
    
});

// animal sounds
app.get("/speak/:animal", function(req, res){
     var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        snake: "SSSSS",
        bird: "tweet"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
  
    
    res.send("The " + animal + " says " + sound);
    
});



// repeating
app.get("/repeat/:message/:number", function(req,res){
   
    var message = req.params.message.toLowerCase();
    var times = Number(req.params.number);
        var result = "";   
        
        
        for (var i = 0; i < times; i++){
         
            result += message + " ";
        }
        res.send(result);
    
});





// Error Page
app.get("*", function(req, res){
   console.log("Webpage not available") ;
    res.send("Webpage not available");
    
});



// listen port

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is runnning");
    
});