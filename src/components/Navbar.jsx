/**Importacion de iconos, logo y estados */
import { useState } from "react";
import { Link } from "react-scroll";
import logoVerde from "../assets/Logos/logoverde.png";
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


/**Menú que saldrá al dar clic al icono */
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  const content = <>
      <div className="2xl:hidden block absolute -mt-5 top-28 py-10 w-full left-0 right-0  bg-primary transition z-50">
        <ul className="text-center text-xl p-5">
          <Link spy={true} smooth={true} to="Nosotros">
            <li className="text-white my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Nosotros</li>
          </Link>
          <Link spy={true} smooth={true}to="HechoEnCasa">
            <li className="text-white my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Hecho en casa</li>
          </Link>
          <Link spy={true} smooth={true}to="Servicios">
            <li className="text-white my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Servicios</li>
          </Link>
          <Link spy={true} smooth={true}to="Contacto">
            <li className="text-white my-4 py-4  border-slate-800 hover:bg-slate-800 hover:rounded">Contacto</li>
          </Link>
        </ul>
      </div>
  </>
  
  return (
    /**Contenido que se mostrará */
    <nav>
      <div className="bg-white h-10vh flex justify-between z-50 text-primary lg:py-5 px-3 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span  className="w-60 -mt-4 " >
            <img src={logoVerde} alt="logo" />
          </span>
        </div>
        <div className="2xl:flex md:flex max-lg:flex scroll-ml-16 max-sm:flex ml-16 items center justify-end hidden">
          <div className="flex-10 mt-8">
            <ul className="flex gap-8  mr-20 ">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100063761130649" target="_blank" rel="noopener noreferrer">
                    <FaFacebook/>
                  </a>             
                </li>
                <li>
                  <a href="https://www.instagram.com/pimientaestudio/" target="_blank" rel="noopener noreferrer">
                  <RiInstagramFill/>
                  </a>
                </li>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className=" block 2xl:hidden transition size-20 mr-20" onClick={handleClick}>
          {click ? <FaTimes /> : <TiThMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
