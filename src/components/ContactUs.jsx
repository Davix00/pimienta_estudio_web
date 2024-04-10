import React, { useRef, useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
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
      <br />
      <div className="mx-auto mt-12 md:w-1/2 lg:max-w-4xl ">
        <h1 className="text-primary font-bold text-center text-3xl tracking-wider ">
          CONTACTO
        </h1>

        <div className="text-primary flex justify-center">
          <AiOutlineLine className="w-full" />
        </div>

        <div
          className="italic text-center text-slate-600 p-5 md:max-w-4xl"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.3rem" }}
        >
          Mándanos un mensaje, estaremos felices de atenderte.
        </div>

        <div className="ml-10 lg:ml-16">
          <form ref={form} onSubmit={sendEmail} className="ml-2 lg:ml-4">
            <div className="input-group">
              <label htmlFor="nombre" className="input-label">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="user_name"
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label htmlFor="mensaje" className="input-label">
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                name="message"
                rows="4"
                required
                className="input-field"
              />
            </div>
            <button type="submit" value="Send" className="submit-button">
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
      <br />
    </div>
  );
};

export default ContactUs;
