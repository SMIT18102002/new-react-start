import React, { useState, useEffect } from "react";

function Clock({color}) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      <h2 style={{color:color,backgroundColor:"#000",width:"130px",padding:"10px",borderRadius:"5px"}}>{time}</h2>
    </div>
  );
}

export default Clock;
