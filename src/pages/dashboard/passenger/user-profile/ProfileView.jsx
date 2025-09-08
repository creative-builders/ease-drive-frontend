import PromoIcon from '../../../../assets/icons/PromoIcon';
import { PhoneIcon } from '../../../../assets/icons/PhoneIcon';
import { EmailSignedIcon } from '../../../../assets/icons/EmailSignedIcon';
import { DelectIcon } from '../../../../assets/icons/DelectIcon';
import { userAtom } from '../../../../components/atoms/userAtom';
import { useRecoilValue } from 'recoil';
import LogoutButton from '../../../auth/logout/LogoutButton';
import { useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { InputField } from '../../../../components/customFormFields/InputField';
import { Divider } from '../../../../components/Divider/Divider';
import { AvatarIcon } from '../../../../assets/icons/AvatarIcon';




const ProfileView = ({ onEdit }) => {
  const userData = useRecoilValue(userAtom);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        {isOpen && (
        <Modal
          closeModal={() => setIsOpen(false)}
          position='bottom'
          width='100%'
          title="Delete Account?"
          bodyText="We would miss you if you go, are you sure you want to delete your account?"
        >
          {/* Buttons inside modal */}
          <div className="flex flex-col gap-3 w-full mt-6">
            <button
              className="w-full py-3 rounded-lg bg-green-200 text-black font-medium"
              onClick={() => setIsOpen(false)}
            >
              Back
            </button>
            <button
              className="w-full py-3 rounded-lg bg-red-500 text-white font-medium"
              // onClick={handleDelete}
            >
              Yes, Delete Account
            </button>
          </div>
        </Modal>
      )}

      <div className="bg-white rounded-2xl p-6 md:shadow-md h-[600px] md:h-[783px] gap-4 flex flex-col">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className=" flex items-center space-x-4">
         <div className='rounded-lg48 bg-accent-50 flex justify-center items-center w-[38px] h-[37px] lg:w-[90px] lg:h-[87px]'>
          {
           userData?.profileImage ? (
           <img
            src={userData?.profileImage}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
          )
          :
          (
          <AvatarIcon
           className="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]"
          />)
          }
          </div>
          <div>
            <h2 className="font-semibold text-lg">
              {userData?.fullName || "Hello Dear"}
            </h2>
          </div>
        </div>

        {/* Edit Button */}
        <button
          className="text-blue-600 font-semibold text-base leading-[100%] tracking-normal top-0 right-6 absolute md:static"
          onClick={onEdit}
        >
          Edit
        </button>
      </div>

      {/* Personal Info */}
      <section className="">
        <h3 className="font-semibold lg:font-medium text-sm lg:text-lg leading-[100%] tracking-normal">
          Personal Information
       </h3>

        <InputField
         type='email'
         leftIcon={EmailSignedIcon}
         placeholder={userData?.email || "Enter email"}
         inputWrapperStyles = {"border-none"}
         readOnly
         />

         <InputField
         type='number'
         readOnly
         leftIcon={PhoneIcon}
          placeholder={userData?.phoneNumber || "Enter phone number"}
         inputWrapperStyles = {"border-none"}
         />

         <Divider/>

      </section>

      {/* Promo Card*/}
      <div className="gap-x-2.5 flex px-4 py-5">
        <PromoIcon />
        <p className="font-medium text-sm lg:text-lg text-neutral-200 leading-6 tracking-normal">Promo Code</p>
      </div>

      <Divider/>

      {/* Account */}
        <h4 className="font-semibold lg:font-medium text-sm lg:text-lg">Account</h4>

        <div className="flex px-2.5 mb-2">
          <LogoutButton 
           strokeColor="#fe2a22"
           text={"Log Out"}
           textStyles={"font-medium text-sm lg:text-lg leading-6 text-red-500"}
          />
        </div>
 
        <div 
        className="flex px-2.5 items-center justify-start gap-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
        >
          <DelectIcon/>
          <span className="font-medium text-sm lg:text-lg leading-6 text-red-500">Delete Account</span>
        </div>

         <Divider extendedStyles={"my-2"}/>
    </div>
    </>
  );
};

export default ProfileView;
