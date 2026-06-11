document.querySelector(".navbar-toggler").addEventListener("click", function () {
  this.classList.toggle("open");
});

$(".feedback-slider").slick({
  prevArrow: ".prev-arrow",
  nextArrow: ".next-arrow",
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  infinite: true,
  arrows: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const targetDate = new Date("2026-09-01T00:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateTimer();
const timer = setInterval(updateTimer, 1000);
