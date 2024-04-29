import { data } from "./data.js";
let bannerTitle = document.querySelector(".banner-title");
let bannerContent = document.querySelector(".banner-paragraph");
let summaryContent = document.querySelector(".summary-paragraph");

bannerTitle.innerHTML = data.home.banner.heroTitle;
bannerContent.innerHTML = data.home.banner.heroContent;
summaryContent.innerHTML = data.home.summary.summaryContent;

data.home.services_section.services.forEach((service) => {
  let cardHTML = `
   <div class="card ${service.service_class} hidedElement" style="--opacity:${service.animationValues.opacity};--translate-y:${service.animationValues.translate_Y}%;--translate-x:${service.animationValues.translate_X}%">
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
