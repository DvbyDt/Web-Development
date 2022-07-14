//Setting up express
const express = require('express');
//Setting up app
const app = express();
//Body-parser
//To handle or manipulate form data we require a npm package called as body parser.
const bodyParser = require('body-parser'); 
//url encoded we can tap into form data. extended = true is required by body-parser
// post nested object. 
app.use(bodyParser.urlencoded({extended: true}));

//Creating a get route
app.get("/",function(req,res){
 console.log(__dirname);//Const directory name - grab hold of file location
 res.sendFile(__dirname+'/index.html');
});

//Get route for BMI calculator
app.get("/bmiCalculator",function(req,res){
 console.log(__dirname);
 res.sendFile(__dirname+'/bmiCalculator.html');
});

//Calculating BMI
app.post("/bmiCalculator",function(req,res){
    var weight = Number(req.body.weight);
    console.log(typeof(weight));
    var height = Number(req.body.height);
    console.log(height*height);
    var bmi = Number(weight/(height*height));
    res.send("The bmi is "+bmi);
});

//To handle any post requests
app.post("/",function(req,res){
 console.log(req.body.num1);
 var num1 = Number(req.body.num1);//Type conversion
 var num2 = Number(req.body.num2);  //num2 is the name filed specified in the form tag.
 var result = num1+num2;
 res.send("The result of addition is: "+result);
});

app.listen("3000",function(req,res){
 console.log("Application running at port 3000");
});

