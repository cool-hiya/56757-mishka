
var poster = document.querySelector(".video__poster");
var play = document.querySelector(".video__play");
var video = document.querySelector(".video__file");
poster.classList.add("video__poster--show");
play.addEventListener("click", function () {
  poster.classList.remove("video__poster--show");
  video.play();
});


