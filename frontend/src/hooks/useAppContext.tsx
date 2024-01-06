// hook for easy context access

import { useContext } from "react";
import { AppContext, AppContextType } from "../context/AppContext";

const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};

export default useAppContext;
