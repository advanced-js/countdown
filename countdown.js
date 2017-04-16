/* ==== LEVEL 1 ==== */
//Use global variable to keep track of time

/*
var countdown_timer = null;

function countdown( seconds ) {

    countdown_timer = setInterval(function() {

        console.log( seconds );

        seconds --;

        if ( seconds < 0 ) {
            clearInterval( countdown_timer );
        }

    }, 1000);

}

countdown( 10 );
*/


/* ==== LEVEL 2 ==== */
//Keep track of time without defining any global variables

/*
function countdown( seconds ) {

    var countdown_timer = setInterval(function() {

        console.log( seconds );

        seconds --;

        if ( seconds < 0 ) {
            clearInterval( countdown_timer );
        }

    }, 1000);

}

countdown( 10 );
*/

/* ==== LEVEL 3 ==== */
//BONUS: don't define any new variables


function countdown( seconds ) {

    if ( seconds >= 0 ) {

        setTimeout(function () {

            console.log( seconds );

            countdown( seconds - 1 );

        }, 1000);
    }

}

countdown(10);
