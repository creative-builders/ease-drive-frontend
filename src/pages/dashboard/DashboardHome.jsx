import { useRecoilValue } from "recoil";
import { userAtom } from "../../components/atoms/userAtom";
import PassengerDashboard from "./passenger/PassengerDashboard";
import DriverDashboard from "./driver/DriverDashboard";
import { Navigate } from "react-router-dom";

const DashboardHome = () => {
  const userData = useRecoilValue(userAtom);

  // console.log(userData)

  if (!userData || !userData.role) {
    return <Navigate to={"/login"} />;
  }

  switch (userData.role) {
    case "passenger":
      return <PassengerDashboard {...userData} />;
    case "driver":
      return <DriverDashboard />;
    default:
      return <Navigate to={"/login"} />;
  }
};

export default DashboardHome;
