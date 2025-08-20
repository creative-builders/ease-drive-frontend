import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
 const 
  return isAuthorized ? <Layout /> : <Navigate to="/" />;
};

export default ProtectedRoutes;