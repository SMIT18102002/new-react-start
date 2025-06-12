import React, { useState } from "react";

function InputExample() {
  const [val, setVal] = useState(null);
  function getData(val) {
    console.log(val.target.value);
    setVal(val.target.value);
  }
  return (
    <div>
      <h2>Get input Field value</h2>
      <input
        type="text"
        value={val || ""}
        placeholder="Enter User Name"
        onChange={getData}
      />
      <h2>{val}</h2>
      <button onClick={() => setVal("")}>Clear val</button>
    </div>
  );
}

export default InputExample;
