import React, { useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import "./clients.css";
// Componente de imagen.
const Image = ({ src }) => {
  return <img src={src} alt="image" />;
};

const ImageGrid = ({ images, goToSlide, currentIndex }) => {
  // Dividir las imágenes en grupos de 10
  const imageGroups = [];
  for (let i = 0; i < images.length; i += 10) {
    imageGroups.push(images.slice(i, i + 10));
  }

  return (
    <div className="image-grid">
      <div className="flex justify-center">
        <div className="flex flex-wrap">
          {/* Renderizar las imágenes */}
          {imageGroups[currentIndex].map((image, index) => (
            <div key={index} className="w-1/5 p-2">
              <Image src={image.path} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-white flex top-4 justify-center">
        {/* Renderizar los botones de bolita */}
        {imageGroups.map((_, groupIndex) => (
          <div
            key={groupIndex}
            onClick={() => goToSlide(groupIndex)}
            className={`text-2xl cursor-pointer ${
              groupIndex === currentIndex ? "text-blue-500" : "text-gray-500"
            }`}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};

const Clients = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="clientsContainer" id="clients">
      <div className="mx-auto mt-5 md:w-1/2 lg:max-w-4xl ">
        <h1 className="text-primary font-bold text-center text-3xl tracking-wider ">
          HECHO EN CASA
        </h1>
        <div className="text-primary flex justify-center">
          <AiOutlineLine className="w-full" />
        </div>
        <div
          className="italic font-semibold text-center text-slate-600 p-5 md:max-w-4xl"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Nadie sabe lo que quiere hasta que se lo enseñas. Pues cuándo un
          diseño no se siente con el corazón, no importa lo que diga la cabeza.
        </div>
        <ImageGrid
          images={images}
          goToSlide={goToSlide}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default Clients;
