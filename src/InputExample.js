import React, { useState } from "react";

function InputExample() {
  const [data, setData] = useState(null);
  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
  }
  return (
    <div>
      <h2>{data}</h2>
      <input type="text" onChange={getData} />
      <button>Print Data</button>
    </div>
  );
}

export default InputExample;
