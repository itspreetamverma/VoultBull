import React, { useEffect, useState } from "react";

const TopBanner = ({ backgroundImage, staticText, words }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // zoom out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true); // zoom in
      }, 800);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <div
        className="relative text-white flex items-center  h-[400px] lg:h-[500px] px-6"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "bottom right",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 xl:pl-40 sm:px-20 md:px-32 lg:px-0 flex flex-col items-start justify-center text-left gap-4 max-w-6xl">
          {/* Static Line */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            {staticText}{" "}
            <span
              className={`text-[#FF0000] inline-block transform transition-all duration-700 ease-in-out ${
                fade ? "opacity-100 scale-100" : "opacity-20 scale-150"
              }`}
            >
              {words[index]}
            </span>
          </h1>
          <div className="bg-[#FF0000] h-1 w-1/4 mt-2" />
        </div>
      </div>

      {/* Bottom Red Bar */}
      <div className="bg-[#FF0000] h-3" />
    </>
  );
};

export default TopBanner;
