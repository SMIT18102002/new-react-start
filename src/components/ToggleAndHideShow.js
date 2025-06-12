import React, { useState } from "react";
import User from "./User";

function ToggleAndHideShow() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle in react js</button>
      {display ? <User/> : null}
    </div>
  );
}

export default ToggleAndHideShow;
