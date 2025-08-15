import { CircleViewPoint } from "../../assets/icons/CircleViewPoint";

export default function DriverHeader() {
  return (
    <div className="flex justify-between items-center relative">
      <h1 className="text-[#374151] text-2xl md:text-[32px] not-italic leading-normal font-semibold">
        👋 Welcome back, <span className="text-[#374151]">Job!</span>
      </h1>
      <CircleViewPoint className=" absolute right-80" />
      <p className="text-base not-italic font-bold text-[#262626]">You’re currently at: <span className="font-normal"> UNN Hostel C, Nsukka</span></p>
    </div>
  );
}
