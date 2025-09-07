// -----------------------------
// Theme Toggle
// -----------------------------
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// -----------------------------
// Button Click Message
// -----------------------------
document.getElementById("click-button").addEventListener("click", () => {
  const message = document.getElementById("click-message");
  message.textContent = "You clicked the button!";
});

// -----------------------------
// Counter Game
// -----------------------------
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

document.getElementById("decrement").addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

// -----------------------------
// Collapsible FAQ
// -----------------------------
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// -----------------------------
// Form Validation
// -----------------------------
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual submission

  // Clear previous errors
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";
  document.getElementById("form-success").textContent = "";

  // Get field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let valid = true;

  // Name validation
  if (name.length < 2) {
    document.getElementById("name-error").textContent = "Name must be at least 2 characters.";
    valid = false;
  }

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email-error").textContent = "Please enter a valid email.";
    valid = false;
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("password-error").textContent =
      "Password must be at least 6 characters and include a number.";
    valid = false;
  }

  if (valid) {
    document.getElementById("form-success").textContent = "Form submitted successfully!";
    // Optionally clear form
    this.reset();
  }
});
