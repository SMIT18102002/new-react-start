import React, { useState, useRef } from "react";

function UseRefHook() {
  const refElement = useRef("");
  console.log(refElement);

  const [name, setName] = useState("");

  function resetfun() {
    setName("");
    refElement.current.focus(); 
  }

  function handleInput() {
    refElement.current.style.color = "blue";
    refElement.current.value = "SP"
  }
  return (
    <div>
      <input
      ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={resetfun}>Reset</button>
      <button onClick={handleInput}>handle input</button>
    </div>
  );
}

export default UseRefHook;
