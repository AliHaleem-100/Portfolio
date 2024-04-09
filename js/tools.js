export function elementInViewport(el) {
  if (el.getBoundingClientRect().top < (window.innerHeight / 6) * 5) {
    return true;
  } else {
    return false;
  }
}

export class showHiddenElement {
  constructor(elements) {
    this.elements = elements;
  }
  showHidden() {
    this.elements.forEach((element) => {
      // check if the element is in current viewport
      if (elementInViewport(element)) element.classList.add("show");
    });
  }
}
