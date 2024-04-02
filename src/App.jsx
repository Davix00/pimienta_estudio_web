import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carrousel";
import About from "./components/About";
import Clientes from "./components/Clients";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactoEstudio from "./components/ContactoEstudio";


const App = () => {
  return (
  
      <div>
        <Navbar />
        <Carousel />
        <About/>
        <Clientes />
        <Services/>
        <Contact/>
        <ContactoEstudio/>
        <Footer />
      </div>
 
  );
};

export default App;
