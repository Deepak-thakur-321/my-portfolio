document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.querySelector("#menu-btn");
  var closeBtn = document.querySelector("#close-btn");
  var mobileNav = document.querySelector("#mobile-nav");
  var tl = gsap.timeline({ paused: true });

  // 🖥️ Desktop Nav Animation (Fade-in)
  gsap.from("#desktop-nav li", {
    opacity: 0,
    y: -20,
    duration: 1,
    stagger: 0.2,
  });

  // 📱 Mobile Nav Animation (Slide-in from Right)
  tl.to("#mobile-nav", {
    right: "0%",
    duration: 0.5,
    ease: "power2.out",
  }).from("#mobile-nav li", {
    x: 100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  });

  // Open Menu
  menuBtn.addEventListener("click", function () {
    tl.play();
  });

  // Close Menu
  closeBtn.addEventListener("click", function () {
    tl.reverse();
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // form ko submit hone se roke

  // Inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validations
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    subject === "" ||
    message === ""
  ) {
    alert("Please fill in all fields!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email!");
    return;
  }

  if (phone.length < 10 || isNaN(phone)) {
    alert("Please enter a valid phone number!");
    return;
  }

  // Sab sahi hai
  alert("Form submitted successfully!");
  form.reset(); // inputs clear ho jayenge
});
