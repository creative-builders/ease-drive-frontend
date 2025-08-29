import { RidesIcon } from "../../assets/icons/dashboard/RidesIcon"
import { PoliceCarIcon } from "../../assets/icons/PoliceCarIcon"
import CustomButton from "../CustomButton"
import { CustomSelectField } from "../customFormFields/CustomSelectField"

export const SelectRide = () => {
  return (
    <div className="px-[14px] py-4 bg-white basis-full min-h-[210px] rounded-2xl">
        <div className="mb-4 lg:mb-5 flex items-center gap-x-1.5">
             <div className="flex justify-center items-center w-[38px] h-[36px] rounded-[30px] bg-primary-50 py-[3px] px-1">
                <RidesIcon/>
             </div>
             <h4 className="text-base lg:text-lg font-medium">Select your ride</h4>
        </div>
        <div className="mb-4 lg:mb-5">
          <CustomSelectField
          defaultHolder={"Car"}
          label={"Select Ride"}
          options={["Shuttle Bus","Car","Bike","Keke"]}
          >
            <PoliceCarIcon/>
          </CustomSelectField>
        </div>
        <div className="mb-4 lg:mb-5">
          <CustomSelectField
          defaultHolder={"Round Trip"}
          options={["Round Trip","Drop Off","Wail-Billing (Package only)"]}
          label={"Select Trip Type"}
          />
        </div>
        <div className="mb-4 lg:mb-5"></div>
        {/* <div></div> */}
        <div>
          <CustomButton
           name ="Search for Available Drivers"
           extendedStyles={"h-[50px] lg:h-[60px] w-full rounded-2xl"}
           disabled
          />
        </div>
    </div>
  )
}
