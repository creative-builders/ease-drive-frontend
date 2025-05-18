import React, { useEffect, useState } from "react";
import BidCard from "../bid/BidCard";

import userIcon from "/src/assets/images/user-icon.png";
import tricyle from "/src/assets/images/image 5.png";
import motor from "/src/assets/images/city-ride-car.svg"
import bike from "/src/assets/images/bike-main.png"


const Bidder = () =>{

    const [bids, setBids] = useState([]);

  // Simulating API fetch (Replace with real API call)
  useEffect(() => {
    const fetchBids = async () => {
      
      const response = [
        {
          id: 1,
          profilePic: userIcon,
          imageUrl: tricyle,
          name: "James",
          rating: 4.7,
          transportMeans: "Keke",
          amount: "2000",
        },
        {
          id: 2,
          profilePic: userIcon,
          imageUrl: motor,
          name: "John",
          rating: 5.7,
          transportMeans: "motor",
          amount: "3000",
        },
        {
          id: 3,
          profilePic: userIcon,
          imageUrl: bike,
          name: "Nedu",
          rating: 4.8,
          transportMeans: "keke",
          amount: "4000",
        },
      
      ];
      setBids(response);
    };

    console.log(bids.map(bid => bid.id));
    fetchBids();
  }, []);

  useEffect(() => {
  if (bids.length > 0) {
    console.log(bids.map(bid => bid.id));
  }
}, [bids]);


  return(
    <div className='relative mt-16 -z-20 border border-blue-600'>
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
    </div>
  )
}
export default Bidder