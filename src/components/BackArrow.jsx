
import arrow from '/src/assets/images/arrow-left.png'
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { BackArrowIcon } from "../assets/icons/BackArrowIcon"

const BackArrow = ({ extendedStyles }) => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }

  return (
    <div className={` inline-flex items-center gap-2 z-0 md:z-10 absolute left-6 cursor-pointer ${extendedStyles}`} onClick={handleGoBack}>
      {/* <img  src={arrow} alt="" /> */}
      <div className='flex gap-4 px-2 py-3'>
        <button onClick={handleGoBack} className='flex font-regular text-xl'>
          <FaArrowLeft />
        </button>
      </div>
      <div className='h-6 w-6'>
        <BackArrowIcon/>
      </div>
      {/* <span className='text-xs not-italic font-normal leading-normal'>back</span> */}
    </div>
  )
}
export default BackArrow