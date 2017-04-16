// var x = 10;
// var a = x;

// function countdown(x) {

//   if (a > -1) {
//      console.log(a); 
//     a--;
//   }
// }

// countdown(x);

// setInterval(function(){
//   countdown(x);
// }, 1000);

// Levels

// Use global variable to keep track of time
// Keep track of time without defining any global variables
// BONUS: don't define any new variables

// Level 3 Countdown

function countdown(x) {
   (function(e) {
     setInterval(function() {
       if (e > -1) {
         console.log(e);
         e--;         
       }
     }, 1000);    
   })(x); 
}

countdown(10);

