var i = 10;
function countdown(){
    console.log(i--);
    if(i == 0){
        clearInterval(timerId)
    }
}

var timerId = setInterval(countdown, 2000)