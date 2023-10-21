const step = document.querySelector("#step");
const toast = document.querySelector("#toast");
document.querySelector("#reset").onclick = () => genrateKey();
document.querySelector("#copy").onclick = () => copyFn();

const character =
  "QWERTYUIOPASDFGHJKLZXVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()+-=<_>?";
let secret = "";

// generator of key
function genrateKey() {
  let { value } = step;
  secret = "";

  // defoult min max value
  value >= 4 && value <= 30 ? value : (value = 8);

  for (let i = 0; i < value; i++) {
    const randomIndex = Math.floor(Math.random() * character.length);
    secret += character.charAt(randomIndex);
  }

  toaster("✔ Generated!!!", "tomato");
  document.querySelector("#key").value = secret;
}

// copy to clipboar
function copyFn() {
  navigator.clipboard
    .writeText(secret)
    .then(() => toaster("✔ Copied!!!", "limegreen"))
    .catch((e) => console.log("Error al copiar", e));
}

// toast control
function toaster(message, bkColor) {
  toast.style.background = bkColor;
  toast.classList.add("toast-active");
  toast.textContent = message;
  setTimeout(() => {
    toast.classList.remove("toast-active");
    toast.textContent = "";
  }, 2000);
}

// genrate on load
genrateKey();
