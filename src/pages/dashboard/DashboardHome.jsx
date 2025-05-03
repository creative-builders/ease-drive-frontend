import { useRecoilValue } from "recoil"
import { userAtom } from "../../components/atoms/userAtom"
import PassengerDashboard from "./PassengerDashboard";
import DriverDashboard from "./DriverDashboard";


const DashboardHome = () => {
 const userData = useRecoilValue(userAtom);

  return (
    <>
    {
    userData?.role === "passenger" ? <PassengerDashboard {...userData} /> : <DriverDashboard/>
    }
    </>
  )
}

export default DashboardHome