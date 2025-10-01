import React from 'react'
import { motion } from "framer-motion"
import PromoIcon from '../../../../assets/icons/PromoIcon';
import CustomButton from '../../../../components/CustomButton';
// import BackArrow from '../../../../components/BackArrow';


export const BookDriver = ({ driver, onBack }) => {

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md w-full lg:w-[557px] absolute top-12 flex flex-col gap-4 p-6"
    >
      <button
        onClick={onBack}
        className="text-green-600 mb-4 flex items-center gap-1 hover:cursor-pointer"
      >
        {/* <BackArrow /> */}
       ← Back
      </button>

      <div className="flex items-center gap-4 mb-4">
        <img
          src={driver.image}
          alt={driver.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className='flex flex-col gap-1'>
          <h3 className="text-base leading-[100%] tracking-normal font-semibold">{driver.name}</h3>
          <p className="font-normal text-base leading-normal tracking-normal">{driver.distance}</p>
          <p className="text-xs font-normal leading-normal tracking-normal">
            ⭐ {driver.rating} ({driver.reviews} Reviews)
          </p>
        </div>
      </div>
      <div className='flex justify-end'><PromoIcon /></div>
      <div className="flex flex-col gap-2">
        <p className='font-normal text-sm lg:text-base leading-normal tracking-normal text-black'>
          <span className="font-medium text-neutral-400">Current Location:</span>{" "}
          {driver.location}
        </p>
        <p className='font-normal text-sm lg:text-base leading-normal tracking-normal text-black'>
          <span className="font-medium text-neutral-400">Plate Number:</span>{" "}
          {driver.plateNumber}
        </p>
        <p className='font-normal text-sm lg:text-base leading-normal tracking-normal text-black'>
          <span className="font-medium text-neutral-400">Vehicle Type:</span>{" "}
          {driver.vehicleType}
        </p>
        <p className='font-normal text-sm lg:text-base leading-normal tracking-normal text-black'>
          <span className="font-medium text-neutral-400">Model:</span> {driver.model}
        </p>
        <p className='font-normal text-sm lg:text-base leading-normal tracking-normal text-black'>
          <span className="font-medium text-neutral-400">Seats:</span> {driver.seats}
        </p>
        <p className="text-sm">
          Price: <span className="text-red-500 font-medium">{driver.price}</span>
        </p>

      </div>

      <CustomButton
       name='Confirm Booking'
       extendedStyles="mt-52 md:mt-6 w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-700 transition"
        
        />
    </motion.div>
  );
}
