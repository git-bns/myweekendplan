
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $('.coming-soon').backstretch([
      "assets/img/backgrounds/bg12.jpg"
    /*, "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"*/
    ], {duration: 3000, fade: 750});

    /*
	    Countdown initializer
	*/
	var launchDate = new Date("October 02, 2025 00:00:00");
	var countTo = launchDate.valueOf();    
	$('.timer').countdown(countTo, function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});

    /*
        Tooltips
    */
    $('.social a').tooltip();
});
