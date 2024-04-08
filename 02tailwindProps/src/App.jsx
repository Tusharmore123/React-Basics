import { useState } from 'react'

import './App.css'
import Cards from './components/cards'
function App() {
  let userName1="Tushar"
  let arr=[1,2,3];
  let obj1={
    'hi':'Tushar'
  }

  return (
    <>

    <h1 className='bg-green-400 rounded-xl'> TailWind</h1>
   <Cards username={userName1}/>
   <Cards username="kunal" nextButton='click'/>
  {/* <Cards username=[1,2,3]/> //cannot access the aray like this */}
   {/* <Cards username={"hi":"tushar"} cannot access the object like this /> //*/}
   {/* <Cards username={arr}/>
   <Cards username="kunal"/>
   <Cards username={obj1}/>
    */}
   
    </>
  )
}

export default App
