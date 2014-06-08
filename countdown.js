//Level 1: Uses global variable to keep track of time

//Sets IntervalID
var intervID = setInterval(countdown, 1000);

//Declares and initializes Count variable
var count = 0;

//Declares and initializes seconds to countdown
var seconds = 5;

function countdown() {
    // Prints the second countdown for as long as the count <= 5
    if (count <= 5) 
    {
        console.log(seconds--);
    }
    else //Stops and clears the interval
    {
        clearInterval(intervID);
    }

    //Increments count
    count++;
}
