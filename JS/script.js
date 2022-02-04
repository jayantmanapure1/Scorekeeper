function addA(){
    var score=parseInt(document.getElementById("team1").innerHTML);
    score++;
    document.getElementById("team1").innerHTML=score;

}
function deductA(){
    var score=parseInt(document.getElementById("team1").innerHTML);
    score--;
    if(score>=0){
    document.getElementById("team1").innerHTML =score;
    }
}
function addB(){
    var score=parseInt(document.getElementById("team2").innerHTML);
    score++;
    document.getElementById("team2").innerHTML=score;

}
function deductB(){
    var score=parseInt(document.getElementById("team2").innerHTML);
    score--;
    if(score>=0){
    document.getElementById("team2").innerHTML =score;
    }
}
function res(){
var scoreA = parseInt(document.getElementById("team1").innerHTML)
var scoreB = parseInt(document.getElementById("team2").innerHTML)

if (scoreA > scoreB) {
  document.getElementById("res").innerText = "Team I Wins";
} else if(scoreA == scoreB) {
  document.getElementById("res").innerText = "Match Tied";
}else{
  
  document.getElementById("res").innerText = "Team II Wins";
}
}