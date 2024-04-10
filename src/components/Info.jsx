import { AiOutlineLine } from "react-icons/ai";

const Info = () => {
  return (
    <div className="clientsContainer" id="clients">
      <div className="mx-auto mt-5 md:w-1/2 lg:max-w-4xl ">
        <div className="text-primary flex justify-center">
          <AiOutlineLine className="w-full" />
        </div>
        <div
          className=" font-semibold text-center text-slate-600 p-5 md:max-w-4xl -my-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Teléfono
          <span className="font-light mx-2">2224810329</span>
          Instagram:
          <span className="font-light mx-2">@pimientaestudio</span>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Info;
