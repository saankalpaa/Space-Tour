function myFunction() {
    document.getElementById('astronaut').className = "playingAstro";
    document.getElementById('moon').className = "playingMoon";
    
};

function floatAnimation() {
    var identity=document.getElementById('astronaut');
    console.log(identity); 
    identity.style.marginTop = '0px';
    identity.style.animation = 'float 12s ease-in-out infinite';
}

function delayFunction(){
    var theDelay = 3.2;
    setTimeout(() => {
       showText();
       floatAnimation();
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
        document.getElementById('change-destination').innerHTML= 'Moon';

    }

    if(id == 'marsOverview'){
        document.getElementById('moonOverview').style.visibility= 'hidden';
        document.getElementById('marsOverview').style.visibility= 'visible';
        document.getElementById('jupiterOverview').style.visibility= 'hidden';
        document.getElementById('activities-destination').innerHTML= ' MARS';
        document.getElementById('change-destination').innerHTML= 'Mars';

    }

    if(id == 'jupiterOverview'){
        document.getElementById('moonOverview').style.visibility= 'hidden';
        document.getElementById('marsOverview').style.visibility= 'hidden';
        document.getElementById('jupiterOverview').style.visibility= 'visible';
        document.getElementById('activities-destination').innerHTML= ' JUPITER';
        document.getElementById('change-destination').innerHTML= 'Jupiter';

    }
}

// slideshow script 

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// responsive navbar

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})