function myFunction() {
    document.getElementById('astronaut').className = "playingAstro";
    document.getElementById('moon').className = "playingMoon";
    
};

function delayFunction(){
    var theDelay = 1.5;
    setTimeout(() => {
       showText()
    }, theDelay*1000);
}
function showText(){
    document.getElementById("delayedText").style.visibility = "visible";
}

function destinationOfChoice(id){
    console.log(id);
    if(id == 'moonOverview'){
        document.getElementById('moonOverview').style.visibility= 'visible';
        document.getElementById('marsOverview').style.visibility= 'hidden';
        document.getElementById('jupiterOverview').style.visibility= 'hidden';
        document.getElementById('activities-destination').innerHTML= ' MOON';
    }

    if(id == 'marsOverview'){
        document.getElementById('moonOverview').style.visibility= 'hidden';
        document.getElementById('marsOverview').style.visibility= 'visible';
        document.getElementById('jupiterOverview').style.visibility= 'hidden';
        document.getElementById('activities-destination').innerHTML= ' MARS';
    }

    if(id == 'jupiterOverview'){
        document.getElementById('moonOverview').style.visibility= 'hidden';
        document.getElementById('marsOverview').style.visibility= 'hidden';
        document.getElementById('jupiterOverview').style.visibility= 'visible';
        document.getElementById('activities-destination').innerHTML= ' JUPITER';
    }
}