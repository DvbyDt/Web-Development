# Node.js

## Here are my learning from this module about what is Node.js and why we use it:

<li> Node.js is a runtime environment to execute javascript code i.e. this means it's like a place or platform to run the Javascript code. It works in similar fashion to a JRE which is an environment to write java code.
<li> It was developed by Ryan Dahl. In order to develop node he took the chrome's V8 engine (at that time the fastest javascript engine) and embedded this engine inside of a C++ program and called this as node.
<li> The reason most people use node is because: 
   <ol>
       <li> It is fast because of it's non-blocking I/O operations. 
       <li> It is highly scalable 
       <li> It is asynchronous by default.
       <li> Since, it's a runtime for JS so, the codebase is unified everything the frontend and backend both are in JS. So, ease of development.
  </ol>
   <img src="https://user-images.githubusercontent.com/68496657/178557369-da4eb66f-bf77-4270-ba4f-5fb8204ff4be.png" alt="Features of Node" />
 <li> The reason for the node being asynchronous and highly scalable lies in the working and architecture of node.
 <li> In node there is just a single thread that interacts with the resources. As in the image you can see that first it will interact with resource-1 and when suppose resource-1 has to perform some db operation we will move to resource-2 and once the database has prepared the result it will push the result to Event queue.
  This queue is being constantly monitored by node.js.
  <img src="https://user-images.githubusercontent.com/68496657/178553188-d49cf589-6d90-4c9a-9689-d6d6f16c69e0.png" alt="Architecture Of node") />
  This is Node in comparison to other traditional web serving techniques. 
    <img src="https://user-images.githubusercontent.com/68496657/178847164-2d46736b-c3db-4345-9238-a2f3d8c8a675.png" alt="How Node works" />
 <li> Any application which is I/O sensitive should use Node.js
 <li> But node will be particularly slow with CPU based heavy applications that's why various video editors aren't build in node.
  
  ## NPM
    
  <p>It is a package manager which is a package manager for external modules. It contains reusable code written by other developers that you can incorporate in your own code. So, that you don't have to rewrite that particular chunk from scratch.
  To get npm we have to run a small command: npm init //This will initalise the Node package manager.
     So, it will create a package.json file which contains the basic information about you project and the dependencies used in it.
     After doing npm init you will be asked the following things.
     <img src="https://user-images.githubusercontent.com/68496657/178853292-7037e79d-aa63-4a9f-a498-57e559f341f4.png" alt="Npm Init" /> </p>
    It will create a package.json file in my project folder and it will have the same content displayed in the above image.
    <img src="https://user-images.githubusercontent.com/68496657/178853426-c1cd46b9-b134-481b-86f9-5c95092f5eca.png" alt="Package.json" />
    
    For this module I read about node from here:
    https://www.youtube.com/watch?v=TlB_eWDSMt4
    https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e
   
