import React from "react";
import { Link } from "react-router-dom";

const NavLinkItem = ({ to, title, onClick, className = "" }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={`block p-2 text-base font-normal ${className}`}
      >
        {title}
      </Link>
    </li>
  );
};

NavLinkItem.displayName = "NavLinkItem";
export default React.memo(NavLinkItem);
