# This module has my learnings from the EJS module.

## Why do we need templates?

<li> Conside the below snippet image here I can only write res.send() only one time. <br/>
<img src="https://user-images.githubusercontent.com/68496657/179577741-9959e52e-7673-4bde-9add-36693d934eac.png" alt="res.send() snippet" >
<li> But what if I want to write more than just one sentence or chunk of data. I can make use of res.write(). But this method also has it's flaws because using this method I have to constantly specify res.write(),res.write() like in the image below <br/>.
<img src="https://user-images.githubusercontent.com/68496657/179578212-6f1e4cfe-b217-48f6-b855-5ca551c27a7c.png" alt="res.write() snippet" > 
<li> So, suppose we want to modify our html or the data that we will be pushing to the frontend based on some logic like if/else conditions etc. At that point of time we 
can't have separate HTMLs for if case and one for else case.
<li> The better way is to use templates. Templates will save us from lot of rework and will also handle dynamic logic like if something needs to be changed based on some conditional
statements etc.

