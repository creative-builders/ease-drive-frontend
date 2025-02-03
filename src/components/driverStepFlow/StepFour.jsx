import {useState} from 'react';
import { Link } from 'react-router-dom';
import Frame from '/Frame.png';
import SectionLabel from '../SectionLabel';

const StepFour = ({nextStep, prevStep, step , totalSteps}) =>{

    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        }
    }

   return(
    <div className='h-full w-full flex flex-col items-center gap-5 bg-[#F0F1F1]'>
       <header className='h-20 w-full flex items-center justify-around'>
         <p className=' ml-[-220px] uppercase md:uppercase text-2xl font-bold'>ease drive</p>
         <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
            <p>Already have an account?</p>
            <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
         </ul>
       </header>
       <div className="text-center mb-[29px]">
            <SectionLabel
                title={`${step} Step of ${totalSteps}`}
            />
        </div>
       <h2 className='text-3xl font-normal capitalize'>kYC Verification</h2>
       <p className="flex text-center gap-3 text-sm">
        <Link to="/DriVerify"><span>Identity Verification</span></Link>
        <Link to="/DrivUpload"><span>Address Verification</span></Link>
        </p>
       <section className='h-fit items-center md:h-fit w-4/5 flex flex-col items-left justify-center gap-4'>
         <p className='text-xl'>Identity Verification</p>
         <span className='text-left text-sm'>This Information will help us know you more</span>
         <form className='h-fit md:h-fit w-full p-4 flex flex-col gap-4 relative' action="">

            <article className='h-20 w-full flex flex-col items-left gap-2'>
                <label htmlFor="place">Address</label>
                <input placeholder='Enter your address' 
                 className='h-12 w-full border outline-none indent-3'
                 type="text"
                  name="sectionAddress"
                  id="place"
                  onChange={handleUpdateFormData}
                  value={formData.sectionAddress}
                  />
            </article>

            <article className='h-80 w-full flex flex-col items-left gap-2'>
                <p className='text-sm md:text-md'>Upload Document (Electric bills, water bills, waste bills etc)</p>
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
                 name="picture"
                //   onChange={handleUpdateFormData}
                  value={formData.picture}
                //  onChange={(e) => console.log(e.target.files)}
                 onChange={handleFileChange}
                 />
            </article>

        </form>
            <div className="buttons h-16 w-2/5 flex items-center justify-around absolute right-3 bottom-[-100px]">
                <button className='h-12 w-24 cursor-pointer rounded-lg border border-green-600'>Skip Now</button>
                <button className='h-12 w-24 cursor-pointer rounded-lg bg-green-600 text-white'>Next</button>
            </div>
            <div className="hidden h-[20px] w-full justify-around items-center">
                <span className=' border-b-2 w-2/5 border-black '></span> Or <span className=' border-b-2 w-2/5 border-black'></span>
            </div>
            <button className='tip h-39 w-full  bg-gray-300 text-black cursor-pointer rounded-lg relative'><aside className='h-5 md:h-6 w-8 absolute left-12 md:left-80'><img className='object-contain h-full w-full' src="" alt="" /></aside> Contiue with Google</button>
            <p className='pair text-sm hidden'>Already have an account? <a className='text-green-500' href="">Login</a></p>
       </section>
    </div>
   )
}
export default StepFour

