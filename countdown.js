
function log_seconds(n){
  console.log(n+"...");
}

function countdown(seconds){
  for (var i=0; i<=seconds; i++){
    window.setTimeout(log_seconds, 1000*i, seconds-i);
  }
}

countdown(5);
