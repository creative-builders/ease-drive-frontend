import { CarIcon } from "../../assets/icons/CarIcon";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import { TripIcon } from "../../assets/icons/TripIcon";
import { WalletIcon } from "../../assets/icons/WalletIcon";
import { BellIcon } from "../../assets/icons/BellIcon";
import { ProfileIcon } from "../../assets/icons/ProfileIcon";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [active, setActive] = useState("Requests");

  const menu = [
    { name: "Dashboard", icon: HomeIcon, url: "/dashboard" },
    { name: "Requests", icon: CarIcon, url: "/requests" },
    { name: "Trips", icon: TripIcon, url: "/trips" },
    { name: "Earnings", icon: WalletIcon, url: "/earnings" },
    { name: "Notification", icon: BellIcon, url: "/notifications" },
    { name: "Profile", icon: ProfileIcon, url: "/profile" },
  ];

  return (
    <aside className="w-72 hidden relative lg:block h-[1018px] px-5 py-11 bg-white flex flex-col items-center gap-10 overflow-hidden">
      {/* Logo */}
      <div className="flex items-center gap-3.5 pb-6">
        <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold">
          <img src="/ease-drivelogo.png" alt="Logo" />
        </div>
        <span className="text-stone-900 text-2xl font-extrabold font-inter">
          Ease Drive
        </span>
      </div>

      <div className="pt-8">
        {/* Nav Items */}
        <nav className="flex flex-col w-full gap-4">
          {menu.map(({ name, icon: Icon, url }) => (
            <Link
              to={url}
              key={name}
              onClick={() => setActive(name)}
              className={`flex items-center gap-2.5 px-3 py-1.5 h-12 rounded-[36px] transition-colors duration-200
                ${
                  active === name
                    ? "bg-primary-50 text-primary-700"
                    : "text-neutral-950 hover:bg-neutral-100 hover:text-primary-700"
                }`}
            >
              <Icon
                size={22}
                stroke="#1A7B2C"
                className={`${
                  active === name ? "text-primary-700" : "text-neutral-900"
                }`}
              />
              <span className="text-lg font-medium leading-relaxed">{name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
