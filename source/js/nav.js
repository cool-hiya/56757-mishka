
var navMain = Array.from(document.querySelectorAll(".site-list__item"));
var navToggle = document.querySelector(".main-nav__toggle");

navMain.shift();
navMain.splice(4, 6)
for (var i = 0; i < navMain.length; i++) {
  navMain[i].classList.add("site-list__item--closed");
}
navToggle.addEventListener("click", function () {
  for (var i = 0; i < navMain.length; i++) {
    if (navMain[i].classList.contains("site-list__item--closed")) {
      navMain[i].classList.remove("site-list__item--closed");
      navMain[i].classList.add("site-list__item--open");
    } else {
      navMain[i].classList.add("site-list__item--closed");
      navMain[i].classList.remove("site-list__item--open");
    }
  }
});
