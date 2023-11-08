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
    imagen: "img/webcoffee.png",
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
  // {
  //   id: 4,
  //   name: "Practice Superheros",
  //   imagen: "img/superheroes.png",
  //   subname: "Practice HTML-CSS",
  //   text: "Through this practice, they have been able to expand their knowledge about the layout of a web page. They have made use of new tools and internalized new landing page design practices.",
  //   tecnologia1: "img/html.png",
  //   tecnologia2: "img/css.png",

  //   linkproyect:
  //     "https://github.com/albamartinez128/Practica_HTML-CSS-SuperHeroes",
  // },
  {
    id: 5,
    name: "Olivia Design",
    imagen: "img/olivia.jpg",
    subname: "Práctica Landing Page Responsive",
    text: "With this project, the basic knowledge of HTML and CSS learned during the first weeks of the course has been put into practice.",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",
    linkproyect: "https://jade-bienenstitch-a0d20f.netlify.app",
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
