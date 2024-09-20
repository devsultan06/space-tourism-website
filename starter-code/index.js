// Selecting elements
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const navLinks = document.querySelector(".nav-links");

// Open nav when hamburger is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.add("nav-open");
});

// Close nav when close icon is clicked
closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("nav-open");
});
