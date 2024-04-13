export const data = {
  home: {
    banner: {
      heroTitle: "WEB DEVELOPER",
      heroContent: `I am a passionate and
      results-oriented web developer with a proven ability to design, develop, and implement innovative
      web solutions. Leveraging the latest technologies, I create user-centric interfaces that are both
      visually stunning and functionally robust`,
    },
    summary: {
      summaryContent: `This website presents
      the professional portfolio of Ali Haleem, a skilled web developer with a passion for innovation.
      Here, you will find a curated selection of projects that showcase his expertise in front-end and
      back-end. Each project is accompanied by a detailed description that highlights the specific
      challenges addressed, the technologies utilized, and the successful outcomes achieved.
      The website also provides an overview of Ali Haleem's technical skillset, including proficiency in
      various programming languages and frameworks. Visitors can explore information about his personal
      details, educational background, and contact information.
      This portfolio serves as a testament to Ali Haleem's dedication to crafting high-quality,
      functional, and visually appealing web applications.`,
    },
  },
  services_section: {
    services: [
      {
        service_name: "UI",
        service_class: "uiux-card",
        service_content: `From a customer-centric perspective, a website's user interface (UI) serves as the primary foundation for its visual appeal and intuitive interaction. This emphasizes the importance of prioritizing user experience through clear design principles that create a positive and engaging first impression.`,
        animationValues: {
          translate_X: -20,
          translate_Y: 0,
          opacity: 0,
        },
      },
      {
        service_name: "DESIGN",
        service_class: "design-card",
        service_content: `The graphic design is the art and practice of visual communication, using elements like typography, imagery, and layout to transmit ideas and messages to a target audience. It encompasses a wide range of disciplines, from branding and marketing materials to user interfaces (UI) and publications. `,
        animationValues: {
          translate_X: 0,
          translate_Y: 0,
          opacity: 0,
        },
      },
      {
        service_name: "CODING",
        service_class: "coding-card",
        service_content: `The computer programming, also known as coding, is the process of creating instructions for computers to execute. These instructions, written in specific languages, define functionalities, manipulate data, and control the behavior of software applications and systems.`,
        animationValues: {
          translate_X: 20,
          translate_Y: 0,
          opacity: 0,
        },
      },
    ],
  },
  skills_section: {
    skill_categories: [
      {
        skills_category_name: "WEB DEVELOPMENT",
        skills: [
          { skill_name: "HTML", percentage: 80 },
          { skill_name: "CSS", percentage: 90 },
          { skill_name: "JAVASCRIPT", percentage: 80 },
          { skill_name: "NODE JS", percentage: 70 },
          { skill_name: "EXPRESS JS", percentage: 84 },
          { skill_name: "PYTHON", percentage: 65 },
          { skill_name: "DJANGO", percentage: 73 },
          { skill_name: "MONGODB", percentage: 87 },
        ],
      },
      {
        skills_category_name: "DESIGNING - GRAPHIC",
        skills: [
          { skill_name: "PHOTOSHOP", percentage: 60 },
          { skill_name: "ILLUSTRATOR", percentage: 60 },
          { skill_name: "FIGMA", percentage: 80 },
        ],
      },
      {
        skills_category_name: "LANGUAGE",
        skills: [
          { skill_name: "DARI", percentage: 85 },
          { skill_name: "ENGLISH", percentage: 65 },
        ],
      },
    ],
  },
};
