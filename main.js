let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

if (signup) {
  signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
  });
}

if (login) {
  login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
  });
}

function addItemToCart(itemId) {
  alert("Item added to cart");
}

const loginForm = document.getElementById("loginForm");
const signUpForm = document.getElementById("signUpForm");
const regName = document.getElementById("regName");
const regEmailField = document.getElementById("regEmail");
const regPassword = document.getElementById("regPassword");
const regPasswordConfirm = document.getElementById("regPasswordConfirm");
const loginMail = document.getElementById("loginMail");
const loginPassword = document.getElementById("loginPassword");
const loginButton = document.getElementById("loginButton");
const checkoutForm = document.getElementById("checkout-form");

function registerUser() {
  if (regPassword.value !== regPasswordConfirm.value) {
    alert("The passwords do not match");
    return;
  }
  let loginData = localStorage.getItem("loginData");
  loginData = JSON.parse(loginData);
  if (!loginData) {
    const data = [
      {
        name: regName.value,
        email: regEmailField.value,
        password: regPassword.value,
      },
    ];
    localStorage.setItem("loginData", JSON.stringify(data));
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
    regName.value = "";
    regEmailField.value = "";
    regPassword.value = "";
    regPasswordConfirm.value = "";
    alert("The User is succesfully registered.");
  } else {
    loginData.forEach((user) => {
      if (user.email === regEmailField.value) {
        alert("The User is already registered.");
        return;
      } else {
        const data = {
          name: regName.value,
          email: regEmailField.value,
          password: regPassword.value,
        };
        loginData.push(data);
        slider.classList.remove("moveslider");
        formSection.classList.remove("form-section-move");
        regName.value = "";
        regEmailField.value = "";
        regPassword.value = "";
        regPasswordConfirm.value = "";
        localStorage.setItem("loginData", JSON.stringify(loginData));
        alert("The User is succesfully registered.");
      }
    });
  }
}

function loginUser() {
  let loginData = localStorage.getItem("loginData");
  loginData = JSON.parse(loginData);
  loginData.forEach((user) => {
    if (
      user.email === loginMail.value &&
      user.password === loginPassword.value
    ) {
      loginMail.value = "";
      loginPassword.value = "";
      window.location = "http://127.0.0.1:5500/index.html";
      sessionStorage.setItem("loggedIn", true);
      alert("Succesfully Logged In");
      return;
    } else {
      alert("Invalid User ID or Password");
    }
  });
}

if (signUpForm) {
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    registerUser();
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginUser();
  });
}
if (checkoutForm) {
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for placing order your order id is: 12345");
  });
}

function getLoginButtonText() {
  if (sessionStorage.getItem("loggedIn")) {
    loginButton.innerHTML = "Logout";
  } else {
    return;
  }
}

window.onload = function () {
  getLoginButtonText();
};

loginButton.addEventListener("click", (event) => {
  if (loginButton.innerHTML === "Logout") {
    sessionStorage.removeItem("loggedIn");
    loginButton.innerHTML = `<span class="material-icons"> login </span>
    Login`;
    alert('User has logged out');
  } else {
    window.location = "http://127.0.0.1:5500/login.html";
  }
});
