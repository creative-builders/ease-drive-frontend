import React, { useEffect, useState } from "react";
import BidCard from "../../components/bid/BidCard";

import keke from "/src/assets/images/user-icon.png";
import tricyle from "/src/assets/images/image 5.png";
import UpComingCard from "../../components/UpComingCard";

import PickRide from "../../components/PickRide";
import Page from "../../components/yourRoute/page";
import MainPage from "../../components/mainpage/MainPage";

const TestingComponent = () => {
  const [bids, setBids] = useState([]);

  // Simulating API fetch (Replace with real API call)
  useEffect(() => {
    const fetchBids = async () => {
      
      const response = [
        {
          id: 1,
          profilePic: keke,
          imageUrl: tricyle,
          name: "James",
          rating: 4.7,
          transportMeans: "Keke",
          amount: "2000",
        },
      
      ];
      setBids(response);
    };

    fetchBids();
  }, []);

  const obj = {
    Upcoming: "currently there's no upcoming",
    Completed: "Sorry no completed",
    Canelled: "here are the canelled",
  }

  return (
    <div className="relative">
      <div className="p-4 lg:h-fit w-full flex flex-wrap gap-4 justify-center">
        {bids.map((bid) => (
          <BidCard 
            key={bid.id}
            profilePic={bid.profilePic}
            imageUrl={bid.imageUrl}
            name={bid.name}
            rating={bid.rating}
            transportMeans={bid.transportMeans}
            amount={bid.amount}
          />
        ))}
      </div>
      
      {/* <UpComingCard tabResponses={obj}/>
     
      {/* <MainPage /> */}
    </div>
  );
};

export default TestingComponent;
