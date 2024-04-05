import React, { useRef, useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import "./modal.css";
const ContactUs = () => {
  const form = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ag7ow8v", "template_ytz3rq6", form.current, {
        publicKey: "eQwJyf6I_L-KywGgy",
      })
      .then(
        () => {
          setModalMessage("¡Correo enviado!");
          setModalVisible(true);
          form.current.reset();
        },
        (error) => {
          setModalMessage("Error, intenta de nuevo más tarde.");
          setModalVisible(true);
        }
      );
  };

  const closeModal = () => {
    setModalVisible(false);
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
                htmlFor="nombre"
                className="text-slate-600 font-bold text-xl"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
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
                htmlFor="mensaje"
                className="text-slate-600 font-bold text-xl -mt-10"
              >
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                name="message"
                rows="4"
                required
                className=" border-slate-600 border ml-7 lg:ml-7 lg:w-96"
              />
            </div>
            <button
              type="submit"
              value="Send"
              className="bg-primary text-white px-6 h-7 text-center mx-auto lg:mx-auto lg:mt-0 block hover:font-bold"
            >
              Enviar
            </button>
          </form>
          <br />
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
