import React, { useEffect, useState } from "react";
import BidCard from "../../components/BidCard";
import LocationPopUp from "../../components/LocationPopUp";
import keke from "/src/assets/images/user-icon.png";
import tricyle from "/src/assets/images/image 5.png";

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
        {
          id: 2,
          profilePic: keke,
          imageUrl: tricyle,
          name: "Michael",
          rating: 4.9,
          transportMeans: "Keke",
          amount: "2500",
        },
      ];
      setBids(response);
    };

    fetchBids();
  }, []);

  return (
    <div className="relative">
      <div className="p-6 lg:h-fit flex flex-wrap gap-4 justify-center">
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
      <LocationPopUp />
    </div>
  );
};

export default TestingComponent;
