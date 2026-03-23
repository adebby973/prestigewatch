// LOADER (page load)
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

// BACKGROUND SLIDER
const hero = document.getElementById("herosection");
const images = [
  "display1.jpg",
  "display2.jpg",
  "display3.jpg",
  "display4.jpg",
  "display5.jpg",
  "display6.jpg",
  "display7.jpg",
  "display8.jpg",
];

let currentIndex = 0;

function changeBackground() {
  hero.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);
changeBackground();

// MODAL + IFRAME
const home = document.getElementById("home");
const buttons = document.querySelectorAll(".collection");
const panel = document.getElementById("panelbtn");
const closeBtn = document.getElementById("closebtn");
const frame = document.getElementById("myframe");

// hide iframe until it loads (optional)
frame.onload = function () {
  console.log("iframe loaded");
};

// OPEN MODAL
function openModal() {
  panel.style.display = "flex"; // ✅ FIXED
  home.classList.add("blur");
  document.body.style.overflow = "hidden";

  // load iframe ONLY when opened
  frame.src = "./sigin.html";
}

// CLOSE MODAL
function closeModal() {
  panel.style.display = "none";
  home.classList.remove("blur");
  document.body.style.overflow = "auto";

  // stop iframe
  frame.src = "";
}

// BUTTON EVENTS
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    openModal();
  });
});

closeBtn.addEventListener("click", closeModal);
