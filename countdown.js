function countdown(seconds){
  
  if (seconds >=0){
    
    setTimeout(function(){
      console.log(seconds);
      countdown(seconds-1);
    }, 1000);
    
  }

}

countdown(5);
