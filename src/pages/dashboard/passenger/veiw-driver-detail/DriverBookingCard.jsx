import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { BackArrowIcon } from '../../../../assets/icons/BackArrowIcon'

export const DriverBookingCard = ({ drivers, onSelectDriver }) => {
  return (
    <div className="bg-white w-full lg:w-31 rounded-lg shadow-current lg:shadow-md flex flex-col top-2 p-5 gap-4">
      <div className=' w-full mb-4 flex items-center gap-20'>
        <BackArrowIcon />
        <h2 className="text-lg font-semibold">Available Drivers</h2>
      </div>
      {drivers.map((driver) => (
        <div
          key={driver.id}
          className="flex flex-col items-center gap-2 justify-between w-full lg:w-29 py-4 px-3"
        >
          <div className="flex flex-col w-full items-start gap-3">
            <img
              src={driver.image}
              alt={driver.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className='flex flex-col gap-1'>
              <p className="font-semibold text-xs leading-normal tracking-normal">{driver.name}</p>
              <p className="font-normal text-xs leading-normal">{driver.distance}</p>
              <p className="text-sm">
                Price: <span className="text-red-500 font-medium gap-2 px-2 rounded-lg bg-[#EA433514]">{driver.price}</span>
              </p>
              <p className="text-xs font-normal leading-normal tracking-normal text-gray-600">
                ⭐ {driver.rating} ({driver.reviews} Reviews)
              </p>
            </div>
          </div>
          <CustomButton
            name=' View details'
            btnClick={() => onSelectDriver(driver)}
            extendedStyles="px-4 py-2 font-medium text-sm leading-normal tracking-normal w-full border border-green-500 text-green-600 bg-primary-50 rounded-lg36 gap-2"
          />

        </div>
      ))}
    </div>
  )
}