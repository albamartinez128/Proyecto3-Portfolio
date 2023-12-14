const proyectos = [
  {
    id: 1,
    name: "WEB APPLE",
    imagen: "img/webapple.png",
    subname: "Landing Page Responsive",
    text: "With this project, the basic knowledge of HTML and CSS learned during the first weeks of the course has been put into practice. My goal was to get familiar with layout concepts and learn a little more about the variety of tags and properties.",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",
    linkproyect: "https://proyecto1-html-css.vercel.app/",
  },

  {
    id: 2,
    name: "COFFEE SHOP",
    imagen: "img/coffee1.jpg",
    subname: "Project DOM",
    text: "Through this project, the objective was to begin to put into practice the knowledge acquired about filters, the use of vite and components. In this case, a responsive coffee website has been created with a wide variety of them.",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",
    tecnologia3: "img/js.png",
    linkproyect: "https://proyecto2-js.vercel.app/",
  },

  {
    id: 3,
    name: " MY PORTFOLIO - Design",
    imagen: "img/fotoportfolio.jpg",
    subname: "Project Portfolio",
    text: "This project will be the finishing touch to the first module of the course. In this case, the objective is to use Vite as a development tool to create a portfolio. On the other hand, a navigation simulation will be done in a SPA (Single Page Application).",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",
    tecnologia3: "img/js.png",
    linkproyect: "http://github.com/",
  },
  {
    id: 4,
    name: "OLIVIA DESIGN",
    imagen: "img/olivia.jpg",
    subname: "Práctica Landing Page Responsive",
    text: "The main objective of this project is to make a landing page. I implemented everything I learned in the HTML - CSS.",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",
    linkproyect: "https://jade-bienenstitch-a0d20f.netlify.app",
  },
  {
    id: 5,
    name: "ELECTRONIC SHOP",
    imagen: "img/shop.jpg",
    subname: "Práctica JavaScript DOM",
    text: "The main objective of this project is to use a JavaScript DOM.",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",
    tecnologia3: "img/js.png",
    linkproyect:
      "https://657ab1a5a8f4d86c880a902a--resplendent-otter-b43ff4.netlify.app/",
  },
];

import "./Proyects.css";

const template = () => {
  return `
  <section class="proyectos">
    <div class="titulo_proyectos">
    <h1>MY PROJECTS</h1>
    </div>
    <div class="proyectos_container slide-in-fwd-center">
  ${proyectos
    .map((proyecto) => {
      const tecnologias = [
        proyecto.tecnologia1,
        proyecto.tecnologia2,
        proyecto.tecnologia3,
        proyecto.tecnologia4,
      ].filter(Boolean);
      return `
    <div class="contain_proyects scale-up-ver-top">
    <div class="proyect_imagen">
    <img src="${proyecto.imagen}" loading="lazy" class="perfil"/>
    </div>
      <div class="contain_proyects_text">
      <h3> ${proyecto.name}</h3>
      <h3>${proyecto.subname}</h3>
      <p>${proyecto.text}</p>
      <div class="tecnologias">
      ${tecnologias
        .map(
          (tecnologia, index) =>
            `<img src="${tecnologia}" class="tecnologia${index + 1}">`
        )
        .join("")}
    </div>
      <a href="${
        proyecto.linkproyect
      }"><img src="img/iconoweb.png" class="linkproyect"style="width: 25px; height: auto;"></a>
      </div>
      </div>
      `;
    })
    .join("")}
    </div>
    </section>
    `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
