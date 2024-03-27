import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carrousel";
import About from "./components/About";
import Clientes from "./components/Clients";
// import Services from "./components/Services";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Clientes />
      {/* 
      
      <Services />
      <span className="contactDataText">Datos de contacto.</span>
      <Footer /> */}
    </>
  );
};

export default App;
