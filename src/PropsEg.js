import React from 'react'

function PropsEg(props) {
  console.log(props.name)
  return (
    <div style={{backgroundColor:"skyblue", margin:"10px"}}>
      <h2>Hello {props.name}</h2>
      <h2>Email: {props.email}</h2>
    </div>
  )
}

export default PropsEg