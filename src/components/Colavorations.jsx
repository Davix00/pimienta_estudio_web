import React, { useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import { ImageGrid } from "./Clients";
import "./clients.css";

const Image = ({ src }) => {
  return <img src={src} alt="image" />;
};

const Colavorations = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="clientsContainer" id="clients">
      <br />
      <br />
      <div className="mx-auto mt-5 md:w-1/2 lg:max-w-4xl ">
        <h1 className="text-primary font-bold text-center text-3xl tracking-wider ">
          NUESTRAS COLABORACIONES
        </h1>
        <div className="text-primary flex justify-center">
          <AiOutlineLine className="w-full" />
        </div>
        <div
          className="text-center text-slate-600 p-5 md:max-w-4xl"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.3rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          expedita possimus ipsam nulla neque excepturi quo eius, autem laborum
          tenetur ad magnam fugiat? Veniam, sapiente natus consequuntur voluptas
          et eligendi!.
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

export default Colavorations;
