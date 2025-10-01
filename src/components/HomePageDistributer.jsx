import { BikeIcon } from "lucide-react";
import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePageDistributer = () => {
  return (
    <div className="py-16 px-6 md:px-40">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#223463] font-semibold text-center mb-12">
        Voltbull Battery Distributor
        <br />
        Partner with a Leading Battery Brand
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Image */}
        <img
          src="/images/Untitleddesig.jpeg"
          alt="Distributer"
          className="w-[100vh]"
        />

        {/* Content */}
        <div className="flex flex-col">
          <p className="text-xl font-normal text-gray-500 mb-10">
            We invite you to become a distributor for India’s leading
            two-wheeler battery manufacturing company. At Voltbull, we believe
            lasting partnerships are built on reliability, excellence, and
            genuine commitment. We provide our distributors with comprehensive
            support to ensure mutual growth and success.
          </p>
          <p className="font-semibold text-gray-400">
            We support our distributors with:
          </p>
          <ul className="list-none text-gray-400">
            <li>- Free transportation support for bulk orders</li>
            <li>- Marketing materials (posters, banners, digital assets)</li>
            <li>- Branded merchandise & shop boards</li>
            <li>- Special discounts & incentive schemes</li>
            <li>- Foreign tours & factory visits for top performers</li>
            <li>- Exclusive dealer gatherings & recognition programs</li>
            <li className="text-gray-400">
              <FaHandPointRight className="text-yellow-400 inline" />
              <Link
                to="/distributer"
                className="text-[#FF0000] font-bold inline mx-1"
              >
                Click Here & Grow with Voltbull
              </Link>
              <span className="inline">
                - Bigger Profits, Stronger Partnerships.
              </span>
            </li>
          </ul>
          <div></div>

          <Link
            to="/contact"
            className="mt-6 w-44 inline-flex items-center gap-2 bg-[#1A1A1A] text-white py-3 px-6 rounded-sm hover:bg-gray-900 transition-colors"
          >
            Explore More <BikeIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageDistributer;
