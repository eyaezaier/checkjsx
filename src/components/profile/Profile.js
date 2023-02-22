import React from 'react'

const Profile = (props) => {
  
  return (
    <div>
     <div > 
        {props.children}
     </div>
     <div>
       <h1>{props.fullName}</h1> 
       <h2>{props.bio}</h2> 
        <h3>{props.profession}</h3>
     </div>
     <button onClick= {() => props.handleName(props.fullName)} >eya </button>
    </div>
  )
}

export default Profile

