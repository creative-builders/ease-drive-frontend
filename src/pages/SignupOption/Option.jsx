import React from 'react'

export default function Option() {
  return (
    <div className='container h-screen w-screen flex flex-col items-center justify-evenly border border-blue-600'>
        <nav className='h-[50px] w-full border border-red-600 flex items-center justify-around'>
           <p>EaseDrive</p>
           <ul>
            <p>Already have an account</p>
            <button>Login</button>
           </ul>
        </nav>
        <div className="box h-[80%] w-full border border-green-800 flex gap-10">
            <div className="carPicture"></div>
            <div className="form"></div>
        </div>
    </div>
  )
}
