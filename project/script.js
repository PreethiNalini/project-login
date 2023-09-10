const signinBtnlink = document.querySelector(".signinBtn-link");
const signupBtnlink = document.querySelector(".signupBtn-link");
const wrapper = document.querySelector(".wrapper");
const userEmail = document.getElementById("email");
const userpass = document.getElementById("pass");
const signupForm = document.querySelector("#signupForm");
const signinForm = document.querySelector("#signInForm");
const signinMail = document.querySelector("#signMail");
const signinPass = document.querySelector("#password");

signinForm.addEventListener("submit", onSubmit);
signupForm.addEventListener("submit", validate);

signupBtnlink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

signinBtnlink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

function validate(e) {
  e.preventDefault();
  localStorage.setItem("user", userEmail.value);
  localStorage.setItem("pass", userpass.value);
  alert("Your account has been created");

  signupForm.reset();
}

function onSubmit(e) {
  e.preventDefault();
  var storedName = localStorage.getItem("user");
  var storedPass = localStorage.getItem("pass");

  if (signinMail.value !== storedName || signinPass.value !== storedPass) {
    alert("Invalid Username or Password");
  } else {
    window.open("welcome.html");
  }
  signinForm.reset();
}
