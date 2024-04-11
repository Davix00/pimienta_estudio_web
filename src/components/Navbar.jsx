import { useState } from "react";
import { Link } from "react-scroll";
import logoVerde from "../assets/logo/logoverde.png";
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

/**Menú que saldrá al dar clic al icono */
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  {
    /**Elementos navbar */
  }
  const navItems = [
    { link: "Nosotros", path: "about" },
    { link: "Hecho en casa", path: "clients" },
    { link: "Colaboraciones", path: "collaborations" },
    { link: "Nuestros servicios", path: "services" },
    { link: "Contactanos", path: "contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/**Contenefor del navbar */}
      <div className="bg-white h-10vh flex justify-between z-50  text-primary lg:py-3 px-3 py-4 flex-1">
        <div className="flex items-center flex-1">
          {/**Logo */}
          <span className="w-60 -mt-4 lg:w-60 sm:w-40 ">
            <img src={logoVerde} alt="logo" />
          </span>
        </div>
        {/* Navbar */}
        <div className="lg:flex hidden items center justify-end">
          <div className="flex-10 mt-8">
            <ul className="flex gap-8  mr-20 ">
              {/* Facebook */}
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100063761130649"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/pimientaestudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Menu para dispositivos moviles */}
        <div>
          {click && (
            <div className="lg:hidden block absolute -mt-5 top-28 py-5 w-full left-0 right-0  bg-primary transition z-50">
              <ul className="text-center text-xl p-5 cursor-pointer">
                {/**Estilos al dar clic en cada item */}
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    to={item.path}
                    onClick={closeMenu}
                  >
                    <li className="text-white  my-4 py-5 border-b border-slate-800 hover:bg-slate-800 hover:font-bold hover:rounded">
                      {item.link}
                    </li>
                  </Link>
                ))}
                {/* Facebook */}
                <div className="text-white flex justify-center gap-4">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100063761130649"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  {/* Instagram  */}
                  <li>
                    <a
                      href="https://www.instagram.com/pimientaestudio/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiInstagramFill />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          )}
        </div>
        {/* Boton de menu desplegable */}
        <button
          className="lg:hidden transition size-20 flex justify-end items-center"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <TiThMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
