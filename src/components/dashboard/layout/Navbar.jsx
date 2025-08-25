import { InputField } from "../../customFormFields/InputField"
import { SearchIcon } from "../../../assets/icons/SearchIcon";
import LogoutButton from "../../../pages/auth/logout/LogoutButton";
import { userAtom } from "../../atoms/userAtom";
import { useRecoilValue } from "recoil";
import { SearchBox } from "../../../assets/icons/dashboard/SearchBox";

export const Navbar = () => {
  const user = useRecoilValue(userAtom);
  return (
    <div className="pt-[18px] pb-4 min-h-[63px]">
      <div className="flex justify-between ml-[360px] mr-[18px]">
        <SearchBox/>
        <div className="flex gap-x-3 items-center">
          <p className="capitalize font-medium lg:text-lg">{user?.fullName}</p>
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}

