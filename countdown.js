function countdown(seconds){
  // 1. Use global variable to keep track of time
  time = seconds;
  while (time > 0) {
    console.log(time);
    time -= 1;
  }
}

countdown(10);
