const eventTarget = document.querySelector(".classList");
const iterValues = eventTarget.classList.values();

eventTarget.classList.forEach(function (value, key, listObj) {
  console.log(`${value} ${key}/${this}/${listObj}  ++  `);
}, "abcdefg");
