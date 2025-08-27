import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../atoms/userAtom";
import { SearchBox } from "../../../assets/icons/dashboard/SearchBox";
import { HamburgerIcon } from "../../../assets/icons/HamburgerIcon";
import { CloseMenuIcon } from "../../../assets/icons/CloseMenuIcon";
import LogoutButton from "../../../pages/auth/logout/LogoutButton";
import { SidebarNavLink } from "./NavLink";
import { useDashboardNavLinks } from "../../../hooks/useDashboardNavLinks";
import { LogoText } from "../../LogoText";

export const Navbar = () => {
  const user = useRecoilValue(userAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks =  useDashboardNavLinks();

  // Lock/unlock scroll when menu is open
  // useEffect(() => {
  //   document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isMenuOpen]);

  return (
    <nav className="p-4 bg-transparent fixed lg:relative w-full top-0 left-0 z-[1020] pt-[18px] lg:pb-4 min-h-[63px]">
      <div className="flex flex-row justify-between items-center gap-x-4 lg:ml-[360px] lg:mr-[18px]">
        <SearchBox />

        {/* Hamburger / Close Icon */}
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="flex justify-center items-center h-[40px] w-[40px] bg-white rounded-[12px] py-[3px] lg:hidden z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <CloseMenuIcon className="h-[24px] w-[24px]" />
          ) : (
            <HamburgerIcon className="h-[24px] w-[24px]" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-x-3 items-center">
          <p className="capitalize font-medium text-neutral-400 lg:text-lg">
            {user?.fullName}
          </p>
          <LogoutButton />
        </div>
      </div>

       {/* Overlay (closes menu when clicked) */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
        ></div>
      )}

      {/* Mobile Dropdown Menu with Slide-Up Animation */}
      <div
        className={`absolute z-40 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-6 lg:hidden transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        top-0`}
      >
       <div className="px-[13px] mb-4">
         <LogoText/>
       </div>
       {
        navLinks.map(({ title, href, icon }, index ) => (
        <SidebarNavLink
        key={index}
        title = {title }
        href={ href }
        icon={ icon }
        onClick={() => setIsMenuOpen(false)}
        />
        ))
        }
        <LogoutButton text="Logout" />
      </div>
    </nav>
  );
};
