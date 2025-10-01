import React, { useState } from "react";
import TopBanner from "../components/TopBanner";
import ProductCard from "../components/ProductCard";
import { FaUser } from "react-icons/fa";
import { Link } from "lucide-react";


const allproducts = [
  {
    name: "VB 2.5 LB BIKE BATTERY",
    img: "/images/VB-2.5-LB-BIKE-BATTERY.png",
    capacity: "2.5",
    size: "L-80mm | W-77mm | H-105mm",
    color: "Black",
    price: "₹957.00",
  },
  {
    name: "VB 4 LB BIKE BATTERY",
    img: "/images/VB-4-LB-BIKE-BATTERY.png",
    capacity: "4",
    size: "L-113mm | W-69mm | H-85mm",
    color: "Black",
    price: "₹1340.00",
  },
  {
    name: "VB 5 LB BIKE BATTERY",
    img: "/images/VB-5-LB-BIKE-BATTERY.png",
    capacity: "5",
    size: "L-119mm | W-60mm | H-129mm",
    color: "Black",
    price: "₹1560.00",
  },
  {
    name: "VB YT5 LB BIKE BATTERY",
    img: "/images/VByt5lb.png",
    capacity: "5",
    size: "L-113mm | W-69mm | H-105mm",
    color: "Black",
    price: "₹1560.00",
  },
  {
    name: "VB 7 LB BIKE BATTERY",
    img: "/images/VB-7-LB-BIKE-BATTERY.png",
    capacity: "7",
    size: "L-147mm | W-59mm | H-130mm",
    color: "Black",
    price: "₹1710.00",
  },
  {
    name: "VB 9 LB BIKE BATTERY",
    img: "/images/VB-9-LB-BIKE-BATTERY.png",
    capacity: "9",
    size: "L-136mm | W-76mm | H-134mm",
    color: "Black",
    price: "₹2460.00",
  },
  {
    name: "VB YT9 LB BIKE BATTERY",
    img: "/images/VB-Yt9-LB-BIKE-BATTERY.png",
    capacity: "9",
    size: "L-150mm | W-98mm | H-107mm",
    color: "Black",
    price: "₹2460.00",
  },
  {
    name: "VB 14 LB BIKE BATTERY",
    img: "/images/VB-14-LB-BIKE-BATTERY.png",
    capacity: "14",
    size: "L-132mm | W-89mm | H-163mm",
    color: "Black",
    price: "₹3250.00",
  },
];

const Products = () => {
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setFormData({ name: "", product: "", email: "", phone: "" });
  };

  return (
    <div>
      <TopBanner
        backgroundImage="/images/bike1.jpg"
        staticText="Maximum Power. Maximum Ride"
        words={["Result!", "Power!", "Quality"]}
      />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-10">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center mb-4">
          Our Range of Two-Wheeler Batteries
        </h1>
        <p className="text-center text-slate-600 max-w-6xl mx-auto mb-8">
          Engineered with unique expanded metal grid technology and AGM
          (Absorbent Glass Mat) separators, Voltbull batteries are factory
          charged and ready to deliver extreme performance from the moment of
          installation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 items-stretch">
          {/* Product Cards */}
          {allproducts.map((product, index) => (
            <div
              key={index}
              className="text-black rounded-lg"
            >
              <ProductCard product={product} />
            </div>
          ))}

          {/* Product Enquiry Card */}
          <div className="bg-white flex flex-col p-6 rounded-[1.5rem] shadow-md gap-y-6 h-full">
            <FaUser className="text-[#C50000] text-6xl mx-auto mb-4 h-20 w-20" />
            <h2 className="text-[2rem] text-[#333] font-medium mb-2 text-center">
              Product <br/> Enquiry Form
            </h2>
            <hr className="border-t-4 border-[#FF0000]" />
            <p className="text-[#666] mb-4 text-center">
              Have a question about a product? Please fill out the form below.
              We'll get back to you with the information you need as quickly as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-1 focus:ring-[#C50000] p-3 w-full"
                required
              />
              <input
                type="text"
                name="product"
                placeholder="Product Name"
                required
                value={formData.product}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-1 focus:ring-[#C50000] p-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-1 focus:ring-[#C50000] p-2 w-full"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-1 focus:ring-[#C50000] p-2 w-full"
              />
              <button
                type="submit"
                className="bg-[#C50000] text-white text-[18px] font-bold rounded-full px-4 py-1 hover:bg-red-800"
              >
                Submit
              </button>
            </form>
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
          <p className="text-xl lg:w-[550px] text-center font-medium">
            Join Us for a Long-Term Business Partnership Built on Trust,
            Excellence, and Mutual Growth
          </p>
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

export default Products;
