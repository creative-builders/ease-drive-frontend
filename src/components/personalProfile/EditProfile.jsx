import React from 'react'
import userIcon from '../../assets/images/user-icon.png'
import BackArrow from '../BackArrow'
import CustomButton from '../CustomButton';
import { userAtom } from '../atoms/userAtom';
import { useRecoilValue } from 'recoil';

export default function EditProfile(){
      const user = useRecoilValue(userAtom);
      console.log(user)
      
    return(
        <div>
            <BackArrow extendedStyles={"top-20 xl:top-24 left-0 xl:left-[480px]"} />
            <main className='min-h-screen xl:h-[930px] w-full xl:w-[430px] p-2 m-auto flex flex-col items-start justify-around bg-[#F6F7F6]'>
                {/* <h2 className='text-[#000]font-[poppins] text-base not-italic font-bold leading-normal'>EaseDrive</h2> */}
                <article className='h-fit mx-auto flex flex-col gap-4 items-center'>
                    <p className='text-[#000] font-[poppins] text-xl not-italic font-medium leading-normal'>Edit profile</p>
                    <div className="h-24 w-24 rounded-full">
                      <img src={user?.profileImage} className='h-full w-full rounded-full' alt="" />
                    </div>
                    <p className='text-[#414141] text-xl font-medium'>{user?.fullName}</p>
                </article>
                <section className='w-full p-2 flex flex-col items-start gap-5'>
                    <label className='text-[#444] font-[arial] text-base not-italic font-normal leading-normal' htmlFor="">Email address</label>
                    <input 
                    placeholder='your email' 
                    className="w-full p-4 rounded-lg bg-[#F0F1F1] placeholder:text-[#444] border border-transparent focus:outline-none focus:ring-0 focus:border-transparent" 
                    type="email" 
                    name="" 
                    id="" 
                    value={user?.email}
                    readOnly
                     />

                    <label className='text-[#444] font-[arial] text-base not-italic font-normal leading-normal' htmlFor="">Phone Number</label>
                    <input 
                    placeholder={user?.phoneNumber} 
                    className="w-full p-4 rounded-lg bg-[#F0F1F1] placeholder:text-[#444] border border-transparent focus:outline-none focus:ring-0 focus:border-transparent" 
                    type="tel" 
                    name="" 
                    id="" 
                    />

                    <label className='text-[#444] font-[arial] text-base not-italic font-normal leading-normal' htmlFor="">Sex</label>
                    <select className="w-full p-4 rounded-lg bg-[#F0F1F1] placeholder:text-[#444] border border-transparent focus:outline-none focus:ring-0 focus:border-transparent" name="" id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <label className='text-[#444] font-[arial] text-base not-italic font-normal leading-normal' htmlFor="">Address</label>
                    <input placeholder='your address' className="w-full p-4 rounded-lg bg-[#F0F1F1] placeholder:text-[#444] border border-transparent focus:outline-none focus:ring-0 focus:border-transparent" type="address" name="" id="" />
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