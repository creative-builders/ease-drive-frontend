import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import { HamburgerIcon } from "../../assets/icons/HamburgerIcon";
import { CloseMenuIcon } from "../../assets/icons/CloseMenuIcon";
import NavLinkItem from "./NavLinkItem";
import { EaseDriveLogo } from "../../assets/icons/EaseDriveLogo";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  }
  const closeMenu = () => {
    setIsMenuOpen(false);
     document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  }

  return (
    <div className="relative flex justify-between items-center">
      <h2 className="flex items-center gap-x-1.5 text-lg lg:text-2xl italic font-bold text-gray-900">
        <EaseDriveLogo className="lg:w-[44px] lg:h-[44px]"/>
        <span className="block">EaseDrive</span>
      </h2>

      {/* Hamburger / Close Icon */}
      <button
       onClick={toggleMenu}
       className="cursor-pointer lg:hidden z-50"
       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
       aria-expanded={isMenuOpen}
       >
        {isMenuOpen ? <CloseMenuIcon /> : <HamburgerIcon />}
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/35 z-30 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Nav */}
      <nav
      className={`fixed top-0 right-0 w-2/3 h-full bg-white p-6 z-40 transition-transform duration-300 ease-in lg:hidden ${
       isMenuOpen ? "translate-x-0" : "translate-x-full ease-linear"
      }`}
      >
      <ul className="flex flex-col gap-y-4">
      <NavLinkItem to="/" title="Home" onClick={closeMenu} />
      <NavLinkItem title="Features" onClick={closeMenu} />
      <NavLinkItem to="/driver-signup" title="Become a Driver" onClick={closeMenu} />
      <NavLinkItem
       title="Download the App"
       onClick={() => {
        alert("App coming soon");
        closeMenu();
       }}
      />
     <NavLinkItem to="/login" title="Login" onClick={closeMenu} />
      <li>
         <Link to="/signup-as" onClick={closeMenu} className="block">
          <CustomButton
           name="Sign Up"
           extendedStyles="rounded-lg w-[145px] h-[48px] lg:h-[54px] p-4 text-sm lg:text-lg text-white font-medium"
          />
        </Link>
      </li>
     </ul>
     </nav>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-x-[114px]">
        <ul className="flex gap-x-4 items-center">
        <NavLinkItem to="/" title="Home" />
        <NavLinkItem to="#" title="Features" />
        <NavLinkItem to="/driver-signup" title="Become a Driver" />
        <NavLinkItem
          to="#"
          title="Download the App"
          onClick={() => alert("App coming soon")}
        />
        </ul>

        <ul className="flex gap-x-2 items-center">
         <li>
            <Link to="/login" className="block p-4">Login</Link>
          </li>
          <li>
            <Link to="/signup-as" className="block">
              <CustomButton
                name="Sign Up"
                extendedStyles="rounded-lg w-[145px] h-[48px] lg:h-[54px] p-4 text-sm lg:text-lg text-white font-medium"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
