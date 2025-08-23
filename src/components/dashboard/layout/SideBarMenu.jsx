import { SidebarNavLink } from "./NavLink"
import { PassengerDashboardNavLinks } from "./SidebarLinks"


export const SideBarMenu = () => {
  return (
    <div className="w-[280px] px-4 bg-white h-screen border border-blue-500">
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

