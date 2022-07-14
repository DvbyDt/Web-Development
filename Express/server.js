//Require the express module
const express = require ('express');
//express function should be bounded to app
const app = express();
//get request
app.get("/",function(req,res){
  //console.log(req);
  res.send("<h1>Hello guys</h1>");
});
//route for about page
app.get("/about",function(req,res){
    res.send("<h3>I'm Dhruv Vashist creating  my first server</h3");
});

//Listen to a specific port for a particular request
app.listen("3000",function(){
    console.log("Server has started at port 3000");
});

