import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { USER_KEY } from "./data/repository";

export const AppContext = React.createContext(null);

export function useAppContext() {
    return useContext(AppContext)
}

export const AppContextProvider = ({ children }) => {
    const history = useHistory();
    const [username, setUsername] = useLocalStorage(USER_KEY, ""); 

    const loginUser = (username) => {
        setUsername(username);
      };
    
      const logoutUser = () => {
        history.push("/sign-in");
        setUsername("");
      };
    

    return (<AppContext.Provider value={{ username, setUsername, loginUser, logoutUser }} >
        {children}
    </AppContext.Provider>)
}
