// Toggle Light/Dark Mode
const toggleModeBtn = document.getElementById("toggleModeBtn");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");
let count = 0;
counterBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

// Collapsible FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Form Validation
const signupForm = document.getElementById("signupForm");
const formMessages = document.getElementById("formMessages");
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = [];
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Name validation
  if (name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }
  // Email validation (simple regex)
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.push("Please enter a valid email address.");
  }
  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  if (errors.length > 0) {
    formMessages.innerHTML =
      "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
    formMessages.style.color = "red";
  } else {
    formMessages.textContent = "Signup successful!";
    formMessages.style.color = "green";
    signupForm.reset();
  }
});

// FAQ answers hidden by default
window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".faq-answer")
    .forEach((ans) => (ans.style.display = "none"));
});
