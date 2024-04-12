import { useState } from 'react'



function App() {
  const[Color, setColor] = useState("olive");
  

  return (
    <>
    
    <div  className='flex justify-center w-full h-screen ' style={{backgroundColor:Color}}>

      <div className='fixed flex justify-center bottom-3 bg-black flex-wrap ' >
        
      
      <div className='justify-center  rounded-sm flex '>
        <button  onClick={()=>setColor("red")}   className=' bg-red-500 mx-1  my-1  rounded-sm h-[40px] w-[50px] rounded-md' style={{backgroundColor:"red"}}>red</button>
        </div>
      <div className='justify-center  rounded-sm flex '>
      <button className=' bg-red-500 mx-1  my-1 h-[40px] w-[50px] rounded-md' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")} >blue</button>
      </div><div className='justify-center  rounded-sm flex '>
      <button className=' bg-red-500 mx-1  my-1 h-[40px] w-[50px] rounded-md ' style={{backgroundColor:"grren"}} onClick={()=>setColor("green")} >green</button>
      </div><div className='justify-center  rounded-sm flex '>
      <button className=' bg-red-500 mx-1  my-1 h-[40px] w-[50px] rounded-md' style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")} >olive</button>
      </div><div className='justify-center  rounded-sm flex '>
      <button className=' bg-red-500 mx-1  my-1 h-[40px] w-[50px] rounded-md' style={{backgroundColor:"white"}} onClick={()=>setColor("white")} >white</button>
      </div><div className='justify-center  rounded-sm flex '>
      <button className=' bg-red-500 mx-1  my-1 h-[40px] w-[50px] rounded-md' style={{backgroundColor:"black",color:"white"}} onClick={()=>setColor("black")} >black</button>
      </div>
      <div className='justify-center  rounded-sm flex '>
        <button className='mx-1 my-1 h-[40px] w-[50px] rounded-md' style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")} >brown</button>
        </div>
      
      <div className='justify-center  rounded-sm flex '>
        <button className=' bg-red-500 mx-1  my-1 h-[40px] w-[50px] rounded-md ' style={{backgroundColor:"alice blue"}} onClick={()=>setColor("aliceblue")} >alice</button>
        </div>
      <div className='justify-center  rounded-sm flex '>
      <button className=' bg-red-500 mx-1  my-1 h-[40px] w-[50px] rounded-md' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")} >orange</button>
      </div><div className='justify-center  rounded-sm flex '>
      <button className=' bg-red-500 mx-1  my-1 h-[40px] w-[50px] rounded-md' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")} >yellow</button>
      </div><div className='justify-center  rounded-sm flex '>
      <button className=' bg-red-500 mx-1  my-1 h-[40px] w-[50px] rounded-md'></button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
