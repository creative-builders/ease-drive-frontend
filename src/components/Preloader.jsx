import React from "react";

const Preloader = ()=>{
    return(
        <div className='w-10 h-10 rounded-full  relative'>
            <div className="w-10 h-10 border-[#BFFBCA] border-8 rounded-full"></div>
            <div className="w-10 h-10 border-8 border-transparent border-t-green-300 rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
    )
}
export default Preloader