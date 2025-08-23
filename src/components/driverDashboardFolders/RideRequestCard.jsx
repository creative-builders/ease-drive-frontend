import { LocationIcon } from "../../assets/icons/LocationIcon";

export function RideRequestCard({ request }) {
  return (
    <div className="self-stretch w-full py-2.5 border-b border-Neutral-100 inline-flex justify-start items-center gap-4">
      <div className="flex justify-start items-center gap-2">
        <img
          className="w-20 h-20 relative rounded-[50px]"
          src={request.avatar}
          alt={request.name}
        />
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="inline-flex justify-start items-center gap-4">
            <div className="justify-start text-black text-base font-semibold font-['Inter']">
              {request.name}
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-1">
            <div className="inline-flex justify-start items-start gap-4">
              <div className="flex justify-center items-center gap-2">
                <div className="w-5 h-5 relative text-primary-700">
                  <LocationIcon fill="#1A7B2C" className={`text-primary-700`} />
                </div>
                <div className="justify-start text-black text-xs font-normal font-['Inter']">
                  {request.eta} away from you
                </div>
              </div>
            </div>

            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="justify-start text-Primary-950 text-sm font-semibold font-['Inter'] leading-normal tracking-tight">
                Current location:
              </div>
              <div className="justify-start text-Neutral-900 text-xs font-normal font-['Inter'] leading-normal">
                {request.currentLocation}
              </div>
            </div>

            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="justify-start text-Primary-950 text-sm font-semibold font-['Inter'] leading-normal tracking-tight">
                Going to:
              </div>
              <div className="justify-start text-Neutral-900 text-xs font-normal font-['Inter'] leading-normal">
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