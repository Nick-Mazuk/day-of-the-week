var first; //The HTML IDs are the variable names
var second;
var secondLoc;
var page;
var firstGivenYear;
var firstSunday;
var firstMonday;
var firstTuesday;
var firstWednesday;
var firstThursday;
var firstFriday;
var firstSaturday;
var firstDateSelector;
var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

window.addEventListener("load", function(){onLoad();});

function onLoad() {
	first = document.getElementById("first");
	second = document.getElementById("second");
	page = document.getElementById("page");
	firstGivenYear = document.getElementById("firstGivenYear");
	secondGivenYear = document.getElementById("firstGivenDate");
	secondLoc = first.offsetWidth + 2 * first.style.marginLeft + 4;
	first.addEventListener("click", function(){change(1);});
	second.addEventListener("click", function(){change(2);});
	change(1);
	firstChoose();

	firstSunday = document.getElementById("firstSunday");
	firstMonday = document.getElementById("firstMonday");
	firstTuesday = document.getElementById("firstTuesday");
	firstWednesday = document.getElementById("firstWednesday");
	firstThursday = document.getElementById("firstThursday");
	firstFriday = document.getElementById("firstFriday");
	firstSaturday = document.getElementById("firstSaturday");
	firstDateSelector = document.getElementById("firstDateSelector");
	firstHint = document.getElementById("firstHint");
	firstHintText = document.getElementById("firstHintText");
	firstCorrectness = document.getElementById("firstCorrectness");
	firstRevealGraph = document.getElementById("firstRevealGraph");
	firstGraph = document.getElementById("firstGraph");
	firstSunday.addEventListener("click", function(){firstChoose(0);});
	firstMonday.addEventListener("click", function(){firstChoose(1);});
	firstTuesday.addEventListener("click", function(){firstChoose(2);});
	firstWednesday.addEventListener("click", function(){firstChoose(3);});
	firstThursday.addEventListener("click", function(){firstChoose(4);});
	firstFriday.addEventListener("click", function(){firstChoose(5);});
	firstSaturday.addEventListener("click", function(){firstChoose(6);});

	firstSunday.addEventListener("mouseenter", function(){firstSelectorChange(0);});
	firstMonday.addEventListener("mouseenter", function(){firstSelectorChange(1);});
	firstTuesday.addEventListener("mouseenter", function(){firstSelectorChange(2);});
	firstWednesday.addEventListener("mouseenter", function(){firstSelectorChange(3);});
	firstThursday.addEventListener("mouseenter", function(){firstSelectorChange(4);});
	firstFriday.addEventListener("mouseenter", function(){firstSelectorChange(5);});
	firstSaturday.addEventListener("mouseenter", function(){firstSelectorChange(6);});
	firstHint.addEventListener("click", firstHintClicked);
	firstRevealGraph.addEventListener("click",firstUpdateGraph);
	firstSelectorChange(0,true);

	secondSunday = document.getElementById("secondSunday");
	secondMonday = document.getElementById("secondMonday");
	secondTuesday = document.getElementById("secondTuesday");
	secondWednesday = document.getElementById("secondWednesday");
	secondThursday = document.getElementById("secondThursday");
	secondFriday = document.getElementById("secondFriday");
	secondSaturday = document.getElementById("secondSaturday");
	secondDateSelector = document.getElementById("secondDateSelector");
	secondHint = document.getElementById("secondHint");
	secondHintText = document.getElementById("secondHintText");
	secondCorrectness = document.getElementById("secondCorrectness");
	secondRevealGraph = document.getElementById("secondRevealGraph");
	secondGraph = document.getElementById("secondGraph");
	secondSunday.addEventListener("click", function(){secondChoose(0);});
	secondMonday.addEventListener("click", function(){secondChoose(1);});
	secondTuesday.addEventListener("click", function(){secondChoose(2);});
	secondWednesday.addEventListener("click", function(){secondChoose(3);});
	secondThursday.addEventListener("click", function(){secondChoose(4);});
	secondFriday.addEventListener("click", function(){secondChoose(5);});
	secondSaturday.addEventListener("click", function(){secondChoose(6);});

	secondSunday.addEventListener("mouseenter", function(){secondSelectorChange(0);});
	secondMonday.addEventListener("mouseenter", function(){secondSelectorChange(1);});
	secondTuesday.addEventListener("mouseenter", function(){secondSelectorChange(2);});
	secondWednesday.addEventListener("mouseenter", function(){secondSelectorChange(3);});
	secondThursday.addEventListener("mouseenter", function(){secondSelectorChange(4);});
	secondFriday.addEventListener("mouseenter", function(){secondSelectorChange(5);});
	secondSaturday.addEventListener("mouseenter", function(){secondSelectorChange(6);});
	secondHint.addEventListener("click", secondHintClicked);
	secondRevealGraph.addEventListener("click",secondUpdateGraph);
}

