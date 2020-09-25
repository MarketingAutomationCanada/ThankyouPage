
$(document).ready(function () {

       


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