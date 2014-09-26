/* ==== LEVEL 1 ==== */
//Use global variable to keep track of time

var seconds = 10;

function countdown() {

    if ( seconds >= 0 ) {

        setTimeout(function () {

            console.log( seconds );

            seconds --;

            countdown();

        }, 1000);
    }

}

countdown();

/* ==== LEVEL 2 ==== */
//Keep track of time without defining any global variables
/*
function countdown( seconds ) {

    if ( seconds >= 0 ) {

        setTimeout(function () {

            console.log( seconds );

            countdown( seconds - 1 );

        }, 1000);
    }

}

countdown(10);
*/
