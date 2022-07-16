# Application Programming Interface

#### Application programming interface or APIs is st of objects,functions,commands that programmers can use to create softwares or interact with some other software and also the external system. Think of it as a contract between the data provider and the developer which when the developer signs gets him the funcitons or methods he can use and the protocols required to use these methods.

#### API Endpoints , Paths and Parameters and Authentication:

<ul> 
  <li> <strong> API Endpoints: </strong> It is an access point from where we make our GET or POST request in order to get the response. In the example if we suppose go to : [Kanye Rest API](https://api.kanye.rest/) is indeed an endpoint.
  <li> <strong> Paths: </strong> Let's conside the example of a https://sv443.net/jokeapi/v2/ . So, here the endpoint to GET jokes is https://v2.jokeapi.dev/joke/ and the Path specifies a particular category in the joke API. So, https://v2.jokeapi.dev/joke/Any here Any specifies a particular category of jokes from the Joke API. So, paths alwyas specify the category or type.
  <li> <strong> Parameters: </strong> It allows APIs to deal with custom queries. For eg: https://v2.jokeapi.dev/joke/Programming?contains=debugging The parameters always goes to the end of the URL and can be spotted because they are after the "?" . So, it will be a key-value pair in the URL where key is contains and value is debugging.
    So, the basic structure of the API is :<br/>  API Endpoint/<strong>Path</strong>?<strong>Parameters</strong>. <br/>
    An API with multiple parameters is: API Endpoint/<strong>Path</strong>?<strong>key1=value1?key2=value2?key3=value3</strong>
    <br/>
    An, example of it is here:  <br/>
    <img src="https://user-images.githubusercontent.com/68496657/179347471-2c30a5ac-41d1-42cc-87ac-9e599588277d.png" alt="API ednpoint,Path,Parameters" />
</ul>
