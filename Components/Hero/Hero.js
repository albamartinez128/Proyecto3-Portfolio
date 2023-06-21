import "./Hero.css";

const template = () => {
  return `
<div class="hero">
  <div class="hero_imagen">
  <img src="./img/alba.jpeg" alt="imagen hero">
  </div>
  <div class="hero_texto">
    <h2>ALBA</h2>
    <h3>MARTINEZ</h3>
    <div class="texto_bienvenidos">
      <h4>WELCOME TO MY PORTFOLIO</h4>
    </div>
    <div class="iconos_rrss"></div>
  </div>
</div>
 `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
