import { Link } from "react-router-dom"
import footerBanner from "../../assets/images/footer-banner.png"
import { Divider } from "../../components/Divider/Divider";
import { EaseDriveLogo } from "../../assets/icons/EaseDriveLogo";
import  TwitterIcon  from "../../assets/icons/TwitterIcon";
import  FaceBookIcon  from "../../assets/icons/FaceBookIcon";
import  InstagramIcon  from "../../assets/icons/InstagramIcon";
import  LinkedinIcon  from "../../assets/icons/LinkedinIcon";
import NavLinkItem from "../header/NavLinkItem";


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
             <span className="text-2xl font-bold">Ease Drive</span>
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
            <Link className="mb-4 lg:mb-5 block font-medium text-base lg:text-2xl text-green-900">Links</Link>
            <ul className="flex flex-col float-start gap-1">
              <li><Link to={"signup-as"} className="mb-4 lg:mb-5 block text-xs font-normal lg:text-lg">Signup</Link></li>
              <NavLinkItem
                title="Download the App"
                className="mb-4 lg:mb-5 pl-0 block text-xs font-normal lg:text-lg"
                onClick={() => {
                alert("App coming soon");
                closeMenu();
                }}
              />
              <li><Link to={"driver-signup"} className="text-xs block font-normal lg:text-lg">Become a driver</Link></li>
            </ul>
          </li>
          <li className="mb-4 lg:mb-0">
            <Link className="mb-4 lg:mb-5 block font-medium text-base lg:text-2xl text-green-900">Help</Link>
            <ul className="flex flex-col float-start gap-1">
              <li><p className="block mb-4 lg:mb-5 text-xs font-normal lg:text-xs">Email</p></li>
              <li><Link to={"mailto:info@ease-drive.com"} className="block mb-4 lg:mb-5 text-xs font-normal lg:text-lg">info@ease-drive.com</Link></li>
              <li><Link className="block text-xs font-normal lg:text-xs">Socials</Link></li>
              <div className="flex items-center justify-around gap-2 mt-1">
                
                <Link>
                  <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center">
                    <FaceBookIcon className="text-white" />
                  </div>
                </Link>

                <Link>
                  <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center">
                    <TwitterIcon className="text-white" />
                  </div>
                </Link>

                <Link>
                  <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center">
                    <InstagramIcon className="text-white" />
                  </div>
                </Link>

                <Link to={"https://www.linkedin.com/company/ease-drive/"}>
                  <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center">
                    <LinkedinIcon className="text-white" />
                  </div>
                </Link>

              </div>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>

    {/* divider */}
    <Divider/>
      
      <div className="p-4 flex gap-y-2 flex-col lg:flex-row lg:justify-around lg:items-center">
        <p className="text-xs font-normal lg:text-lg">&copy; { year } easedrive. All rights reserved.</p>
        
         <Link className="text-xs font-normal lg:text-lg" to={"/terms-of-use"}>
         Terms of use
         </Link>
        
        <Link className="text-xs font-normal lg:text-lg" to={"/privacy"}>
        Privacy Policy
        </Link>
        
        <p className="text-xs font-normal lg:text-lg">Your Nationwide Delivery Partner.</p>
    </div>
    </>
  )
}

export default Footer