var x = 10;
var a = x;

function countdown(x) {

  if (a > -1) {
     console.log(a); 
    a--;
  }
}

countdown(x);

setInterval(function(){
  countdown(x);
}, 1000);
