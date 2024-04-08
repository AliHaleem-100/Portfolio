// variables
let header = document.querySelector("header");
let navbar = document.querySelector(".navbar");
let barIcon = document.querySelector(".bar-icon");
let banner_circle = document.querySelector(".banner-circle");

barIcon.addEventListener("click", () => {
  barIcon.classList.toggle("cross");
  navbar.classList.toggle("show");

  // because banner-circle is not in all page we should add a statement to prevent from crash
  if (banner_circle) {
    banner_circle.classList.toggle("show");
  }
});

window.addEventListener("scroll", () => {
  if (banner_circle) {
    if (document.documentElement.scrollTop > 106) {
      banner_circle.classList.add("scroll");
    } else banner_circle.classList.remove("scroll");
  }
});
