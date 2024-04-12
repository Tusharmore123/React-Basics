import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength]=useState(8);
  const[password,setPassword]=useState('hello');
  const[numbers,setNumbers]=useState(false);
  const[charachers,setCharachters]=useState(false);
  let passRef=useRef(null);
    const generatePassword=useCallback(()=>{
     let str="aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
       let pass="";
       
      if (numbers){
        console.log(numbers);
        str+="0123456789"
      }
      if (charachers){
        
        str+="!@#$%^&~"
      }
      for (let index = 0; index <=length; index++) {
        const strIndex = Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(strIndex);      
      }
      setPassword(pass);
      
    },[length,numbers,charachers])

    useEffect(()=>{
      generatePassword();
      

    },[length,numbers,charachers])
    
  

  return (
    <>
      <h1 className='text-white text-center py-3'>Password Generator</h1>
      <div className='width-full  py-3 '>
        <div className='flex justify-center width-full'>
          <input
            className='rounded-md  shadow-md  w-30 h-9 text-2xl'
            value={password}
            ref={passRef}
            readOnly

          />
          <button className='bg-blue-300 rounded-md px-2 mx-1' onClick={
            ()=>{
              window.navigator.clipboard.writeText(password);
              passRef.current?.select();
            }
          } >copy</button>

        </div>
        <div className='flex width-full  justify-center py-3  '>
          <div>

            <input
              type="range"
              min="8"
              value={length}
              max="100" 
              className='w-[80px]'
              onChange={(e)=>{
              let temp;
              temp=e.target.valueAsNumber;
              setLength(temp);
             }}
              />
            <label htmlFor="length" className='text-white text-center  px-1'>length:{length}</label>
          </div>
          <div>

            <input type="checkbox" defaultChecked={numbers}  onChange={() => {
    setNumbers((prev) =>!prev);
  }}/>
            <label htmlFor="length" className='text-white text-center px-1'>Numbers</label>
          </div>
          <div>

            <input type="checkbox" value={charachers}/>
            <label htmlFor="length" className='text-white text-center px-1'>Charachters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
