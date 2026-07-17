const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeButton = document.getElementById("themeButton");
const backToTop = document.getElementById("backToTop");
const contactForm = document.getElementById("contactForm");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for your message. This is a demo contact form.");
  contactForm.reset();
});