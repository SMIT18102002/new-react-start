import React, { useState } from "react";

function RadioAndDropdownHandle() {
  const [gender, setGender] = useState("male");

  const [country, setCountry] = useState("India");


  return (
    <div>
      <h4>1. Select Gender</h4>
      <input
        type="radio"
        name="gender"
        id="male"
        value={"Male"}
        checked={gender === 'male'}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        id="female"
        value={"Female"} 
        checked={gender === 'female'}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="female">Female</label>

      <h2>Selected Gender:= {gender}</h2>
      
      <h4>2. Select Country</h4>
      <select defaultValue={"India"} onChange={(event) => setCountry(event.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Australia">Australia</option>
      </select>
      <h2>Selected Country:= {country}</h2>
    </div>
  );
}

export default RadioAndDropdownHandle;
