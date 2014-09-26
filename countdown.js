/* ==== LEVEL 1 ==== */
//Use global variable to keep track of time

var seconds = 10;

function countdown( seconds ) {

    if ( seconds >= 0 ) {

        setTimeout(function () {

            console.log( seconds );

            seconds --;

            countdown(seconds);

        }, 1000);
    }

}

countdown(seconds);
