const header = document.querySelector(".js-header"),
  logoImg = document.querySelector(".logo"),
  headerBtn = document.querySelectorAll(".js-headerBtn"),
  menuBtn = document.querySelector(".menuBtn"),
  hideMe = document.querySelectorAll(".hide-me"),
  menu = document.querySelector(".js-menu"),
  closeBtn = document.querySelector(".js-close");

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
    headerBtn.forEach(function (btn) {
      btn.classList.add("none");
      btn.classList.remove("flex");
    });
    menuBtn.classList.add("flex");
    menuBtn.classList.remove("none");
  } else {
    headerBtn.forEach(function (btn) {
      btn.classList.add("flex");
      btn.classList.remove("none");
    });
    menuBtn.classList.remove("flex");
    menuBtn.classList.add("none");
  }
}
resizeHeader();

window.addEventListener("scroll", scrollHandler);
headerSize.addEventListener("change", resizeHeader);

menuBtn.addEventListener("click", function (e) {
  menu.style.width = "100%";
});
closeBtn.addEventListener("click", function (e) {
  menu.style.width = "0%";
});
