import React, { useState } from 'react'

function ControlledComponent() {
    const[name,setName] = useState('')
    const[password,setPassword] = useState('')
    const[email,setEmail] = useState('')
  return (
    <div>
      <form action="" method="get">
        <input type="text" value={name} onChange={(event) => {setName(event.target.value)}} placeholder='Enter Name' />
        <br />
        <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} placeholder='Enter Password' />
        <br />
        <input type="email" value={email} name="" id="" onChange={(event) => {setEmail(event.target.value)}} placeholder='Enter Email' />
        <br />
        <button>Submit</button> 
        <button onClick={() => {setEmail('');setName('');setPassword('')}}>Clear</button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>
      
    </div>
  )
}

export default ControlledComponent
