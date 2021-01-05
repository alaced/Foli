const carousel = document.querySelectorAll(".carousel"),
  contList = document.querySelectorAll(".content__list"),
  contItem = document.querySelectorAll(".content__item"),
  contDesc = document.querySelectorAll(".content__desc"),
  indicator = document.querySelector(".carousel-indicators"),
  contImg01 = document.querySelector(".content__img01"),
  contImg02 = document.querySelector(".content__img02"),
  contImg03 = document.querySelector(".content__img03"),
  more01 = document.querySelector(".more01"),
  more02 = document.querySelector(".more02"),
  more03 = document.querySelector(".more03");

let carouselSize = window.matchMedia("(max-width: 700px)");
function carouselHandler() {
  if (carouselSize.matches) {
    carousel.forEach(function (caro) {
      caro.classList.add("slide");
    });
    contList.forEach(function (list) {
      list.classList.add("carousel-inner");
    });
    contItem.forEach(function (item) {
      item.classList.add("carousel-item");
    });
    contDesc.forEach(function (desc) {
      desc.classList.add("carousel-caption");
    });
    indicator.classList.remove("none");
  } else {
    carousel.forEach(function (caro) {
      caro.classList.remove("slide");
    });
    contList.forEach(function (list) {
      list.classList.remove("carousel-inner");
    });
    contItem.forEach(function (item) {
      item.classList.remove("carousel-item");
    });
    contDesc.forEach(function (desc) {
      desc.classList.remove("carousel-caption");
    });
    indicator.classList.add("none");
  }
}
carouselHandler();

carouselSize.addEventListener("change", carouselHandler);

more01.addEventListener("mouseenter", function (e) {
  contImg01.setAttribute("src", "images/doc02.png");
});
more01.addEventListener("mouseleave", function (e) {
  contImg01.setAttribute("src", "images/doc01.png");
});
more02.addEventListener("mouseenter", function (e) {
  contImg02.setAttribute("src", "images/manual02.png");
});
more02.addEventListener("mouseleave", function (e) {
  contImg02.setAttribute("src", "images/manual01.png");
});
more03.addEventListener("mouseenter", function (e) {
  contImg03.setAttribute("src", "images/test02.png");
});
more03.addEventListener("mouseleave", function (e) {
  contImg03.setAttribute("src", "images/test01.png");
});
