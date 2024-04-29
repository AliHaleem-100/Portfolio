import { showHiddenElement } from "./tools.js";

async function ShowHiddenEl() {
  let hiddenEl = new showHiddenElement(
    document.querySelectorAll(".hidedElement")
  );
  hiddenEl.showHidden();
}
window.addEventListener("load", ShowHiddenEl);
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 10) {
    ShowHiddenEl();
    header.classList.add("fill-background");
  } else {
    header.classList.remove("fill-background");
  }
  scrollTop > 106
    ? banner_circle.classList.add("scroll")
    : banner_circle.classList.remove("scroll");
});

barIcon.addEventListener("click", () => {
  barIcon.classList.toggle("cross");
  navbar.classList.toggle("show");
  banner_circle.classList.toggle("show");
});
