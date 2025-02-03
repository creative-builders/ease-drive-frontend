
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../layout/header';
import ServiceCard from '../../components/ServiceCard';
import SectionLabel from '../../components/SectionLabel';
import CustomButton from '../../components/CustomButton';
import demoImage from "../../assets/images/city-ride-jeep.svg"
import safetyImage from "../../assets/images/safety-image.svg"

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <div className='border border-red-950 px-[4%] lg:px-[8%]'>
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
          title='No'
          btnClick={() => navigate('/login')}
          />
          </div>
        </div>
      </section>

      <section className='mb-4'>
        <p className='mb-[54px]'>Experience a simpler, better way to commute</p>
      </section>

    </div>
    </>
  );
};

export default Home;
