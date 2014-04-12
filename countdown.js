//solution below doesn't use any new variables

function countdown(seconds){

  setInterval(function() {

    if (seconds < 0) {
      window.clearInterval();
    } else {
      console.log(seconds--);
    };
  }, 1000);


}

// countdown(10);
