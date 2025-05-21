
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";


const clientId = import.meta.env.VITE_GOOLE_CLIENT_ID;


const App = () => {
  
  // create a query client for the react query
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={clientId}>
      <Toaster position="top-left" reverseOrder={false}></Toaster>
      <Routes/>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
};

export default App;
