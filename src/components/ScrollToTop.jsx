import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full cursor-pointer border-2 border-white"
          onClick={scrollToTop}
        >
          <BsArrowUp size={24} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
