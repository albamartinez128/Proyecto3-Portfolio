import "./Hero.css";

const template = () => {
  return `
<div class="hero">
  <div class="hero_imagen  rotate-scale-up" data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000" >
    <img src="./img/alba.jpeg" alt="imagen hero">
  </div>
  <div class="hero_texto">
   <div class="saludo_bienvenida">
    <h6>HI, MY NAME IS ALBA</h6></div>
  
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
    <br>
    <span class="m">&nbsp;</span>
    <span class="m">M</span>
    <span class="m">Y</span>
    <br>
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
    <div class="iconos_rrss">
     <a href="https://www.linkedin.com/in/albamartinezgut/"><img src="./img/linkedin.png"></a>
     <a href="https://github.com/albamartinez128"><img src="./img/github.png"></a>
    </div>
  </div>
</div>
 `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
