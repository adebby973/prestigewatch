window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // keep loader visible for 2 seconds
  setTimeout(() => {
    loader.style.display = "none"; // hide instantly
  }, 2000); // 2 seconds
});
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

// Change image every 5 seconds
setInterval(changeBackground, 5000);

// Initialize first image
changeBackground();

const home = document.getElementById("home");
const buttons = document.querySelectorAll(".collection"); // all collection buttons
const panel = document.getElementById("panelbtn");
const closeBtn = document.getElementById("closebtn");

// Function to open modal
function openModal() {
  panel.style.display = "block";
  home.classList.add("blur"); // add blur
  document.body.style.overflow = "hidden"; // prevent scrolling
}

// Function to close modal
function closeModal() {
  panel.style.display = "none";
  home.classList.remove("blur"); // remove blur
  document.body.style.overflow = "auto"; // restore scrolling
}

// Attach click event to all collection buttons
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    openModal();
  });
});

// Attach click event to close button
closeBtn.addEventListener("click", closeModal);