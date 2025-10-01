import HomeTopBanner from "../components/HomeTopBanner";
import { Link } from "react-router-dom";
import WhyVoltbull from "../components/WhyVoltbull";
import HomePageFeatures from "../components/HomePageFeatures";
import { BikeIcon } from "lucide-react";
import HomePageCounts from "../components/HomePageCounts";
import HomePageDistributer from "../components/HomePageDistributer";
import PreLoader from "../components/PreLoader";
import BatteryHotspot from "../components/BatteryHotspot";

const Home = () => {
  return (
    <div>
      <PreLoader />
      <HomeTopBanner
        backgroundImage="/images/homebike.jpg"
        staticText="Electrifying Voltbull Batteries"
        words={[
          "Certified",
          "Maintenance Free",
          "Quick Recharge",
          "Longest Warranty",
        ]}
      />

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full py-16 px-2 md:px-28">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-[#FF0000] text-[44px] lg:text-5xl leading-none font-extrabold">
              Unstoppable Power for Every Ride...
            </h1>
            <div className="bg-[#090000] h-2 w-1/4 p" />
            <p className="text-black text-justify font-normal">
              VOLTBULL ENERGY PRIVATE LIMITED is a forward-thinking energy
              solutions company committed to delivering world-class power
              products for the modern rider. With a focus on innovation,
              quality, and customer satisfaction, we specialize in offering
              premium imported bike batteries designed to meet the evolving
              needs of the two-wheeler market. Our strategic partnerships with
              global technology leaders enable us to bring advanced, reliable,
              and performance-driven products to India, backed by strong
              after-sales service and customer care.
            </p>
            <p className="text-black text-justify font-normal">
              <strong>VOLTBULL BATTERY</strong> is a high-performance imported
              bike battery crafted with advanced Korean technology, engineered
              to deliver unmatched power, reliability and long-lasting
              performance for two-wheelers. Designed for Indian roads and
              weather conditions, VOLTBULL offers consistent starting power,
              exceptional durability and superior safety features — making it
              the perfect choice for bikers who demand more from their ride.
            </p>
            <button className="group relative w-40 rounded-sm bg-[#1A1A1A] text-white text-base font-medium">
              <Link
                to="/contact"
                className="relative z-10 flex items-center gap-2 py-2 px-4"
              >
                Explore More <BikeIcon className="w-4 h-4" />
              </Link>
              <span
                className="absolute inset-0 bg-[#B80004]
               [clip-path:polygon(0_0,0_0,0_10%)]
               group-hover:[clip-path:polygon(0_0,900%_0,0_1000%)]
               transition-all duration-700 ease-in-out"
              ></span>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div
              style={{
                clipPath:
                  "polygon(13% 0, 100% 0, 100% 50%, 87% 100%, 0 100%, 0 50%)",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/home-page-image.jpg"
                alt="Home Page Image"
                className="w-80 md:w-[600px] h-80 md:h-[400px] lg:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="relative w-full flex flex-col items-center justify-center gap-4 py-12 px-6 text-white lg:bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/why-Voltbull.jpg')" }}
        >
          {/* Smoke Layer */}
          {/* <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80"></div> */}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202A8] to-[#0C1115]"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center">
              Excellence in Every Element
            </h1>
            <p className="text-[13px] text-center font-normal pt-4 leading-none">
              Power – Passion – Performance – Precision – Persistence –
              Protection – Prestige
            </p>
            <div className="bg-[#FF0000] h-[1px] w-40 mt-4" />
          </div>
        </div>
        <div className="flex items-center justify-center py-4 lg:py-24 lg:px-16">
          {/* <img
            src="/images/Voltbullbattires-prod.png"
            alt="Home Battery"
            className="max-w-full h-auto lg:h-[450px]"
          /> */}
          <BatteryHotspot />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] items-center justify-center bg-[#045dc4] text-white w-full py-6 px-2 xl:px-28 gap-4">
          <div className="w-full">
            <img
              src="/images/tcs.png"
              alt="Home Battery"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold">Engineering Power Together</h1>
            <p className="text-base text-justify">
              We at Voltbull believe in a future fueled by advanced technology.
              That’s why we’ve entered into a{" "}
              <strong>deep technological association</strong> with
              <strong> TCS Songli Group of Company, China</strong>, a pioneer in
              battery manufacturing and innovation. This collaboration unites
              our shared vision, allowing us to leverage TCS Songli’s vast
              expertise and proprietary technology. The result? Batteries that
              are a testament to superior engineering, providing you with a
              powerful, reliable, and technologically advanced product.
            </p>
          </div>
        </div>
        <HomePageFeatures />

        <WhyVoltbull />

        <HomePageCounts />

        <HomePageDistributer />
      </div>
    </div>
  );
};

export default Home;
