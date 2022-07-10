function handleClick(){
    var sound = this.innerHTML;
    this.style.color = 'white';
    var track = keyPressedorClicked(sound);
    buttonAnimation(sound);
    var audio  = new Audio(track);
    audio.play();
}

var btn = document.querySelectorAll(".drum");
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener("click",handleClick);
}

//Higher order function as it takes function as one of it's parameter.
document.addEventListener('keydown',function(event){//Callback function      
    var sound = event.key;
    var track = keyPressedorClicked(sound);    
    if(track!="false"){
        buttonAnimation(sound);
        var audio  = new Audio(track);
        audio.play();
    }   
});

function keyPressedorClicked(key){
    var track="sounds/";
    switch(key){
        case 'w':
        // case 'W':
            track+= "tom-1.mp3";break;
        case 'a':
        // case 'A':
            track+= "tom-2.mp3"; break;
        case 's':
        // case 'S':
            track+= "tom-3.mp3";break;
        case 'd':
        // case 'D': 
            track+= "tom-4.mp3";break;
        case 'j':
        // case 'J':
            track+= "snare.mp3";break;
        case 'k':
        // case 'K':
            track+= "kick-bass.mp3";break;
        case 'l':
        // case 'L':
            track+= "crash.mp3";break;
        default: track="false"; break;
    }
    return track;
}

function buttonAnimation(key){
    //var activeButton = document.querySelector("."+key);
    document.querySelector("."+key).classList.add("pressed");
    document.querySelector("."+key).style.color="white";
    //to remove the pressed button.
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
        document.querySelector("."+key).style.color="";
    },100);
}