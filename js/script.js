document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    this.classList.toggle("open");
  });

$(".feedback-slider").slick({

  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  variableWidth: false,
});
