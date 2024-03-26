{
  /**Impototación de parallax**/
}
import { Parallax } from "react-parallax";
import { AiOutlineLine } from "react-icons/ai";
import fondo from "../assets/fondoParallax/fondoParallax.jpg";
import lucky from "../assets/fondoParallax/lucky.png";

const About = () => {
  return (
    <div className="about">
      <Parallax className="-mt-20" strength={600} bgImage={fondo}>
        <div className="content" style={{ height: "100vh" }}>

          <h1 className="text-primary font-bold text-center text-3xl tracking-wider">
            NOSOTROS
          </h1>

          <h1 className="text-primary">
            <AiOutlineLine className="w-full" />
          </h1>

          <div className="text-slate-600 p-3 mx-auto h-7" style={{fontFamily:"Poppins, sans-serif",width:"500px"}}>
            Somos una agencia de publicidad que a parte de desarrollar servicios
            de diseño gráfico, diseño páginas web, marketing y comunicación,
            somos impulsores de cambios que generen bien común. Con un espíritu
            inconformista abierto a una nueva realidad más humana y
            sostenible.Trabajamos en base a unos códigos éticos de honestidad y
            responsabilidad con las personas y el medio ambiente.
          </div>

          <br/>

          <div className="text-slate-600 mt-40  p-3 w-96  mx-auto h-7 " style={{fontFamily:"Poppins, sans-serif",width:"500px"}}>
            Trabajar desde una gestión horizontal, siendo la trasparencia, la
            auto-responsabilidad, la confianza y solidaridad los pilares que
            fundamentan esta empresa, queremos ser referentes en cuanto a la
            comunicación ética y responsable. Colaborando y creando sinergias
            con otras entidades que siguiendo con nuestra filosofía quieran
            cambiar el mundo hacia la consciencia, responsabilidad y cooperación.
          </div>

          <div className="xl:size-50 -mt-20" style={{marginLeft:"950px",marginTop:"-110px",width:"300px"}}>
            <img src={lucky}></img>
          </div>
        </div>
      </Parallax>
      <div style={{height:"100vh"}}></div>
    </div>
  );
};

export default About;
