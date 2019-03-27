var kurwa1Button = document.getElementById("kurwa1");
var dzialaButton = document.getElementById("dziala");
var pieniadzeButton = document.getElementById("pieniadze");
var odpalamyButton = document.getElementById("odpalamy");

kurwa1Button.addEventListener("click", function(){playSound("sounds/michal1.mp3");}, false);
dzialaButton.addEventListener("click", function(){playSound("sounds/michal2.mp3");}, false);
pieniadzeButton.addEventListener("click", function(){playSound("sounds/michal3.mp3");}, false);
odpalamyButton.addEventListener("click", function(){playSound("sounds/michal4.mp3");}, false);

function playSound(filePath){
    var audio = new Audio(filePath);
    audio.play();
}
