import Navbar from "./components/Navbar";
import Carousel from "./components/Carrousel";
import About from "./components/About";
import Clientes from "./components/Clients";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Collaborations from "./components/Collaborations";
import {
  imagesCarousel,
  imagesClients,
  imagesColavorations,
} from "./imagesPath";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel images={imagesCarousel} />
      <About />
      <Clientes images={imagesClients} />
      <Collaborations images={imagesColavorations} />
      <Services />
      <ContactUs />
      <Info />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
