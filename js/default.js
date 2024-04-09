import { showHiddenElement } from "./tools.js";
let hiddenEl = new showHiddenElement(hiddenElements);

window.addEventListener("load", () => {
  hiddenEl.showHidden();
});

barIcon.addEventListener("click", () => {
  barIcon.classList.toggle("cross");
  navbar.classList.toggle("show");

  if (banner_circle) {
    banner_circle.classList.toggle("show");
  }
});

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 10) {
    hiddenEl.showHidden();
    header.classList.add("fill-background");
  } else {
    header.classList.remove("fill-background");
  }
  if (banner_circle) {
    // if user scroll down

    scrollTop > 106
      ? banner_circle.classList.add("scroll")
      : banner_circle.classList.remove("scroll");
  }
});
