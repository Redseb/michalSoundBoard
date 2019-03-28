//Row 1 Declarations
var kurwa1Button = document.getElementById("kurwa1");
var dzialaButton = document.getElementById("dziala");
var pieniadzeButton = document.getElementById("pieniadze");
var odpalamyButton = document.getElementById("odpalamy");
//Row 2 Declarations
var alexButton = document.getElementById("alex");
var wroclawButton = document.getElementById("wroclaw");
var mustangButton = document.getElementById("mustang");
var haHAButton = document.getElementById("haHA");
//Row 3 Declarations
var fGoButton = document.getElementById("fGo");
var jDobrzeButton = document.getElementById("jDobrze");
var omfgButton = document.getElementById("omfg");
var rushHourButton = document.getElementById("rushHour");
//Row 4 Declarations
var tylePaliButton = document.getElementById("tylePali");
var koniaButton = document.getElementById("konia");
var oKurlaButton = document.getElementById("oKurla");

kurwa1Button.addEventListener("click", function(){playSound("sounds/michal1.mp3");}, false);
dzialaButton.addEventListener("click", function(){playSound("sounds/michal2.mp3");}, false);
pieniadzeButton.addEventListener("click", function(){playSound("sounds/michal3.mp3");}, false);
odpalamyButton.addEventListener("click", function(){playSound("sounds/michal4.mp3");}, false);

alexButton.addEventListener("click", function(){playSound("sounds/alex.mp3");}, false);
wroclawButton.addEventListener("click", function(){playSound("sounds/wroclaw.mp3");}, false);
mustangButton.addEventListener("click", function(){playSound("sounds/mustang.mp3");}, false);
haHAButton.addEventListener("click", function(){playSound("sounds/haHA.mp3");}, false);

fGoButton.addEventListener("click", function(){playSound("sounds/fuckingGo.mp3");}, false);
jDobrzeButton.addEventListener("click", function(){playSound("sounds/jakDobrze.mp3");}, false);
omfgButton.addEventListener("click", function(){playSound("sounds/omfg.mp3");}, false);
rushHourButton.addEventListener("click", function(){playSound("sounds/rushHourYouFuck.mp3");}, false);

tylePaliButton.addEventListener("click", function(){playSound("sounds/tylePali.mp3");}, false);
koniaButton.addEventListener("click", function(){playSound("sounds/konia.mp3")}, false);
oKurlaButton.addEventListener("click", function(){playSound("sounds/ohKurla.mp3")}, false);

function playSound(filePath){
    var audio = new Audio(filePath);
    audio.play();
}
