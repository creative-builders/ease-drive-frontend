import React, { useState } from 'react'
import Menu from './Menu'


const NavBar = ({ navStyle }) => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={`z-20 w-full overflow-hidden bg-white md:bg-[#161616] fixed top-0 md:top-0`}>
      <Menu setIsOpen={setIsOpen}/>
    </div>
  )
}

export default NavBar