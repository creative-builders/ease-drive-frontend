// import React from 'react'
// import { Link } from 'react-router-dom'
// import logout from '../../assets/images/Logout.png'
// import setting from '../../assets/images/setting.png'
// import userIcon from '../../assets/images/user-icon.png'
// import user from '../../assets/images/smallPro.png'
// import Camera from '../../assets/images/camera.png'
// import Canelled from '../../assets/images/canelled.png'

// const Profile = ({ setIsOpen, isOpen }) => {
//   if (!isOpen) return null; // Only render when open

//   return (
//     <div className="fixed inset-0 z-40">
//       {/* Overlay */}
//       <div 
//         className="absolute inset-0 bg-black opacity-40"
//         onClick={() => setIsOpen(false)}
//       />

//       {/* Sidebar modal */}
//       <main className="absolute top-0 right-0 bg-white z-50 h-screen w-[229px] p-4 rounded-l-[56px] shadow-lg transform transition-transform duration-500 ease-in-out translate-x-0">
//         <img src={Canelled} alt="Cancel" className='h-4 w-4 cursor-pointer ml-9 float-right' onClick={() => setIsOpen(false)} />

//         <div className="h-[70px] w-[70px] border border-[#20AE3A] relative rounded-[70px] flex-shrink-0">
//           <img src={userIcon} className='h-full w-full object-contain rounded-full' alt="" />
//           <div className="small h-5 w-5 border rounded-full border-[#20AE3A] bg-[#FFFBE7] flex flex-shrink-0 items-center justify-center absolute bottom-0 right-0">
//             <img src={Camera} className='h-3/5 w-3/5 object-cover' alt="" />
//           </div>
//         </div>

//         <article className='h-16 w-fit'>
//           <h2 className='text-[#414141] font-[poppins] text-base font-medium not-italic leading-normal'>Mabel Okoro</h2>
//           <p className='text-[#414141] font-[poppins] text-[12px] font-light not-italic leading-normal'>mabel.faustina.okoro@gmail.com</p>
//         </article>

//         <section className='h-fit gap-8 w-full flex flex-col'>
//           <Link to={'/EditProfile'}>
//             <div className="flex items-center justify-start gap-4 cursor-pointer">
//               <img src={user} alt="" />
//               <span>Edit profile</span>
//             </div>
//           </Link>
//           <Link to={'/Setting'}>
//             <div className="flex items-center justify-start gap-4 cursor-pointer">
//               <img src={setting} alt="" />
//               <span>Setting</span>
//             </div>
//           </Link>
//           <div className="flex items-center justify-start gap-4 cursor-pointer">
//             <img src={logout} alt="" />
//             <span>Log out</span>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Profile

// don't touch yet

import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import setting from '../../assets/images/setting.png'

import user from '../../assets/images/smallPro.png'
import Camera from '../../assets/images/camera.png'
import Canelled from '../../assets/images/canelled.png'
import { userAtom } from '../atoms/userAtom'
import { useRecoilValue } from 'recoil'
import LogoutButton from '../../pages/auth/logout/LogoutButton'

const Profile = ({ setIsOpen, isOpen }) => {
  const fileInputRef = useRef(null);
  const userData = useRecoilValue(userAtom);  // Assuming you're using Recoil for state management

  const [profilePic, setProfilePic] = useState(userData?.profileImage); // Default to userIcon if no image is set



  if (!isOpen) return null; // Only render when open

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProfilePic(imageUrl)
    }
  }


  return (
    <div className="fixed inset-0 z-40">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-40"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar modal */}
      <main className="absolute top-0 right-0 bg-white z-50 h-screen w-[229px] p-4 rounded-l-[56px] shadow-lg transform transition-transform duration-500 ease-in-out translate-x-0">
        <img src={Canelled} alt="Cancel" className='h-4 w-4 cursor-pointer ml-9 float-right' onClick={() => setIsOpen(false)} />

        <div className="h-[70px] w-[70px] border border-[#20AE3A] relative rounded-[70px] flex-shrink-0">
          <img src={profilePic} className='h-full w-full object-cover rounded-full' alt="Profile" />
          
          {/* Upload trigger */}
          <div 
            className="small h-5 w-5 border rounded-full border-[#20AE3A] bg-[#FFFBE7] flex items-center justify-center absolute bottom-0 right-0 cursor-pointer"
            onClick={() => fileInputRef.current.click()}
          >
            <img src={Camera} className='h-2/4 w-2/4 object-cover' alt="Camera" />
          </div>

          {/* Hidden file input */}
          <input 
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <article className='h-16 w-fit'>
          <h2 className='text-[#414141] font-[poppins] text-base font-medium not-italic leading-normal'>{userData?.fullName}</h2>
          <p className='text-[#414141] font-[poppins] text-[12px] font-light not-italic leading-normal'>{userData?.email}</p>
        </article>

        <section className='h-fit gap-8 w-full flex flex-col'>
          <NavLink to="/dashboard/edit-profile">
            <div className="flex items-center justify-start gap-4 cursor-pointer">
              <img src={user} alt="" />
              <span>Edit profile</span>
            </div>
          </NavLink>
          <NavLink to="/dashboard/settings">
            <div className="flex items-center justify-start gap-4 cursor-pointer">
              <img src={setting} alt="" />
              <span>Setting</span>
            </div>
          </NavLink>
           <LogoutButton/>
        </section>
      </main>
    </div>
  )
}

export default Profile
