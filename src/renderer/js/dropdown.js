
document.querySelector("#tools").addEventListener("click", function (e) {
  e.preventDefault();
  const dropdown = this.nextElementSibling;
  dropdown.classList.toggle("show");
});


window.addEventListener("click", function (e) {
  const button = document.querySelector("#tools");
  const dropdown = document.querySelector("#tools").nextElementSibling;
  
  if (e.target !== button && !button.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});
