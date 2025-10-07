import { useState } from "react"
import { RidesIcon } from "../../assets/icons/dashboard/RidesIcon"
import { LuggageIcon } from "../../assets/icons/LuggageIcon"
import { PoliceCarIcon } from "../../assets/icons/PoliceCarIcon"
import CustomButton from "../CustomButton"
import { CustomSelectField } from "../customFormFields/CustomSelectField"
import { Divider } from "../Divider/Divider"
import { AddFile } from "../AddFile"

export const SelectRide = () => {
  const [selectedLuggage, setSelectedLuggage] = useState("");

  const handleChange = (e) => {
    setSelectedLuggage(e.target.value);
  };

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
          options={[ "Keke","Car","Shuttle Bus","Motorcycle","Regular Bus","Truck"]}
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
        <div className="mb-4 lg:mb-5">
         <div className="mb-4 flex items-center gap-x-1.5">
             <div className="flex justify-center items-center w-[38px] h-[36px] rounded-[30px] bg-primary-50 py-[3px] px-1">
                <LuggageIcon/>
             </div>
             <h4 className="text-base lg:text-lg font-medium">Do you have a luggage?</h4>
        </div>
          <div>
              <label className="mb-4 text-neutral-950 flex items-center cursor-pointer" 
               htmlFor="yes-luggage">
               <span className="basis-[41px]">  Yes </span>
               <input 
               type="radio" 
               name="luggage" 
               value={"yes"}
               id="yes-luggage"
               className="hidden"
               onChange={handleChange}
               checked={selectedLuggage === "yes"}
               />
              <span
                className={`relative inline-flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-200 border-green-600`}
             >
             {selectedLuggage === "yes" && (
              <span className="absolute w-2.5 h-2.5 bg-green-600 rounded-full"></span>
              )}
             </span>
            </label>

              <label 
              className="flex text-neutral-950 items-center cursor-pointer" 
              htmlFor="no-luggage">
              <span className="basis-[41px]"> No </span>
               <input 
               type="radio" 
               name="luggage" 
               value={"no"}
               id="no-luggage"
               className="hidden"
               onChange={handleChange}
               checked={selectedLuggage === "no"}
                />
              <span
                className={`relative inline-flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-200 border-green-600`}
             >
             {selectedLuggage === "no" && (
              <span className="absolute w-2.5 h-2.5 bg-green-600 rounded-full"></span>
              )}
             </span>
            </label>
          </div>
          </div>

          {/* show if luggage there is an available luggage */}
          {
            selectedLuggage === "yes" && (
              <div className="mb-4">
                <AddFile
                 title={"Upload a photo of the luggage"}
                 extendedStyles={"text-center"}
                >
                  <p className="mb-4 text-xs text-center font-medium text-neutral-700">
                    You can upload up to 4 images (JPG, PNG). <br />
                    Maximum file size: 10MB per image
                  </p>
                </AddFile>
                <Divider extendedStyles={"mb-4"}/>
              </div>
            )
          }
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
