// get element from the page(Document)
const body = document.querySelector("body");
const pen = document.querySelector(".pen");
const pencil = document.querySelector("#pencil");
const ul = document.querySelector("ul");
// change those elements
// styling
body.style.backgroundColor = "black";
body.style.color = "white";

pen.textContent = "It was sold out";
// create any element
const li = document.createElement("li");
// add html inside any  dom node
li.innerHTML = "<p>Ruler</p>";
// append an element
ul.appendChild(li);
//
li.setAttribute("class", "ruler");
// 1.create element
const img = document.createElement("img");
// 2. attributes set
img.setAttribute("src", "inspiration.PNG");
// 3 .Add to document
// insert before
body.insertBefore(img, ul);
// setInterval(function() {
//   img.setAttribute("class", "roundImg");
// }, 1000);
// setInterval(function() {
//   img.removeAttribute("class", "roundImg");
// }, 2000);
const liArr = document.querySelectorAll("li");

const li1 = liArr[0];
const li2 = liArr[1];
const li3 = liArr[2];

li1.addEventListener("click", function() {
  li1.style.backgroundColor = "yellow";
});

li2.addEventListener("mouseover", function() {
  li2.style.color = "red";
});
li3.addEventListener("click", function() {
  li3.innerHTML = "<p>I was changed By Js</p>";
});
