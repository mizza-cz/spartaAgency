const partnersSwiper = document.querySelector(".partners-swiper");

if (partnersSwiper) {
  new Swiper(".partners-swiper", {
    loop: true,
    speed: 6000,
    slidesPerView: "auto",
    noSwipingClass: "swiper-slide",
    spaceBetween: 60,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
}
