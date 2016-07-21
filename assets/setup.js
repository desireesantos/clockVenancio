var clock;	
	
	$(document).ready(function() {

		clock = $('.clock').FlipClock(3600 * 24 * 17,{
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