var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");

function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	// li.appendChild(document.createElement("br"));
	li.appendChild(document.createTextNode(input.value));

  li.addEventListener("click", function(event) {
			event.target.classList.toggle("done");
	});

	ol.appendChild(li);
	input.value = "";
	li.appendChild(document.createTextNode("  "));
	var delButton = li.appendChild(document.createElement("button"));
	delButton.appendChild(document.createTextNode("Delete"));
  delButton.className = "btn btn-small btn-info";

	delButton.addEventListener("click", function(event) {
		event.target.parentElement.classList.add("goAway");
	})
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
