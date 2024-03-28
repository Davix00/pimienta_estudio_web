import { AiOutlineLine } from "react-icons/ai";
import image1 from "../assets/services/1.png";
import image2 from "../assets/services/2.jpg";
import image3 from "../assets/services/3.jpg";
import image4 from "../assets/services/4.png";
import image5 from "../assets/services/5.png";

const Services = () => {
  return (
    <div className="servicesContainer">
      <div className="mx-auto mt-5 md:w-1/2 lg:max-w-4xl ">
        <h1 className="text-primary font-bold text-center text-3xl tracking-wider ">
          SERVICIOS
        </h1>

        <div className="text-primary flex justify-center">
          <AiOutlineLine className="w-full" />
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="flex flex-col items-center lg:mr-20">
            <div className="rounded-full overflow-hidden h-24 w-24 border-4 flex items-center justify-center">
              <img
                className="rounded-full w-full h-full object-cover"
                src={image1}
                alt="Imagen de servicio"
              />
            </div>
            <p className="font-semibold text-slate-800 mt-2 text-center w-36">
              Diseño de logotipo e identidad Gráfica
            </p>
          </div>

          <div className="flex flex-col items-center mx-4 lg:mr-20">
            <div className="rounded-full overflow-hidden h-24 w-24 border-4 flex items-center justify-center">
              <img
                className="rounded-full w-full h-full object-cover"
                src={image2}
                alt="Imagen de servicio"
              />
            </div>
            <p className="font-semibold text-slate-800 mt-2 text-center w-36">
              Impresión Digital y Offset
            </p>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="rounded-full overflow-hidden h-24 w-24 border-4 flex items-center justify-center">
              <img
                className="rounded-full w-full h-full object-cover"
                src={image3}
                alt="Imagen de servicio"
              />
            </div>
            <p className="font-semibold text-slate-800 mt-2 text-center w-20">
            Diseño editorial
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-4 lg:mt-8 ">
          <div className="flex flex-col items-center mx-4">
            <div className="rounded-full overflow-hidden h-24 w-24 border-4 flex items-center justify-center">
              <img
                className="rounded-full w-full h-full object-cover"
                src={image4}
                alt="Imagen de servicio"
              />
            </div>
            <p className="font-semibold text-slate-800 mt-2 text-center w-36">
            Páginas Web
            </p>
          </div>

          <div className="flex flex-col items-center mx-4 lg:ml-20">
            <div className="rounded-full overflow-hidden h-24 w-24 border-4 flex items-center justify-center">
              <img
                className="rounded-full w-full h-full object-cover"
                src={image5}
                alt="Imagen de servicio"
              />
            </div>
            <p className="font-semibold text-slate-800 mt-2 text-center w-32">
            Medios publicitarios
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
