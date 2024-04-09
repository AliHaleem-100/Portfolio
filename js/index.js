import { data } from "./data.js";
import { elementInViewport } from "./tools.js";

data.services_section.services.forEach((service) => {
  let cardHTML = `
 <div class="card ${service.service_class} anotherElHide" style="--opacity:${service.animationValues.opacity};--translate-y:${service.animationValues.translate_Y}%;--translate-x:${service.animationValues.translate_X}%">
 <span class="card-title">${service.service_name}</span>
 <div class="card-overlay">
     <div class="card-content">
         <h1 class="card-overlay-title">${service.service_name}</h1>
         <span class="text">${service.service_content}</span>
     </div>
 </div>
</div>`;

  card_container.innerHTML += cardHTML;
});

window.addEventListener("scroll", () => {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (elementInViewport(card)) {
      card.classList.add("show");
    }
  });
});
