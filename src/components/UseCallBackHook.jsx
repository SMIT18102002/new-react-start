import React, { useState } from 'react'

function UseCallBackHook() {
    const [add,setAdd] = useState(0);
  return (
    <div>
      <h2>{add}</h2>
        <button onClick={() => setAdd(add + 1)}>Addition</button>
    </div>
  )
}

export default UseCallBackHook
