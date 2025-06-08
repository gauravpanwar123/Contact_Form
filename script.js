document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  let valid = true;

  // Validate name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }
// Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  // Validate message
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    valid = false;
  }

  // If all valid
  if (valid) {
    alert("Form submitted successfully!");
    // You can add code to send data to a server here
    document.getElementById("contactForm").reset();
  }
});