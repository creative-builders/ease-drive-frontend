// import { BackArrow } from "../assets/icons/BackArrowIcon";
import found from "../../assets/images/not-found.png"
import BackArrow from "../../components/BackArrow";

const NotFoundPage = () => {
    return (
        <div className=" gap-5 items-center justify-center md:p-10 lg:bg-[#f2f5f6] relative">
            <BackArrow extendedStyles="h-6 w-6 aspect-square flex-shrink-0 cursor-pointer ml-5 mt-5 flex md:hidden" />
            <div className=" md:h-[799px] py-6 flex flex-col items-center justify-center gap-2 md:gap-4 flex-shrink-0 rounded-lg bg-white lg:shadow-[0_1px_15.5px_0_rgba(0,0,0,0.02ti)]">
                <img className="h-[138px] md:h-[303px] w-[197px] md:w-[433px]" src={found} alt="" />
                <p className="capitalize text-[#262626] text-[32px] md:text-[64px] not-italic font-black leading-normal">ooops!</p>
                <p className="text-[#262626] text-sm md:text-[40px] text-center not-italic font-semibold leading-[36px]">Looks like you’re in the wrong place.</p>
                <p className="text-[#262626] text-xs md:text-2xl text-center not-italic font-normal leading-[36px]">We can’t find the page you are looking for.</p>
            </div>
        </div>
    );
}
export default NotFoundPage