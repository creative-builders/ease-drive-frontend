import { Navigate } from "react-router-dom";
import { userAtom } from "../components/atoms/userAtom";
import { useRecoilValue } from "recoil";
import { DashboardLayout } from "../layout/dashboard";

const ProtectedRoutes = () => {
 const user = useRecoilValue(userAtom);

 const isAuthorized  = user;

  return isAuthorized ? <DashboardLayout /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;