import React from 'react'
import UserContext from '../UserContext/UserContext'
import { useContext } from 'react'
function Profile() {
    const {user}=useContext(UserContext);
    console.log(user);
    if(user){
        return(
        <div>
        welcome:{user.userName}
        
        </div>
        )
}
    return "please login"
}


export default Profile
