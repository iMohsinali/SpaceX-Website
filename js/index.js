const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const mobile = document.getElementById("mobile");
const counter = document.querySelectorAll(".counter");
let scrollStarted = false;
btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  mobile.classList.toggle("show-menu");
}
function scrollPage() {
  const scrollPos = window.scrollY;
  if (scrollPos > 100 && !scrollStarted) {
    scrollStarted = true;
    conteUp();
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

scrollPage();

function conteUp() {
  counter.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      //get target value
      const target = +counter.getAttribute("data-target");
      //   console.log(target);
      //Get current counter value

      const c = +counter.innerText;
      //   console.log(c);

      //increment
      const increment = target / 100;
      //if counter is less then the target ,add increment

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

function reset() {
  counter.forEach((counter) => (counter.innerHTML = 0));
}
