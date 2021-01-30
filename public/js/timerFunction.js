export default function timerFunction(openDate, closeDate) {
	//calculate open
	const difference_open = +new Date(`${openDate}`) - +new Date();
	// calculate close
	const difference_close = +new Date(`${closeDate}`) - +new Date();

	let timeLeft = {};
	if (difference_open > 0) {
		timeLeft = {
			hours:
				Math.floor((difference_open / (1000 * 60 * 60)) % 24) +
				Math.floor(difference_open / (1000 * 60 * 60 * 24)) * 24,
			minutes: Math.floor((difference_open / 1000 / 60) % 60),
			seconds: Math.floor((difference_open / 1000) % 60)
		};
		return {
			modal: 1,
			closed: 0,
			timeLeft: [timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
		};
	} else if (difference_close >= 0) {
		timeLeft = {
			hours:
				Math.floor((difference_close / (1000 * 60 * 60)) % 24) +
				Math.floor(difference_close / (1000 * 60 * 60 * 24)) * 24,
			minutes: Math.floor((difference_close / 1000 / 60) % 60),
			seconds: Math.floor((difference_close / 1000) % 60)
		};
		return {
			modal: 0,
			closed: 0,
			timeLeft: [timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
		};
	} else {
		return {
			modal: 1,
			closed: 1,
			timeLeft: [null, null, null]
		};
	}
}

//open "2020-03-01, 0:0:0"
//closed "2020-03-31, 23:59:59"
