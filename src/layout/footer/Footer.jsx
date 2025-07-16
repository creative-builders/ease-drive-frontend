import { Link } from "react-router-dom"
import LocationIcon from "../../assets/icons/LocationIcon"


const Footer = () => {
  return (
    <>
    <div className="mb-[189px] bg-white flex">
      <div className="lg:flex basis-[calc(100%-153px)] mx-auto">
        <ul className="flex flex-col basis-full flex-wrap lg:flex-row justify-between">
          <li className="mb-8 lg:mb-0" >
            <Link className="mb-4 lg:mb-5 block font-bold text-base xl:text-2xl text-gray-800">Ease Drive</Link>
            <ul>
              <li className="mb-4 lg:mb-5 block text-xs font-normal xl:text-xl"><Link>About us</Link></li>
              <li><Link className="mb-4 lg:mb-5 block text-xs font-normal xl:text-xl">Careers</Link></li>
              <li><Link className="block text-xs font-normal xl:text-xl">Brand guidlines</Link></li>
            </ul>
          </li>
          <li className="mb-8 lg:mb-0">
            <Link className="mb-4 lg:mb-5 block font-bold text-base xl:text-2xl text-gray-800">Links</Link>
            <ul>
              <li><Link className="mb-4 lg:mb-5 block text-xs font-normal xl:text-xl">Rides</Link></li>
              <li><Link className="mb-4 lg:mb-5 block text-xs font-normal xl:text-xl">Car sharing</Link></li>
              <li><Link className="text-xs block font-normal xl:text-xl">Shuttle bus</Link></li>
            </ul>
          </li>
          <li className="mb-4 lg:mb-0">
            <Link className="mb-4 lg:mb-5 block font-bold text-base xl:text-2xl text-gray-800">Help</Link>
            <ul>
              <li><Link className="block mb-4 lg:mb-5 text-xs font-normal xl:text-xl">Email</Link></li>
              <li><Link className="block text-xs font-normal xl:text-xl">Socials</Link></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
     <div className="border-t border-gray-300 my-4"></div>
      
      <div className="border border-blue-950 flex justify-around items-center">
        <div className="flex items-center">
          <LocationIcon />
          <span className="ml-2 text-xs font-normal xl:text-xl">Made in India</span>
        </div>
        <p className="text-xs font-normal xl:text-xl">© 2023 Ease Drive. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer