import { BikeIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopBanner = ({ backgroundImage, staticText, words }) => {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 300); // middle of the flip
      setTimeout(() => {
        setFlipping(false);
      }, 600); // end of flip
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  // Split staticText into all words except last, and the last word
  const wordsArray = staticText.split(" ");
  const lastWord = wordsArray.pop(); // removes last word
  const firstPart = wordsArray.join(" ");

  return (
    <div
      className="relative w-screen min-h-[500px] lg:h-screen h-auto bg-cover bg-no-repeat bg-center md:bg-right-bottom flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content */}
      <div className="absolute md:px-16 text-white text-left">
        <div className="lg:px-20 xl:px-40">
          {/* Static sentence first part */}
          <h1 className="text-[32px] md:text-[55px] font-bold leading-tight">
            {firstPart}
          </h1>

          {/* Last word + flipping word */}
          <h1 className="text-[32px] md:text-[55px] font-bold leading-tight mt-2 gap-2">
            {lastWord}{" "}
            <span className="flip-container">
              <span
                className={`inline-block text-[23px] md:text-[45px] transform-origin-bottom-center ${
                  flipping ? "animate-flip-x-reverse" : ""
                }`}
                style={{
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {words[index]}
              </span>
            </span>
          </h1>

          {/* Description */}
          <div className="mt-2 md:mt-8 w-72 sm:w-96 md:w-2/3 pr-0 md:pr-6">
            <p className="text-xs sm:text-sm md:text-base font-normal">
              Designed for Indian roads and weather conditions, our batteries
              deliver unmatched starting power, long life, and reliability—so
              you can ride with confidence, anywhere, anytime.
            </p>
          </div>

          {/* Learn More Button */}
          <button className="group relative mt-4 md:mt-8 overflow-hidden rounded-sm bg-[#1A1A1A] text-white text-base">
            <Link
              to="/contact"
              className="relative z-10 flex items-center gap-2 md:py-3 md:px-6"
            >
              Learn More <BikeIcon className="w-4 h-4" />
            </Link>

            {/* triangle fill overlay */}
            <span
              className="absolute inset-0 bg-[#B80004]
               [clip-path:polygon(0_0,0_0,0_10%)]
               group-hover:[clip-path:polygon(0_0,900%_0,0_1000%)]
               transition-all duration-700 ease-in-out"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
