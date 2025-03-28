
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../layout/header';
import ServiceCard from '../../components/ServiceCard';
import SectionLabel from '../../components/SectionLabel';
import CustomButton from '../../components/CustomButton';


import headerBannerImage from "../../assets/images/header-banner-img.png"
import Footer from '../../layout/footer/Footer';
import WhyUS from '../../components/landing page/WhyChooseUS';
import WhyChooseUS from '../../components/landing page/WhyChooseUS';
import OurServices from '../../components/landing page/OurServices';
import YourSafety from '../../components/landing page/YourSafety';


const Home = () => {
  const navigate = useNavigate();
  return (
    <>
     <div 
      //  style={{background: `url(${headerBannerImage}) no-repeat lightgray center /cover`}}
      className="h-screen relative mb-[56px]">
        <div className="relative z-10">
        <Header/>
        </div>
        <div className="relative z-10 flex h-full">
          <div className="basis-[72%] m-auto">
            <h2 className='mb-[18px] text-white font-bold text-2xl lg:text-5xl'>
            Go wherever, When whenever in luxury. 
            </h2>
            <p className='text-white text-base lg:text-2xl font-normal'>
            This  is the all-in-one mobility website. Get picked up by a top-rated driver in minutes and enjoy a comfortable ride to wherever you’re going and skip the queue at the park.
            </p>
          </div>
        </div>

        {/* use for the header background */}
       <div className=" absolute top-0 left-0  z-4 h-full border-red-900 border w-full">
        <img src={headerBannerImage} className='w-full h-full object-cover' alt="" />
       </div>
       
       {/* header section overlay */}
       <span 
          style={{background:`rgba(0, 0, 0, 0.2)`}}
           className="absolute top-0 left-0 block h-full w-full z-8">
          </span>
     </div>

    {/* <div className='px-[4%] lg:px-[8%]'> */}
      {/* Landing page contents */}
      <WhyChooseUS/>

      {/* services */}
      <OurServices/>

      {/* Safety */}
      <YourSafety/>

      <section className='mb-4'>
        <p className='text-center text-xs lg:text-xl font-normal'>Experience a simpler, better way <br /> to commute</p>
        <div className="flex bg-[#293D2D] min-h-[408px] rounded-[32px] mb-[112px] mx-auto">
          <div className="basis-[48%] mr-auto ml-[30px] lg:ml-[52px] my-auto">
          <h4 className='mb-4 text-white text-xl lg:text-2xl font-bold '>All of our routes displayed at a glance.</h4>
          <p className='mb-4 text-white font-normal text-sm xl:text-xl'>We are bringing all our routes to you. Simply search for a route along your way and book a ride.</p>
          <CustomButton 
          name='View all routes'
          extendedStyles={"rounded-lg"}/>
          </div>
        </div>
      </section>

    {/* </div> */}
    <Footer/>
    </>
  );
};

export default Home;
