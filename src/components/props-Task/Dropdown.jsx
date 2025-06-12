import React,{useState} from "react";
import Clock from "./Clock";

const Dropdown = () => {
  const [color, setColor] = useState("red");
  return (
    <div>
      <select name="" id="" onChange={(event) => setColor(event.target.value)} value={color}>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="Orange">Orange</option>
        <option value="pink">Pink</option>
      </select>
      <Clock color={color} />
    </div>
  );
};

export default Dropdown;
