// Date
const today = new Date();
const currentDate = today.getDay();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("date").innerHTML = days[currentDate];

// input
const input = document.getElementById("userInput");
const addB =  document.getElementById("addButton");
const list =  document.querySelector("ul");
const listItem = document.querySelector("li");

function addNewTask() {

  // Create new task
  const newItem = document.createElement("li");
  const inputValue = document.createTextNode(input.value);
  newItem.appendChild(inputValue);
  list.appendChild(newItem);
  input.value = ""; //reset


  // Strike Through
  let started = false;

  newItem.addEventListener("click", () => {
    if (!started) {
      newItem.classList.add("strikeString");
      started = true;
    } else {
      newItem.classList.remove("strikeString");
      started = false;
    }
  });

  // Add Close BUTTON
  const closeButton = document.createElement("button");
  const closeText = document.createTextNode("X");
  closeButton.appendChild(closeText);
  closeButton.classList.add("closeBtn");
  newItem.appendChild(closeButton);

  function deleteListItem() {
    newItem.classList.add("delete");
  }

  closeButton.addEventListener("click",deleteListItem);

};

// Empty input issue
function runTodos() {
  if (input.value.length > 0) {
    addNewTask();
  } else {
    alert("You must write something !")
  }
};

// Enter keypress
function enterPress() {
  if (input.value.length > 0 && event.keyCode === 13 ) {
    addNewTask();
  }
};


addButton.addEventListener("click",runTodos);

input.addEventListener("keydown",enterPress);
