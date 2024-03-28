import React from "react";
import { AiOutlineLine } from "react-icons/ai";

const Clients = () => {
  return (
    <div className="clientsContainer">
      <div className="mx-auto mt-5 md:w-1/2 lg:max-w-4xl ">
        <h1 className="text-primary font-bold text-center text-3xl tracking-wider ">
          HECHO EN CASA
        </h1>

        <div className="text-primary flex justify-center">
          <AiOutlineLine className="w-full" />
        </div>

        <div
          className="text-center text-slate-600 p-5 md:max-w-3xl"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Nadie sabe lo que quiere hasta que se lo enseñas. Pues cuándo un
          diseño no se siente con el corazón, no importa lo que diga la cabeza.
        </div>
        <br />
      </div>
    </div>
  );
};

export default Clients;
