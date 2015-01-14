//Globals

var wordsArray = [],
	theFile;

var loadedHandler = function (event) {
    "use strict";
    var fileString;
    console.log("LOADEDHANDLER: File has been loaded");
    fileString = event.target.result;
    console.log("LOADEDHANDLER: Filestring = ");
    console.log(fileString);
    wordsArray = fileString.split(",");
	createTableFor(wordsArray,5);
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
	}
};

var initialise = function () {
	"use strict";
	document.getElementById("loadFileButton").addEventListener("change", fileChangedHandler);
}