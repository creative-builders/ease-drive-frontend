import React from 'react'
import arrow from '/src/assets/images/arrow-left.png'
import{ useNavigate } from 'react-router-dom'
 
const BackArrow = ({extendedStyles}) =>{

    const navigate = useNavigate();

    const handleGoBack = () => {
        if (window.history.length > 1) {
          navigate(-1);
        } else {
          navigate('/');
        }
    }

   return(
    <div className={` inline-flex items-center gap-2 z-0 md:z-10 absolute left-6 cursor-pointer ${extendedStyles}`} onClick={handleGoBack}>
        <img className='h-6 w-6' src={arrow} alt="" />
        <span className='text-[12px] not-italic font-normal leading-normal'>back</span>
    </div>
   )
}
export default BackArrow