function countdown(seconds) {
  if (isNaN(seconds) && !parseInt(Number(seconds))) {
    console.log('Please set a valid time');
    return;
  }
  if (seconds === 0) {
    console.log('BEEP BEEP BEEP');
    return;
  }
  console.log(seconds);
  setTimeout(function () {
    countdown(seconds - 1);
  }, 1000);
}

countdown(5);
