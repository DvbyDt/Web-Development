var gamePattern = [];
var userClickedPattern = [];
var level=0;
var started = false;

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    var randomNumber = Math.floor(Math.random()*4);
    $("#level-title").text("Level " + level);
    // console.log(randomNumber);
    var buttonColors = ["red","blue","green","yellow"];
    // console.log(buttonColors);
    var randomChosenColor = buttonColors[randomNumber];
    // console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    // console.log(gamePattern);
    $('#'+randomChosenColor).fadeIn(250).fadeOut(250).fadeIn(250);
    playsound(randomChosenColor);      
}

$(".btn").click(function(){
    var userChosenColour  = $(this).attr("id");//In js we use event here in jquery we have to make use of this keyword.
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playsound(userChosenColour);
    animatePress(userChosenColour);   
    checkAnswer(userClickedPattern.length-1);    
});

$(document).keydown(function(){    
    if(!started){
        $("#level-title").text("Level "+level);
        started=true;
        nextSequence();
    }    
});

 function playsound(name){
    var track = "Sounds/"+name+".mp3";
    var song = new Audio(track);
    song.play();
 }

function animatePress(currenColor){
    $('#'+currenColor).addClass("pressed");
    setTimeout(function(){
        $('#'+currenColor).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }else{
        console.log("wrong");
        var wrong = new Audio("Sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over,Press Any Key To Restart!");
        startOver();
    }
}
