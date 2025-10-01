import React from 'react'
import { FaBatteryFull, FaHandshake, FaTools, FaUsers } from 'react-icons/fa'

const HomePageCounts = () => {
  return (
    <div className='bg-gray-300 p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <FaUsers className='w-1/6 h-1/6'/>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='text-[3.5rem] font-extrabold'>10000</h1><span className='text-[1.875rem] font-extrabold'>+</span>
                </div>
                <p className='text-[1.2rem] font-normal'>Happy Customers</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <FaTools className='w-1/6 h-1/6'/>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='text-[3.5rem] font-extrabold'>150</h1><span className='text-[1.875rem] font-extrabold'>+</span>
                </div>
                <p className='text-[1.2rem] font-normal'>Service Centers</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <FaBatteryFull className='w-1/6 h-1/6'/>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='text-[3.5rem] font-extrabold'>8</h1><span className='text-[1.875rem] font-extrabold'>+</span>
                </div>
                <p className='text-[1.2rem] font-normal'>Types Of Bike Batteries</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <FaHandshake className='w-1/6 h-1/6'/>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='text-[3.5rem] font-extrabold'>120</h1><span className='text-[1.875rem] font-extrabold'>+</span>
                </div>
                <p className='text-[1.2rem] font-normal'>Trusted Retailers</p>
            </div>
        </div>

    </div>
  )
}

export default HomePageCounts