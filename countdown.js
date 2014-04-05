function countdown_l2(seconds){
  console.log(seconds);
  setTimeout(function(){
    if(seconds > 0){
        countdown(seconds - 1);
    }
  }, 1000); 
}
function countdown_l3(seconds){
    var intr = setInterval(function(){
        console.log(seconds);
        seconds--;
        if(seconds < 0){
            clearInterval(intr);
        }
    }, 1000);
}
countdown_l3(10);
