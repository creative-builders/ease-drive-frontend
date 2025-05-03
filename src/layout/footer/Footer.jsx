import { Link } from "react-router-dom"
import LocationIcon from "../../assets/icons/LocationIcon"


const Footer = () => {
  return (
    <div className="bg-gray-200 flex  p-2.5 min-h-[400px]">
      <div className=" lg:flex basis-[86%] m-auto">
        <div className="basis-[123px]">
          <Link className="mt-4 mb-2 lg:m-0 block text-green-300 font-bold text-base xl:text-2xl">EaseDrive</Link>
        </div>
        <ul className="flex flex-col basis-full flex-wrap lg:flex-row justify-around">
          <li className="mb-8 lg:mb-0">
            <div className="flex items-center gap-x-2">
            <LocationIcon className="w-[12px] h-[14.48px] lg:w-[18px] lg:h-[21.72px]" />
            <Link className="block text-xs font-normal xl:text-xl">Nsukka</Link>
            </div>
          </li>
          <li className="mb-8 lg:mb-0" >
            <Link className="mb-4 lg:mb-5 block font-bold text-base xl:text-2xl text-gray-800">Company</Link>
            <ul>
              <li className="mb-4 lg:mb-5 block text-xs font-normal xl:text-xl"><Link>About us</Link></li>
              <li><Link className="mb-4 lg:mb-5 block text-xs font-normal xl:text-xl">Careers</Link></li>
              <li><Link className="block text-xs font-normal xl:text-xl">Brand guidlines</Link></li>
            </ul>
          </li>
          <li className="mb-8 lg:mb-0">
            <Link className="mb-4 lg:mb-5 block font-bold text-base xl:text-2xl text-gray-800">Our Services</Link>
            <ul>
              <li><Link className="mb-4 lg:mb-5 block text-xs font-normal xl:text-xl">Rides</Link></li>
              <li><Link className="mb-4 lg:mb-5 block text-xs font-normal xl:text-xl">Car sharing</Link></li>
              <li><Link className="text-xs block font-normal xl:text-xl">Shuttle bus</Link></li>
            </ul>
          </li>
          <li className="mb-4 lg:mb-0">
            <Link className="mb-4 lg:mb-5 block font-bold text-base xl:text-2xl text-gray-800">Partner With Us</Link>
            <ul>
              <li><Link className="block mb-4 lg:mb-5 text-xs font-normal xl:text-xl">Register as a driver</Link></li>
              <li><Link className="block text-xs font-normal xl:text-xl">Register as passenger</Link></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Footer