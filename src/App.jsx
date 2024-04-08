import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carrousel";
import About from "./components/About";
import Clientes from "./components/Clients";
import Services from "./components/Services";
import ContactUs from "./components/Contactanos";
import Footer from "./components/Footer";
import Info from "./components/Info";

const imagesCarousel = [
  "../src/assets/carrousel/c1.png",
  "../src/assets/carrousel/image1.png",
  "../src/assets/carrousel/image2.jpg",
  "../src/assets/carrousel/image3.jpg",
  "../src/assets/carrousel/image4.jpg",
];

const imagesClients = [
  { path: "../src/assets/carrousel/image1.png" },
  { path: "../src/assets/carrousel/image2.jpg" },
  { path: "../src/assets/carrousel/image3.jpg" },
  { path: "../src/assets/carrousel/image4.jpg" },
];

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel images={imagesCarousel} />
      <About />
      <Clientes images={imagesClients} />
      <Services />
      <ContactUs />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
