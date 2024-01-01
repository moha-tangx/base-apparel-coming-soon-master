const img = document.createElement("img");
const err_msg = document.createElement("p");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const icon_err = document.createElement("div");
const message = "please provide a valid email";
const centred = document.querySelector(".centered");
const input_control = document.querySelector(".input-control");

function setErr() {
  input.value = "";
  icon_err.appendChild(img);
  centred.appendChild(err_msg);
  err_msg.textContent = message;
  err_msg.className = "err_msg";
  icon_err.className = "error-icon";
  img.src = "./images/icon-error.svg";
  input_control.classList.add("invalid");
  input.insertAdjacentElement("afterend", icon_err);
}

function removeErr() {
  centred.removeChild(err_msg);
  input_control.removeChild(icon_err);
  input_control.classList.remove("invalid");
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.value.trim()) {
    setErr();
    setTimeout(() => {
      removeErr();
    }, 2000);
  }
});

// TODO:
// --create a regex to validate email;
// --crete a node API with express to submit email;
// --use xammp server to save the emails to mysql database;

const str =
  "distance thing summer nine kids add fly ancient so driver native fully natural above bean language land so look belt tales twice so younger";
