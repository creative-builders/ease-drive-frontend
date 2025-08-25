import { useDashboardNavLinks } from "../../../hooks/useDashboardNavLinks";
import { SidebarNavLink } from "./NavLink"


export const SideBarMenu = () => {
  const navLinks = useDashboardNavLinks();
  return (
    <div className="w-[280px] hidden lg:block px-4 pt-[40px] bg-white h-screen">
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

