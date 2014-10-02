var count = 0;

function countdown(seconds) {
   timerId = setInterval(function() {
   if (count > -1) {
      console.log(count);
      count--;
   } else {
       clearInterval(timerId)}
   }, 1000)

countdown(5);
