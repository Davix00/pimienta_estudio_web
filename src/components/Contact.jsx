import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { useState } from "react";

const Contact = () => {
  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar formData a tu backend o hacer lo que necesites con los datos
    console.log(formData);
  };

  return (
    <div className="clientsContainer">
      <div className="mx-auto mt-12 md:w-1/2 lg:max-w-4xl ">
        <h1 className="text-primary font-bold text-center text-3xl tracking-wider ">
          CONTACTO
        </h1>

        <div className="text-primary flex justify-center">
          <AiOutlineLine className="w-full" />
        </div>

        <div
          className="text-center text-slate-600 p-5 md:max-w-4xl"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Mándanos un mensaje, estaremos felices de atenderte.
        </div>

        <div className="ml-10 lg:ml-16">
          <form onSubmit={handleSubmit} className="ml-2 lg:ml-4">
            <div>
              <label htmlFor="nombre" className="text-slate-600 font-bold text-xl">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className=" border-slate-600 border ml-7 lg:ml-7 lg:w-96" 
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-slate-600 font-bold text-xl">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className=" border-slate-600 border ml-14 lg:ml-14 lg:w-96"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="mensaje" className="text-slate-600 font-bold text-xl">Asunto:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className=" border-slate-600 border ml-10 lg:ml-10 lg:w-96"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="mensaje" className="text-slate-600 font-bold text-xl -mt-10">Mensaje:</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className=" border-slate-600 border ml-7 lg:ml-7 lg:w-96"
              />
            </div>
            <button type="submit" className="bg-primary text-white px-6 h-7 text-center mx-auto lg:mx-auto mt-4 lg:mt-0 block hover:font-bold">Enviar</button>
          </form>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
