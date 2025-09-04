import { Link } from "react-router-dom"
import { Divider } from "../Divider/Divider"
import { EmailEditIcon } from "../../assets/icons/dashboard/EmailEditIcon"
import { PhoneIcon } from "../../assets/icons/PhoneIcon"
import { EmailSignedIcon } from "../../assets/icons/EmailSignedIcon"

export const Support  = () => {
    return(
     <div className="h-screen lg:h-auto bg-white lg:bg-transparent p-4">
        <h3 className="mb-6 text-sm lg:text-2xl font-bold ">Support</h3>
        <div className="bg-white py-4 px-[14px] max-h-[274px] rounded-t-2xl">
            <h4 className="text-sm text-lg font-medium mb-6 lg:mb-4">Reach out to us via</h4>
            <div className="mb-4">
                <div className="flex py-4 px-1.5 items-center gap-x-1.5">
                <EmailSignedIcon/>
                <Link to={"mailto:info@ease-drive.com"} className="text-neutral-400 font-medium text-sm">info@ease-drive.com</Link>
               </div>
            </div>
            <div className="mb-4">
                <div className="flex pt-4 px-1.5 items-center gap-x-1.5">
                <PhoneIcon/>
                <span className="text-neutral-400 font-medium text-sm">+234 9017912839</span>
               </div>
            </div>
            <Divider/>
            <div className="flex items-center gap-x-1.5">
                <EmailEditIcon/>
                <Link className="text-accent-600 font-normal text-base">Send us a direct message</Link>
            </div>
        </div>
     </div>
    )
}