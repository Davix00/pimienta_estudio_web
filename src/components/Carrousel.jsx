import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import imagen1 from "../assets/carrousel/c1.png";
import imagen2 from "../assets/carrousel/image1.png";
import imagen3 from "../assets/carrousel/image2.jpg";
import imagen4 from "../assets/carrousel/image3.jpg";
import imagen5 from "../assets/carrousel/image4.jpg";


const Carrousel = () => {
  const slides = [
    {
      url:imagen1
    },
    {
      url:imagen2
    },
    {
      url:imagen3
    },
    {
      url:imagen4
    },
    {
      url:imagen5
    },
  ];
  {/**Pasar a la siguiente imagen */}
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1440px] h-[780px] w-90 m-auto py-10 px-4 relative group" style={{ top: '-50px', height: '620px', width: '100%' }}>

      <div className="w-full h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex mt-6" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "transform 0.5s ease-in-out" }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0" style={{ backgroundImage: `url(${slide.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          ))}
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black-20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black-20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="text-white flex top-4 justify-center" >
        {slides.map((_, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-500'}`}>
            <RxDotFilled />
          </div>
        ))}
      </div>

    </div>

    
  );
};

export default Carrousel;