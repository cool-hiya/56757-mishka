
var navMain = document.querySelectorAll(".site-list__item");
var navToggle = document.querySelector(".main-nav__toggle");
var newNav = [];
for (var i = 0; i < navMain.length; i++) {
    newNav.push(navMain[i])
}
newNav.shift();
newNav.splice(4, 6)
for (var i = 0; i < newNav.length; i++) {
    newNav[i].classList.add("site-list__item--closed");
}
navToggle.addEventListener("click", function () {
    for (var i = 0; i < newNav.length; i++) {
        if (newNav[i].classList.contains("site-list__item--closed")) {
            newNav[i].classList.remove("site-list__item--closed");
            newNav[i].classList.add("site-list__item--open");
        } else {
            newNav[i].classList.add("site-list__item--closed");
            newNav[i].classList.remove("site-list__item--open");
        }
    }
});
