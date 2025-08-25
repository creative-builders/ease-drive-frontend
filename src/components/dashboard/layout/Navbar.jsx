import { InputField } from "../../customFormFields/InputField"
import { SearchIcon } from "../../../assets/icons/SearchIcon";
import LogoutButton from "../../../pages/auth/logout/LogoutButton";
import { userAtom } from "../../atoms/userAtom";
import { useRecoilValue } from "recoil";
import { SearchBox } from "../../../assets/icons/dashboard/SearchBox";
import { HamburgerIcon } from "../../../assets/icons/HamburgerIcon";
import { CloseMenuIcon } from "../../../assets/icons/CloseMenuIcon";
import { useState } from "react";

export const Navbar = () => {
  const user = useRecoilValue(userAtom);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
   const toggleMenu = () => {
      // setIsMenuOpen(prev => !prev);
      // document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
    }
  //  const closeMenu = () => {
  //     setIsMenuOpen(false);
  //      document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  // }
  
  return (
    <div className="p-4 pt-[18px] lg:pb-4 min-h-[63px]">
      <div className="flex justify-between lg:ml-[360px] lg:mr-[18px]">
        <SearchBox/>
        {/* Hamburger / Close Icon */}
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="cursor-pointer lg:hidden z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          >
          {isMenuOpen ? <CloseMenuIcon /> : <HamburgerIcon />}
         </button>
        <div className="hidden lg:flex gap-x-3 items-center">
          <p className="capitalize font-medium text-neutral-400 lg:text-lg">{user?.fullName}</p>
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}

