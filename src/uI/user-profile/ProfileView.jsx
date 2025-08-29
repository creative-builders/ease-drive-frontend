import PromoIcon from '../../assets/icons/PromoIcon';
// import { LogoutIcon } from '../../assets/icons/LogoutIcon';
import fallbackProfile from '../../assets/images/profile-user.png' // fallback if no image
import { PhoneIcon } from '../../assets/icons/PhoneIcon';
import { EmailSignedIcon } from '../../assets/icons/EmailSignedIcon';
import { DelectIcon } from '../../assets/icons/DelectIcon';
import { userAtom } from '../../components/atoms/userAtom';
import { useRecoilValue } from 'recoil';
import LogoutButton from '../../pages/auth/logout/LogoutButton';

const ProfileView = ({ onEdit }) => {
  const userData = useRecoilValue(userAtom);

  return (
    <div className="bg-white rounded-2xl p-6 md:shadow-md h-[600px] md:h-[783px] gap-4 flex flex-col">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <img
            src={userData?.profileImage || fallbackProfile}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg">
              {userData?.fullName || "John Ndubuisi Chukwuemeka"}
            </h2>
          </div>
        </div>

        {/* Edit Button */}
        <button
          className="text-blue-600 font-[inter] font-semibold text-base leading-[100%] tracking-normal top-0 right-6 absolute md:static"
          onClick={onEdit}
        >
          Edit
        </button>
      </div>

      {/* Personal Info */}
      <section className="h-32 gap-2 p-2 border-b-[1px] border-gray-100">
        <h2 className="font-medium text-[18px] leading-[100%] tracking-normal capitalize">
          personal information
        </h2>

        <div className="flex px-2 py-3 items-center justify-start gap-2">
          <EmailSignedIcon />
          <input
            type="email"
            readOnly
            onFocus={(e) => e.target.blur()}
            className="h-6 w-48 sm:w-40 font-medium text-[14px] rounded-lg leading-6 tracking-normal border-none bg-transparent placeholder:text-gray-500"
            placeholder={userData?.email || "Enter email"}
            id="email"
          />
        </div>

        <div className="flex px-2 py-3 items-center justify-start gap-2">
          <PhoneIcon />
          <input
            type="number"
            readOnly
            onFocus={(e) => e.target.blur()}
            className="h-6 w-48 sm:w-40 font-medium rounded-lg text-[14px] leading-6 tracking-normal border-none bg-transparent placeholder:text-gray-500"
            placeholder={userData?.phone || "Enter phone number"}
            id="phone"
          />
        </div>
      </section>

      {/* Promo */}
      <section className="h-14 gap-5 flex px-3 py-2 border-b-[1px] border-gray-100">
        <PromoIcon />
        <p className="font-medium text-[14px] leading-6 tracking-normal">Promo card</p>
      </section>

      {/* Account */}
      <section className="h-34 gap-2 p-2 border-b-[1px] border-gray-100">
        <p className="font-medium text-[18px] leading-[100%] tracking-normal capitalize">account</p>

        <div className="flex px-2 py-3 items-center justify-start gap-2 relative cursor-pointer">
          <LogoutButton className="bg-transparent" />
          <p className="font-medium text-[14px] leading-6 tracking-normal absolute left-14 text-red-500">log out</p>
        </div>

        <div className="flex px-2 py-3 items-center justify-start gap-2 cursor-pointer">
          <DelectIcon />
          <p className="font-medium text-[14px] leading-6 tracking-normal text-red-500">delete account</p>
        </div>
      </section>
    </div>
  );
};

export default ProfileView;
