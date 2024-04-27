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

export function GetDistance({ firstX, secondX, firstY, secondY }) {
  let FirstXPos = parseInt(firstX.replace("px", ""));
  let FirstYPos = parseInt(firstY.replace("px", ""));
  let SecXPos = secondX;
  let SecYPos = secondY;
  return Math.sqrt(
    Math.pow(SecXPos - FirstXPos, 2) + Math.pow(FirstYPos - SecYPos, 2)
  );
}

export function AddContent(element, content) {
  element.innerHTML = content;
}
