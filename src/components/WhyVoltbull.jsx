import React from "react";

const WhyVoltbull = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-8 py-16 px-6 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/2150781540-1.jpg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-6 max-w-6xl">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-semibold text-4xl md:text-5xl">Why Choose</h1>

          <h1 className="font-bold text-5xl md:text-6xl text-[#FF0000] relative inline-block">
            Volt Bull
            <span>
            <svg
              className="absolute left-1/2 -translate-x-1/2 -top-6"
              width="400"
              height="180"
              viewBox="-30 80 420 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 80 90 C 360 100, 370 180, 200 190 C 0 190, 0 100, 190 80 L 200 80"
                stroke="white"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                className="animate-draw"
              />
            </svg>
            </span>
            <style jsx>{`
              .animate-draw {
                stroke-dasharray: 1500;
                stroke-dashoffset: 0;
                animation: draw 2.5s ease-in-out infinite;
              }

              @keyframes draw {
                0% {
                  stroke-dashoffset: 1500; /* fully hidden */
                }

                100% {
                  stroke-dashoffset: 0; /* reset to hidden */
                }
              }
            `}</style>
          </h1>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            {[
              "Advanced Manufacturing Facility - Equipped with the latest automated machinery and testing equipment.",
              "Quality Assurance - Thorough QC checks at every stage of production for unmatched reliability.",
              "Innovation-Driven - Continuous R&D for next-gen battery technologies and smart energy storage.",
              "Skilled Workforce - Trained professionals committed to quality, safety, and efficiency.",
            ].map((text, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#FF0000] text-xl">⚡</span>
                <p className="text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4">
            {[
              "Strong Dealer Network - Wide pan-India presence with timely distribution and logistics support.",
              "OEM & Aftermarket Expertise - Tailored solutions with branding flexibility for both manufacturers and retailers.",
              "Customer-Centric Approach - Dedicated service, technical support, and responsive after-sales care.",
              "Eco-Friendly Operations - Sustainable production with recyclable materials and green manufacturing practices.",
            ].map((text, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#FF0000] text-xl">⚡</span>
                <p className="text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVoltbull;
