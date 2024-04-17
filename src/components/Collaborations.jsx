import { useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import { ImageGrid } from "./Clients";
import "./css/Clients.css";

const Image = ({ src }) => {
  return <img src={src} alt="image" />;
};

const Collaborations = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="clientsContainer" id="collaborations">
      <br />
      <br />
      <div
        className="mx-auto mt-5 md:w-1/2 lg:max-w-4xl"
        style={{ fontSize: "1.5rem", padding: "0 10px" }}
      >
        <h1 className="text-primary font-bold text-center text-3xl tracking-wider ">
          NUESTRAS COLABORACIONES
        </h1>
        <div className="text-primary flex justify-center">
          <AiOutlineLine className="w-full" />
        </div>
        <div
          className="text-center text-slate-600 p-5 md:max-w-4xl"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.5rem" }}
        >
          Llevamos el diseño en la sangre es por ello que nos gusta compartirlo
          con los demás.
        </div>
        <ImageGrid
          images={images}
          goToSlide={goToSlide}
          currentIndex={currentIndex}
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Collaborations;
