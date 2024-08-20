const signUpButton = document.getElementById("sign-up-btn");
const signInButton = document.getElementById("Sign-in-btn");
const container = document.querySelector(".container");

// Event listeners for buttons
signUpButton.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
