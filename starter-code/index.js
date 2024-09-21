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

  document.addEventListener("DOMContentLoaded", function () {
    // Content elements
    const moonContent = document.getElementById("moon-content");
    const marsContent = document.getElementById("mars-content");
    const europaContent = document.getElementById("europa-content");
    const titanContent = document.getElementById("titan-content");

    // Image element
    const destinationImage = document.querySelector(".mars-left img");

    // Initially show Mars and hide others
    marsContent.style.display = "block";
    moonContent.style.display = "none";
    europaContent.style.display = "none";
    titanContent.style.display = "none";

    // Buttons
    const moonButton = document.getElementById("btn-moon");
    const marsButton = document.getElementById("btn-mars");
    const europaButton = document.getElementById("btn-europa");
    const titanButton = document.getElementById("btn-titan");

    // Function to show a specific content and hide others
    function showContent(show, hide1, hide2, hide3) {
      show.style.display = "block";
      hide1.style.display = "none";
      hide2.style.display = "none";
      hide3.style.display = "none";
    }

    // Function to change the image
    function changeImage(imagePath) {
      destinationImage.src = imagePath;
    }

    // Function to add the active class to the clicked button
    function setActiveButton(activeButton) {
      // Remove active class from all buttons
      const allButtons = document.querySelectorAll("ul button");
      allButtons.forEach((button) => {
        button.classList.remove("active2");
      });

      // Add active class to the clicked button
      activeButton.classList.add("active2");
    }

    // Add event listeners to buttons
    moonButton.addEventListener("click", function () {
      showContent(moonContent, marsContent, europaContent, titanContent);
      changeImage("./assets/destination/image-moon.png"); // Change image to Moon
      setActiveButton(moonButton);
    });

    marsButton.addEventListener("click", function () {
      showContent(marsContent, moonContent, europaContent, titanContent);
      changeImage("./assets/destination/image-mars.png"); // Change image to Mars
      setActiveButton(marsButton);
    });

    europaButton.addEventListener("click", function () {
      showContent(europaContent, moonContent, marsContent, titanContent);
      changeImage("./assets/destination/image-europa.png"); // Change image to Europa
      setActiveButton(europaButton);
    });

    titanButton.addEventListener("click", function () {
      showContent(titanContent, moonContent, marsContent, europaContent);
      changeImage("./assets/destination/image-titan.png"); // Change image to Titan
      setActiveButton(titanButton);
    });
  });

  


  
