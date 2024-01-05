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

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

async function saveEmail(email) {
  const response = await fetch("http://localhost:1739/base-apparel", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  return data;
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!input.value.trim() || !isEmail(input.value)) {
    setErr();
    setTimeout(() => {
      removeErr();
    }, 2000);
  } else {
    const response = await saveEmail(input.value);
    alert(response.message);
    console.log(response.message);
  }
});

// TODO:
// --create a regex to validate email; //done ✅
// --crete a json node.js API with express to submit email;  //done ✅
// --use xammp server to save the emails to mysql database;  //done ✅
