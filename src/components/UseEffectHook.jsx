import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState("Ram");

  useEffect(() => {
    console.log("compponent mounted");
  }, [data]);

  function updateCount() {
    setCounter(counter + 1);
  }
  
  function updateData() {
    setData("Shyam");
  }
  return (
    <div>
      <h1>Button clicked {counter} times</h1>
      <button onClick={updateCount}>counter</button>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default UseEffectHook;
