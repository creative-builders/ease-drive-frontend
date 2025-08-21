import { HomeIcon } from "../../../assets/icons/dashboard/HomeIcon"
import { ProfileIcon } from "../../../assets/icons/dashboard/ProfileIcon"
import { RidesIcon } from "../../../assets/icons/dashboard/RidesIcon"
import { SupportIcon } from "../../../assets/icons/dashboard/SupportIcon"


export const PassengerDashboardNavLinks = [
  {
   title:"Home",
   href:"/dashboard",
   icon: HomeIcon
  },
  {
   title:"Ride",
   href:"/rides",
   icon:RidesIcon
  },
   {
   title:"Profile",
   href:"/profile",
   icon:ProfileIcon
  },
  {
   title:"Support",
   href:"/support",
   icon: SupportIcon
  },
]



// Export Dashboad Nav links for the driver
export const DriverDashboardNavLinks = [
  {
   title:"Home",
   href:"/"
  }
]

