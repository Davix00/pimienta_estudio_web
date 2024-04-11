import React from "react";
import { AiOutlineLine } from "react-icons/ai";

const Info = () => {
  return (
    <div className="clientsContainer" id="clients">
      <div className="mx-auto mt-5 lg:mt-10 md:w-full lg:max-w-4xl">
        <div className="text-primary flex justify-center">
          <AiOutlineLine className="w-full" />
        </div>
        <div className="text-center text-slate-600 p-5 md:max-w-4xl">
          <div className="font-light mb-2">
            <strong>Teléfono: </strong>2224810329
          </div>
          <div className="font-light">
            <strong>Instagram: </strong>@pimientaestudio
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
