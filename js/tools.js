export function elementInViewport(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
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
