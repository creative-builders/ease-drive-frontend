
import { LocationIcon } from "../../../assets/icons/LocationIcon";
import { ClockIcon } from "../../../assets/icons/ClockIcon";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { DateIcon } from "../../../assets/icons/DateIcon";
import { Divider } from "../../Divider/Divider";
import { FaArrowRight } from "react-icons/fa"
import { formatDate } from "../../../utils/formatDate"

export const TripDetailsModal = ({ isOpen, onClose, trip }) => {
  console.log(trip)
  return (
    <div className="w-full flex-col items-start relative">
      <div className="flex gap-2 pb-4 mb-4 mt-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-sm md:text-base w-full font-semibold text-left not-italic gap-4  flex items-center">
              {trip.location.locationName} <span className="text-green-900"> <FaArrowRight /> </span>{trip.destination.destinationName}
            </h2>
          </div>
          <div>
            <span
              className={`text-xs text-accent-600 bg-accent-100 rounded-lg36 px-2 py-1 mr-6 w-24 flex justify-center
              ${trip.status === "Ongoing" ? "text-green-600 bg-green-50" : ""}
              ${trip.status === "Pending" ? "text-orange-600 bg-orange-50" : ""}
              ${trip.status === "Cancelled" ? "text-red-600 bg-red-50" : ""}
              ${!["Paid", "Pending", "Cancelled"].includes(trip.status) ? "text-blue-600 bg-blue-50" : ""}
            `}
            >
              {trip.status || "Completed"}
            </span>
          </div>

        </div>

      </div>

      {/* Passenger List */}
      <div className="flex flex-col gap-4 pr-2">
        <>
          <div
            key={trip._id}
            className="flex justify-between self-stretch px-2 py-0 items-center gap-6"
          >
            <div className="flex w-4/5 h-24 items-center  self-stretch gap-4">
              <img
                src={trip.booker.profileImage}
                alt={trip.booker.name}
                className="w-9 md:w-20 h-9 md:h-20 rounded-full object-cover"
              />
              <div className="h-full w-full flex flex-col p-2 gap-2">
                <div className="flex gap-6">
                  <p className="font-medium text-xs md:text-base not-italic leading-normal">{trip.booker.name}</p>
                  <span
                    className={`text-[8px] md:text-xs px-2 py-1 rounded ${trip.status === "Completed"
                      ? "bg-blue-50 text-blue-600"
                      : trip.status === "Cancelled"
                        ? "bg-red-50 text-red-600"
                        : "bg-gray-100 text-gray-900"
                      }`}
                  >
                    {trip.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 lg:text-sm text-[10px] md:text-xs text-gray-800 font-normal  ">
                  <span className="hidden md:flex gap-1 whitespace-nowrap truncate"> <LocationIcon fill="#78d188ff" className={` h-4 w-4 text-primary-700`} />1hour 20mins away from you.</span>
                  <span className="flex gap-2 whitespace-nowrap truncate"> <ClockIcon className='h-4 w-4' /> {formatDate(trip.createdAt).time}</span>
                  <span className="flex gap-2 whitespace-nowrap truncate"> <DateIcon className='h-4 w-4' /> {formatDate(trip.createdAt).date}</span>
                </div>

                <div className="flex justify-start">
                  {trip.rating ? (
                    <p className="text-xs text-yellow-500">{trip.rating} ⭐</p>
                  ) : (
                    <p className="text-xs text-gray-400">No Rating</p>
                  )}
                </div>

              </div>
            </div>


            <div className="h-20 w-16 flex flex-col items-center justify-around">
              <span className="text-xs md:text-sm font-semibold not-italic leading-normal">₦{trip.bidPrice}</span>
              <p className="text-[8px] md:text-xs mt-4 text-black font-medium not-italic leading-normal">{trip.tripType}</p>
            </div>
          </div>

          <Divider extendedStyles="mt-4" />
        </>

      </div>

      {/* Footer */}
      <div className="flex justify-end items-end flex-col mt-4 pt-4 px-2">
        <p className="text-xs md:text-sm font-semibold not-italic leading-normal capitalize">Total Earnings</p>
        <h3 className="text-lg md:text-2xl font-semibold not-italic leading-normal capitalize">
          ₦{
            trip.totalEarnings ? trip.totalEarnings.toLocaleString() : 0.00
          }
        </h3>
      </div>
    </div>
  );
};
