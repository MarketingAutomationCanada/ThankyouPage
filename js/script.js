
$(document).ready(function () {

document.getElementById('home').addEventListener('mouseover', function(){
    document.getElementById("home").style.color = "red";
    document.getElementById("home").style.background = "#fff";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink1").style.background = "none";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink2").style.background = "none";
    document.getElementById("navLink3").style.color = "#fff";
    document.getElementById("navLink3").style.background = "none";
    document.getElementById("navLink4").style.color = "#fff";
    document.getElementById("navLink4").style.background = "none";
})

document.getElementById('navLink1').addEventListener('mouseover', function () {
    document.getElementById("home").style.color = "#fff";
    document.getElementById("home").style.background = "none";
    document.getElementById("navLink1").style.color = "red";
    document.getElementById("navLink1").style.background = "#fff";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink2").style.background = "none";
    document.getElementById("navLink3").style.color = "#fff";
    document.getElementById("navLink3").style.background = "none";
    document.getElementById("navLink4").style.color = "#fff";
    document.getElementById("navLink4").style.background = "none";
})

document.getElementById('navLink2').addEventListener('mouseover', function () {
    document.getElementById("home").style.color = "#fff";
    document.getElementById("home").style.background = "none";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink1").style.background = "none";
    document.getElementById("navLink2").style.color = "red";
    document.getElementById("navLink2").style.background = "#fff";
    document.getElementById("navLink3").style.color = "#fff";
    document.getElementById("navLink3").style.background = "none";
    document.getElementById("navLink4").style.color = "#fff";
    document.getElementById("navLink4").style.background = "none";
})

document.getElementById('navLink3').addEventListener('mouseover', function () {
    document.getElementById("home").style.color = "#fff";
    document.getElementById("home").style.background = "none";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink1").style.background = "none";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink2").style.background = "none";
    document.getElementById("navLink3").style.color = "red";
    document.getElementById("navLink3").style.background = "#fff";
    document.getElementById("navLink4").style.color = "#fff";
    document.getElementById("navLink4").style.background = "none";
})

document.getElementById('navLink4').addEventListener('mouseover', function () {
    document.getElementById("home").style.color = "#fff";
    document.getElementById("home").style.background = "none";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink1").style.background = "none";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink2").style.background = "none";
    document.getElementById("navLink3").style.color = "#fff";
    document.getElementById("navLink3").style.background = "none";
    document.getElementById("navLink4").style.color = "red";
    document.getElementById("navLink4").style.background = "#fff";
})



document.getElementById('navLink1').addEventListener('mouseout', function () {
    document.getElementById("home").style.color = "red";
    document.getElementById("home").style.background = "#fff";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink1").style.background = "none";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink2").style.background = "none";
    document.getElementById("navLink3").style.color = "#fff";
    document.getElementById("navLink3").style.background = "none";
    document.getElementById("navLink4").style.color = "#fff";
    document.getElementById("navLink4").style.background = "none";
})

document.getElementById('navLink2').addEventListener('mouseout', function () {
    document.getElementById("home").style.color = "red";
    document.getElementById("home").style.background = "#fff";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink1").style.background = "none";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink2").style.background = "none";
    document.getElementById("navLink3").style.color = "#fff";
    document.getElementById("navLink3").style.background = "none";
    document.getElementById("navLink4").style.color = "#fff";
    document.getElementById("navLink4").style.background = "none";
})

document.getElementById('navLink3').addEventListener('mouseout', function () {
    document.getElementById("home").style.color = "red";
    document.getElementById("home").style.background = "#fff";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink1").style.background = "none";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink2").style.background = "none";
    document.getElementById("navLink3").style.color = "#fff";
    document.getElementById("navLink3").style.background = "none";
    document.getElementById("navLink4").style.color = "#fff";
    document.getElementById("navLink4").style.background = "none";
})

document.getElementById('navLink4').addEventListener('mouseout', function () {
    document.getElementById("home").style.color = "red";
    document.getElementById("home").style.background = "#fff";
    document.getElementById("navLink1").style.color = "#fff";
    document.getElementById("navLink1").style.background = "none";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink2").style.background = "none";
    document.getElementById("navLink3").style.color = "#fff";
    document.getElementById("navLink3").style.background = "none";
    document.getElementById("navLink4").style.color = "#fff";
    document.getElementById("navLink4").style.background = "none";
})


    //check width of screen
    let w = parseInt(window.innerWidth);
   



    // make sure the screen size is === < 350
    $(window).resize(function () {
        let w = parseInt(window.innerWidth);
       
        reSize(w)

    });

    const reSize = function (w) {
        if ( w <= 350) {
      
            setTimeout(function () { console.log('apply action') 
                document.getElementById('robo2').style.top = "-395px";
                document.getElementById('robo2Arm').style.top = "-350px"; 
                document.getElementById('thankyouContainer').style.margin = "120px auto 0px auto";
            }, 1000);

            

        } else {
         
            document.getElementById('thankyouContainer').style.margin = "0px auto 0px auto";
        }
    }

    reSize(w)

    // wave
    const wave = ()=>{
        setTimeout(function () {
            
             $('#roboArm').addClass('rotate');
        }, 1000);
        setTimeout(function () {
            
            $('#roboArm').removeClass('rotate');
        }, 1200);
        setTimeout(function () {
            
            $('#roboArm').addClass('rotate');
        }, 1400);
        setTimeout(function () {
            
            $('#roboArm').removeClass('rotate');
        }, 1600);
    }

    $('#roboBody').mouseover(function () {
    
         wave()
    });

    wave()




});