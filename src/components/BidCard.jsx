import React from "react";
import keke  from "/src/assets/images/user-icon.png"
import tricyle from "/src/assets/images/image 5.png"

const arrayObj = [
    {
        profilePic: keke,
        imageUrl: tricyle,
        name: "James",
        rating: 4.5,
        transportMeans: "Keke",
        amount: "2000"
    },
    {
        profilePic: keke,
        imageUrl: "https://th.bing.com/th/id/R.0adeeb02fded7ff2bf089cda833eae3e?rik=6WWhy0z%2faoovXg&pid=ImgRaw&r=0",
        name: "Sarah",
        rating: 4.7,
        transportMeans: "Bike",
        amount: "1500"
    },
    {
        profilePic: keke,
        imageUrl: "https://th.bing.com/th/id/R.9409372ffe4ae2cde935ebe7a4478f08?rik=uA5YZlEn7f1B2g&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftaxi-hd-png-taxi-cab-high-quality-png-png-image-1600.png&ehk=60q%2fXdv9NTk8tlqLokLMTnK1o9nnnKpFXPE6vsTnC9U%3d&risl=&pid=ImgRaw&r=0",
        name: "John",
        rating: 4.2,
        transportMeans: "Taxi",
        amount: "3000"
    },
    {
        profilePic: keke,
        imageUrl: "https://th.bing.com/th/id/R.70a66ded2dd28914f5e25ad8ed822d86?rik=9lIRXSkX48ifnQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fbus-png-yellow-bus-png-clipart-best-4181.png&ehk=GdCcZup%2b8ZdinVYr1uR76AUvzm6fw8R61Alzajog4fA%3d&risl=&pid=ImgRaw&r=0",
        name: "Ada",
        rating: 4.2,
        transportMeans: "Bus",
        amount: "4000"
    }
];

const BidCard = ({bids}) =>{

    return (
        
        <div className="min-h-screen bg-gray-500">
              <div className="p-6 lg:h-fit flex flex-wrap gap-4 justify-center">
            {bids.map((bid, index) => (
                <div key={index} className="h-fit max-w-[400px] w-full bg-[#EFF6E9] border-2 border-green-500 rounded-2xl flex p-3 gap-3">
                    {/* first section */}
                    <div className="w-3/5 h-full text-sm flex flex-col gap-3">
                        <div className="flex w-full items-center gap-2">
                            <img src={bid.profilePic} alt="" className="w-10 h-10 rounded-full object-contain" />
                            <p className="font-medium text-base leading-[100%]">{bid.name}</p>
                            <img src="/star.jpg" alt="" className="w-3" />
                            <p className="font-medium text-base leading-[100%]">{bid.rating}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-medium text-base leading-6">{bid.transportMeans} <span><em className="decoration-double line-through">N</em>{bid.amount}</span></p>
                            <p className="text-xs">800m (5mins away)</p>
                        </div>
                        <p className="text-[11px] text-gray-400/50 gap-6">Automatic | 3 seat | yellow</p>
                        <div className="h-10 flex items-center justify-center gap-4">
                            <button className="w-full py-2 cursor-pointer text-center rounded-lg gap-2 text-base font-normal text-green-300 bg-transparent border border-green-500">Decline</button>
                            <button className="w-full py-2 cursor-pointer text-center rounded-lg gap-2 text-base font-normal text-white bg-green-300">Accept</button>
                        </div>
                    </div>

                    {/* second section */}
                    <div className="w-2/5 h-full flex flex-col gap-5">
                        <img src={bid.imageUrl} alt="" className="h-20 w-full object-contain" />
                        <div className="flex items-center justify-between text-sm">
                            <a className="text-green-500 w-full text-center font-normal text-base tracking-normal" href="#">View details</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
       
    )
}

const BidCardContainer =()=>{
    return<BidCard bids={arrayObj}/>
}
export default BidCardContainer