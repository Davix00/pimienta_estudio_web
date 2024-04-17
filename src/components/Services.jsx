import { AiOutlineLine } from "react-icons/ai";
import editorial from "../assets/services/EDITORIAL.svg";
import identidad from "../assets/services/IDENTIDAD.svg";
import medios from "../assets/services/MEDIOS.svg";
import offset from "../assets/services/OFFSET.svg";
import web from "../assets/services/WEB.svg";

const Services = () => {
  return (
    <div className="servicesContainer" id="services">
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
                src={identidad}
                alt="Imagen de servicio"
              />
            </div>
            <p className="font-semibold text-slate-800 mt-2 text-center w-36">
              Diseño de logotipo e identidad gráfica
            </p>
          </div>

          <div className="flex flex-col items-center mx-4 lg:mr-20">
            <div className="rounded-full overflow-hidden h-24 w-24 border-4 flex items-center justify-center">
              <img
                className="rounded-full w-full h-full object-cover"
                src={offset}
                alt="Imagen de servicio"
              />
            </div>
            <p className="font-semibold text-slate-800 mt-2 text-center w-36">
              Impresión digital y offset
            </p>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="rounded-full overflow-hidden h-24 w-24 border-4 flex items-center justify-center">
              <img
                className="rounded-full w-full h-full object-cover"
                src={editorial}
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
                src={web}
                alt="Imagen de servicio"
              />
            </div>
            <p className="font-semibold text-slate-800 mt-2 text-center w-36">
              Páginas web
            </p>
          </div>

          <div className="flex flex-col items-center mx-4 lg:ml-20">
            <div className="rounded-full overflow-hidden h-24 w-24 border-4 flex items-center justify-center">
              <img
                className="rounded-full w-full h-full object-cover"
                src={medios}
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
