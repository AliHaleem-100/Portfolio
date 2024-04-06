// variables
let header = document.querySelector("header");
let navbar = document.querySelector(".navbar");
let barIcon = document.querySelector(".bar-icon");
let banner_circle = document.querySelector(".banner-circle");

barIcon.addEventListener("click", () => {
  barIcon.classList.toggle("cross");
  banner_circle.classList.toggle("show");
  navbar.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 106) {
    banner_circle.classList.add("scroll");
  } else banner_circle.classList.remove("scroll");

  if (document.documentElement.scrollTop > 120)
    header.classList.add("fillBackground");
  else header.classList.remove("fillBackground");
});
