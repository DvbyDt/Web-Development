//Requiring Express module
const { response } = require('express');
const express = require('express');
//const res = require('express/lib/response');
//Initlializing a new express app
const app = express();
//Natively making a call to external server.
const https = require('https');
//Using body parser
const bodyParser = require("body-parser");


//To use body Parser
app.use(bodyParser.urlencoded({extended:true}));

// //Making a get request
app.get("/",function(req,res){
    //const __dirname = req.path;
    res.sendFile(__dirname+"/index.html");
});


//post request
app.post("/",function(req,res){
    const city = req.body.cityName;
    const apikey = "";//Here enter your own apikey from OpenWeatherMap 
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units="+units;
    //Making a https call
    https.get(url,response => {
    //console.log(response);
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);  
            console.log(weatherData);
            const temp = weatherData.main.temp;
            console.log(temp);
            console.log(weatherData.weather[0].description);
            const description = weatherData.weather[0].description;
            res.write("<p> the description is " + description + "</p>");
            res.write("<h1> The temperature in "+ city +" is "+ temp + " degree Celsius "+" </h1>");
            const imageURL = "http://openweathermap.org/img/wn/"+ weatherData.weather[0].icon +"@2x.png" ;
            res.write("<img src = "+imageURL+">");
            //res.send can only be used once in the get method.
            //res.write(city);
            res.send();        
        }) ; 
        //res.send("<h1>App is up and running</h1>");
    });    
    //res.send("Post request");
});


//listening on app
app.listen("3000",function()
{
    console.log("Listening at Port 3000");
});
