import {useState} from 'react';
import { Link } from 'react-router-dom';
import Frame from '/Frame.png';
import { FcGoogle } from "react-icons/fc";

const DrivUpload = () =>{

    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        }
    }

   return(
    <div className='min-h-screen bg-gray-500 w-full flex flex-col items-center gap-5'>
       <header className='h-20 w-full flex items-center justify-around'>
         <p className='ml-0 lg:ml-[-220px] uppercase md:uppercase text-2xl font-bold'>ease drive</p>
         <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
            <p>Already have an account?</p>
            <button className='h-12 w-20 cursor-pointer rounded-3xl border border-green-500'>Login</button>
         </ul>
       </header>
       <h2 className='text-3xl font-normal capitalize'>kYC Verification</h2>
       <p className="flex text-center gap-3 text-sm">
        <Link to="/DriVerify"><span className="text-[12px] lg:text-base">Identity Verification</span></Link>
        <Link to="/DrivUpload"><span className="text-[12px] lg:text-base">Address Verification</span></Link>
        </p>
       <section className='h-fit items-center md:h-fit w-11/12 flex flex-col items-left justify-center gap-4'>
         <p className='text-xl'>Identity Verification</p>
         <span className='text-center lg:text-left text-base'>This Information will help us know you more</span>
         <form className='h-fit md:h-fit w-full p-4 flex flex-col gap-4 relative' action="">

            <article className='h-20 w-full flex flex-col items-left gap-2'>
                <label htmlFor="">Address</label>
                <input placeholder='Enter your address' className='h-12 w-full border outline-none indent-3' type="text" />
            </article>

            <article className='h-80 w-full flex flex-col items-left gap-2'>
                <p className='text-base'>Upload Document (Electric bills, water bills, waste bills etc)</p>
                <label
                    className="h-72 w-full border bg-[#FEFEFE] flex justify-center items-center"
                    htmlFor="upload"
                >
                    {imagePreview ? (
                    <img className="h-full w-full object-cover" src={imagePreview} alt="Uploaded" />
                    ) : (
                    <img className="cursor-pointer h-10 w-12" src={Frame} alt="Upload Icon" />
                    )}
                </label>
                <input
                 type="file"
                 accept="image/png, image/jpeg, image/jpg"
                 id="upload"
                 required
                 hidden
                //  onChange={(e) => console.log(e.target.files)}
                 onChange={handleFileChange}
                 />
            </article>

        </form>
            {/* <div className="buttons h-16 w-2/5 flex items-center justify-around absolute right-3 bottom-[-100px]">
                <button className='h-12 w-24 cursor-pointer rounded-lg border border-green-600'>Skip Now</button>
                <button className='h-12 w-24 cursor-pointer rounded-lg bg-green-600 text-white'>Next</button>
            </div>
            <div className="hidden h-[20px] w-full justify-around items-center">
                <span className=' border-b-2 w-2/5 border-black '></span> Or <span className=' border-b-2 w-2/5 border-black'></span>
            </div>
            <button className='tip h-39 w-full  bg-gray-300 text-black cursor-pointer rounded-lg relative'><aside className='h-5 md:h-6 w-8 absolute left-12 md:left-80'><img className='object-contain h-full w-full' src="" alt="" /></aside> Contiue with Google</button>
            <p className='pair text-sm hidden'>Already have an account? <a className='text-green-500' href="">Login</a></p> */}
       </section>
    </div>
   )
}
export default DrivUpload

{/* <aside class="event__image">
        <button id="tap__upload">
            Tap and upload event flyer <input type="file" id="tap__file" />
        </button>

        <figure class="image--container">
            <label for="upload--from--btn">
                <img src="/assets/images/file-upload-icon.png" alt="" />
            </label>
            <input
                type="file"
                id="upload--from--btn"
                accept="image/png, image/jpeg, image/jpg"
            />
        </figure>
    </aside> */}