import "./about.css";

const template = () => {
  return `
    <section class="about">
    <div class="titulo_about">
    <h1>UN POCO SOBRE MÍ</h1>
    </div>
    <div class="texto_about izquierda">
    <img src="./img/comunicacion.jpg" class="perfil"/>
    <h4>Me llamo Alba, graduada en Periodismo y en Marketing Digital.<br>
    fdfsfss<br>fesffs
    sdfsfsf</h4>
    </div>
    <div class="texto_about derecha" >
    <img src="./img/desarrollador.jpg">
    <h4>gdrgdgdd<br>fwsfssfsd<br>dfdfsd</h4>
    </div>
    </section>
    `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
