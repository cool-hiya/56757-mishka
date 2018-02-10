var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal__button");
var modalOpener = document.querySelectorAll(".js-modal-opener");

modalOpener.forEach(function (modalOpener) {
  modalOpener.addEventListener("click", function () {
    modal.classList.add("modal--visible");
  });
});

modalButton.addEventListener("click", function () {
  modal.classList.remove("modal--visible");
});
