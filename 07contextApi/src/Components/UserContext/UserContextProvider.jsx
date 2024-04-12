
import UserContext from "./UserContext";

import React from 'react'
import { useState } from "react";

function UserContextProvider({children}) {
    const[user,setUser]=useState(null)
  return (
   <UserContext.Provider value={{user,setUser}}>
    {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider
