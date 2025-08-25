import { Link } from "react-router";
import { useDashboardNavLinks } from "../../../hooks/useDashboardNavLinks";
import { LogoText } from "../../LogoText";
import { SidebarNavLink } from "./NavLink"


export const SideBarMenu = () => {
  const navLinks = useDashboardNavLinks();
  return (
    <div className="w-[280px] hidden fixed top-0 left-0 lg:block px-4 pt-[45px] bg-white h-screen">
     <Link className="block mb-[40px]" to="/dashboard">
      <LogoText/>
     </Link>
      {
       navLinks.map(({ title, href, icon }, index ) => (
         <SidebarNavLink
          key={index}
          title = {title }
          href={ href }
          icon={ icon }
         />
       ))
      }
    </div>
  )
}

