import { createContext, useContext, useState } from "react"
import toast from "react-hot-toast";




const UserContext = createContext();



export const UserAuthProvider = ({ children }) => {
  const[user, setUser] = useState({
    isAuthorized: false
  });
  const[isLoading, setIsloading] = useState(false);

  return(
    <UserContext.Provider value={{ user, setUser, setIsloading, isLoading }}>
      { children }
    </UserContext.Provider>
  )
}






const useAuth = () => {
  const context = useContext(UserContext);
  if(!context){
    toast.error("User context does not exist");
  }
  return context;
}

export default useAuth