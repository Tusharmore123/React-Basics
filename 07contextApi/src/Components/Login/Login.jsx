import React from 'react';
import UserContext from '../UserContext/UserContext';
import { useState ,useContext} from 'react';


function Login() {
    const {setUser}=useContext(UserContext);
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");

  return ( 
    
    <div>
        <form>
        <label>
            enter your name:-
        </label>
      <input
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      />
        <br/>
        <label>
            password:-
        </label>
      <input
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      type="password"
      />
      <br/>
      <button onClick={(e)=>{
        e.preventDefault();
        console.log(userName);
        setUser({userName,setPassword});
        console.log(setUser);
      }}>Submit</button>
        </form>
    </div>
  )
}


export default Login
