let navbar = document.querySelector(".navbar");
let barIcon = document.querySelector(".bar-icon");
let banner_circle = document.querySelector(".banner-circle");
barIcon.addEventListener("click", () => {
  barIcon.classList.toggle("cross");
  banner_circle.classList.toggle("show");
  navbar.classList.toggle("show");
});
