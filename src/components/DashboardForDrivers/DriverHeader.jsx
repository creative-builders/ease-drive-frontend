import { useRecoilValue } from "recoil";
import { CircleViewPoint } from "../../assets/icons/CircleViewPoint";
import { userAtom } from "../atoms/userAtom";

export default function DriverHeader() {

  const userData = useRecoilValue(userAtom);
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:">
      <h1 className="text-[#374151] text-2xl md:text-[32px] not-italic leading-normal font-semibold">
        👋 Welcome back, <span className="text-[#374151]">{userData?.fullName}</span>
      </h1>
      <div className="w-[350px] flex items-center justify-center space-x-2 md:justify-between">
        <CircleViewPoint />
        <p className="text-sm md:text-base not-italic font-bold text-[#262626]">You’re currently at: <span className="font-normal"> UNN Hostel C, Nsukka</span></p>
      </div>
    </div>
  );
}
