import "./Header.css";

const header = () => {
  return ` 
        <article>
           
        </article>
        <nav class="bars_menu">
                <span class="line1_bars-menu"></span>
                <span class="line2_bars-menu"></span>
                <span class="line3_bars-menu"></span>
        </nav>
          <div class="menu transicion"  data-aos-anchor-placement="bottom-bottom" data-aos="fade-up">

            <div id="navbar">
                  <ul class="list-links">
                      <li> <a id="homelink" href="#homelink">HOME</a></li>
                      <li><a id="aboutlink" href="#aboutlink">ABOUT ME</a></li>
                      <li> <a id="proyectlink" href="#proyectlink">PROYECTS</a></li>
                  </ul>

                  <div class="idioma">
                      <img src="img/espana.png">
                      <img src="img/reino-unido.png">
                  </div>
              </div>
        
          </div>
   
    `;
};

//INTRODUCIMOS LA FUNCIÓN HEADER DE ARRIBA EN LA ETIQUETA HEADER DEL DOCUMENTO HTML
export function printTemplate() {
  document.querySelector("header").innerHTML = header();
}

export function animateBars() {
  var NavBar = document.querySelector(".menu");
  NavBar.classList.toggle("mostrar_menu");
  var line1_bars = document.querySelector(".line1_bars-menu");
  var line2_bars = document.querySelector(".line2_bars-menu");
  var line3_bars = document.querySelector(".line3_bars-menu");
  var container_menu = document.querySelector(".menu");
  line1_bars.classList.toggle("activeline1_bars-menu");
  line2_bars.classList.toggle("activeline2_bars-menu");
  line3_bars.classList.toggle("activeline3_bars-menu");
  container_menu.classList.toggle("menu_active");
  setTimeout(() => {
    NavBar.classList.toggle("transicion");
  }, 500);
}
