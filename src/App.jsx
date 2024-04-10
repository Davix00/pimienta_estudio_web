import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carrousel";
import About from "./components/About";
import Clientes from "./components/Clients";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Colavorations from "./components/Colavorations";

const carouselPath = "../src/assets/carousel/";
const imagesCarousel = [
  carouselPath + "carousel1.jpg",
  carouselPath + "carousel2.jpg",
  carouselPath + "carousel3.jpg",
  carouselPath + "carousel4.jpg",
  carouselPath + "carousel5.jpg",
  carouselPath + "carousel6.jpg",
  carouselPath + "carousel7.jpg",
  carouselPath + "carousel8.jpg",
  carouselPath + "carousel9.jpg",
];

const clientsPath = "../src/assets/clients/";
const imagesClients = [
  { path: `${clientsPath}A&L.svg` },
  { path: `${clientsPath}ADESU.svg` },
  { path: `${clientsPath}APEHIT.svg` },
  { path: `${clientsPath}ARTEAGA.svg` },
  { path: `${clientsPath}CANI.svg` },
  { path: `${clientsPath}CANITO.svg` },
  { path: `${clientsPath}CAROLINA ARVIZU.svg` },
  { path: `${clientsPath}CLOSE UP TV.svg` },
  { path: `${clientsPath}CLOSE UP.svg` },
  { path: `${clientsPath}DR AZOR BRAVO.svg` },
  { path: `${clientsPath}DRA AKEENA.svg` },
  { path: `${clientsPath}EL HABANERO.svg` },
  { path: `${clientsPath}EL LENADOR.svg` },
  { path: `${clientsPath}ELEGANCE.svg` },
  { path: `${clientsPath}GARCIA.svg` },
  { path: `${clientsPath}GRUPO LOINAZ.svg` },
  { path: `${clientsPath}LA LUZ.svg` },
  { path: `${clientsPath}LILY SALAZAR.svg` },
  { path: `${clientsPath}LOS PINOS.svg` },
  { path: `${clientsPath}LUCKY PIMIENTA.svg` },
  { path: `${clientsPath}LUCKY.svg` },
  { path: `${clientsPath}LUPITA ESTETICA.svg` },
  { path: `${clientsPath}MARIA REINA.svg` },
  { path: `${clientsPath}MATU.svg` },
  { path: `${clientsPath}MURRIETA.svg` },
  { path: `${clientsPath}PAPO.svg` },
  { path: `${clientsPath}PEDIADENT.svg` },
  { path: `${clientsPath}PIMIENTA.svg` },
  { path: `${clientsPath}PINEDA.svg` },
  { path: `${clientsPath}PRai.svg` },
  { path: `${clientsPath}PREVEMED.svg` },
  { path: `${clientsPath}PUPPY COUTURE.svg` },
  { path: `${clientsPath}SALUD Y VIDA.svg` },
  { path: `${clientsPath}SANTIAGO.svg` },
  { path: `${clientsPath}SUKURY.svg` },
  { path: `${clientsPath}TERAPIA CLINIA.svg` },
  { path: `${clientsPath}TIBUDENT.svg` },
  { path: `${clientsPath}VILLAMIL.svg` },
  { path: `${clientsPath}VP PLANNERS.svg` },
  { path: `${clientsPath}YEIMI.svg` },
  { path: `${clientsPath}YUPII.svg` },
  { path: `${clientsPath}ZARAGOZA.svg` },
];

const colavorationsPath = "../src/assets/colavorations/";
const imagesColavorations = [
  { path: `${colavorationsPath}adagio.svg` },
  { path: `${colavorationsPath}arquidiocesis.svg` },
  { path: `${colavorationsPath}carls.svg` },
  { path: `${colavorationsPath}ciep.svg` },
  { path: `${colavorationsPath}cisneros.svg` },
  { path: `${colavorationsPath}cristo rey.svg` },
  { path: `${colavorationsPath}cristobal.svg` },
  { path: `${colavorationsPath}cuple.svg` },
  { path: `${colavorationsPath}dominicas.svg` },
  { path: `${colavorationsPath}escudo arquidiocesis.svg` },
  { path: `${colavorationsPath}haus.svg` },
  { path: `${colavorationsPath}haz tu loko.svg` },
  { path: `${colavorationsPath}hscj.svg` },
  { path: `${colavorationsPath}kids&us.svg` },
  { path: `${colavorationsPath}kiwi.svg` },
  { path: `${colavorationsPath}la chinata.svg` },
  { path: `${colavorationsPath}lupemaurer.svg` },
  { path: `${colavorationsPath}niño docor.svg` },
  { path: `${colavorationsPath}ogcm.svg` },
  { path: `${colavorationsPath}pastoral social.svg` },
  { path: `${colavorationsPath}san hipolito.svg` },
  { path: `${colavorationsPath}san miguel.svg` },
  { path: `${colavorationsPath}seminairo menor.svg` },
  { path: `${colavorationsPath}seminario palafoxiano.svg` },
  { path: `${colavorationsPath}sonata.svg` },
  { path: `${colavorationsPath}transmisiones.svg` },
  { path: `${colavorationsPath}vocaciones.svg` },
];
const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel images={imagesCarousel} />
      <About />
      <Clientes images={imagesClients} />
      <Colavorations images={imagesColavorations} />
      <Services />
      <ContactUs />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
