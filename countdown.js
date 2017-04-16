function countdown(){
  var count = 10;
    var timerId = setInterval(function() {
        count--;
        console.log(count);

        if(count == 0) {
            count = 10;
        }
    }, 1000);
}

countdown();
