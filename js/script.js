// Toggle Icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Function to update the active navigation link based on the scroll position
const updateActiveLink = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // Check if the section is within the viewport
    if (top >= offset && top < offset + height - 50) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Add scroll event listener
window.onscroll = updateActiveLink;

// Run the function on page load to set the correct active link
window.addEventListener("load", updateActiveLink);

// Stick navbar
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

// Remove Toggle Icon and navbar when clicking navbar link (scroll)
menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");

// Scroll Reveal
ScrollReveal({ distance: "80px", duration: 2000, delay: 200 });
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .project-box, .hover-indication,.contact img",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about-img, .contact h3", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});

// Typed JS
const typed = new Typed(".multiple-text", {
  strings: [
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Drummer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
