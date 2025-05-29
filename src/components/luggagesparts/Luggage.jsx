import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Search from '../../assets/images/Search map.png';
import locate from '../../assets/images/Location-map .png';
import CustomButton from '../CustomButton';
import images from '../../assets/images/download.png';
import Header from '../../layout/dashboard/header/Header';
import BackArrow from '../BackArrow';
import toast from "react-hot-toast";
import IconMap from '../../assets/icons/NewIcon.png'
import { useLocation } from 'react-router-dom';
import { fr } from 'date-fns/locale';

export default function Luggage() {
    const [showLuggageUpload, setShowLuggageUpload] = useState(false);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    const { from, to } = location.state || {};

    const handleSubmit = () => {
        if (!selectedOption) {
            toast.error('Please select an option before proceeding.');
            return;
        }
        // console.log("Button clicked!");
        if (selectedOption === 'with-luggages') {
            if (!file || !previewUrl) {
                toast.error('Please upload an image of your luggage.');
                return;
            }
        }
    
        navigate('/dashboard/looking-for')
    };
    
    

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            const fileType = selectedFile.type;
            if (fileType.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewUrl(reader.result);
                };
                reader.readAsDataURL(selectedFile);
            } else {
                setPreviewUrl('');
            }
        }
    };

    const handleRadioChange = (option) => {
        setSelectedOption(option);
        setShowLuggageUpload(option === 'with-luggages');
    };

    return (
        <div className='min-h-screen w-full bg-[url(/Group.png)] flex flex-col items-center justify-around gap-14'>
            <Header />
            <BackArrow extendedStyles='top-20 left-10 xl:left-24' />
            
            <label htmlFor='current-location' className='h-17 flex w-11/12 xl:w-[667px] px-4 py-6 mt-24 items-center gap-6 rounded-2xl bg-[#fff]'>
                <img src={IconMap} alt="" />
                <input
                    type="text"
                    className='w-4/5 indent-2 text-xl outline-0 bg-transparent focus:outline-none focus:ring-0 placeholder:text-[#444]'
                    placeholder='UNN 2nd gate'
                    value={from}
                    id='current-location'
                />
            </label>

            <main className='w-full xl:w-[1176px] h-fit flex flex-col bg-[#F8FDF9] p-3 items-center justify-around mt-8 rounded-t-[32px] rounded-r-[32px] rounded-b-none flex-shrink-0'>
                <figure className='w-4/5 xl:w-4/5 gap-6 flex flex-col items-start justify-end h-fit'>
                    
                    {/* Location Display */}
                    <div className="h-16 w-3/5 xl:w-72 flex items-start justify-between p-2">
                        <img src={Search} alt="" className='mt-1' />
                        <div className="w-60 flex flex-col gap-2">
                            <h2 className='font-[poppins] text-base font-medium leading-9'>Current Location</h2>
                            <p className='text-[#B8B8B8] text-[12px] leading-[18px]'>{from || "unn 2nd gate"}</p>
                        </div>
                    </div>

                    <div className="h-16 w-3/5 xl:w-72 flex items-start justify-between p-2">
                        <img src={locate} alt="" className='mt-1' />
                        <div className="w-60 flex flex-col gap-2">
                            <h2 className='font-[poppins] text-base font-medium leading-9'>To</h2>
                            <p className='text-[#B8B8B8] text-[12px] leading-[18px]'>{to || "Ogige market"}</p>
                        </div>
                    </div>

                    {/* Radio buttons */}
                    <label htmlFor='without-luggage' className='h-10 w-3/5 xl:w-72 inline-flex items-center gap-5 p-2'>
                        <input
                            className='h-5 w-5 border border-[#20AE3A] rounded-none'
                            type="radio"
                            name="luggage"
                            id="without-luggage"
                            checked={selectedOption === 'without-luggage'}
                            onChange={() => handleRadioChange('without-luggage')}
                        />
                        <span className='text-[12px] xl:text-base font-medium'>Without luggage</span>
                    </label>

                    <label htmlFor='with-luggages' className='h-10 w-3/5 xl:w-72 inline-flex items-center gap-5 p-2'>
                        <input
                            className='h-5 w-5 border border-[#20AE3A] rounded-none'
                            type="radio"
                            name="luggage"
                            id="with-luggages"
                            checked={selectedOption === 'with-luggages'}
                            onChange={() => handleRadioChange('with-luggages')}
                        />
                        <span className='text-[12px] xl:text-base font-medium'>With luggages</span>
                    </label>

                    {/* Luggage upload */}
                    {selectedOption === 'with-luggages' && (
                        <section className='flex flex-col mt-5 h-[280px] w-full gap-6 p-2 relative'>
                            <p className='text-[#5A5A5A] text-base lg:text-xl leading-6 font-medium capitalize'>
                                upload picture of your luggages
                            </p>
                            <label
                                htmlFor="upload"
                                className='h-[200px] w-full cursor-pointer relative flex-shrink-0 xl:flex items-center justify-center border bg-[#FEFEFE] rounded-lg'
                            >
                                {!file && (
                                    <img
                                        src={images}
                                        className='h-12 w-14 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                                        alt="Upload"
                                    />
                                )}
                                {previewUrl && (
                                    <img
                                        src={previewUrl}
                                        alt="Preview"
                                        className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
                                    />
                                )}
                                {file && !previewUrl && (
                                    <p className='text-center text-sm text-gray-600 px-4'>{file.name}</p>
                                )}
                            </label>
                            <input
                                type="file"
                                accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .png, .jpg, .jpeg, .gif, .svg"
                                id="upload"
                                hidden
                                name="picture"
                                onChange={handleFileChange}
                            />
                        </section>
                    )}

                    {/* Custom Button */}
                   <CustomButton
                        name={selectedOption ? 'Send Request' : 'Continue'}
                        extendedStyles="p-3 lg:p-4 w-full"
                        btnClick={handleSubmit}
                        
                    />
                </figure>
            </main>
        </div>
    );
}
