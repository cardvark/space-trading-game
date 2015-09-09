var upgradeTime = 172801;
var seconds = upgradeTime;

var countdownTimer = setInterval(timer, 1000);

function callCountdown(timeObj, newMsg) {
	var seconds = timeObj.waitTime;

	var newMsg = newMsg || ""

	function timer() {
	    var days        = Math.floor(seconds/24/60/60);
	    var hoursLeft   = Math.floor((seconds) - (days*86400));
	    var hours       = Math.floor(hoursLeft/3600);
	    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
	    var minutes     = Math.floor(minutesLeft/60);
	    var remainingSeconds = seconds % 60;
	    if (remainingSeconds < 10) {
	        remainingSeconds = "0" + remainingSeconds; 
	    }
	    console.log(newMsg + days + ":" + hours + ":" + minutes + ":" + remainingSeconds);
	    if (seconds == 0) {
	        clearInterval(countdownTimer);
	    } else {
	        seconds--;
	    }
	};

	countdownTimer = setInterval(timer, 1000)
}

function timeObject(waitTime) {
	this.waitTime = waitTime;
}