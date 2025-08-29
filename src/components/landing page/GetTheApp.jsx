import googlePlayStore from "../../assets/images/google-play-store.png"
import applePlayStore from "../../assets/images/apple-play-store.png"
import mobilePhoneImage from "../../assets/images/phone-portrait.png"

export const GetTheApp = () => {
  return (
    <div className="mb-[149px] px-4">
        <div className="mb-4 lg:pl-[193px] lg:mb-8 font-bold text text-[42px]">
            <h3>Get the App</h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-[60px] gap-y-[94px] justify-center lg:items-center">
            <div className="lg:basis-[553px] bg-green-100 rounded-32 p-[30px]">
                <div className="mb-16">
                <h4 className="mb-4 text-2xl lg:text-[32px] font-bold text-green-950">Enjoy fast-easy Rides</h4>
                <p>We are bringing all our routes to you. Simply search for a route along your way and book a ride.</p> 
                </div>
                <div className="flex gap-x-4">
                    <img className="w-[112px] h-[45px] lg:w-[180px] lg:h-[65px]" src={googlePlayStore} alt="google play store" />
                    <img className="w-[112px] h-[45px] lg:w-[180px] lg:h-[65px]" src={applePlayStore} alt="apple play store" />
                </div>
            </div>
            <div className="relative bg-accent-100 basis-[262px] lg:basis-[403px] rounded-32 min-h-[258px] lg:h-[397px] flex items-center justify-center">
                <img className="h-[370px] lg:h-[570px]" src={mobilePhoneImage} alt="Phone" />
            </div>
        </div>
    </div>
  )
}

