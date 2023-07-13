const proyectos = [
  {
    id: 1,
    name: "WEB APPLE",
    imagen: "img/webapple.png",
    subname: "Landing Page Responsive",
    text: "Con este proyecto, hemos puesto en practica los conocimientos básicos de HTML y CSS aprendidos durante los primeros meses del máster. Mi objetivo fue conseguir familiarizarme con los conceptos de maquetación y conocer un poco más la variedad de etiquetas.",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",
    linkproyect: "https://proyecto1-html-css.vercel.app/",
  },

  {
    id: 2,
    name: "COFFEE SHOP",
    imagen: "img/webcoffee.png",
    subname: "Proyecto DOM",
    text: "Mediante este proyecto, nuestro objetivo era comenzar a poner en práctica los conocimientos adquiridos sobre filtros, uso de vite y componentes. En este caso, se ha creado una página web responsive de Cafés con una gran variedad.",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",
    tecnologia3: "img/js.png",
    linkproyect: "https://proyecto2-js.vercel.app/",
  },

  {
    id: 3,
    name: " MY PORTFOLIO",
    imagen: "img/portfolio1.png",
    subname: "Proyecto Portfolio",
    text: "Este proyecto será el broche final al primer módulo del curso. En este caso, el objetivo es hacer uso de Vite como herramienta de desarrollo para crear un portfolio. Por otro lado, se hará una simulación de navegación en una SPA (Single Page Application).",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",
    tecnologia3: "img/js.png",
    linkproyect: "http://github.com/",
  },
  {
    id: 4,
    name: "PRÁCTICA SUPERHEROES",
    imagen: "img/superheroes.png",
    subname: "Práctica HTML-CSS",
    text: "Mediante esta práctica, se han podido ampliar conocimientos sobre la maquetación de una página web. Se han hecho uso de nuevas herramientas e interiorizado nuevas prácticas de diseño de una lading page.",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",

    linkproyect:
      "https://github.com/albamartinez128/Practica_HTML-CSS-SuperHeroes",
  },
  {
    id: 5,
    name: "Práctica Web Tiempo ",
    imagen: "img/tiempo.jpg",
    subname: "Proyecto React",
    text: "Con este proyecto comenzamos el bloque de React del curso. La página web del tiempo utiliza componentes de React para mostrar una interfaz intuitiva y fácil de usar. Al ingresar a la página, los usuarios pueden buscar una ubicación específica para obtener información precisa sobre el clima en tiempo real. La búsqueda se puede realizar ingresando el nombre de la ciudad, el código postal o incluso las coordenadas geográficas.",
    tecnologia1: "img/html.png",
    tecnologia2: "img/css.png",
    tecnologia3: "img/js.png",
    tecnologia4: "img/react.png",
    linkproyect:
      "https://www.joanmira.com/es/blog/tutorial-build-a-weather-app-with-react/",
  },
];

import "./Proyects.css";

const template = () => {
  return `
  <section class="proyectos">
    <div class="titulo_proyectos">
    <h1>MIS PROYECTOS</h1>
    </div>
    <div class="proyectos_container slide-in-fwd-center">
  ${proyectos.map((proyecto) => {
    const tecnologias = [
      proyecto.tecnologia1,
      proyecto.tecnologia2,
      proyecto.tecnologia3,
      proyecto.tecnologia4,
    ].filter(Boolean);
    return `
    <div class="contain_proyects scale-up-ver-top">
    <div class="proyect_imagen">
    <img src="${proyecto.imagen}" class="perfil"/>
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
  })}
    </div>
    
    </section>
    `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
