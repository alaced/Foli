const header = document.querySelector(".js-header"),
  logoImg = document.querySelector(".logo"),
  headerBtn = document.querySelectorAll(".button"),
  galleryBtn = document.querySelector(".js-gallery"),
  menuBtn = document.querySelector(".menuBtn"),
  hideMe = document.querySelectorAll(".hide-me"),
  carousel = document.querySelectorAll(".carousel"),
  prodList = document.querySelectorAll(".prod__list"),
  prodItem = document.querySelectorAll(".prod__item"),
  prodDesc = document.querySelectorAll(".prod__desc"),
  indicator = document.querySelector(".carousel-indicators"),
  prodImg01 = document.querySelector(".prod__img01"),
  prodImg02 = document.querySelector(".prod__img02"),
  prodImg03 = document.querySelector(".prod__img03"),
  prodPrice = document.querySelectorAll(".prod__price"),
  more01 = document.querySelector(".more01"),
  more02 = document.querySelector(".more02"),
  more03 = document.querySelector(".more03");

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

let carouselSize = window.matchMedia("(max-width: 700px)");
function carouselHandler() {
  if (carouselSize.matches) {
    carousel.forEach(function (caro) {
      caro.classList.add("slide");
    });
    prodList.forEach(function (list) {
      list.classList.add("carousel-inner");
    });
    prodItem.forEach(function (item) {
      item.classList.add("carousel-item");
    });
    prodDesc.forEach(function (desc) {
      desc.classList.add("carousel-caption");
    });
    indicator.classList.remove("none");
  } else {
    carousel.forEach(function (caro) {
      caro.classList.remove("slide");
    });
    prodList.forEach(function (list) {
      list.classList.remove("carousel-inner");
    });
    prodItem.forEach(function (item) {
      item.classList.remove("carousel-item");
    });
    prodDesc.forEach(function (desc) {
      desc.classList.remove("carousel-caption");
    });
    indicator.classList.add("none");
  }
}
carouselHandler();

carouselSize.addEventListener("change", carouselHandler);

more01.addEventListener("mouseenter", function (e) {
  prodImg01.setAttribute("src", "images/doc02.png");
});
more01.addEventListener("mouseleave", function (e) {
  prodImg01.setAttribute("src", "images/doc01.png");
});
more02.addEventListener("mouseenter", function (e) {
  prodImg02.setAttribute("src", "images/manual02.png");
});
more02.addEventListener("mouseleave", function (e) {
  prodImg02.setAttribute("src", "images/manual01.png");
});
more03.addEventListener("mouseenter", function (e) {
  prodImg03.setAttribute("src", "images/test02.png");
});
more03.addEventListener("mouseleave", function (e) {
  prodImg03.setAttribute("src", "images/test01.png");
});
