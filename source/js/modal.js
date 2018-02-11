var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal__button");
var modalOpener = document.querySelectorAll(".js-modal-opener");

for (var i = 0; i < modalOpener.length; i++) {
  modalOpener[i].addEventListener("click", function () {
    modal.classList.add("modal--visible");
  });
}

modalButton.addEventListener("click", function () {
  modal.classList.remove("modal--visible");
});
