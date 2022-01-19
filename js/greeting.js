const HIDDEN_CLASSNAME = "hidden";
const LOCSTOR_USERNAME = "userName";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const loc_username = localStorage.getItem(LOCSTOR_USERNAME);

function onLoginSubmit(event) {
  event.preventDefault();
  console.log("hi2");
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  console.log("hi");
  localStorage.setItem(LOCSTOR_USERNAME, username);

  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (loc_username == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  console.log("hi");
} else {
  console.log("hi");
  paintGreetings(localStorage.getItem(LOCSTOR_USERNAME));
}
