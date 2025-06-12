import React, { useContext } from 'react'
import {data2,data3} from "../../App";

function ChildD() {
    const fname = useContext(data2);
    const gender = useContext(data3);

  return (
    <div>
      <h2>Hi My name is {fname} and Gender is {gender}</h2>
    </div>
  )
}

export default ChildD