function change(location) {
	if(location == 1) {
		page.style.width = first.offsetWidth + "px";
		page.style.marginLeft = "0px";
		firstContent.classList.remove("notShown");
		secondContent.classList.add("notShown");
	} else {
		page.style.width = second.offsetWidth + "px";
		page.style.marginLeft = secondLoc + "px";
		firstContent.classList.add("notShown");
		secondContent.classList.remove("notShown");
		if(this.run != true) {
			secondSelectorChange(0,true);
			secondChoose();
			this.run = true;
		}
	}
}

function firstSelectorChange(location,run) {
	if(run) {
		first.locations = [];
		first.locations.push(firstSunday.offsetWidth + 4);
		first.locations.push(first.locations[0] + firstMonday.offsetWidth + 4);
		first.locations.push(first.locations[1] + firstTuesday.offsetWidth + 4);
		first.locations.push(first.locations[2] + firstWednesday.offsetWidth + 4);
		first.locations.push(first.locations[3] + firstThursday.offsetWidth + 4);
		first.locations.push(first.locations[4] + firstFriday.offsetWidth + 4);
	}
	if(location == 0) {
		firstDateSelector.style.width = firstSunday.offsetWidth + "px";
		firstDateSelector.style.marginLeft = 0 + "px";
	} else if(location == 1) {
		firstDateSelector.style.width = firstMonday.offsetWidth + "px";
		firstDateSelector.style.marginLeft = first.locations[0] + "px";
	} else if(location == 2) {
		firstDateSelector.style.width = firstTuesday.offsetWidth + "px";
		firstDateSelector.style.marginLeft = first.locations[1] + "px";
	} else if(location == 3) {
		firstDateSelector.style.width = firstWednesday.offsetWidth + "px";
		firstDateSelector.style.marginLeft = first.locations[2] + "px";
	} else if(location == 4) {
		firstDateSelector.style.width = firstThursday.offsetWidth + "px";
		firstDateSelector.style.marginLeft = first.locations[3] + "px";
	} else if(location == 5) {
		firstDateSelector.style.width = firstFriday.offsetWidth + "px";
		firstDateSelector.style.marginLeft = first.locations[4] + "px";
	} else if(location == 6) {
		firstDateSelector.style.width = firstSaturday.offsetWidth + "px";
		firstDateSelector.style.marginLeft = first.locations[5] + "px";
	}
}

function firstChoose(guess) {
	if(first.ran != true) {
		first.ran = true;
		first.correct = 0;
		first.total = 0;
		first.days = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
	} else {
		if(findNewYear(first.year) == guess) {
			first.correct++;
			first.days[guess][0]++;
			firstCorrectness.innerHTML = "Correct";
			firstCorrectness.style.color = "#33CC33";
		} else {
			firstCorrectness.innerHTML = daysOfWeek[findNewYear(first.year)];
			firstCorrectness.style.color = "#CC2200";
		}
		first.total++;
		first.days[guess][1]++;
		skipTransition(firstCorrectness,function(){firstCorrectness.style.opacity = 1;});
		setTimeout(function(){firstCorrectness.style.opacity = 0;},756);
	}
	first.year = Math.floor(Math.random()*100) + 2000;
	firstGivenYear.innerHTML = first.year;
}

function firstHintClicked() {
	firstHintText.classList.toggle("notShown");
	if(firstHintText.classList.contains("notShown"))
		firstHint.innerHTML = "Show Hint";
	else 
		firstHint.innerHTML = "Hide Hint";
}

function firstUpdateGraph() {
	firstRevealGraph.innerHTML = "Update Graph";
	firstGraph.style.display = "block";
	var graphRows = [document.getElementById("firstGraphSunday"),document.getElementById("firstGraphMonday"),
		document.getElementById("firstGraphTuesday"),document.getElementById("firstGraphWednesday"),
		document.getElementById("firstGraphThursday"),document.getElementById("firstGraphFriday"),
		document.getElementById("firstGraphSaturday")];
	for(i = 0; i < graphRows.length; i++) {
		var day = graphRows[i];
		day.dataset.text = first.days[i][0] + "/" + first.days[i][1];
		var percentage = Math.round(first.days[i][0] / first.days[i][1] * 100);
		if(isNaN(percentage)) {
			day.className = "percentage-10 gray";
		} else if(percentage <= 60) {
			day.className = "percentage-" + percentage + " orange";
		} else if(percentage <= 85) {
			day.className = "percentage-" + percentage + " yellow";
		} else {
			day.className = "percentage-" + percentage + " green"
		}
	}
	var overall = document.getElementById("firstGraphOverall");
		overall.dataset.text = first.correct + "/" + first.total;
		var percentage = Math.round(first.correct / first.total * 100);
		if(isNaN(percentage)) {
			overall.className = "percentage-10 gray";
		} else if(percentage <= 60) {
			overall.className = "percentage-" + percentage + " orange";
		} else if(percentage <= 85) {
			overall.className = "percentage-" + percentage + " yellow";
		} else {
			overall.className = "percentage-" + percentage + " green"
		}
}

