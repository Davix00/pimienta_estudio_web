import React, { useState } from "react";
import { AiOutlineLine } from "react-icons/ai";

// Componente de imagen.
const Image = ({ src }) => {
  return <img src={src} alt="image" />;
};

// Componente de Cuadricula de imágenes.
const ImageGrid = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 10;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Función para ir a la siguiente página de la cuadrícula.
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  // Función para ir a la página anterior de la cuadrícula.
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Calcular el índice de inicio y fin de las imágenes en la página actual
  const startIndex = currentPage * imagesPerPage;
  const endIndex = Math.min(startIndex + imagesPerPage, images.length);

  return (
    <div>
      <div className="image-grid">
        {images.slice(startIndex, endIndex).map((image, index) => (
          <Image key={index} src={image.path} />
        ))}
      </div>
      <button onClick={prevPage} disabled={currentPage === 0}>
        Anterior
      </button>
      <button onClick={nextPage} disabled={currentPage === totalPages - 1}>
        Siguiente
      </button>
    </div>
  );
};

const Clients = ({ images }) => {
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
        <ImageGrid images={images} />
      </div>
    </div>
  );
};

export default Clients;
