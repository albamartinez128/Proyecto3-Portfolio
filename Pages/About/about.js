import "./about.css";

const template = () => {
  return `
    <section class="about">
    <div class="titulo_about">
    <h1>ABOUT ME</h1>
    </div>
    <button class="button_cv">
    <a href="https://drive.google.com/file/d/1dlXTJP8gLr-lMwcRyqt7Oe8j2XFRRQrD/view?usp=drive_link">My Curriculum Vitae</a>
    </button>
    <div class="texto_about izquierda">
    <img src="./img/comunicacion.jpg" class="perfil"/>
    <h4> My name is Alba, graduated in Journalism and Digital Marketing.<br>
    During my first years of my degree I had the opportunity to work in the communication sector. It was there that I began to be curious about the world of web development.</h4>
    </div>
    <div class="texto_about derecha" >
    <img src="./img/desarrollador.jpg">
    <h4>I am currently studying a RockTheCode Master at ThePower Business School. Right now, all my focus, professional growth and enthusiasm is placed on the programming sector.</h4>
    </div>
    </section>
    `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
