import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carrousel";
import About from "./components/About";
import Clientes from "./components/Clients";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contactanos from "./components/ContactUs";
import InfoPimienta from "./components/InfoPimienta";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Clientes />
      <Services />
      <Contactanos />
      <InfoPimienta />
      <Footer />
    </div>
  );
};

export default App;
