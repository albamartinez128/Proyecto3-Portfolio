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
    Durante mis primeros años de carrera tuve la oportunidad de trabajar en el sector de la comunicación. Fue ahí donde empece a sentir curiosidad por el mundo del desarrollo web.</h4>
    </div>
    <div class="texto_about derecha" >
    <img src="./img/desarrollador.jpg">
    <h4>Actualmente estoy cursando un Máster de RockTheCode en ThePower Business School. En estos momentos, todo mi enfoque, crecimiento profesional e ilusión está puesto en el sector de la programación</h4>
    </div>
    </section>
    `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
