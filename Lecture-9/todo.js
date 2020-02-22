// time t=0
const d = document;
const input = d.querySelector("input");
const form = d.querySelector("form");
const ul = d.querySelector("ul");
(function getTasksfromLS() {
  if (localStorage.getItem("tasks")) {
    const tasks = localStorage.getItem("tasks");
    const tasksArr = JSON.parse(tasks);
    for (let i = 0; i < tasksArr.length; i++) {
      createTask(tasksArr[i]);
    }
  }
})();

function createTask(value) {
  const li = d.createElement("li");
  li.innerHTML = `<p>${value}</p><img src="download.jpeg" alt="">`;
  // li.querySelector("img");
  const img = li.children[1];

  img.addEventListener("click", removeElement);
  ul.appendChild(li);
  // add item to local storage
}
form.addEventListener("submit", function(e) {
  // e.preventDefault();
  if (input.value == "") {
    alert("Please enter something");
    return;
  }

  
  const value = input.value;
  // task Add UI
  createTask(value);
  // add that task LS for later use 
  addElementToLS(value);
  input.value = "";
});

// listener => event object=> event describe
function removeElement(e) {
  // element on which event has occurred
  e.currentTarget.parentElement.remove();
}

function addElementToLS(value) {
  if (localStorage.getItem("tasks") == null) {
    const Tasks = [value];
    // array => string
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  } else {
    const Tasks = localStorage.getItem("tasks");
    // string=> array
    const ParsedTasks = JSON.parse(Tasks);
    ParsedTasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(ParsedTasks));
  }
}
