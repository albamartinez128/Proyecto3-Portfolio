import "./Hero.css";

const template = () => {
  return `
<div class="hero">
  <div class="hero_imagen">
  <img src="./img/alba.jpeg" alt="imagen hero">
  </div>
  <div class="hero_texto">
  <div class="texto_bienvenidos">
    <h3 class="span loader">
    <span class="m">W</span>
    <span class="m">E</span>
    <span class="m">L</span>
    <span class="m">C</span>
    <span class="m">O</span>
    <span class="m">M</span>
    <span class="m">E</span>
    <span class="m">&nbsp;</span>
    <span class="m">T</span>
    <span class="m">O</span>
    <span class="m">&nbsp;</span>
  
    <span class="m">M</span>
    <span class="m">Y</span>
    <span class="m">&nbsp;</span>
  
    <span class="m">P</span>
    <span class="m">O</span>
    <span class="m">R</span>
    <span class="m">T</span>
    <span class="m">F</span>
    <span class="m">O</span>
    <span class="m">L</span>
    <span class="m">I</span>
    <span class="m">O</span>
  </h3>
    </div>
    <h2>ALBA</h2>
    <h3>MARTINEZ</h3>
    
    <div class="iconos_rrss"></div>
  </div>
</div>
 `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
