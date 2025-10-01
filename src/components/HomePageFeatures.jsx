import { BatteryCharging, Bike, BikeIcon, WrenchIcon } from 'lucide-react'
import React from 'react'
import Carousel from './HomePageCarousel'
import { Link } from 'react-router-dom'
import { FaBacon, FaBatteryFull, FaCarBattery, FaLeaf, FaTruckMonster } from 'react-icons/fa'
import { BsScrewdriver } from 'react-icons/bs'

const HomePageFeatures = () => {
  return (
            <div className="py-14 px-10 lg:px-20 xl:px-32 bg-gradient-to-b from-transparent to-black/20">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              Premium Imported Two-Wheeler Battery
            </h1>
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-[#FF0000]">
              Models: 2.5LB, 4LB, 5LB, YT5L, 7, LB, 9 LB, YT9L, 14LB
            </h4>
            <div className="bg-[#FF0000] w-2/12 h-[2px]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-start sm:justify-center gap-4 items-center py-4 lg:py-6 xl:py-10">
            <div className="flex flex-col gap-4 lg:gap-10">
              <div className="group flex flex-row justify-start items-center gap-4">
                <div className="bg-white rounded-full p-4 text-black transition-colors duration-300 group-hover:bg-[#FF0000] group-hover:text-white">
                  <BsScrewdriver className="w-8 h-8 rounded-full" />
                </div>
                <div>
                  <h2 className="text-lg lg::text-xl font-bold group-hover:text-[#FF0000]">
                    KOREAN TECHNOLOGY
                  </h2>
                  <p className="text-sm text-slate-700">
                    Precision manufacturing for higher reliability.
                  </p>
                </div>
              </div>
              <div className="group flex flex-row justify-start items-center gap-4">
                <div className="bg-white rounded-full p-4 text-black transition-colors duration-300 group-hover:bg-[#FF0000] group-hover:text-white">
                  <FaCarBattery className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-lg lg::text-xl font-bold group-hover:text-[#FF0000]">
                    LONGER BATTERY LIFE
                  </h2>
                  <p className="text-sm text-slate-700">
                    Extended lifecycle to reduce replacement frequency.
                  </p>
                </div>
              </div>
              <div className="group flex flex-row justify-start items-center gap-4">
                <div className="bg-white rounded-full p-4 text-black transition-colors duration-300 group-hover:bg-[#FF0000] group-hover:text-white">
                  <FaTruckMonster className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-lg lg::text-xl font-bold group-hover:text-[#FF0000]">
                    HIGH CRANKING POWER
                  </h2>
                  <p className="text-sm text-slate-700">
                    Reliable starts even in extreme temperatures.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-6xl mx-auto lg:p-4 bg-transparent rounded-2xl">
              <Carousel />
            </div>

            <div className="flex flex-col gap-10">
              <div className="group flex flex-row lg:flex-row-reverse justify-start items-center gap-4">
                <div className="bg-white rounded-full p-4 text-black transition-colors duration-300 group-hover:bg-[#FF0000] group-hover:text-white">
                  <FaBatteryFull className="w-8 h-8" />
                </div>
                <div className="text-left lg:text-right">
                  <h2 className="text-lg lg::text-xl font-bold group-hover:text-[#FF0000]">
                    QUICK RECHARGE
                  </h2>
                  <p className="text-sm text-slate-700">
                    Recovers power faster for frequent riders.
                  </p>
                </div>
              </div>
              <div className="group flex flex-row lg:flex-row-reverse justify-start items-center gap-4">
                <div className="bg-white rounded-full p-4 text-black transition-colors duration-300 group-hover:bg-[#FF0000] group-hover:text-white">
                  <FaBacon className="w-8 h-8" />
                </div>
                <div className="text-left lg:text-right">
                  <h2 className="text-lg lg::text-xl font-bold group-hover:text-[#FF0000]">
                    VIBRATION RESISTANT
                  </h2>
                  <p className="text-sm text-slate-700">
                    Built to withstand rough roads and off-road riding.
                  </p>
                </div>
              </div>
              <div className="group flex flex-row lg:flex-row-reverse justify-start items-center gap-4">
                <div className="bg-white rounded-full p-4 text-black transition-colors duration-300 group-hover:bg-[#FF0000] group-hover:text-white">
                  <FaLeaf className="w-8 h-8" />
                </div>
                <div className="text-left lg:text-right">
                  <h2 className="text-lg lg::text-xl font-bold transition-colors duration-300 group-hover:text-[#FF0000]">
                    ECO-FRIENDLY
                  </h2>
                  <p className="text-sm text-slate-700">
                    Designed with recyclable materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-auto rounded-sm bg-slate-900 text-white text-base">
              <Link
                to="/contact"
                className="relative z-10 flex items-center gap-2 py-3 px-6"
              >
                Explore Our Batteries <BikeIcon className="w-4 h-4" />
              </Link>
            </button>
          </div>
        </div>
  )
}

export default HomePageFeatures