import { useState } from 'react';
import { Link } from 'react-router-dom';
import Frame from '/Frame.png';
import Svg from '/Vector.svg'
import SectionLabel from '../SectionLabel';
import { useStepFlowContext } from "../../hooks/useStepFlowFormContext";

const StepFour = ({ nextStep, prevStep, step, totalSteps, isLoading }) => {
    const { formData, handleUpdateFormData } = useStepFlowContext();
    const [progress, setProgress] = useState(0);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
    
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
    
        setSelectedFile(`${file.name}  (${fileSizeMB} MB)`);
        setProgress(0);
        setUploadComplete(false);
        setUploading(true);
    
        let uploadProgress = 0;
        const interval = setInterval(() => {
            uploadProgress += 10;
            setProgress(uploadProgress);
    
            if (uploadProgress >= 100) {
                clearInterval(interval);
                setUploadComplete(true);
                setUploading(false);
            }
        }, 300);
    };    

    return (
        <div className='min-h-screen w-full flex flex-col items-center gap-5 bg-[#F0F1F1]'>
            <header className='h-20 w-full flex items-center justify-around'>
                <p className='ml-4 xl:ml-[-220px] uppercase md:uppercase text-2xl font-bold'><Link to={"/"}>ease drive</Link></p>
                <ul className='h-16 w-96 hidden md:flex items-center justify-between'>
                    <p>Already have an account?</p>
                    <Link to="/login" className="text-green-300 border border-green-300 px-6 py-3 rounded-lg">Login</Link>
                </ul>
            </header>
            <div className="text-center mb-[29px]">
                <SectionLabel title={`${step} Step of ${totalSteps}`} />
            </div>
            <h2 className='text-xl md:text-3xl font-normal capitalize'>KYC Verification</h2>
            <section className='h-fit items-center p-1 md:h-fit w-full md:w-4/5 flex flex-col items-left justify-center gap-4 mb-4 rounded-lg border-0 md:border border-green-600'>
                <p className='text-xl'>Identity Verification</p>
                <span className='text-center md:text-left text-sm'>This Information will help us know you more</span>
                <form className='h-fit md:h-fit w-full p-4 flex flex-col gap-4 relative' action="">
                    <article className='h-20 w-full flex flex-col items-left gap-2'>
                        <label htmlFor="place">Address</label>
                        <input placeholder='Enter your address' 
                            className='h-12 w-full border outline-none p-6 rounded-lg'
                            type="text"
                            name="sectionAddress"
                            id="place"
                            onChange={handleUpdateFormData}
                            value={formData.sectionAddress}
                        />
                    </article>
                    <article className='flex flex-col items-left mt-5'>
                        <p className='text-sm md:text-base'>Upload Document (Electric bills, water bills, waste bills, etc.)</p>
                        <input
                            type="file"
                            accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .png, .jpg, .jpeg, .gif, .svg"
                            id="upload"
                            required
                            hidden
                            name="picture"
                            onChange={handleFileChange}
                        />
                        <label
                            className={`relative flex items-center justify-center border bg-[#FEFEFE] rounded-lg ${uploadComplete ? 'h-20 w-3/5' : 'h-72 w-full'}`}
                            htmlFor="upload"
                        >
                            {uploadComplete ? (
                                <div className="w-3/4 mx-auto flex flex-row-reverse items-center gap-2">
                                    <span className="text-black-600 font-light text-sm md:font-medium">{selectedFile}</span>
                                    <span className="text-green-500 text-lg"><img className='h-8 w-10' src={Svg} alt="" /></span>
                                </div>
                            ) : (
                                <div className="w-2/5 flex flex-col items-center gap-2">
                                    <img className="cursor-pointer h-10 w-12" src={Frame} alt="Upload Icon" />
                                    {uploading && (
                                        <div className="relative w-4/5 bg-gray-200 h-4 rounded-lg mt-3 overflow-hidden">
                                            <div
                                                className="h-full bg-green-600 transition-all duration-300 flex"
                                                style={{ width: `${progress}%` }}
                                            >
                                               <span className="absolute inset-0 flex items-center justify-center text-black font-bold">
                                                    {progress}%
                                                </span>
                                            </div>
                                            
                                        </div>
                                    )}
                                </div>
                            )}
                        </label>
                        {uploadComplete && (
                            <p
                                className="cursor-pointer font-semibold text-sm md:text-base text-green-300 mt-2"
                                onClick={() => document.getElementById('upload').click()}
                            >
                                Change Document
                            </p>
                        )}
                    </article>
                </form>
                <div className="h-16 w-4/5 items-center md:w-2/5 gap-10 flex justify-end">
                    {/* <button 
                        name="Skip Now"
                        className='h-12 w-28 cursor-pointer rounded-lg border border-green-600'
                        onClick={() => nextStep()}
                    >
                        Skip Now
                    </button> */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className='h-12 w-28 cursor-pointer rounded-lg bg-green-600 text-white'
                        onClick={() => nextStep()}
                    >
                        {isLoading ? "Submitting..." : "Submit"}
                        
                    </button>
                    
                </div>
            </section>
        </div>
    );
};
    {/* <button type="submit" disabled={isLoading}>
    {isLoading ? "Submitting..." : "Submit"}
    </button> */}
export default StepFour;