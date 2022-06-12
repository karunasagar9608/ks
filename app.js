const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.get("/", function(req, res){
 
    var today = new Date();

    if (today.getDate()===6 || today.getDate() ===0){
        res.send("Yay is's the weekend!");
    }else{
                // res.write("<h1>Karuna SAgar</h1>");
        // res.write("<p>What are you doing</p>")
        // res.send();
        res.sendFile(__dirname + "/index.html");
    }
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});