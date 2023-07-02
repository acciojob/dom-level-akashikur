// script.js

// Retrieve the list item element with the ID "level"
var levelElement = document.getElementById("level");

// Check if the element exists
if (levelElement) {
  // Retrieve the level of the element by counting its parent list items
  var level = 0;
  var parent = levelElement.parentNode;
  while (parent && parent.nodeName !== "BODY") {
    if (parent.nodeName === "LI") {
      level++;
    }
    parent = parent.parentNode;
  }

  // Display the level in an alert box
  alert("The level of the element is: " + level);
} else {
  alert("The element with ID 'level' was not found.");
}
