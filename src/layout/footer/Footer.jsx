import { Link } from "react-router-dom"
import footerBanner from "../../assets/images/footer-banner.png"
import { Divider } from "../../components/Divider/Divider";
import { EaseDriveLogo } from "../../assets/icons/EaseDriveLogo";


const Footer = () => {
  const year = new Date().getFullYear();
  const socialMediaLinks = [
    "https://www.facebook.com/share/1CH8YjifDU/",
    "https://www.instagram.com/geteasedrive?utm_source=qr&igsh=MTlyNXltcTZkYzdwcg=="
  ]
  return (
    <>
    <div className="mb-[62px] lg:mb-16 ">
      <img className="rounded-t-[84px] lg:rounded-t-[132px] mx-auto px-3" src={footerBanner} alt="footer banner" />
    </div>
    <div className="lg:mb-[119px] flex">
      <div className="lg:flex px-4 lg:basis-[calc(100%-153px)] lg:mx-auto">
        <ul className="flex flex-col basis-full flex-wrap lg:flex-row justify-between">
          <li className="lg:basis-[397px] mb-8 lg:mb-0" >
            <Link className="mb-4 lg:mb-5 flex gap-x-1.5 lg:gap-x-3 items-center italic font-bold text-base lg:text-2xl text-gray-900">
            <EaseDriveLogo/>
             <span>Ease Drive</span>
            </Link>
            <ul>
              <li className="mb-4 lg:mb-5 block text-xs font-normal lg:text-lg">
              <Link>
              Your smart campus ride solution. Book trusted UNN shuttle drivers for safe, quick, and affordable trips
              </Link>
              </li>
            </ul>
          </li>
          <li className="mb-8 lg:mb-0">
            <Link className="mb-4 lg:mb-5 block font-medium text-base lg:text-lg text-green-900">Links</Link>
            <ul>
              <li><Link className="mb-4 lg:mb-5 block text-xs font-normal lg:text-lg">Signup</Link></li>
              <li><Link className="mb-4 lg:mb-5 block text-xs font-normal lg:text-lg">Download the App</Link></li>
              <li><Link className="text-xs block font-normal lg:text-lg">Become a driver</Link></li>
            </ul>
          </li>
          <li className="mb-4 lg:mb-0">
            <Link className="mb-4 lg:mb-5 block font-medium text-base lg:text-lg text-green-900">Help</Link>
            <ul>
              <li><Link className="block mb-4 lg:mb-5 text-xs font-normal lg:text-lg">Email</Link></li>
              <li><Link className="block text-xs font-normal lg:text-lg">Socials</Link></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>

    {/* divider */}
    <Divider/>
      
      <div className="p-4 flex gap-y-2 flex-col lg:flex-row lg:justify-around lg:items-center">
        <p className="text-xs font-normal lg:text-lg">&copy; { year } easedrive. All rights reserved.</p>
        <p className="text-xs font-normal lg:text-lg">Privacy Policy</p>
        <p className="text-xs font-normal lg:text-lg">Terms of use</p>
        <p className="text-xs font-normal lg:text-lg">Proudly built by students, for students.</p>
    </div>
    </>
  )
}

export default Footer