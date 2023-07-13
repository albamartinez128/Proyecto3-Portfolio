import { animateBars } from "./Components/Header/Header";

// //INYECTAR CADA COMPONENTE

import "./style.css";
import { printTemplate as Header } from "./Components/Header/Header";
import { printTemplate as home } from "./Pages/Home/home";
import { printTemplate as hero } from "./Components/Hero/Hero";
import { printTemplate as About } from "./Pages/About/about";
import { printTemplate as Proyects } from "./Pages/Proyects/Proyects";
import { linkPage } from "./utils/linkPage";

Header();
hero();

linkPage("#homelink", hero);
linkPage("#aboutlink", About);
linkPage("#proyectlink", Proyects);

//LISTENNERS

var crearFunction = document.querySelector(".bars_menu");
crearFunction.addEventListener("click", animateBars);
