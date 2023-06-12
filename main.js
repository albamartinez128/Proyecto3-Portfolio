//IMPORTAR LOS ESTILOS GENERALES
import "./style.css";

//IMPORTAR EL HEADER
import { header } from "./Components/Header/Header";
//OBTENER EL ELEMENTO DEL DOM CON EL ID APP
const app = document.querySelector("#app");

//INYECTAR CADA COMPONENTE

app.insertAdjacentHTML("afterbegin", header());
