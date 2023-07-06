const proyectos = [
  {
    id: 1,
    name: "WEB APPLE",
    imagen: "http://unsplash.it/300/300/",
    subname: "Lading Page",
    text: "Con este proyecto, hemos puesto en practica los conocimientos básicos de HTML y CSS aprendidos durante los primeros meses del máster. Mi objetivo fue conseguir familiarizarme con los conceptos de maquetación y conocer un poco más la variedad de etiquetas",
    linkproyect: "http://github.com/",
  },

  {
    id: 2,
    name: "COFFEE SHOP",
    imagen: "http://unsplash.it/300/300/",
    subname: "Proyecto 2",
    text: "Mediante este proyecto, nuestro objetivo era comenzar a poner en práctica los conocimientos adquiridos sobre filtros, uso de vite y componentes. En este caso, se ha creado una página web responsive de Cafés con una gran variedad.",
    linkproyect: "http://github.com/",
  },

  {
    id: 3,
    name: "TRABAJO ALBA",
    imagen: "http://unsplash.it/300/300/",
    subname: "Proyecto 3",
    text: "Mediante este proyecto, nuestro objetivo era comenzar a poner en práctica los conocimientos adquiridos sobre filtros, uso de vite y componentes. En este caso, se ha creado una página web responsive de Cafés con una gran variedad.",
    linkproyect: "http://github.com/",
  },
  {
    id: 4,
    name: "TRABAJO ALBA 2",
    imagen: "http://unsplash.it/300/300/",
    subname: "Proyecto 4",
    text: "Mediante este proyecto, nuestro objetivo era comenzar a poner en práctica los conocimientos adquiridos sobre filtros, uso de vite y componentes. En este caso, se ha creado una página web responsive de Cafés con una gran variedad.",
    linkproyect: "http://github.com/",
  },
  {
    id: 5,
    name: "TRABAJO ALBA 2",
    imagen: "http://unsplash.it/300/300/",
    subname: "Proyecto 5",
    text: "Mediante este proyecto, nuestro objetivo era comenzar a poner en práctica los conocimientos adquiridos sobre filtros, uso de vite y componentes. En este caso, se ha creado una página web responsive de Cafés con una gran variedad.",
    linkproyect: "http://github.com/",
  },
];

import "./Proyects.css";

const template = () => {
  return `
  <section class="proyectos">
    <div class="titulo_proyectos">
    <h1>MIS PROYECTOS</h1>
    </div>
  ${proyectos.map((proyecto) => {
    return `
    <div class="contain_proyects">
    <div class="proyect_imagen">
    <img src="${proyecto.imagen}" class="perfil"/>
    </div>
      <div class="contain_proyects_text">
      <h4> ${proyecto.name}</h4>
      <p>${proyecto.subname}</p>
      <p>${proyecto.text}</p>
      <a href="${proyecto.linkproyect}">Visit</a>
      </div>
      </div>
    
    `;
  })}
   
    </section>
    `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
