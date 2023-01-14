import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanUp() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const height = 250;
  const handleScroll = () => {
    if (!isVisible && window.scrollY > height) {
      setIsVisible(true);
    } else if (isVisible && window.scrollY <= height) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {!!isVisible && (
        <button
          className="fixed bottom-11 right-11 h-20 w-20 bg-roseBrown rounded-full flex items-center justify-center shadow-lg"
          onClick={scrollToTop}
        >
          <BsFillArrowUpCircleFill
            aria-label="scroll to top"
            className="text-roseWhite"
            size={32}
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
