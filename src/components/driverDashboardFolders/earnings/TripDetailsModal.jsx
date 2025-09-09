
import { LocationIcon } from "../../../assets/icons/LocationIcon";
import { ClockIcon } from "../../../assets/icons/ClockIcon";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { DateIcon } from "../../../assets/icons/DateIcon";

export const TripDetailsModal = ({ isOpen, onClose, trip }) => {
  if (!isOpen || !trip) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full m-2 max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-800"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-2 pb-4 mb-4">
          <div className="flex items-center justify-around">
            <h2 className="text-lg md:text-xl font-semibold not-italic leading-normal">
            {trip.pickup} → {trip.dropoff}
            </h2>
            <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 mr-5 rounded">
              {trip.status || "Completed"}
            </span>
          </div>
          <div className="flex items-start gap-16">
            <p className="text-xs md:text-lg font-medium not-italic leading-normal">
              Total Passengers: {trip.passengers?.length || 0}/{trip.passengers?.total || 0}
            </p>
            <div className="flex gap-6 text-sm font-medium">
              <span className="text-accent-600 text-xs md:text-lg font-medium not-italic leading-normal">Dropped off: {trip.droppedOff}</span>
              <span className="text-[#EA4335] text-xs md:text-lg font-medium not-italic leading-normal">Cancelled: {trip.cancelled}</span>
              
            </div>
          </div>
        </div>

        {/* Passenger List */}
        <div className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-2">
          {Array.isArray(trip.passengers) && trip.passengers.length > 0 ? (
            trip.passengers.map((p) => (
              <div
                key={p.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex w-4/5 h-24 items-center self-stretch gap-4">
                  <img
                    src={p.profileImage}
                    alt={p.name}
                    className="w-9 md:w-20 h-9 md:h-20 rounded-full object-cover"
                  />
                  <div className="h-full w-full flex flex-col p-2 gap-2">
                    <div className="flex gap-6">
                      <p className="font-medium text-xs md:text-base not-italic leading-normal">{p.name}</p>
                      <span
                        className={`text-[8px] md:text-xs px-2 py-1 rounded ${
                          p.status === "Dropped off"
                            ? "bg-blue-50 text-blue-600"
                            : p.status === "Cancelled"
                            ? "bg-red-50 text-red-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-800 font-normal not-italic leading-normal">
                      <span className="hidden md:flex gap-1"> <LocationIcon className='h-4 w-4 text-primary-600' /> {p.location}</span>
                      <span className="flex gap-1"> <ClockIcon className='h-4 w-4' /> {p.time}</span>
                      <span className="flex gap-1"> <DateIcon className='h-4 w-4' /> Date: {p.date}</span>
                    </div>
                    {p.rating ? (
                      <p className="text-xs text-yellow-500">{p.rating} ⭐</p>
                    ) : (
                      <p className="text-xs text-gray-400">No Rating</p>
                    )}
                  </div>
                </div>
                 

                  <div className="h-20 w-16 flex flex-col items-center justify-around">
                    <span className="text-xs md:text-sm font-semibold not-italic leading-normal">{p.fare}</span>
                    <p className="text-[8px] md:text-xs text-black font-medium not-italic leading-normal">{p.tripType}</p>
                  </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 italic">
              No passengers available
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end items-end flex-col mt-4 pt-4 px-2">
          <p className="text-xs md:text-sm font-semibold not-italic leading-normal capitalize">Total Earnings</p>
          <h3 className="text-lg md:text-2xl font-semibold not-italic leading-normal capitalize">
             ₦{trip.totalEarnings}
          </h3>
        </div>
      </div>
    </div>
  );
};
