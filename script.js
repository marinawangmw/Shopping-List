// Cache Elements
var input = document.getElementById("userInput");
var button = document.getElementById("Enter");
var ul = document.querySelector("ul");
var li = ul.children;

function inputLength(){ 
	return input.value.length;
}

// Create a new item to the list
function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	addCloseButton(li);
}

function addListAfterClick(){
	// var inputLength = input.value.length;
	if (inputLength() != 0){
		createListElement();
	}
}

function addListAfterKeyPress(event){
	// var inputLength = input.value.length;
	if (inputLength() != 0 && event.which === 13){
		createListElement();
	}
}


// Cross out option 
function crossItemFromList(event){
	if(event.target.tagName === "SPAN"){
		event.target.classList.toggle("done");
	}
}

// Delete Items
function addCloseButton(item){
	var cross = document.createElement("button");
	var txt = document.createTextNode("x");
	cross.className = "close";
	cross.appendChild(txt);
	item.appendChild(cross);
}

// Hiding Element from list when click on close button
function deleteItemFromList(event){
	var listItem=event.target.parentNode;
	var ull=listItem.parentNode;
	//Remove the parent list item from the ul.
	ull.removeChild(listItem);
}

function editElementsInList(event){
	if(event.target.tagName === "SPAN"){
		crossItemFromList(event);
	}else if(event.target.tagName === "BUTTON"){
		deleteItemFromList(event);
	}
}

// Event Listeners
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);
ul.addEventListener("click",editElementsInList);


