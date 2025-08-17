import { EaseDriveLogo } from "../assets/icons/EaseDriveLogo"


export const LogoText = () => {
  return (
    <div className="flex items-center gap-x-1.5 text-lg lg:text-2xl italic font-bold text-gray-900">
      <EaseDriveLogo className="lg:w-[44px] lg:h-[44px]"/>
      <span className="block">EaseDrive</span>
    </div>
  )
}

