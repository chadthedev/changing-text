function changingText(stringsToType){
	//change-text is the class of the parent element, changing-text is the child span of change-text
	$("#change-text").html("<span id='changing-text'></span><span id='blinking-line'>|</span>");
	// var stringsToType = ["Beautiful Websites", "Intutitve Layouts", "Affordable Hosting solutions"];
	var stringIndex = 0; //which string will be typed or erased
	var activeString = false; //toggles as strings are either typed or erased
	blinkingLine();

	function blinkingLine(){ //creates a blinking effect for 2 blinks then calls another function
		var hidden = false;//toggles as the line blinks
		var count = 0;
		var timer = setInterval(blinkingTextLine, 700);
		function blinkingTextLine() { 
			if (hidden) {
				$("#blinking-line").css("visibility", "visible");
				hidden = false;
			}else{
				$("#blinking-line").css("visibility", "hidden");
				hidden = true;
			}
			if (count > 4) {
			 	$("#blinking-line").css("visibility", "visible");
			 	clearInterval(timer); 
				activeString ? removeString() : addString();
			}
			count++;
		}
	}

	function addString() { //adds a string in a way that looks like its being typed
		activeString = true;
		var count = 0;
		var string = stringsToType[stringIndex];
		var timer = setInterval(addChar, 100);
		function addChar() {
			if (count > string.length) {
				clearInterval(timer);
				blinkingLine();
			}else{
				$("#changing-text").append(string[count]);
				count++;
			}
		}
	}

	function removeString() {// removes a string in a way that looks like its being typed
		activeString = false;
		var count = 0;
		var string = stringsToType[stringIndex];
		var timer = setInterval(removeChar, 100);
		function removeChar() {
			if (count > string.length) {
				clearInterval(timer);
				nextString();
			}else{
				count++;
				$("#changing-text").text(string.slice(0, -count));
			}
		}
	}

	function nextString(){ //either adds to string index or puts string index back to 0
		stringIndex++;
		if (stringIndex >= stringsToType.length) {
			stringIndex = 0;
		}
		blinkingLine();
	}
}
