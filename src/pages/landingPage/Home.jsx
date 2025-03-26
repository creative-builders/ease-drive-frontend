
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../layout/header';
import ServiceCard from '../../components/ServiceCard';
import SectionLabel from '../../components/SectionLabel';
import CustomButton from '../../components/CustomButton';
import demoImage from "../../assets/images/keke-image.png"
import safetyImage from "../../assets/images/safety-image.svg"
import headerBannerImage from "../../assets/images/header-banner-img.png"
import Footer from '../../layout/footer/Footer';


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
            <h2 className='mb-[18px] text-white font-bold text-[32px] lg:text-5xl'>
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

    <div className='px-[4%] lg:px-[8%]'>
      {/* Landing page contents */}
      <section className='text-center mb-[126px]'>
        <h3 className='mb-2 lg:mb-4 text-gray-900 font-semibold text-xl lg:text-[32px]'>Why choose Easedrive</h3>
        <p className='text-gray-600 text-sm lg:text-xl'>Designed for style, reliability and convenience, makes your experiences <br /> exceptional rides to and from in your everyday life.</p>
      </section>


      <section className='text-center mb-[152px]'>
         <SectionLabel
         title={"Our Services"}
         />
        <p className='mb-[42px] text-base lg:text-2xl text-gray-900 font-normal '>Discover the unparalleled benefits of our services and elevate your travel experience with us today!</p>
        <div className='grid gap-[45px] lg:gap-x-[94px] grid-cols-[repeat(auto-fill,minmax(339px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(509px,1fr))] justify-center'>
         {
          Array(4).fill(null).map((_,index) => {
            return <ServiceCard 
            title="City Ride" 
            description="Choose your ride and get a fair prices"
            imgSrc={demoImage}
            key={index}
            bgColor={"#DCE4FF"}
            />
          })
         }
        </div>
      </section>


      <section className='mb-[128px] text-center'>
        <SectionLabel title="Safety"/>
        <h3 className='text-gray-900 font-bold text-base lg:text-xl'>Your safety is our priority</h3>
        <p className='mb-6 lg:mb-[69px] text-gray-900 text-xs lg:text-base'>Stay on the safe side with Easedrive</p>
        <div className=" lg:flex gap-x-[64px]">
          <div 
          style={{background:`url(${safetyImage}) lightgray 50% / cover no-repeat`}}
          className="mb-6 mx-auto min-h-[512px] lg:basis-1/2 rounded-[36px]">
          </div>
          <div className='basis-1/2'>
          <p className='lg:text-left mb-6'>We all share the responsibility for safety. Let's call this our safety pact – an agreement between passengers and drivers to ensure a safe ride for everyone</p>
          <CustomButton 
          extendedStyles={"lg:flex"}
          />
          </div>
        </div>
      </section>

      <section className='mb-4'>
        <p className='mb-[54px]'>Experience a simpler, better way to commute</p>
      </section>

    </div>
    <Footer/>
    </>
  );
};

export default Home;
