import React from "react";
import TopBanner from "../components/TopBanner";
import { Link } from "react-router-dom";
import Certificates from "../components/Certificates";

const About = () => {
  return (
    <div>
      {/* Top Banner */}
      <TopBanner
        backgroundImage="/images/bike1.jpg"
        staticText="Who We Are About"
        words={["Our Journey", "Company", "Mission/Vision"]}
      />

      {/* About Section */}
      <div className="flex flex-col py-16 max-w-6xl mx-auto px-6 gap-16 items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          {/* Left Column */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row items-center gap-4">
              <div className="bg-[#222222] h-[2px] w-20"></div>
              <h2 className="text-[#222222] font-semibold text-base">About Us</h2>
            </div>
            <h1 className="text-[#222222] text-[35px] md:text-[40px] lg:text-[50px] font-extrabold">Our Story</h1>
            <img
              src="/images/bike2.jpg"
              alt="bike image"
              className="w-full h-auto object-cover shadow-md"
            />
          </div>

          {/* Right Column */}
          <div className="w-full text-justify text-[#444444] text-[13px] lg:text-base font-normal leading-relaxed">
            <p>
              <strong>VOLTBULL ENERGY PRIVATE LIMITED</strong> is a
              forward-thinking energy solutions company committed to delivering
              world-class power products for the modern rider. With a focus on
              innovation, quality, and customer satisfaction, we specialize in
              offering premium imported bike batteries designed to meet the
              evolving needs of the two-wheeler market. Our strategic
              partnerships with global technology leaders enable us to bring
              advanced, reliable, and performance-driven products to India,
              backed by strong after-sales service and customer care.
              <br />
              <br />
              <strong>
                VOLTBULL BATTERY is a high-performance imported bike battery
                crafted with advanced Korean technology, engineered to deliver
                unmatched power, reliability and long-lasting performance for
                two-wheelers. Designed for Indian roads and weather conditions,
                VOLTBULL offers consistent starting power, exceptional
                durability and superior safety features — making it the perfect
                choice for bikers who demand more from their ride.
              </strong>
            </p>
          </div>
        </div>

        {/* Mission / Vision / Core Values */}
        <div className="flex flex-col gap-y-6 w-full mx-auto">
          <h1 className="text-[#222222] text-[35px] md:text-[40px] lg:text-[50px] font-extrabold">
            Guiding Our Journey
          </h1>
          <div className="bg-[#222222] h-[2px] w-1/2"></div>

          {/* Mission / Vision / Core Values */}
          <div className="w-full max-w-6xl mx-auto space-y-10">
            {/* Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-x-12 p-6 pb-8 border-b border-[#FF0000]">
              <div className="py-4 lg:py-0">
                <h3 className="text-base font-semibold text-[#FF0000]">
                  Direct & Clear
                </h3>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-base text-[text-[#222222]] font-semibold">OUR MISSION</h3>
                <p className="text-[13px] font-normal leading-relaxed text-[#444444">
                  To be the most trusted and innovative bike battery brand,
                  delivering world-class performance and reliability to riders,
                  setting new benchmarks in quality, technology and customer
                  satisfaction in the two-wheeler battery segment and empowering
                  every journey with confidence so riders can explore without
                  limits.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-x-12 p-6 pb-8 border-b border-[#FF0000]">
              <div className="py-4 lg:py-0">
                <h3 className="text-base font-semibold text-[#FF0000]">
                  Inspirational
                </h3>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-base text-[text-[#222222]] font-semibold">OUR VISION</h3>
                <p className="text-[13px] font-normal leading-relaxed text-[#444444">
                  To power every ride with advanced Korean technology, ensuring
                  superior starting power, extended battery life and maximum
                  rider confidence, blending global expertise with local needs
                  to create products that excel in India's diverse conditions,
                  and consistently delivering excellence through innovation,
                  reliability and unmatched service support.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-x-12 p-6 pb-8">
              <div className="py-4 lg:py-0">
                <h3 className="text-base font-semibold text-[#FF0000]">
                  Concise & Impactful
                </h3>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-base text-[text-[#222222]] font-semibold">OUR CORE VALUES</h3>
                <ul className="text-[13px] font-normal leading-relaxed text-[#444444">
                  <li>
                    <strong>Quality First - </strong>No compromise on premium
                    materials and strict performance standards.
                  </li>
                  <li>
                    <strong>Innovation - </strong>Continuous improvement with
                    the latest advanced battery technologies.
                  </li>
                  <li>
                    <strong>Customer Focus - </strong>Designed for maximum rider
                    safety, comfort, and complete satisfaction.
                  </li>
                  <li>
                    <strong>Sustainability - </strong>Eco-conscious practices in
                    product design and safe disposal.
                  </li>
                  <li>
                    <strong>Integrity - </strong>Honest, transparent, and
                    ethical business practices in every operation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-transparent via-black/90 to-black/90">
        <div className="flex flex-col py-12 max-w-6xl mx-auto px-6 gap-6 items-center justify-center">
          <h1 className="text-[35px] font-extrabold leading-none text-center text-black">
            Assured Excellence:
            <br />
            Our Official Certifications
          </h1>
          <h3 className="text-base text-center font-bold text-black leading-tight">
            We are proud to present the various certifications that underscore
            our commitment to quality, compliance, and excellence. These
            documents reflect our dedication to maintaining the highest
            standards in all aspects of our operations, ensuring that we
            consistently meet and exceed industry benchmarks. Each certificate
            is a testament to our rigorous processes and unwavering pursuit of
            customer satisfaction.
          </h3>

          <Certificates />

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 w-full items-start">
            {/* Text Section */}
            <div>
              <h3 className="text-[#FD3101] text-[15px] font-semibold uppercase tracking-wide">
                AT VOLTBULL
              </h3>
              <h1 className="text-3xl md:text-4xl text-white font-extrabold leading-tight mt-2">
                CUSTOMER SATISFACTION IS FIRST
              </h1>
              <div className="bg-[#FD3101] h-[2px] mt-6 w-5/6"></div>
              <p className="text-[17px] font-normal text-white leading-relaxed mt-6">
                We believe lasting partnerships are built on reliability,
                excellence, and genuine commitment. Our customer-focused
                approach guarantees a smooth and stress-free experience from the
                very first interaction. We offer personalized advice to help you
                select the ideal battery for your requirements, ensure quick
                delivery and expert installation, maintain honest and
                competitive pricing, and provide responsive after-sales
                assistance backed by a solid warranty. At Voltbull Energy, our
                relationship with you begins at the point of purchase and
                continues well beyond, delivering enduring value, confidence,
                and peace of mind every step of the way.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center mt-6 lg:mt-0 lg:justify-end">
              <img
                src="/images/Aboutpage.jpeg"
                alt="Customer Image"
                className="w-full max-w-[410px] h-auto object-cover shadow-md rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="relative w-full flex flex-col items-center justify-center gap-4 py-20 px-6 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
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
          <Link to="/contact">
            <button className="bg-[#FF1A44] rounded-sm text-white p-3 text-base hover:bg-red-800 mt-4 mb-10">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
