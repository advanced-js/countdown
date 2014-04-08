<!doctype html>
<html>
	<meta charset="utf-8">
	<title>Timer</title>
	<body>
		<div id="output"></div>
		<script>
		    function countdown(){
			var output=document.getElementById('output');
			output.innerHTML+=seconds+"<br>";
			seconds--;
			if (seconds<=0){
				 output.innerHTML+="Blast Off!";
				clearInterval(interval);
			}
        	     }
		    var seconds=10;
		    var interval=setInterval(countdown,1000);
		</script>
	</body>
</html>
