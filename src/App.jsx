import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carrousel";
import About from "./components/About";
import Clientes from "./components/Clients";
import Services from "./components/Services";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Clientes />
      <Services />
      <Contact/>
      <Footer />

    </>
  );
};

export default App;
