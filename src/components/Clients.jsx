import { AiOutlineLine } from "react-icons/ai";
const Clientes = () => {
  const images = [
    {
      path: "../assets/",
    },
  ];
  return (
    <div className="clientsContainer">
      <br></br>
      <div className="mx-auto md:p-10 md:mx-32 md:ml-90 md:w-1/2  lg:max-w-4xl lg:mx-auto sm:p-10 ">
        <h1 className="text-primary font-bold text-center md:text-center text-3xl tracking-wider md:ml-90">
          HECHO EN CASA
        </h1>

        <h1 className="text-primary md:ml-90">
          <AiOutlineLine className="w-full" />
        </h1>

        <div
          className="text-center text-slate-600 p-4  md:mx-auto md:max-w-3xl xl:ml-auto "
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

export default Clientes;
