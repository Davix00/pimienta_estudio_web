//**Importacion de iconos, logo y estados */
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
  const closeMenu = () => setClick(false);

  const navItems = [
    { link: "Nosotros", path: "about" },
    { link: "Clientes", path: "clients" },
    { link: "Servicios", path: "services" },
    { link: "Contacto", path: "contact" },
  ];

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
      <div className="bg-white h-10vh flex justify-between z-50 text-primary  lg:py-3 px-3 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="w-60 -mt-4 lg:w-60 ">
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
          {click && (
            <div className="2xl:hidden block absolute -mt-5 top-28 py-5 w-full left-0 right-0  bg-primary transition z-50">
              <ul className="text-center text-xl p-5 cursor-pointer">
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
              </ul>
            </div>
          )}
        </div>
        <button className=" block 2xl:hidden transition size-20 mr-20" onClick={handleClick}>
          {click ? <FaTimes /> : <TiThMenu />}
        </button>
      </div>
    </nav>
  );
};


export default Navbar;