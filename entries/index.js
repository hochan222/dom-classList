const eventTarget = document.querySelector(".classList");
const iter = eventTarget.classList.entries();

for (let value of iter) {
  console.log(value + "-!?!-");
}
