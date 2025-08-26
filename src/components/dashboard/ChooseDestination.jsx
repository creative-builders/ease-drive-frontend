import { useRecoilState } from "recoil"
import { LiveGPSIcon } from "../../assets/icons/LiveGPSIcon"
import { InputField } from "../customFormFields/InputField"
import { locationAtom } from "../atoms/locationAtom"
import { SearchIcon } from "../../assets/icons/SearchIcon"
import { Divider } from "../Divider/Divider"


export const ChooseDestination = () => {
  const [liveLocation,_]  = useRecoilState(locationAtom);
  
  return (
    <div className="mb-6 p-1.5 bg-white min-h-[210px] rounded-2xl">
        <div className="mb-2 flex items-center gap-x-1.5 ">
          <span className="block w-[38px] h-[36px] flex justify-center items-center bg-primary-50 rounded-[32px]">
            <LiveGPSIcon/>
            </span>
           <p className="text-base lg:text-lg font-medium">Where are you going?</p>
        </div>
         <div>
            <InputField 
              label={"From"}
              labelStyles={"font-medium text-xs lg:text-xs"}
              inputWrapperStyles={"h-[40px] lg:h-[49px]"}
              inputTextStyles={"text-neutral-950"}
              value={liveLocation}
            />
            <InputField 
              label={"To Where"}
              labelStyles={"font-medium text-xs lg:text-xs"}
              inputWrapperStyles={"h-[40px] lg:h-[49px]"}
              placeholder={"Enter your Destination"}
              rightIcon={SearchIcon}
            />
        </div>
         <Divider/>
      </div>
  )
}
