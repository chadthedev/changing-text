changing-text

a simple javascript animation that mimics someone typing something then erasing it and typing something else, requires jquery

Usage: include <script src="changing-text.js"></script> then simply add an id of "change-text" to whatever element you would like to change then call changingText(["strings", "you", "want", "typed"]) in your javascript

Options parameter An options parameter exists with the options to change: typingspeed, blinkSpeed, and blinksPerPause. usage of options parameter:

options = { typingSpeed : 500, // Default option values 
			blinkSpeed : 50, 
			blinksPerPause : 2 }; 
stringsToType = ["an", "array", "of", "strings"]; changingText(stringsToType, options);

*note, be sure to include all options in options object even if you're only changing one
