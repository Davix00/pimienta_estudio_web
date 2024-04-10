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
import {
  imagesCarousel,
  imagesClients,
  imagesColavorations,
} from "../imagesPath";

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
