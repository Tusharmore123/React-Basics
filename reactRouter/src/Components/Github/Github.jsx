import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom';
export default function Github() {
    const data=useLoaderData();
//     useEffect(()=>{
//         fetch('https://api.github.com/users/Tusharmore123')
//         .then((resp)=>resp.json())
//         .then((resp)=>setData(resp))  
//         console.log(data); 
//     },[])
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </>
  )
}

// export default Github
export const gitHubInfo=async()=>{
    const resp=await fetch('https://api.github.com/users/Tusharmore123');
    
    return resp.json();
}
