import lucky from "../assets/Logos/lucky.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="bg-primary h-10vh flex justify-between z-50 text-primary lg:py-3 px-3 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="italic font-bold text-white text-2xl lg:text-5xl lg:ml-10 sm:ml-10">COMING SOON</span>
          <span className="italic font-bold text-white text-2xl lg:text-5xl lg:ml-80 sm:ml-32">LUCKY STORE</span>
          <span className="w-60 ml-auto mt-4 ">
            <img src={lucky} alt="logo" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
