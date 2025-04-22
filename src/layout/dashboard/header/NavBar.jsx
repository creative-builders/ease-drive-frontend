import React, { useState } from 'react'
import Menu from './Menu'
import Profile from '../../../components/personalProfile/Profile'


const NavBar = ({ navStyle }) => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={`w-full overflow-hidden bg-transparent md:bg-[#161616] fixed top-3 md:top-0`}>
      <Menu setIsOpen={setIsOpen}/>
      <Profile isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default NavBar