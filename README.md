changing-text

a jquery function that mimics someone typing 

Usage: call with $("element").changeText(["strings","you","want",typed"], options);

Options parameter An options parameter exists with the options to change: typingspeed, blinkSpeed, and blinksPerPause and toggle whether or not you want it to loop. usage of options parameter:

options = { typingSpeed : 500, // Default option values 
			blinkSpeed : 50, 
			blinksPerPause : 2,
			loop: true}; 

$("element").changeText(["strings","you","want","typed"], options);

Live example at http://changing-text-example.s3-website-us-west-2.amazonaws.com/
