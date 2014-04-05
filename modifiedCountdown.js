function countdown(x){
	for (i=x;i>0;i--){
	setTimeout("console.log(i)",5000);
	}
}
countdown(10);