function findNewYear(year) {
	return (-1 + year % 100 + Math.ceil((year % 100) / 4)) % 7;
}

///////////////Second Section////////////////////////////////////////////////////////////////////////////////////////////

function secondSelectorChange(location,run) {
	if(run) {
		second.locations = [];
		second.locations.push(secondSunday.offsetWidth + 4);
		second.locations.push(second.locations[0] + secondMonday.offsetWidth + 4);
		second.locations.push(second.locations[1] + secondTuesday.offsetWidth + 4);
		second.locations.push(second.locations[2] + secondWednesday.offsetWidth + 4);
		second.locations.push(second.locations[3] + secondThursday.offsetWidth + 4);
		second.locations.push(second.locations[4] + secondFriday.offsetWidth + 4);
	}
	if(location == 0) {
		secondDateSelector.style.width = secondSunday.offsetWidth + "px";
		secondDateSelector.style.marginLeft = 0 + "px";
	} else if(location == 1) {
		secondDateSelector.style.width = secondMonday.offsetWidth + "px";
		secondDateSelector.style.marginLeft = second.locations[0] + "px";
	} else if(location == 2) {
		secondDateSelector.style.width = secondTuesday.offsetWidth + "px";
		secondDateSelector.style.marginLeft = second.locations[1] + "px";
	} else if(location == 3) {
		secondDateSelector.style.width = secondWednesday.offsetWidth + "px";
		secondDateSelector.style.marginLeft = second.locations[2] + "px";
	} else if(location == 4) {
		secondDateSelector.style.width = secondThursday.offsetWidth + "px";
		secondDateSelector.style.marginLeft = second.locations[3] + "px";
	} else if(location == 5) {
		secondDateSelector.style.width = secondFriday.offsetWidth + "px";
		secondDateSelector.style.marginLeft = second.locations[4] + "px";
	} else if(location == 6) {
		secondDateSelector.style.width = secondSaturday.offsetWidth + "px";
		secondDateSelector.style.marginLeft = second.locations[5] + "px";
	}
}

function secondChoose(guess) {
	if(second.ran != true) {
		second.ran = true;
		second.correct = 0;
		second.total = 0;
		second.days = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
		second.months = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
		second.leapYear = [[0,0],[0,0]];
	} else {
		if(second.date.getDay() == guess) {
			second.correct++;
			second.days[guess][0]++;
			second.months[second.date.getMonth()][0]++;
			second.date.isLeapYear() ? second.leapYear[0][0]++ : second.leapYear[1][0]++;
			secondCorrectness.innerHTML = "Correct";
			secondCorrectness.style.color = "#33CC33";
		} else {
			secondCorrectness.innerHTML = daysOfWeek[second.date.getDay()];
			secondCorrectness.style.color = "#CC2200";
		}
		second.months[second.date.getMonth()][1]++;
		second.date.isLeapYear() ? second.leapYear[0][1]++ : second.leapYear[1][1]++;
		second.total++;
		second.days[guess][1]++;
		skipTransition(secondCorrectness,function(){secondCorrectness.style.opacity = 1;});
		setTimeout(function(){secondCorrectness.style.opacity = 0;},756);
	}
	do {
		second.date = new Date(Math.floor(Math.random()*100) + 2000,Math.floor(Math.random()*12),Math.ceil(Math.random()*30));
	} while (second.date == undefined);
	secondGivenDate.innerHTML = second.date.toDateString().substring(second.date.toDateString().indexOf(" ") + 1);
}

function secondHintClicked() {
	secondHintText.classList.toggle("notShown");
	if(secondHintText.classList.contains("notShown"))
		secondHint.innerHTML = "Show Hint";
	else 
		secondHint.innerHTML = "Hide Hint";
}

