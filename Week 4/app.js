var intervalID = 0;
var change = 10;
var display = 0;


function startMove()
{
    var i = 0;
    var image = document.getElementById('rickroll')
    intervalID=setInterval(function()
    {
        image.style.left=change+"px";
        change+=4;
    },10);
    mysound=new sound("Rick Roll Sound Effect.mp3");
    mysound.play();
}

function stopMove()
{
    window.location.reload();
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