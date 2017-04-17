function countdown(seconds){
  // ...
  if (seconds >= 0) {
    var i = window.setInterval(
      function() { 
        //document.write(seconds +'... <br>'); 
        //console.log(seconds +'... <br>'); 
        document.body.innerHTML += '<div>'+seconds+'...<div>';
        countdown(seconds-1);
      }, 1000);
    window.setTimeout(function () { window.clearInterval(i); }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", countdown(5));