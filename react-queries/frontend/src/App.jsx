import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes,setJokes]= useState([])
  const[loading,setLoading]=useState(true)
  const [error,setError]=useState(false)
  const [search,setSearch]=useState('P');
  const uref=useRef()
  // if there is fetching of api based on each time user enter tthe inputs in such cases 
  // each time is request is send and there is no guarantee that request are fetched in same order
  // so in order to show the latest data to user we use Abort controller provide by axios library
  // Abort Controller just cancel the previous api call and only last api output will be return but at each time a request is send
  // in order to avoid a api call at each input we use debouncing
  useEffect(()=>{
    const controller=new AbortController();
    (async()=>{
      try{

      setLoading(true)
      setError(false)
     const resp= await axios.get('/api/jokes?search='
    +search,{signal:controller.signal});
     setJokes(resp.data)
     setLoading(false)
      }
     catch(e){
      if(axios.isCancel()){
        console.log(e)
      }
      setLoading(false)
       setError(true)
       console.log("yupppppp")
       console.log(e);
     }
  })()
  
  }
  ,[search])
  if (loading){
    return <h1>Loading......</h1>
  }
  
  if (error){
    return <h1 style={{color:'red'}}>something went wrong</h1>
  }
  return (
    <>
      <h1>Api using React-queries</h1>
      <input
      value={search}
      onChange={(e)=>{setSearch(e.target.value)}}
      ref={uref}
      />
      {jokes.map((joke)=>{return <div key={joke.id}>{joke.setup}-{joke.delivery}</div>})}

    </>
  )
}

export default App
