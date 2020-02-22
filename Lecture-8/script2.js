// serach => full page=> body
const body = document.querySelector("body");

const ul = document.createElement("ul");

const orders = ["pen ", "pencil", "eraser"];

for (var i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = `${orders[i]}`;
  ul.appendChild(li);
}


// change styling of any element
setTimeout(function(){
  body.appendChild(ul);

  // body.style.backgroundColor="red";

},2000);
