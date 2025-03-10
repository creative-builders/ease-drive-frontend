
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";




const App = () => {
  
  // create a query client for the react query
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-left" reverseOrder={false}></Toaster>
      <Routes/>
    </QueryClientProvider>
  );
};

export default App;
