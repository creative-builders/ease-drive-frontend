import React from 'react'
import { Link } from 'react-router-dom'
import logout from '../../assets/images/Logout.png'
import setting from '../../assets/images/setting.png'
import userIcon from '../../assets/images/user-icon.png'
import user from '../../assets/images/smallPro.png'
import Camera from '../../assets/images/camera.png'
import Canelled from '../../assets/images/canelled.png'

// className={`bg-white border border-red-500 flex-shrink-0 rounded-t-[56px] h-screen w-[239px] overflow-x-hidden m-auto flex flex-col items-start gap-8 p-8 absolute top-16 right-0 transform transition-all duration-500 ease-linear ${isOpen? "translate-x-0" : "translate-x-[100%] hidden "}`}
const Profile = ({ setIsOpen, isOpen}) =>{
    return (
        <main className={`bg-white z-50 border fixed top-0 right-0 h-screen w-[229px] p-4 rounded-l-[56px] shadow-lg transform transition-transform duration-500 ease-in-out 
            ${isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}`}>
                <img src={Canelled} alt="" className='h-4 w-4 cursor-pointer ml-9 float-right' onClick={() => setIsOpen(false)}/>
                <div className="h-[70px] w-[70px] border border-[#20AE3A] relative rounded-[70px] flex-shrink-0">
                    <img src={userIcon} className='h-full w-full object-contain rounded-full' alt="" />
                    <div className="small h-5 w-5 border rounded-full border-[#20AE3A] bg-[#FFFBE7] flex flex-shrink-0 items-center justify-center absolute bottom-0 right-0">
                        <img src={Camera} className='h-2/4 w-2/4 object-cover' alt="" />
                    </div>
                </div>
                <article className=' h-16 w-fit'>
                    <h2 className='text-[#414141] font-[poppins] text-base font-medium not-italic leading-normal'>Mabel Okoro</h2>
                    <p className='text-[#414141] font-[poppins] text-[12px] font-light not-italic leading-normal'>mabel.faustina.okoro@gmail.com</p>
                </article>

                <section className='h-fit gap-8 w-full flex flex-col'>
                    <Link to={'/EditProfile'}>
                        <div 
                            className="flex items-center justify-strat gap-4 cursor-pointer"
                        >
                            <img src={user} alt="" />
                            <span>Edit profile</span>
                        </div>
                    </Link>
                    <Link to={'/Setting'}>
                        <div className="flex items-center justify-strat gap-4 cursor-pointer">
                            <img src={setting} alt="" />
                            <span>Setting</span>
                        </div>
                    </Link>
                    
                        <div className="flex items-center justify-strat gap-4 cursor-pointer">
                            <img src={logout} alt="" />
                            <span>Log out</span>
                        </div>
                    
                </section>
            </main>
    )
}
export default Profile