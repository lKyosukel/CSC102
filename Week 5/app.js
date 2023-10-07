var intervalID = 0;
var change = 10;
var display = 0;
var backwards = 4

function startMove()
{
    var i = 0;
    var image = document.getElementById("rickroll")
    intervalId=setInterval(function()
    {
        if (change > 500) {
            backwards=-4;
        }
        else if (change < 10){
            backwards=4;
        }
        image.style.left=change+"px";
        change+= backwards;
    },10);
    mysound=new sound("Rick Roll Sound Effect.mp3");
    mysound.play();
    document.getElementById("updateX").innerHTML="x = " +image.style.left;
}

function stopMove()
{
    clearInterval(intervalId);
}

function start(){
    alert("Start pushed")
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    alert("Stop pushed")
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function playRickRoll(){
    mysound=new sound("Rick Roll Sound Effect.mp3");
    mysound.play();
}

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play=function() {
        this.sound.play();
    }
}


function stopsound(){
    window.location.reload();
}

function intervalStop(){
    clearInterval(intervalId);
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }