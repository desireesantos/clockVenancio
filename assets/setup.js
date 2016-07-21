var clock,
dataTime = 3600 * 24 * 17;	
	
	$(document).ready(function() {

		clock = $('.clock').FlipClock(dataTime,{
	        clockFace: 'DailyCounter',
	        autoStart: false,
	        callbacks: {
	        	stop: function() {
	        		$('.message').html('The clock has stopped!')
	        	}
	        }
	    });
	    clock.setCountdown(true);
	    clock.start();
	});						