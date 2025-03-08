
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from "./routes";




const App = () => {
  
  // create a query client for the react query
  const queryClient = new QueryClient();

  
  return (
    <QueryClientProvider client={queryClient}>
      <Routes/>
    </QueryClientProvider>
  );
};

export default App;
