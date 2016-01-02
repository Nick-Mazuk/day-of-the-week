var first; //The HTML IDs are the variable names
var second;
var third;
var secondLoc;
var thirdLoc;
var page;

window.addEventListener("load", function(){onLoad();});

function onLoad() {
	first = document.getElementById("first");
	second = document.getElementById("second");
	third = document.getElementById("third");
	page = document.getElementById("page");
	secondLoc = first.offsetWidth + 2 * first.style.marginLeft + 4;
	thirdLoc = secondLoc + second.offsetWidth + 2 * first.style.marginLeft + 4;
	first.addEventListener("click", function(){change(1);});
	second.addEventListener("click", function(){change(2);});
	third.addEventListener("click", function(){change(3);});
	change(2);
}

function change(location) {
	if(location == 1) {
		page.style.width = first.offsetWidth + "px";
		page.style.marginLeft = "0px";
		firstContent.classList.remove("notShown");
		secondContent.classList.add("notShown");
		thirdContent.classList.add("notShown");
	} else if (location == 2) {
		page.style.width = second.offsetWidth + "px";
		page.style.marginLeft = secondLoc + "px";
		firstContent.classList.add("notShown");
		secondContent.classList.remove("notShown");
		thirdContent.classList.add("notShown");
	} else {
		page.style.width = third.offsetWidth + "px";
		page.style.marginLeft = thirdLoc + "px";
		firstContent.classList.add("notShown");
		secondContent.classList.add("notShown");
		thirdContent.classList.remove("notShown");
	}
}