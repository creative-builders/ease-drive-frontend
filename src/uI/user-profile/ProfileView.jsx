import EmailIcon from '../../assets/icons/EmailIcon';
import CallIcon from '../../assets/icons/CallIcon';
import PromoIcon from '../../assets/icons/PromoIcon';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import DelectIcon from '../../assets/icons/DelectIcon';
import profile from '../../assets/images/profile-user.png'

const ProfileView = ({ onEdit }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md h-fit gap-4 flex flex-col">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <img src={profile} alt="Profile" className="w-14 h-14 rounded-full" />
          <div>
            <h2 className="font-semibold text-lg">John Ndubuisi Chukwuemeka</h2>
          </div>
        </div>

        {/* Edit Button */}
        <button
          className="text-blue-600 font-medium"
          onClick={onEdit}
        >
          Edit
        </button>
      </div>

      {/* The rest of personal info... */}
      
        <section className='h-32 gap-2 p-2 border-b-[1px] border-gray-100'>
            <h2 className='font-[inter] font-medium text-[18px] leading-[100%] tracking-normal capitalize'>personal information</h2>
            <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <EmailIcon />
            <input 
                type="email" 
                className='h-6 w-40 font-[inter] font-medium text-[14px] leading-6 tracking-normal border-none'
                placeholder="solobachi45@gmail.com" 
                id=""
            />
            </div>

            <div className='flex px-2 py-3 items-center justify-start gap-2'>
            <CallIcon />
            <input 
                type="number" 
                className='h-6 w-40 font-[inter] font-medium text-[14px] leading-6 tracking-normal border-none'
                placeholder="solobachi45@gmail.com" 
                id=""
            />
            </div>
        </section>

        <section className='h-14 gap-5 flex px-3 py-2 border-b-[1px] border-gray-100'>
           <PromoIcon />
           <p className='font-[inter] font-medium text-[14px] leading-6 tracking-normal'>Promo card</p>
        </section>

        <section className='h-32 gap-2 p-2 border-b-[1px] border-gray-100'>
            <p className='font-[inter] font-medium text-[18px] leading-[100%] tracking-normal capitalize'>account</p>

            <div className='flex px-2 py-3 items-center justify-start gap-2 cursor-pointer'>
            <LogoutIcon />
            <p className='font-[inter] font-medium text-[14px] leading-6 tracking-normal text-red-500'>log out</p>
            </div>

            <div className='flex px-2 py-3 items-center justify-start gap-2 cursor-pointer'>
            <DelectIcon />
            <p className='font-[inter] font-medium text-[14px] leading-6 tracking-normal text-red-500'>delect account</p>
            </div>
        </section>
    </div>
  );
};
export default ProfileView