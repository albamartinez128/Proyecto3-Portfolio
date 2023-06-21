import "./home.css";

const template = () => {
  return `
    <section class="home">
    <h1>HI, I AM ALBA MARTÍNEZ</h1>
    <img src="./img/ilustracion.avif">
    </section>
    `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
