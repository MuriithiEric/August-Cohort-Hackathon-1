// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Handle form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Add your form submission logic here

    this.reset();

    alert("Thank you for your message. We will get back to you soon!");
    modal.style.display = "none";
  });

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close the hamburger menu when clicking outside of it
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      navLinks.classList.remove("active");
    }
  });
});

// Back to Top button functionality
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll(".skill-bar");
const animateSkills = () => {
  skillBars.forEach((bar) => {
    const barTop = bar.getBoundingClientRect().top;
    const barBottom = bar.getBoundingClientRect().bottom;
    if (barTop < window.innerHeight && barBottom > 0) {
      bar.classList.add("animate");
      const progress = bar.querySelector(".progress");
      const percent = bar.getAttribute("data-percent");
      progress.style.width = `${percent}%`;
      bar.querySelector(".skill-percent").textContent = `${percent}%`;
    }
  });
};

// Lazy load images
const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
};

// Throttle function to limit how often a function can be called
const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Event listeners for scroll events
window.addEventListener(
  "scroll",
  throttle(() => {
    animateSkills();
    lazyLoadImages();
  }, 200)
);

// Initialize animations and lazy loading
document.addEventListener("DOMContentLoaded", () => {
  animateSkills();
  lazyLoadImages();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId && targetId !== "#") {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});


