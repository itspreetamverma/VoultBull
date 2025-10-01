import { Minus, Plus } from "lucide-react";

const BatteryHotspot = () => {
  return (
    <div className="relative flex items-center justify-center py-4 lg:py-6 lg:px-16">
      {/* Battery Image */}
      <img
        src="/images/Voltbullbattires-prod.png"
        alt="Home Battery"
        className="max-w-full h-auto lg:h-[450px]"
      />

      {/* Hotspot 1 - Warranty */}
       <div className="absolute top-[-25%] left-[22%] sm:top-[-10%] sm:left-[25%] md:top-[-10%] md:left-[27%] lg:top-[0%] lg:left-[31%] flex flex-col items-center">
        {/* Tooltip - Always Visible above */}
        <div className="mb-2 p-2 bg-[#222222] text-center text-white text-xs rounded shadow-md whitespace-normal max-w-[100px] sm:max-w-none">
          LONGEST WARRANTY
        </div>


        {/* Glow Circle */}
        <div className="relative flex items-center justify-center w-8 h-8 bg-[#FF1A44] text-white rounded-full shadow-lg">
          <Plus size={16} />
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF1A44] opacity-75 animate-ping"></span>
        </div>
      </div>

      {/* Hotspot 2 - Maintenance Free */}
      <div className="absolute top-[-25%] right-[22%] sm:top-[-10%] sm:right-[25%] md:top-[-10%] md:right-[27%] lg:top-[0%] lg:right-[33%] flex flex-col items-center">
        {/* Tooltip - Always Visible above */}
        <div className="mb-2 p-2 bg-[#222222] text-center text-white text-xs rounded shadow-md whitespace-normal max-w-[100px] sm:max-w-none">
          MAINTENANCE FREE
        </div>


        {/* Glow Circle */}
        <div className="relative flex items-center justify-center w-8 h-8 bg-[#FF1A44] text-white rounded-full shadow-lg">
          <Minus size={16} />
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF1A44] opacity-75 animate-ping"></span>
        </div>
      </div>
    </div>
  );
};

export default BatteryHotspot;
