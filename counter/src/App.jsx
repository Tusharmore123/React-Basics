import { useState,React } from "react";
let counter=0;
function App() {
  let [useCounter,setUseCounter]=useState(0);//set the default value in useState
//   use state returns tow this main var and reference var

  let Increment=()=>{
	counter+=1;
	console.log(counter);//as u can see the bvalue of counter is being changed but it is not reflected in the ui
	// for that purpose hooks are used'
	setUseCounter(useCounter+1);
	console.log(useCounter);
	// useCounter(setUseCounter);

  }
  let Decrement=()=>{
	counter-=1;
	console.log(counter);//as u can see the bvalue of counter is being changed but it is not reflected in the ui
	// for that purpose hooks are used
	// setUseCounter(useCounter-1);
  
	// setUseCounter(useCounter-1);
	// setUseCounter(useCounter-1);
  // while using updating using useState the values ar not updated immediately thye are batched together
  // and then updated all at once since usestate is async function.
  // setUseCounter takes one  input argumnent i.e a call back function aand takes argument ie previous of the first state
  setUseCounter((precounter)=>precounter-1);
  
	setUseCounter((precounter)=>precounter-1);
	setUseCounter((precounter)=>precounter-1);


	// useCounter=setUseCounter;
	// useCounter(setUseCounter);

  }
  return (
    <>
      <div>The Counter Value is:{useCounter}</div>
      <button onClick={Increment}>Increment </button><br/>
      <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App
