import { Divider } from "../../components/Divider/Divider"
import Menu from "./Menu"



const NavBar = () => {
  return (
     <>
    <div className="px-4 lg:px-[98px] py-4 w-full" >
        <Menu/>
    </div>
     <Divider/>
     </>
  )
}

export default NavBar