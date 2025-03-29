import SectionLabel from "../SectionLabel";
import ServiceCard from "../ServiceCard";
import demoImage from "../../assets/images/keke-image.png"

const OurServices = () => {
  return (

    <section className='text-center mb-[152px]'>
    <SectionLabel
    title={"Our Services"}
    />
   <p className='mb-[52px] text-sm xl:text-2xl text-gray-900 font-normal '>Discover the unparalleled benefits of our services and elevate your travel experience with us today!</p>
   {/* <div className='grid gap-[45px] xl:gap-x-[94px] grid-cols-[repeat(auto-fill,minmax(339px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(509px,1fr))] justify-center'>
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
   </div> */}
   <ServiceCard
   title="Drive and earn money as a car owner on EaseDrive." 
   description="Plan Smart, Travel Faster: Effortless Itineraries for Time-Conscious and skip the Hassle, and Maximize Every Moment of Your Journey"
   />
 </section>
  )
}

export default OurServices