var counter = setInterval(function(){ myTimer() }, 1000);

function myTimer (){
	var interval = 0;
		interval += 1;
	var interval1 = 1440;
	var interval2 = 300;
	var interval3 = interval2 * 3;
		if (interval > interval1){
			clearInterval();
		}
	console.log(interval);
}

