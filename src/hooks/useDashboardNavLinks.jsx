import { useRecoilValue } from "recoil";
import { HomeIcon } from "../assets/icons/dashboard/HomeIcon";
import { RidesIcon } from "../assets/icons/dashboard/RidesIcon";
import { ProfileIcon } from "../assets/icons/dashboard/ProfileIcon";
import { SupportIcon } from "../assets/icons/dashboard/SupportIcon";
import { userAtom } from "../components/atoms/userAtom";
import { NotificationIcon } from "../assets/icons/dashboard/NotificationIcon";
import { TripsIcon } from "../assets/icons/dashboard/TripsIcon";
import { EarningsIcon } from "../assets/icons/dashboard/EarningsIcon";


const dashboardNavConfig = {
  passenger: [
    {
      title: "Home",
      href: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "Ride",
      href: "/rides",
      icon: RidesIcon,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: ProfileIcon,
    },
    {
      title: "Support",
      href: "/support",
      icon: SupportIcon,
    },
  ],
  driver: [
    {
      title: "Home",
      href: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "Requests",
      href: "/requests",
      icon: RidesIcon,
    },
    {
      title: "Trips",
      href: "/trips",
      icon: TripsIcon,
    },
    {
      title: "Earnings",
      href: "/earnings",
      icon: EarningsIcon,
    },
    {
      title: "Notifications",
      href: "/notifications",
      icon: NotificationIcon,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: ProfileIcon,
    },
  ],
};


export const useDashboardNavLinks = () => {
  const user = useRecoilValue(userAtom);
  console.log(user)

  // default to passenger if role is missing
  const role = user?.role || "passenger";

  return dashboardNavConfig[role] || [];
};
