function countdown(seconds){
  for (var i=0; i<=seconds; i++){
    window.setTimeout(
        function(n){
          console.log(n+"...");
        },
        1000*i,
        seconds-i
    );
  }
}

countdown(5);
