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

function listsArrayIndexToTable (inputArray) {
	"use strict"
	var mutableArray;
	mutableArray = inputArray.slice(0);
	return inputArray.slice(2);
}

var selectList = function() {
	// onclick event for list box
	"use strict";
	var selectBox;
	
	selectBox = document.getElementById("listList");
	document.getElementById("selectedList").textContent = "Selected list : " + listsArray[selectBox.selectedIndex][1];
	createTable(listsArray[selectBox.selectedIndex].slice(2),5);
};

function populateSelectBox (input2DArray) {
	"use strict"
	// function takes an input 2d array and populates a listbox
	// allowing the user to select a list
	var selectBox, // mapped to DOM object
		option,
		count;
	
	selectBox = document.getElementById("listList");
	
	for ( count = 0; count < input2DArray.length; count = count + 1) {
		option = document.createElement("option")
		option.innerHTML = input2DArray[count][0] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + input2DArray[count][1];
		//option.text = option.text.replace(" ", "&nbsp;");
		selectBox.add(option)
	}
}
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
	populateSelectBox(listsArray);
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
	document.getElementById("listList").addEventListener("click", selectList);
};

var randomTest = function () {
	"use strict";
	var a = 6, b = 7;
	a += b;
	console.log(a);
};