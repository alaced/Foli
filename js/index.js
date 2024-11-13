const carousel = document.querySelectorAll(".carousel"),
  contList = document.querySelectorAll(".content__list"),
  contItem = document.querySelectorAll(".content__item"),
  contDesc = document.querySelectorAll(".content__desc"),
  indicator = document.querySelector(".carousel-indicators"),
  contImg01 = document.querySelector(".content__img01"),
  contImg02 = document.querySelector(".content__img02"),
  contImg03 = document.querySelector(".content__img03"),
  contImg04 = document.querySelector(".content__img04"),
  more01 = document.querySelector(".more01"),
  more02 = document.querySelector(".more02"),
  more03 = document.querySelector(".more03");
  more04 = document.querySelector(".more04");

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
  contImg01.setAttribute("src", "images/resources/workflow.png");
});
more01.addEventListener("mouseleave", function (e) {
  contImg01.setAttribute("src", "images/workflow_empty.png");
});
more02.addEventListener("mouseenter", function (e) {
  contImg02.setAttribute("src", "images/resources/automation.png");
});
more02.addEventListener("mouseleave", function (e) {
  contImg02.setAttribute("src", "images/automation_empty.png");
});
more03.addEventListener("mouseenter", function (e) {
  contImg03.setAttribute("src", "images/resources/postmortem.png");
});
more03.addEventListener("mouseleave", function (e) {
  contImg03.setAttribute("src", "images/postmortem_empty.png");
});
more04.addEventListener("mouseenter", function (e) {
  contImg04.setAttribute("src", "images/read-more.png");
});
more04.addEventListener("mouseleave", function (e) {
  contImg04.setAttribute("src", "images/read-more_empty.png");
});
