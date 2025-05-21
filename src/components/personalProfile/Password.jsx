import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import BackArrow from '../BackArrow'
import CustomButton from '../CustomButton';


export default function Password(){

    const [togglePassword, setTogglePassword] = useState(false)
    const [ConfirmTogglePassword, setConfirmTogglePassword] = useState(false)
    const [NewTogglePassword, setNewTogglePassword] = useState(false)

    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
  
    const handleTogglePassword = () => {
    setTogglePassword(prev => !prev)
    }

    const handleNewTogglePassword = () => {
    setNewTogglePassword(prev => !prev)
    }

    const handleConfirmTogglePassword = () => {
    setConfirmTogglePassword(prev => !prev)
    }
  
    const handleUpdateFormData = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return(
        <div className='bg-[#444444]'>
            <BackArrow extendedStyles={'top-[100px] xl:top-16 left-0 xl:left-[480px]'} />
            <main className='min-h-screen xl:h-[934px] w-full xl:w-[430px] p-2 m-auto flex flex-col items-start justify-around bg-[#F6F7F6]'>
                <h2 className='text-[#000]font-[poppins] text-base not-italic font-bold leading-normal'>EaseDrive</h2>
                <p className='m-auto'>Change password</p>
                <section className='w-full p-2 flex flex-col items-start gap-5'>
                    

                    <article className='pa md:h-20 w-full flex flex-col items-left gap-2 relative'>
                        <label className='text-[#444] font-[arial] text-base not-italic font-normal leading-normal' htmlFor="oldPassword">Old Password</label>
                        <input
                        className='h-12 w-full rounded-lg bg-[#F0F1F1] placeholder:text-[#444] border border-transparent focus:outline-none focus:ring-0 focus:border-transparent'
                        type={togglePassword ? "text" : "password"}
                        name="oldPassword"
                        id="oldPassword"
                        onChange={handleUpdateFormData}
                        value={formData.oldPassword}

                        />
                        <span
                        onClick={handleTogglePassword}
                        className='inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2'
                        >
                        {togglePassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
                        </span>
                    </article>

                    <article className='pa md:h-20 w-full flex flex-col items-left gap-2 relative'>
                        <label className='text-[#444] font-[arial] text-base not-italic font-normal leading-normal' htmlFor="new password">New Password</label>
                        <input
                        className='h-12 w-full rounded-lg bg-[#F0F1F1] placeholder:text-[#444] border border-transparent focus:outline-none focus:ring-0 focus:border-transparent'
                        type={NewTogglePassword ? "text" : "password"}
                        name="newPassword"
                        id="newPassword"
                        onChange={handleUpdateFormData}
                        value={formData.newPassword}
                        />
                        <span
                        onClick={handleNewTogglePassword}
                        className='inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2'
                        >
                        {NewTogglePassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
                        </span>
                    </article>

                    <article className='pa md:h-20 w-full flex flex-col items-left gap-2 relative'>
                        <label className='text-[#444] font-[arial] text-base not-italic font-normal leading-normal' htmlFor="confirmPassword">Confirm Password</label>
                        <input
                        className='h-12 w-full rounded-lg bg-[#F0F1F1] placeholder:text-[#444] border border-transparent focus:outline-none focus:ring-0 focus:border-transparent'
                        type={ConfirmTogglePassword ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        onChange={handleUpdateFormData}
                        value={formData.confirmPassword}
                        />
                        <span
                        onClick={handleConfirmTogglePassword}
                        className='inline-block absolute right-4 top-1/2 cursor-pointer translate-y-1/2'
                        >
                        {ConfirmTogglePassword ? <FiEyeOff fontSize={"18"} /> : <FiEye fontSize={"18"} />}
                        </span>
                    </article>
                </section>
                <CustomButton 
                    name="Update"
                    extendedStyles={"p-3 lg:p-4 mt-12 rounded-lg w-full"}
                    // btnClick={() => nextStep()}
                />
            </main>
        </div>
    )
}