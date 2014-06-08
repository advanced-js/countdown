//Level 2 and 3: Keeps track of time without defining any new variables

function countDown(seconds) 
{
    //Putting the console log statement here allows to view the last second (0) as well
    console.log(seconds);

    if (seconds > 0) 
    {
        //This is a recursive function that calls count down for as long as 'seconds' is greater than 0 
        setTimeout(function () { countDown(--seconds) }, 1000);
    }
}

//First call 
countDown(5);
