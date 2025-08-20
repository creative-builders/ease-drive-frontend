import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"
import { Requests } from "./Requests";
import { RideRequestsList } from "./RideRequestsList";
import { RideRequestDetails } from "./RideRequestDetails";
import {Info} from "./Info";

export default function RideRequests() {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-br from-white via-purple-100 to-white overflow-hidden">
      <Topbar />
  
      <div className="flex w-full ">
        <div>

        <Sidebar />
        </div>
        {/* <Requests /> */}
        
        <div className="flex w-[1057px] mt-40 ml-10 h-full left-10 gap-4">

        <RideRequestsList />

        <RideRequestDetails />
        </div>
      </div>
    </div>
  );
}
