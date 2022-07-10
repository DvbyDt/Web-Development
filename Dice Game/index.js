//Changing dice on every refresh
var player1 = Math.floor(Math.random()*6)+1;
console.log(player1);
//Value for Player 1
document.getElementById("Player1").src='images/dice'+player1+'.png';

//Player-2
var player2 = Math.floor(Math.random()*6)+1;
console.log(player2);
//Value for Player 2
document.getElementById("Player2").src='images/dice'+player2+'.png';

//Comparison
if(player1==player2){
    document.querySelector("h1").textContent = "That was an exciting draw!";
}else if(player1>player2){
    document.querySelector("h1").textContent = "🚩 Player1 wins!!";
}else{
    document.querySelector("h1").textContent = "Player2 wins! 🚩";
}
