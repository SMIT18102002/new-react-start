import React from 'react'

function User({data}) {
  return (
    <div style={{border:"1px solid black", margin:"10px", padding:"10px",width:"300px",borderRadius:"10px"}}>
      <h4>Name : <span style={{color:"green"}}>{data.name}</span></h4>
      <h4>age : <span style={{color:"green"}}>{data.age}</span></h4>
      <h4>Email : <span style={{color:"green"}}>{data.email}</span></h4>
    </div>
  )
}

export default User
