//Globals

var wordsArray = [],
	listsArray = [],
	theFile;

function createTable(inputArray,tableWidth) {
	"use strict";
	var tableHTMLElement,
		newRow,
		newCell,
		wordCount;

	tableHTMLElement = document.getElementById("displayWords");
	tableHTMLElement.innerHTML = ""; // clear table each time its run

	newRow = tableHTMLElement.insertRow(-1);
	
	for ( wordCount = 0; wordCount < inputArray.length; wordCount = wordCount + 1) {
		if ( tableHTMLElement.lastChild.lastChild.cells.length === tableWidth ) {
			newRow = tableHTMLElement.insertRow(-1);
		}
		newCell = newRow.insertCell(-1);
		newCell.innerHTML = inputArray[wordCount];
		console.log(newCell.innerHTML);
	}
};


function parse2DListArray (inputString) {
	"use strict";
	// function takes an input string from the file loader and parses
	// it into a 2d Array that looks like the following
	// [LISTCODE] [ListDescription] [word1] [word2] ... [word25]
	// [LISTCODE] [ListDescription] [word1] [word2] ... [word25]
	var initialArray,
		count = 0;
	listsArray = []; // clear listsArray each time this is run
	initialArray = inputString.split("\n");
	for (count; count < initialArray.length; count = count + 1) {
		listsArray.push(initialArray[count].split(","));
	}
}

var loadedHandler = function (event) {
	"use strict";
	var fileString;
	console.log("LOADEDHANDLER: File has been loaded");
	fileString = event.target.result;
	console.log("LOADEDHANDLER: Filestring = ");
	console.log(fileString);
	parse2DListArray(fileString);
	//wordsArray = fileString.split(",");
	//createTableFor(wordsArray,5);
};
var fileChangedHandler = function (event) {
	"use strict";
	var reader = new FileReader();
	reader.onload = loadedHandler;
	console.log("file has changed");
	// select first element in file list Object
	theFile = event.target.files[0];
	reader.readAsText(theFile);
};

var initialise = function () {
	"use strict";
	document.getElementById("loadFileButton").addEventListener("change", fileChangedHandler);
}

var randomTest = function () {
	"use strict";
	var a = 6, b = 7;
	a += b;
	console.log(a);
};