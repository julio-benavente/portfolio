import ProjectOneImage from "@/../public/assets/images/project-one-image.png";
import ProjectTwoImage from "@/../public/assets/images/project-two-image.png";
import TheGoodDoctorHomepage from "@/../public/assets/images/thegooddoctorhomepage.jpg";
import InkAnPaperHomePage from "@/../public/assets/images/inkanpaperhomepage.jpg";
import PortfolioHomePage from "@/../public/assets/images/juliobenaventeportfoliohomepage.jpg";

const worksList = [
  {
    name: "The Good Doctor",
    image: TheGoodDoctorHomepage,
    imageAlt: "A website homepage",
    description:
      "It is a website for a medical company focused on getting appointments. It includes a home, a services, a contact and an appointment pages. It has a markdown blog. In the futere this blog will be move to a CMS like Strapi. This website has been developed using NextJS, with Tailwind and Storybook.",
    // caseStudyLink: "https://juliobenavente.com/",
    githubLink: "https://github.com/julio-benavente/good-doctor",
    websiteLink: "https://thegooddoctor.juliobenavente.com/",
  },
  {
    name: "Ink An' Paper",
    image: InkAnPaperHomePage,
    imageAlt: "A website homepage",
    description:
      "Ink An' Paper is a animation studio based in Arizona. I designed and build their website using NextJS, Tailwind and Storybook.",
    // caseStudyLink: "https://juliobenavente.com/",
    // githubLink: "https://github.com/julio-benavente/portfolio",
    websiteLink: "https://inkanpaper.juliobenavente.com/",
  },
  {
    name: "Portfolio",
    image: PortfolioHomePage,
    imageAlt: "Julio Benavente's project one | Portfolio",
    description:
      "It's my first project since I'm renewing all my projects. It's meant to showcase my new skills developed throught the past three years since I built my first portfolio. This website is built with NextJS for the front and a simple backend. To style the components I used Tailwind. Worth mentioning I deployed this website in a VPS, including the email config.",
    caseStudyLink: "https://juliobenavente.com/",
    githubLink: "https://github.com/julio-benavente/portfolio",
    websiteLink: "https://juliobenavente.com/",
  },
  // {
  //   name: "Sheriful",
  //   image: ProjectTwoImage,
  //   imageAlt: "Lorem ipsum dolor sit.",
  //   description:
  //     "It's an application I'm working on at the moment. It's a platform that allows people to share their digital content and ask a help from the people who wants acces. This help consists on completing a 'social taks' such as subscribing, following, sharing or liking. For the frontend I'm using NextJS and Tailwind and MaterialUI. For the backend I'm planning on using AppWrite (BaaS).",
  //   // caseStudyLink: "https://juliobenavente.com/",
  //   // githubLink: "https://github.com/",
  //   // websiteLink: "https://juliobenavente.com/",
  // },
  // {
  //   name: "Sandbox Banking Application Website 3",
  //   image: ProjectImage,
  //   imageAlt: "Lorem ipsum dolor sit.",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iure rem eaque possimus tenetur. Optio vitae sapiente voluptate asperiores quaerat.",
  //   caseStudyLink: "https://juliobenavente.com/",
  //   githubLink: "https://github.com/",
  //   websiteLink: "https://juliobenavente.com/",
  // },
  // {
  //   name: "Sandbox Banking Application Website 4",
  //   image: ProjectImage,
  //   imageAlt: "Lorem ipsum dolor sit.",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iure rem eaque possimus tenetur. Optio vitae sapiente voluptate asperiores quaerat.",
  //   caseStudyLink: "https://juliobenavente.com/",
  //   websiteLink: "https://juliobenavente.com/",
  // },
];

export default worksList;
