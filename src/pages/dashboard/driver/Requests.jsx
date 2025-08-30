import { RideRequests } from "../../../components/driverDashboardFolders/RideRequest"
import { useOutletContext } from "react-router-dom";

export const Requests = () => {
   const { coords } = useOutletContext();
   console.log("Coords from Outlet Context in Requests Page:", coords);
  return (
    <div>
      <RideRequests />
    </div>
  )
}
