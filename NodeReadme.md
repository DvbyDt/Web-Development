# Node.js

## Here are my learning from this module about what is Node.js and why we use it:

<li> Node.js is a runtime environment to execute javascript code i.e. this means it's like a place or platform to run the Javascript code. It works in similar fashion to a JRE which is an environment to write java code.
<li> It was developed by Ryan Dahl. In order to develop node he took the chrome's V8 engine (at that time the fastest javascript engine) and embedded this engine inside of a C++ program and called this as node.
<li> The reason most people use node is because: 
   <ol>
       <li> It is fast
       <li> It is highly scalable 
       <li> It is asynchronous by default.
  </ol>
 <li> The reason for the node being asynchronous and highly scalable lies in the working and architecture of node.
 <li> In node there is just a single thread that interacts with the resources. As in the image you can see that first it will interact with resource-1 and when suppose resource-1 has to perform some db operation we will move to resource-2 and once the database has prepared the result it will push the result to Event queue.
  This queue is being constantly monitored by node.js.
  <img src="https://user-images.githubusercontent.com/68496657/178553188-d49cf589-6d90-4c9a-9689-d6d6f16c69e0.png" alt="Architecture Of node")
 <li> Any application which is I/O sensitive should use Node.js
 <li> But node will be particularly slow with CPU based heavy applications that's why various video editors aren't build in node.
  
