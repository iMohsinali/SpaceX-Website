const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const mobile = document.getElementById("mobile");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  mobile.classList.toggle("show-menu");
}

console.log(mobile);
console.log(overlay);

console.log("this is mohsin");
