var clock,
 time = new Date('2016-08-06 00:00:00 am').getTime();		
	
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