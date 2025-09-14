import { Link } from "react-router-dom";
import { useDashboardNavLinks } from "../../../hooks/useDashboardNavLinks";
import { LogoText } from "../../LogoText";
import { SidebarNavLink } from "./NavLink"
import { SideBarMenuLoader } from "../loaders/SideBarMenuLoader";


export const SideBarMenu = ({ isLoading }) => {
  const navLinks = useDashboardNavLinks();
  return (
    <div className="w-[280px] hidden fixed top-0 left-0 lg:block px-4 pt-[45px] bg-white h-screen">
     <Link className="block mb-[40px]" to="/dashboard">
      <LogoText/>
     </Link>
      {
       isLoading ? (
       Array.from({ length: navLinks.length }).map((_, i) => (
        <SideBarMenuLoader key={i} />
        ))
       ) : (
        navLinks.map(({ title, href, icon }, index ) => (
         <SidebarNavLink
          key={index}
          title = {title }
          href={ href }
          icon={ icon }
         />
       ))
       )
      }
    </div>
  )
}

