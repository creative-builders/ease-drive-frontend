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
    <div className={`${extendedStyles} inline-flex items-center gap-2 absolute left-6`} onClick={handleGoBack}>
        <img className='h-6 w-6 cursor-pointer' src={arrow} alt="" />
        <span className='text-[12px] not-italic font-normal leading-normal'>back</span>
    </div>
   )
}
export default BackArrow