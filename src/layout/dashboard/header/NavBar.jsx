import React, { useState } from 'react'
import Menu from './Menu'
import Profile from '../../../components/personalProfile/Profile'


const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='w-full relative overflow-hidden border bg-transparent xl:bg-[#161616]'>
      <Menu setIsOpen={setIsOpen}/>
      <Profile isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default NavBar