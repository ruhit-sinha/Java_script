const $ = (selector) => {
  return document.querySelector(selector);
};
const button = $("#btn");
const button2 = $("#btn2");
const div = $("#div");

// function Hello() {
//   alert("bye");
// }

const frc = () => {
  div.innerHTML = Math.random();
};
button.addEventListener("contextmenu", frc); //contextmenu use for right click action
// button.addEventListener("dblclick", frc);

button2.addEventListener("click", () => {
  button.removeEventListener("contextmenu", frc);
});

div.addEventListener("mouseenter", () => {
  div.style.backgroundColor = "blue";
});

div.addEventListener("mouseleave", () => {
  div.style.backgroundColor = "yellow";
});

setTimeout(() => {
  div.addEventListener("mousemove", () => {
    div.style.backgroundColor = "green";
  });
}, 5000);

// document.addEventListener("keydown", (r) => {
//   div.style.backgroundColor = "orange";
// });

document.addEventListener("keyup", (s) => {
  div.style.backgroundColor = "cyan";
});

const arr = ["green", "red", "blue", "yellow", "purple", "cyan", "pink"];

document.addEventListener("keydown", () => {
  const randomColor = arr[Math.floor(Math.random() * arr.length)];
  div.style.backgroundColor = randomColor;
});
