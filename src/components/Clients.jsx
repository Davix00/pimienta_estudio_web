import React, { useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import "./css/Clients.css";

// Componente de imagen.
const Image = ({ src }) => {
  return <img src={src} alt="image" />;
};

export const ImageGrid = ({ images, goToSlide, currentIndex }) => {
  // Definir la cantidad de imágenes por fila
  const imagesPerRow = 5;

  // Calcular la cantidad total de filas
  const totalRows = Math.ceil(images.length / (imagesPerRow * 2));

  // Obtener el índice de inicio y fin para las imágenes a mostrar
  const startIndex = currentIndex * imagesPerRow * 2;
  const endIndex = Math.min(startIndex + imagesPerRow * 2, images.length);
  const currentImages = images.slice(startIndex, endIndex);

  return (
    <div className="image-grid">
      <div className="flex flex-wrap">
        {/* Renderizar las imágenes */}
        {currentImages.map((image, index) => (
          <div
            key={index}
            className="w-full sm:w-1/3 md:w-1/5 lg:w-1/5 xl:w-1/5 p-2"
            style={{ width: "100%", height: "auto" }}
          >
            <Image src={image.path} />
          </div>
        ))}
      </div>
      <div className="text-white flex top-4 justify-center">
        {/* Renderizar los botones */}
        {Array.from({ length: totalRows }).map((_, row) => (
          <div
            key={row}
            onClick={() => goToSlide(row)}
            className={`text-2xl cursor-pointer ${
              row === currentIndex ? "text-blue-500" : "text-gray-500"
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
      <br />
      <br />
      <div
        className="mx-auto mt-5 md:w-1/2 lg:max-w-4xl"
        style={{ fontSize: "1.5rem", padding: "0 10px" }}
      >
        <h1 className="text-primary font-bold text-center text-3xl tracking-wider ">
          HECHO EN CASA
        </h1>
        <div className="text-primary flex justify-center">
          <AiOutlineLine className="w-full" />
        </div>
        <div
          className="text-center text-slate-600 p-5 md:max-w-4xl"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.3rem" }}
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
      <br />
      <br />
    </div>
  );
};

export default Clients;
