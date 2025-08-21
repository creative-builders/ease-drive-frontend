// components/NavLink.js
import React from "react";
import { Link, useLocation } from "react-router-dom";


const NavLink = React.memo(({ href, title }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link 
      to={href}
      className={`px-3 py-2 transition ${
        isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
      }`}
    >
      {title}
    </Link>
  );
});

NavLink.displayName = "NavLink";

export default NavLink;



// components/Header.js

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <nav className="flex space-x-4 p-4 border-b">
      {navLinks.map((link) => (
        <NavLink key={link.href} href={link.href} title={link.title} />
      ))}
    </nav>
  );
};

export default Header;

