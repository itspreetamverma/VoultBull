import React from "react";
import TopBanner from "../components/TopBanner";
import { BikeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";

const Distributer = () => {
  return (
    <div>
      <TopBanner
        backgroundImage="/images/bike1.jpg"
        staticText="Together We Grow"
        words={["Partner With Us", "Grow With Us", "Join Our Network"]}
      />
      <div className="flex flex-col items-start justify-center py-16 px-6 lg:px-10 xl:px-40 gap-y-6">
        <div className="bg-[#FF0000] w-full text-3xl font-bold text-white p-2">
          <h2>Partner with Us: Become a Distributor</h2>
        </div>
        <div className="text-[#000000] font-normal">
          <p>
            Are you looking to expand your business and join a rapidly growing
            network of successful partners? We invite you to become a
            distributor for <strong>Voltbull</strong> We are committed to
            building strong, mutually beneficial relationships with our
            distributors, providing you with the products, support, and
            incentives you need to thrive in your local market. <br />
            <br />
            We believe in fostering long-term relationships built on trust,
            transparency, and shared success. By aligning your efforts with our
            brand goals, you not only enhance regional visibility but also drive
            long-term profitability and loyalty.
          </p>
        </div>
        <button className="bg-black rounded-sm text-white p-3 text-base flex items-center gap-2 hover:bg-[#FF0000]">
          <Link to="/contact" className="flex items-center gap-2">
            Contact Now <BikeIcon className="w-4 h-4" />
          </Link>
        </button>
        <div>
          <div>
            <h1 className="text-3xl md:4xl lg:5xl font-bold">
              Essential Details & Information
            </h1>
            <div className="bg-[#FF0000] h-[3px] w-32 mt-4" />
          </div>
          <div className="">
            <Accordion />
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center gap-4 py-20 px-6 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-95"
          style={{ backgroundImage: "url('/images/bike2.jpg')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-[#0C1115]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
            Get In Touch!
          </h1>
          <div className="bg-[#FF1A44] h-[1px] w-40 mt-4" />
          <button className="bg-[#FF1A44] rounded-sm text-white p-3 text-base hover:bg-red-800 mt-4 mb-10">
            <Link to="/contact" className="flex items-center gap-2">
              Explore More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Distributer;
