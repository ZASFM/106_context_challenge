import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
    const [data,setData]=useState({
        name:"",
        location:"",
    })
    return (
        <UserContext.Provider 
           value={{
              data,
              setData,
           }}
        >
            {children}
        </UserContext.Provider>
    )
};

//Custom component:
export const useGlobalContext=()=>{
    return useContext(UserContext);
}

export {UserContext,UserProvider}