import React, { useMemo, useState } from "react";

function UseMemoHook() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(50);

  const multiplicatin = useMemo(
    function multyply() {
        console.log("called")
      return add * 10;
    },
    [add]
  );
  return (
    <div>
      Multiplication when add is changed: {multiplicatin}
      <br />
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Addition
      </button>
      <span>{add}</span>
      <br />
      <button onClick={() => setSub(sub - 1)}>Subtraction</button>
      <span>{sub}</span>
    </div>
  );
}

export default UseMemoHook;
