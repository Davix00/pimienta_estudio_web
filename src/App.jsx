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
  { path: "../src/assets/carrousel/image5.png" },
  { path: "../src/assets/carrousel/image6.jpg" },
  { path: "../src/assets/carrousel/image7.jpg" },
  { path: "../src/assets/carrousel/image8.jpg" },
  { path: "../src/assets/carrousel/image9.jpg" },
  { path: "../src/assets/carrousel/image10.jpg" },
  { path: "../src/assets/carrousel/image20.jpg" },
  { path: "../src/assets/carrousel/image19.jpg" },
  { path: "../src/assets/carrousel/image18.jpg" },
  { path: "../src/assets/carrousel/image17.jpg" },
  { path: "../src/assets/carrousel/image16.png" },
  { path: "../src/assets/carrousel/image15.jpg" },
  { path: "../src/assets/carrousel/image14.jpg" },
  { path: "../src/assets/carrousel/image13.jpg" },
  { path: "../src/assets/carrousel/image12.jpg" },
  { path: "../src/assets/carrousel/image11.png" },
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
