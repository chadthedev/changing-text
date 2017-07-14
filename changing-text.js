(function ( $ ){

	$.fn.changingText = function(stringsToType, options){
		var settings = $.extend({
			blinkSpeed : 500,
			typingSpeed : 50,
			blinksPerPause : 2,
			loop : true		}, options);
		
		$(this).html("<span class='changing-text'></span><span class='blinking-line'>|</span>");
		var stringIndex = 0; //which string will be typed or erased
		var activeString = false; //toggles as strings are either typed or erased
		blinkingLine($(this));

		function blinkingLine(jqueryObject){ //creates a blinking effect for 2 blinks then calls another function
			var hidden = false;//toggles as the line blinks
			var count = 0;
			if (!settings.loop && jqueryObject.children(".changing-text").text() == stringsToType[stringsToType.length - 1]) {
				settings.blinksPerPause = 99999999*999999999;
			}
			var timer = setInterval(blinkingTextLine, settings.blinkSpeed);
			function blinkingTextLine() { 
				if (hidden) {
					jqueryObject.children(".blinking-line").css("visibility", "visible");
					hidden = false;
				}else{
					jqueryObject.children(".blinking-line").css("visibility", "hidden");
					hidden = true;
				}
				if (count > settings.blinksPerPause) {
				 	jqueryObject.children(".blinking-line").css("visibility", "visible");
				 	clearInterval(timer); 
					activeString ? removeString(jqueryObject) : addString(jqueryObject);
				}
				count++;
			}
		}

		function addString(jqueryObject) { //adds a string in a way that looks like its being typed
			activeString = true;
			var count = 0;
			var string = stringsToType[stringIndex];
			var timer = setInterval(addChar, settings.typingSpeed);
			function addChar() {
				if (count > string.length) {
					clearInterval(timer);
					blinkingLine(jqueryObject);
				}else{
					jqueryObject.children(".changing-text").append(string[count]);
					count++;
				}
			}
		}

		function removeString(jqueryObject) {// removes a string in a way that looks like its being typed
			activeString = false;
			var count = 0;
			var string = stringsToType[stringIndex];
			var timer = setInterval(removeChar, settings.typingSpeed);
			function removeChar() {
				if (count > string.length) {
					clearInterval(timer);
					nextString(jqueryObject);
				}else{
					count++;
					jqueryObject.children(".changing-text").text(string.slice(0, -count));
				}
			}
		}

		function nextString(jqueryObject){ //either adds to string index or puts string index back to 0
			stringIndex++;
			if (stringIndex >= stringsToType.length) {
				stringIndex = 0;
			}
			blinkingLine(jqueryObject);
		}
	};

}(jQuery));