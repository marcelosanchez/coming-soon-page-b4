console.log("Contdown");

function getRemainTime(deadline) {
	var now = new Date();
	var remainTime = (new Date(deadline) - now + 1000 ) / 1000 ;
	var remainSeconds = ('0' + Math.floor( remainTime % 60 ) ).slice(-2);
	var remainMinutes = ('0' + Math.floor( remainTime / 60 % 60 ) ).slice(-2);
	var remainHours = ('0' + Math.floor( remainTime / 3600 % 24 ) ).slice(-2);
	var remainDays = Math.floor( remainTime / ( 3600 * 24 ) );

	return {
		remainTime,
		remainSeconds,
		remainMinutes,
		remainHours,
		remainDays
	};
}

function countdown(deadline, elem, finalMsg) {

	setInterval(function(){ timerUpdate(elem, deadline, finalMsg); }, 1000);

}

function timerUpdate(elem, deadline, finalMsg) {
	var t = getRemainTime(deadline);
	var elDays 		= document.getElementById(elem).getElementsByClassName('countd-dd')[0];
	var elHours 	= document.getElementById(elem).getElementsByClassName('countd-t-hh')[0];
	var elMinutes 	= document.getElementById(elem).getElementsByClassName('countd-t-mm')[0];
	var elSeconds 	= document.getElementById(elem).getElementsByClassName('countd-t-ss')[0];

	// el.innerHTML = 'TIME: ' + t['remainDays'] + 'd:' + t['remainHours'] + 'h:' + t['remainMinutes'] + 'm:' + t['remainSeconds'] + 's';
	elDays.innerHTML 	= t['remainDays'];
	elHours.innerHTML 	= t['remainHours'];
	elMinutes.innerHTML = t['remainMinutes'];
	elSeconds.innerHTML = t['remainSeconds'];

	if (t.remainTime <= 1) {
		clearInterval(timerUpdate);
		elDays.innerHTML = '00';
		elHours.innerHTML = '00';
		elMinutes.innerHTML = '00';
		elSeconds.innerHTML = '00';
	}
}

countdown('Dec 7 2019 20:00:00 GMT-0500', 'countdown-cont', 'Es hora!');
