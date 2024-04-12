import { Parallax } from "react-parallax";
import { AiOutlineLine } from "react-icons/ai";
import lucky from "../assets/fondoParallax/lucky.png";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const About = () => {
  return (
    <div className="about" id="about">
      <Parallax
        className="about-container-parallax -mt-5"
        strength={600}
        bg-white
      >
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="content flex flex-col md:flex-row"
        >
          <div className="mx-6 md:mx-36 md:w-1/2 md:pr-12">
            <h1 className="text-primary font-bold text-center md:text-left text-3xl tracking-wider md:ml-96 ">
              NOSOTROS
            </h1>

            <h1 className="text-primary md:ml-96">
              <AiOutlineLine className="w-full" />
            </h1>

            <div
              className="text-slate-600 p-3 md:mx-6 max-w-3xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Somos una agencia de publicidad que, además de desarrollar
              servicios de diseño gráfico, diseño de páginas web, marketing y
              comunicación, somos impulsores de cambios que generen bien común.
              Con un espíritu inconformista abierto a una nueva realidad más
              humana y sostenible. Trabajamos en base a unos códigos éticos de
              honestidad y responsabilidad con las personas y el medio ambiente.
            </div>

            <br />

            <div
              className="text-slate-600 -mt-6 p-3 md:mx-6 max-w-3xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Trabajar desde una gestión horizontal, siendo la transparencia, la
              auto-responsabilidad, la confianza y solidaridad los pilares que
              fundamentan esta empresa. Queremos ser referentes en cuanto a la
              comunicación ética y responsable. Colaborando y creando sinergias
              con otras entidades que, siguiendo con nuestra filosofía, quieran
              cambiar el mundo hacia la consciencia, responsabilidad y
              cooperación.
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-24 md:-mx-28 mx-auto max-w-xs">
            <img src={lucky} alt="Imagen" className="w-full" />
          </div>
        </motion.div>
      </Parallax>

      <div
        className="about-container -mt-5 content flex flex-col md:flex-row"
        style={{ display: "none" }}
      >
        <div className="mx-6 md:mx-36 md:w-1/2 md:pr-12">
          <h1 className="text-primary font-bold text-center md:text-left text-3xl tracking-wider md:ml-96 ">
            NOSOTROS
          </h1>

          <h1 className="text-primary md:ml-96">
            <AiOutlineLine className="w-full" />
          </h1>

          <div
            className="text-slate-600 p-3 md:mx-6 max-w-3xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Somos una agencia de publicidad que, además de desarrollar servicios
            de diseño gráfico, diseño de páginas web, marketing y comunicación,
            somos impulsores de cambios que generen bien común. Con un espíritu
            inconformista abierto a una nueva realidad más humana y sostenible.
            Trabajamos en base a unos códigos éticos de honestidad y
            responsabilidad con las personas y el medio ambiente.
          </div>

          <br />

          <div
            className="text-slate-600 -mt-6 p-3 md:mx-6 max-w-3xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Trabajar desde una gestión horizontal, siendo la transparencia, la
            auto-responsabilidad, la confianza y solidaridad los pilares que
            fundamentan esta empresa. Queremos ser referentes en cuanto a la
            comunicación ética y responsable. Colaborando y creando sinergias
            con otras entidades que, siguiendo con nuestra filosofía, quieran
            cambiar el mundo hacia la consciencia, responsabilidad y
            cooperación.
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-24 md:-mx-28 mx-auto max-w-xs">
          <img src={lucky} alt="Imagen" className="w-full" />
        </div>
      </div>

      <div style={{ minHeight: "-60vh" }}></div>
    </div>
  );
};

export default About;
