import { useState } from 'react'

import './App.css'
import UserContextProvider from './Components/UserContext/UserContextProvider'
import Login from './Components/Login/Login'
import Profile from './Components/Login/Profile'
function App() {
 

  return (
    <>
     <UserContextProvider>
      <Login/>
      <Profile/>
     </UserContextProvider>
    </>
  )
}

export default App
