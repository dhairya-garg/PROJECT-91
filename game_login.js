function addUser(){
    //this function is used for storeing the value of player input in localstorage
 var player1 =document.getElementById("player1_name").value 
var player2 =document.getElementById("player2_name").value

localStorage.setItem("player_1", player1);
localStorage.setItem("player_2", player2);
//this window.location is to get the user to a different screen
window.location="game_page.html"
}