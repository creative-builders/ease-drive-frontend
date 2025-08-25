import { NavLink } from "react-router-dom"


export const SidebarNavLink = ({ icon: Icon, href, title}) => {
  return (
    <NavLink end to = { href !== "/dashboard" ? `/dashboard${href}` : href }>
        {
        ({ isActive }) => (
          <div className={`${isActive ? "bg-primary-5 0 rounded-[36px]" :"bg-white"} mb-2 lg:mb-4 flex gap-x-1.5 flex-row items-center px-[13px] py-[7px]`}>
            <span>
              {isActive ? (
              <Icon stroke="#2ABD45" />
              ) : (
              <Icon />
             )}
           </span>
          <span className={`${isActive ? "text-primary-500" : "text-neutral-950"} text-base lg:text-lg font-medium`}>{title}</span>
        </div>
        )
        }
    </NavLink>
  )
}

