import { FiArrowLeft } from "react-icons/fi";
import Camera from '../../assets/icons/Camera';
import profile from '../../assets/images/profile-user.png'

const EditProfileView = ({ onClose }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md h-fit">
      <div className="flex items-center space-x-2 mb-4">
        <button onClick={onClose}>
          <FiArrowLeft className="text-xl" />
        </button>
        <h2 className="text-lg font-semibold">Personal Information</h2>
      </div>

        <div className="flex items-center space-x-4 relative">
            <img src={profile} alt="Profile" className="w-14 h-14 rounded-full" />
            <Camera className="w-4 h-4 absolute left-7 cursor-pointer bottom-3" />
        </div>

      <form action="">
        
      </form>
    </div>
  );
};
export default EditProfileView 