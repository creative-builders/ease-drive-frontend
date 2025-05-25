import React, { useState } from 'react'
import Menu from './Menu'
import Profile from '../../../components/personalProfile/Profile'


const NavBar = ({ navStyle }) => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={`z-20 w-full border border-red-950 overflow-hidden bg-white md:bg-[#161616] fixed top-0 md:top-0`}>
      <Menu setIsOpen={setIsOpen}/>
      <Profile isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default NavBar