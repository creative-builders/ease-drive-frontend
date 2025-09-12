import { LocationIcon } from "../../../assets/icons/LocationIcon";

export function RideRequestCard({ request }) {
  return (
    <div className="self-stretch w-full py-2.5 border-b border-neutral-100 inline-flex justify-start items-center gap-4">
      <div className="flex justify-start lg:items-center items-start lg:gap-2 gap-2 font-poppins">
        <img
          className="lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] relative rounded-[50px] font-poppins"
          src={request.avatar}
          alt={request.name}
        />
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="inline-flex justify-start items-center gap-4">
            <div className="justify-start text-black lg:text-base text-sm font-semibold font-poppins">
              {request.name}
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-1">
            <div className="inline-flex justify-start items-start gap-4">
              <div className="flex lg:justify-center items-center lg:gap-2 gap-2">
                <div className="lg:w-5 lg:h-5 w-4 h-4 relative text-primary-700">
                  <LocationIcon fill="#1A7B2C" className={`text-primary-700`} />
                </div>
                <div className="justify-start text-black lg:text-xs text-[10px] font-normal font-poppins leading-normal">
                  {request.eta} away from you
                </div>
              </div>
            </div>

            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="justify-start text-Primary-950 lg:text-sm text-xs font-semibold font-poppins leading-normal tracking-tight">
                Current location:
              </div>
              <div className="justify-start text-neutral-900 lg:text-xs text-[10px] font-normal font-poppins leading-normal">
                {request.currentLocation}
              </div>
            </div>

            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="justify-start text-Primary-950 lg:text-sm text-xs font-semibold font-poppins leading-normal tracking-tight">
                Going to:
              </div>
              <div className="justify-start text-Neutral-900 lg:text-xs text-[10px] font-normal font-poppins leading-normal">
                {request.destination}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// 