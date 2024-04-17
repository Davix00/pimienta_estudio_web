import luckyDePie from "../assets/info/lucky de pie.svg";

const Info = () => {
  return (
    <section className="clientsContainer" id="clients">
      <div className="container mx-auto mt-5 lg:mt-10 md:w-full lg:max-w-4xl flex flex-col lg:flex-row items-center">
        <figure className="lg:w-1/3 mr-4 mb-4 lg:mb-0">
          <img
            src={luckyDePie}
            alt="Lucky de pie"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </figure>
        <div
          className="text-left text-slate-600 p-5 md:max-w-4xl lg:w-2/3"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div className="font-light mb-2">
            <strong>Teléfono: </strong>
            <span className="tel">2224810329</span>
          </div>
          <div className="font-light">
            <strong>Instagram: </strong>
            <a
              href="https://www.instagram.com/pimientaestudio/"
              className="instagram"
            >
              @pimientaestudio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
