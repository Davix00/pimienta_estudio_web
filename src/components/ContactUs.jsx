import React, { useRef } from "react";
//import emailjs from "emailjs-com";
import { AiOutlineLine } from "react-icons/ai";

const Contactanos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gh0wkyl", "template_ytz3rq6", form.current, {
        publicKey: "eQwJyf6I_L-KywGgy",
      })
      .then(
        () => {
          console.log("EXITO!");
        },
        (error) => {
          console.log("ERROR...", error.text);
        }
      );
  };
  return (
    <div className="clientsContainer" id="contact">
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
          <form ref={form} onSubmit={sendEmail} className="ml-2 lg:ml-4">
            <div>
              <label
                htmlFor="name"
                className="text-slate-600 font-bold text-xl"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className=" border-slate-600 border ml-7 lg:ml-7 lg:w-96"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="text-slate-600 font-bold text-xl"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className=" border-slate-600 border ml-14 lg:ml-14 lg:w-96"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="text-slate-600 font-bold text-xl -mt-10"
              >
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className=" border-slate-600 border ml-7 lg:ml-7 lg:w-96"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 h-7 text-center mx-auto lg:mx-auto lg:mt-0 block hover:font-bold"
            >
              Enviar
            </button>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
