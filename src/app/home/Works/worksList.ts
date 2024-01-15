import ProjectOneImage from "@/../public/assets/images/project-one-image.png";
import ProjectTwoImage from "@/../public/assets/images/project-two-image.png";
import TheGoodDoctorHomepage from "@/../public/assets/images/thegooddoctorhomepage.jpg";
import InkAnPaperHomePage from "@/../public/assets/images/inkanpaperhomepage.jpg";
import PortfolioHomePage from "@/../public/assets/images/juliobenaventeportfoliohomepage.jpg";
import ZaafooHomepage from "@/../public/assets/images/zaafoohomepage.jpg";

const worksList = [
  {
    name: "The Good Doctor",
    image: TheGoodDoctorHomepage,
    imageAlt: "A website homepage",
    description:
      "It is a website for a medical company focused on getting appointments. It includes a home, a services, a contact and an appointment pages. It has a markdown blog. In the futere this blog will be move to a CMS like Strapi. This website has been developed using NextJS, with Tailwind and Storybook.",
    websiteLink: "https://thegooddoctor.juliobenavente.com/",
    githubLink: "https://github.com/julio-benavente/good-doctor",
  },
  {
    name: "Ink An' Paper",
    image: InkAnPaperHomePage,
    imageAlt: "A website homepage",
    description:
      "Ink An' Paper is a animation studio based in Arizona. I designed and build their website using NextJS, Tailwind and Storybook.",
    // githubLink: "https://github.com/julio-benavente/portfolio",
    websiteLink: "https://inkanpaper.juliobenavente.com/",
  },
  {
    name: "Zaafoo",
    image: ZaafooHomepage,
    imageAlt: "A website homepage",
    description:
      "This project is UNDER DEVELOPMENT. It is an application for restaurants to move their menu to a digital one. The application allows you to register your menu and then creates a website to visualize the menu. In the future it will allow you to order from the website. The project has been developed with NextJS, Tailwind and Storybook.",
    websiteLink: "https://zaafoo.juliobenavente.com/",
    githubLink: "https://github.com/julio-benavente/zaafoo",
  },
];

export default worksList;
