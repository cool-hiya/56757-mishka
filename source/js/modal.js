var modal = document.querySelector(".modal");
var button = document.querySelector(".modal__button");

function showModal() {
  modal.classList.add("visible");
}

button.addEventListener("click", function () {
  modal.classList.remove("visible");
});
