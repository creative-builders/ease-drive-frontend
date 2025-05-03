import SectionLabel from "../SectionLabel";
import ServiceCard from "../ServiceCard";
// import scheduleNextTrip from "../../assets/images/schedule-next-trip.png";



const SERVICE_CARD_DATA = [
  {
    id:0,
    title:"Drive and earn money as a car owner on EaseDrive.",
    description:"Plan Smart, Travel Faster: Effortless Itineraries for Time-Conscious and skip the Hassle, and Maximize Every Moment of Your Journey",
    imgSrc: `/assets/images/schedule-next-trip.png`,
  },
  {
    id:1,
    title: "Drive and earn money as a car owner on EaseDrive.",
    description: "Plan Smart, Travel Faster: Effortless Itineraries for Time-Conscious and skip the Hassle, and Maximize Every Moment of Your Journey",
    imgSrc:`/assets/images/drive-and-earn.png`,
  },
  {
    id:2,
    title: "Flexible Payment Models.",
    description: "Plan Smart, Travel Faster: Effortless Itineraries for Time-Conscious and skip the Hassle, and Maximize Every Moment of Your Journey",
    imgSrc:`/assets/images/flexible-payment.png`,
  },
  {
    id:3,
    title: "Say Goodbye Long queue when going to work and school stress-free.",
    description: "Plan Smart, Travel Faster: Effortless Itineraries for Time-Conscious and skip the Hassle, and Maximize Every Moment of Your Journey",
    imgSrc:`/assets/images/say-goodbye.png`,
  },
]

const OurServices = () => {
  return (

    <section className='mb-[152px]'>
     <div className="text-center">
     <SectionLabel
      title={"Our Services"}
      />
    <p className='mb-[52px] text-sm xl:text-2xl text-gray-900 font-normal '>Discover the unparalleled benefits of our services and elevate your travel experience with us today!</p>
     </div>
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
  <div 
  className="
  grid 
  gap-8 
  justify-between 
  px-[4%]
  md:px-[65px]
  grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 
  md:grid-cols-[repeat(auto-fill,minmax(392px,1fr))] 
  xl:grid-cols-[repeat(auto-fill,minmax(410px,1fr))] 
  xl:px-[150px]
  gap-x-8
  ">
   {
   SERVICE_CARD_DATA.map((service) => (
   <div  
    key={service.id}
    >
    <ServiceCard
    title={service.title}
    description={service.description}
    imgSrc={service.imgSrc}
    exte
    />
    </div>
   ))
  }
  </div>
 </section>
  )
}

export default OurServices