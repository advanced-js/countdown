function countdown(seconds) {
    console.log(seconds);
      setTimeout(function() {
          if(seconds !== 0)
          countdown(seconds-1);
      }, 1000);
}

countdown(5);
