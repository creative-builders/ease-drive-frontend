import { SidebarNavLink } from "./NavLink"
import { PassengerDashboardNavLinks } from "./SidebarLinks"


export const SideBarMenu = () => {
  return (
    <div className="w-[280px] hidden lg:block px-4 pt-[40px] bg-white h-screen">
      {
       PassengerDashboardNavLinks.map(({ title, href, icon }, index ) => (
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

