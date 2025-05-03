// hooks/useButtonNavigation.js
import { useNavigate } from "react-router-dom";

export const useButtonNavigation = () => {
  const navigate = useNavigate();

  return (path) => {
    navigate(path);
  };
};
