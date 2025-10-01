import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div
    className="group flex flex-col items-center rounded-[1.5rem] shadow-md gap-4 overflow-hidden w-full h-full p-4 transition-all duration-300 bg-white hover:bg-[#C50000] text-black"
  >
    <img
      src={product.img}
      alt={product.name}
      className="h-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />

    {/* Product Name */}
    <h3 className="font-bold text-[#333] text-center mt-4 mb-2 text-[1rem] transition-colors duration-300 group-hover:text-[#fff]">
      {product.name}
    </h3>

    {/* Product Details */}
    <div className="grid grid-cols-2 gap-2 lg:gap-4 text-[0.755rem] font-semibold text-[#666] mt-2 w-full">
      {["Capacity", "Size", "Color", "M.R.P."].map((label, idx) => (
        <div
          key={idx}
          className="bg-[#e5e7eb] p-2 rounded-xl text-center transition-colors duration-300 group-hover:bg-white group-hover:text-[#C50000]"
        >
          <p className="font-semibold text-[#C50000] text-[1.125rem] group-hover:text-[#C50000]">
            {label}
          </p>
          <p className="text-[0.75rem] font-medium">
            {label === "Capacity" && `@C10(AH) : ${product.capacity}`}
            {label === "Size" && product.size}
            {label === "Color" && product.color}
            {label === "M.R.P." && product.price}
          </p>
        </div>
      ))}
    </div>

    {/* Button */}
    <Link
      to="/about"
      className="mt-4 w-full text-center py-2 rounded-full bg-[#C50000] text-[#fff] border-2 border-transparent text-[0.875rem] font-semibold transition-all duration-300 group-hover:border-white"
    >
      Explore More
    </Link>
  </div>
);


export default ProductCard;
