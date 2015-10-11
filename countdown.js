var t = -1;

function countdown(seconds){
  // ...
  window.setTimeout(function() { document.write(Math.abs(seconds - t) +'... <br>'); }, seconds * 1000);
  t = t + 1;
  if (seconds > 0) { countdown(seconds-1); }
}

countdown(5);
