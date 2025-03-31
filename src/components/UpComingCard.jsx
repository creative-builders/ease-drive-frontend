import React, { useState } from "react";
import BookingButtons from "./BookingButtons";
import BackArrow from "./BackArrow";

const UpComingCard = ({tabResponses}) => {
  const [activeTab, setActiveTab] = useState(null);

//   const tabResponses = {
//    Upcoming: "currently there's no upcoming",
//    Completed: "Sorry no completed",
//    Canelled: "Here are the cancelled",
//  };

  

 const buttonsLabel = []
 for(let k in tabResponses){
  buttonsLabel.push(k)
 }

  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center">
      <div className="min-h-screen w-full sm:w-[430px] flex flex-col p-7 items-center justify-items bg-[#F6F7F6] relative">

         <BackArrow />
        <h2 className="text-[#000] text-base not-italic font-medium leading-normal">
          My Bookings
        </h2>
        <BookingButtons setActiveTab={setActiveTab} buttons={buttonsLabel} />

        {/* Content below BookingButtons */}

        <div className="mt-4 text-center">
          {activeTab && tabResponses[activeTab] !== ""? (
            <p className="text-gray-700 text-lg">{tabResponses[activeTab]} Bookings</p>
          ) : (
            <p className="text-gray-500 text-lg">No info available currently.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpComingCard;
