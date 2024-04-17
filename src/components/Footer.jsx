import lucky from "../assets/logo/lucky.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="bg-primary h-auto lg:h-10vh flex flex-col lg:flex-row justify-between z-50 text-primary lg:py-3 px-3 py-4 flex-1">
        <div className="flex items-center justify-center lg:justify-start flex-1">
          <span
            className="italic font-bold text-white text-2xl lg:text-5xl lg:ml-10 sm:ml-10"
            style={{ marginLeft: "1rem" }}
          >
            COMING SOON
          </span>

          <span
            className="italic font-bold text-white text-2xl lg:text-5xl lg:ml-0 lg:mr-auto sm:ml-32"
            style={{ marginLeft: "1rem" }}
          >
            LUCKYSTORE
          </span>
          <span className="w-60 ml-auto mt-4 lg:mt-0">
            <img src={lucky} alt="logo" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
