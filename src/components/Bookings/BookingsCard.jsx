import { useState } from "react";
import BookingButtons from "../BookingButtons";
import BackArrow from "../BackArrow";
import BookingDetails from "./BookingDetails";
import { userAtom } from '../atoms/userAtom'
import { useRecoilValue } from 'recoil'
import { useLocation } from 'react-router-dom';
import { locationAtom } from '../../components/atoms/locationAtom'

const BookingsCard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const userData = useRecoilValue(userAtom);
  
  
const pickupLocation = userData?.location || "Nuskka";

const bookings = [
    { id: 0, status: "upcoming", time: "10:00 AM, May 30" },
    { id: 1, status: "completed", time: "done" },
    { id: 2, status: "completed", time: "done" },
    { id: 3, status: "cancelled", time: "cancel" },
    { id: 4, status: "cancelled", time: "cancel" },
    { id: 5, status: "cancelled", time: "cancel" },
  ];
  
  const userLocation = useRecoilValue(locationAtom)
  const currentUserLocation = userLocation.split(",").slice(0,2).join('')
  // console.log(userLocation)
  // console.log(currentUserLocation)
 
  const buttonsLabel = ["upcoming", "completed", "cancelled"];

 const filteredBookings = bookings.filter(
    (booking) => booking.status === activeTab
  );

  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center">
      <div className="min-h-screen w-full sm:w-[430px] flex flex-col p-7 items-center justify-items bg-[#F6F7F6] relative">

         <BackArrow />
        <h2 className="text-[#000] text-base not-italic font-medium leading-normal">
          My Bookings
        </h2>
        {/* <BookingButtons setActiveTab={setActiveTab} buttons={buttonsLabel} /> */}
        <BookingButtons
          setActiveTab={setActiveTab}
          buttons={buttonsLabel}
          activeTab={activeTab}
        />


        {/* Content below BookingButtons */}

        {/* <div className="h-fit gap-5 p-1 flex flex-col mt-4 w-96 text-center border border-green-600">
          {activeTab && tabResponses[activeTab] !== ""? (
            <p className="text-gray-700 text-lg">{tabResponses[activeTab]} Bookings</p>
          ) : (
            <p className="text-gray-500 text-lg">No info available currently.</p>
          )}
        </div> */}
          {/* <BookingDetails /> */}


        <div className="h-fit gap-5 p-1 flex flex-col mt-4 w-96 text-center bg-[#F6F7F6]">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <BookingDetails
                key={booking.id}
                // username={booking.username}
                username={userData?.fullName}
                location={currentUserLocation}
                time={booking.time}
                status={booking.status}
              />
            ))
          ) : (
            <p className="text-gray-500 text-lg">No bookings in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingsCard;
