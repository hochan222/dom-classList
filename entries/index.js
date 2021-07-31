const eventTarget = document.querySelector(".classList");
const iterEntries = eventTarget.classList.entries();
const iterValues = eventTarget.classList.values();
const iterKeys = eventTarget.classList.keys();

for (let Entries of iterEntries) {
  console.log(Entries + "-entries-");
}

for (let values of iterValues) {
  console.log(values + "-values-");
}

for (let keys of iterKeys) {
  console.log(keys + "-keys-");
}
