// Challenge summary:
// You will be implementing a countdown clock which take the number
// of seconds as parameter. In addition, you will also add 'confetti'
// to a random location on the page for each passing second.

// After you have completed the basic core components, there are a few
// optional features to work on:
// -- If seconds > 60, timer display should switch to minute:second.
// -- Include a warning when time is up (audio or visual).
// -- Display time in miliseconds.


// First, take a look at the index.html file to see the items you
// will need to work with.
var timer;
// This function is the equivalent of document ready
$(function() {
    var reggie = new RegExp('^\\d+$');
    var secs = parseInt($('#time').val());
    var size = parseInt($('#size').val());
    $('#countdownButton').click(function() {
        if(reggie.test(secs) && reggie.test(size)) {
            countDown();
        }
    });
	/* Hints:
	 		-- Start by registering the click event for the button.
	 		-- You will need to keep track of the number of second somewhere.
	 		-- Remember javascript function can be assigned into variable.
	 		- Input values are strings, remember to parse it!
			-- Regex for checking digit input is '^\\d+$'
			-- Look up how setInterval() works, you will need it.

	*/		
});

function countDown() {
	// Hint: if time < 0, stop the countdown, otherwise refresh the timer display & call createConfetti().
	// Hint: to stop countdown, look up clearInterval() function.
    var startTime = parseInt($('#time').val());
    var timer =window.setInterval(function() {
        $('#displayedTimer').text(startTime);
        console.log(startTime);
        createConfetti();
        startTime--;
        if(startTime < 0) {
            window.clearInterval(timer);
        }
    }, 1000);
}

function createConfetti() {
	// Get confetti's size. If user doesn't specify or type in invalid value, switch to a default size.


	//	Random color RGB, use Math.floor(Math.random() * 255)


	// Random locations on screen
	// Hint: use Math.floor, Math.random, window.innerHeight/Width to compute px value.


	// Add confetti and apply styles: width/height, location, background-color.
	// Hint: use fixed positioning with top & left attributes


	// [Optional]
	// Change the timer display's font color to the same as the last confetti's
	// background color. This is actually very simple (1-2 line of code).
	
	// [Optional]
	// Allow user to click on each confetti and remove it (1-2 line of code).
}