import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carrousel";
import About from "./components/About";
import Clientes from "./components/Clients";
import Services from "./components/Services";
import ContactUs from "./components/Contactanos";
import Footer from "./components/Footer";
import Info from "./components/Info";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Clientes />
      <Services />
      <ContactUs />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
