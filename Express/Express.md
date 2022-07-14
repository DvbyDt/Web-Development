# Learnings about Express.js

It 's a node framework. It like what jquery is for JavaScript. Using express can save you from writing repeatative code. 
Think of Node as a DIY Screw driver. You can tighten as many screws as you want with this tool but after a point of time it will become repeatative work and as programmers we
hate one thing and that is repeatation!
So, we can make use of a motorised screw drivers. It wil save you the time and work will also be done faster. So, Express also works in a similar way.

## Creating our own Server with Express

<li> To install Express.js we have to first do : npm install express.
<li> As you can see after you have installed express it will be updated in the package.json file. 
  <img src="https://user-images.githubusercontent.com/68496657/178856550-230453ed-00c3-43b8-a703-6364c2b8f9b3.png" alt="Installing express" />
<li> Require the express module : const express = require ('express');
<li> express function should be bounded to app = const app = express();
<li> Handling any GET requests: For handling the Get requests we have to make use of the object app which contains the express().<br>
  So, here is the code snippet
  
  app.get("/",function(req,res){
  res.send("'Hello Guys");
  });
  
  Here, "/" denotes route.
  The get method takes two argument one is the folder where you file is located.
  Second one is a callback method which contains two arguments request object and the response object.
  res.send() will send the desired result to the port where the application is currently running.<br/>
  <img src="https://user-images.githubusercontent.com/68496657/178858271-8c4caa0d-aead-4f27-bfef-4e9537c69510.png" alt="localhost:3000">
  
  
  
  
  
  



