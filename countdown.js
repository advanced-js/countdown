function countdown(seconds) {
  if (seconds === 0) {
    console.log('BEEP BEEP BEEP');
    return false;
  }
  console.log(seconds);
  setTimeout(function () {
    countdown(seconds -1);
  }, 1000);
}

countdown(5);
