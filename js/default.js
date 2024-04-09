barIcon.addEventListener("click", () => {
  barIcon.classList.toggle("cross");
  navbar.classList.toggle("show");

  if (banner_circle) {
    banner_circle.classList.toggle("show");
  }
});

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scrollTop > 10
    ? header.classList.add("fill-background")
    : header.classList.remove("fill-background");

  if (banner_circle) {
    // if user scroll down

    scrollTop > 106
      ? banner_circle.classList.add("scroll")
      : banner_circle.classList.remove("scroll");
  }
});
