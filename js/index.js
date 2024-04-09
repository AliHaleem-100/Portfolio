import { data } from "./data.js";

data.services_section.services.forEach((service) => {
  let cardHTML = `
 <div class="card ${service.service_class}">
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
