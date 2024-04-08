import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carrousel = ({ images }) => {
  // Recibe las imágenes como prop
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className="max-w-[1440px] h-[780px] w-90 m-auto py-10 px-4 relative group"
      style={{ top: "-50px", height: "620px", width: "100%" }}
    >
      <div className="w-full h-full relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full flex mt-6"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map(
            (
              image,
              index // Utiliza las imágenes recibidas como prop
            ) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )
          )}
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black-20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black-20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="text-white flex top-4 justify-center">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-500"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Carrousel;
