import { Link } from "react-router-dom";

const rides = [
  {
    name: "John Ndubuisi Chukwuemeka",
    time: "20 mins away from you",
    location: "Nsukka Campus Main Gate, Zik's Flat, T-Junction",
    destination: "UNN Hostel Block A, Faculty of Arts Gate",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "John Ndubuisi Chukwuemeka",
    time: "20 mins away from you",
    location: "Bello Hostel, UNN Campus",
    destination: "St. Theresa's Market, Nsukka Town",
    img: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "John Ndubuisi Chukwuemeka",
    time: "20 mins away from you",
    location: "Nsukka Campus Main Gate, Zik's Flat, T-Junction",
    destination: "UNN Hostel Block A, Faculty of Arts Gate",
    img: "https://randomuser.me/api/portraits/men/34.jpg"
  }
];

export default function RideRequests({ isPreview = false }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-[#000] text-2xl not-italic leading-normal">Ongoing Ride Requests</h2>
        {/* <a href="#"></a> */}
        {isPreview && (
          <Link className="text-[#2ABD45] text-sm font-semibold" to={'/dashboard/requests'}>
            View all
          </Link>
        )}
      </div>
      {rides.map((ride, i) => (
        <div key={i} className="flex items-start gap-3 mb-4 border-b-[1px] border-[#E7E7E7]">
          <img src={ride.img} alt={ride.name} className="w-10 h-10 rounded-full" />
          <div className="gap-20 md:gap-3">
            <h3 className="font-semibold text-base not-italic leading-normal text-[#000]">{ride.name}</h3>
            <p className="font-normal text-xs not-italic leading-normal text-[#000]">{ride.time}</p>
            <p className="text-[14px] not-italic font-semibold leading-6 tracking-wide text-[#072C0F]">
              <strong>Current location:</strong> {ride.location}
            </p>
            <p className="text-[14px] not-italic font-semibold leading-6 tracking-wide text-[#072C0F]">
              <strong>Going to:</strong> {ride.destination}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
