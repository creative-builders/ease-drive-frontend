import CustomButton from "../CustomButton"
import safetyImage from "../../assets/images/safety-image.jpg"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { userAtom } from "../atoms/userAtom"

const YourSafety = () => {
    const navigate =  useNavigate();
    const userData = useRecoilValue(userAtom);
  return (
  <section 
  style={{background:`url(${safetyImage}) no-repeat lightgray 50% / cover`}}
  className='min-h-[815px] text-center'>
    <div className="bg-black flex min-h-[318px]">
      <div className="basis-[78%] pb-[32px] m-auto">
       <h3 className='mb-2 text-white font-bold text-base xl:text-[28px]'>Your safety is our priority.</h3>
       <p className="mb-[12px] lg:mb-[34px] text-white font-normal text-xs xl:text-2xl">
        We all share the responsibility for safety. Let &apos;s call this our safety pact – an agreement between passengers and drivers to ensure a safe ride for everyone.
       </p>
        <CustomButton
         name="Learn More"
         extendedStyles={"mx-auto p-3 lg:p-4 rounded-lg"}
         btnClick={() => navigate(`${userData ? "/dashboard" : "/login"}`)}
        />
      </div>
    </div>
  </section>
  )
}

export default YourSafety