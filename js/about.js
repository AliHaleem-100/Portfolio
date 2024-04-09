import { data } from "./data.js";
import { elementInViewport } from "./tools.js";
async function AddingSKills(skills) {
  let skillsHTML = [];
  skills.forEach((skill) => {
    let skillHTML = `
    <div class="skill ">
    <span class="skill-name">${skill.skill_name}</span>
    <div class="input-and-percentage">
        <div class="skill-bar" style="--bar-width:${skill.percentage}%"></div>
        <span class="skill-percentage">${skill.percentage}%</span>
    </div>
</div>`;
    skillsHTML.push(skillHTML);
  });
  return skillsHTML;
}

data.skills_section.skill_categories.forEach(async (SKC) => {
  let skills = await AddingSKills(SKC.skills);
  const skills_category = `<div class="skill-category progressAnimation">
        <span class="category-title">${SKC.skills_category_name}</span>
        <div class="skills">${skills.join("")}</div>
        </div>`;

  skills_categories.innerHTML += skills_category;
});

window.addEventListener("scroll", () => {
  let skills_category = document.querySelectorAll(".progressAnimation");
  skills_category.forEach((skill_category) => {
    if (elementInViewport(skill_category)) {
      skill_category.classList.add("show");
    }
  });
});