function secondUpdateGraph() {
	secondRevealGraph.innerHTML = "Update Graph";
	secondGraph.style.display = "block";

	//weekdays
	var graphRows = [document.getElementById("secondGraphSunday"),document.getElementById("secondGraphMonday"),
		document.getElementById("secondGraphTuesday"),document.getElementById("secondGraphWednesday"),
		document.getElementById("secondGraphThursday"),document.getElementById("secondGraphFriday"),
		document.getElementById("secondGraphSaturday")];
	for(i = 0; i < graphRows.length; i++) {
		var day = graphRows[i];
		day.dataset.text = second.days[i][0] + "/" + second.days[i][1];
		var percentage = Math.round(second.days[i][0] / second.days[i][1] * 100);
		if(isNaN(percentage)) {
			day.className = "percentage-10 gray";
		} else if(percentage <= 60) {
			day.className = "percentage-" + percentage + " orange";
		} else if(percentage <= 85) {
			day.className = "percentage-" + percentage + " yellow";
		} else {
			day.className = "percentage-" + percentage + " green"
		}
	}

	//months
	var graphRows = [document.getElementById("secondGraphJan"),document.getElementById("secondGraphFeb"),
		document.getElementById("secondGraphMar"),document.getElementById("secondGraphApr"),
		document.getElementById("secondGraphMay"),document.getElementById("secondGraphJun"),
		document.getElementById("secondGraphJul"),document.getElementById("secondGraphAug"),
		document.getElementById("secondGraphSep"),document.getElementById("secondGraphOct"),
		document.getElementById("secondGraphNov"),document.getElementById("secondGraphDec")];
	for(i = 0; i < graphRows.length; i++) {
		var month = graphRows[i];
		month.dataset.text = second.months[i][0] + "/" + second.months[i][1];
		var percentage = Math.round(second.months[i][0] / second.months[i][1] * 100);
		if(isNaN(percentage)) {
			month.className = "percentage-10 gray";
		} else if(percentage <= 60) {
			month.className = "percentage-" + percentage + " orange";
		} else if(percentage <= 85) {
			month.className = "percentage-" + percentage + " yellow";
		} else {
			month.className = "percentage-" + percentage + " green"
		}
	}

	//leap years
	var graphRows = [document.getElementById("secondGraphLeap"),document.getElementById("secondGraphNotLeap")];
	for(i = 0; i < graphRows.length; i++) {
		var day = graphRows[i];
		day.dataset.text = second.leapYear[i][0] + "/" + second.leapYear[i][1];
		var percentage = Math.round(second.leapYear[i][0] / second.leapYear[i][1] * 100);
		if(isNaN(percentage)) {
			day.className = "percentage-10 gray";
		} else if(percentage <= 60) {
			day.className = "percentage-" + percentage + " orange";
		} else if(percentage <= 85) {
			day.className = "percentage-" + percentage + " yellow";
		} else {
			day.className = "percentage-" + percentage + " green"
		}
	}

	//overall
	var overall = document.getElementById("secondGraphOverall");
	overall.dataset.text = second.correct + "/" + second.total;
	var percentage = Math.round(second.correct / second.total * 100);
	if(isNaN(percentage)) {
		overall.className = "percentage-10 gray";
	} else if(percentage <= 60) {
		overall.className = "percentage-" + percentage + " orange";
	} else if(percentage <= 85) {
		overall.className = "percentage-" + percentage + " yellow";
	} else {
		overall.className = "percentage-" + percentage + " green"
	}
}

/////////////////////////////Extras Section//////////////////////////////////////////////////////////////////////////

//code borrowed from Mozilla's X-Tag library http://www.x-tags.org/
var prefix = (function () {
	var styles = window.getComputedStyle(document.documentElement, ''),
		pre = (Array.prototype.slice
			.call(styles)
			.join('')
			.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
	)[1];
	return {
		dom: pre == 'ms' ? pre.toUpperCase() : pre,
		lowercase: pre,
		css: '-' + pre + '-',
		js: pre[0].toUpperCase() + pre.substr(1)
	};
})();

var requestFrame = (function(){
	var raf = window.requestAnimationFrame ||
		window[prefix.lowercase + 'RequestAnimationFrame'] ||
		function(fn){ return window.setTimeout(fn, 20); };
	return function(fn){
		return raf.call(window, fn);
	};
})();

var skipTransition = function(element, fn, bind){
	var prop = prefix.js + 'TransitionProperty';
	element.style[prop] = element.style.transitionProperty = 'none';
	var callback;
	if (fn) callback = fn.call(bind);
	requestFrame(function(){
		requestFrame(function(){
			element.style[prop] = element.style.transitionProperty = '';
			if (callback) requestFrame(callback);
		});
	});
};

Date.prototype.isLeapYear = function() {
    var y = this.getFullYear();
    return !(y % 4) && (y % 100) || !(y % 400);
};