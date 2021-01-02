const header = document.querySelector(".js-header"),
  logoImg = document.querySelector(".logo"),
  // headerBtn = document.querySelectorAll(".button"),
  galleryBtn = document.querySelector(".js-gallery"),
  menuBtn = document.querySelector(".menuBtn"),
  hideMe = document.querySelectorAll(".hide-me");

window.addEventListener("scroll", scrollHandler);

function scrollHandler(event) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    logoImg.classList.add("shrinkImg");
    header.classList.add("shrinkHeader");
  } else {
    header.classList.remove("shrinkHeader");
    logoImg.classList.remove("shrinkImg");
  }
}
let headerSize = window.matchMedia("(max-width: 1025px)");
function resizeHeader() {
  if (headerSize.matches) {
    galleryBtn.classList.add("none");
  } else {
    galleryBtn.classList.remove("none");
  }
}
resizeHeader();

headerSize.addEventListener("change", resizeHeader);
