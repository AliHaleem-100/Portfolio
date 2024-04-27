import { showHiddenElement } from "./tools.js";

async function LoadAllElemenet() {
  let allElements = document.querySelectorAll(".hidedElement");
  return allElements;
}

async function ShowHiddenEl() {
  let allElements = [...(await LoadAllElemenet())];
  let hiddenEl = new showHiddenElement(allElements);
  hiddenEl.showHidden();
}
window.addEventListener("load", ShowHiddenEl);

barIcon.addEventListener("click", () => {
  barIcon.classList.toggle("cross");
  navbar.classList.toggle("show");
  banner_circle.classList.toggle("show");
});

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

window.addEventListener("mousemove", (e) => {
  console.log(document.querySelectorAll(".nav-link"));
});
