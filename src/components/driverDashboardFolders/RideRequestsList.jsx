import { RideRequestCard } from "./RideRequestCard";
import {FilterIcon} from "../../assets/icons/FilterIcon"

export function RideRequestsList({ requests }) {

const mockRequests = [
  {
    id: "1",
    name: "Chibuike Emmanuel Emmanuel",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    eta: "5 mins",
    currentLocation: "University of Lagos Emmanuel v",
    destination: "Yaba Market Emmanuel",
  },
  {
    id: "2",
    name: "Amaka CMS Lagos Island Obi",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    eta: "8 mins",
    currentLocation: "Ikeja City Mall Ojota Bus Stop",
    destination: "Ojota Bus Stop",
  },
  {
    id: "3",
    name: "Tunde CMS Lagos Island Balogun",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    eta: "3 mins",
    currentLocation: "CMS Lagos Island CMS Lagos Island",
    destination: "Lekki Phase CMS Lagos Island 1",
  },
   {
    id: "2",
    name: "Amaka CMS Lagos Island Obi",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    eta: "8 mins",
    currentLocation: "Ikeja City Mall Ojota Bus Stop",
    destination: "Ojota Bus Stop",
  },
];


    return (

        <div className="self-stretch px-5   py-3 pb-4 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-2">
            <div className="w-[460px] inline-flex justify-start items-center gap-40">
                <div className="justify-start text-black text-xl font-semibold font-['Inter']">Ongoing Ride Requests</div>
                <div className="flex justify-start items-center gap-2">
                    <div className="w-24 h-10 p-2.5 rounded-lg flex justify-center items-center gap-2.5">
                        <div className="justify-start text-accent-500 text-base font-medium font-['Poppins']">Filter</div>
                        <div className="w-6 h-6 relative">
                          <FilterIcon />
                          </div>
                    </div>
                </div>
            </div>

            {mockRequests.map((req) => (
                <RideRequestCard key={req.id} request={req} />
            ))}


        </div>
    );
}
