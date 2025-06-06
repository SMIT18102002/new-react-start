import { useState } from "react";
import "./App.css";
import User from "./User";
import UserFunctionalCmp from "./components/UserFunctionalCmp";
import UserClassCmp from "./components/UserClassCmp";
import PropsEg from "./PropsEg";
import InputExample from "./InputExample";

function App() {
  let dataN = "Smit";
  function Apple() {
    return alert("Function called");
  }

  const [data, setdata] = useState("Smit");
  function updateData() {
    setdata("Smit Patel");
  }

  const [name,setName] = useState('S Patel')
  return (
    <div className="App">
      <User />
      <UserFunctionalCmp />
      <UserClassCmp />

      <h1>{dataN}</h1>
      <div>
        <button onClick={Apple}>Click me</button>
        <br />
        {/* <button onClick={() =>  alert("Hello User")}>Press It</button> */}
      </div>

      <div>
        <h1>{data}</h1>
        <button onClick={updateData}>Update data</button>
      </div>

      <div>
        <h1>Props in react⬇️</h1>
        <PropsEg name={name} email={"abc@gmail.com"}/>
        <button onClick={() => {setName("Mr. Smit")}}>Update Name</button>
      </div>

      <div>
        <h1>Get input box value</h1>
        <InputExample/>
      </div>
    </div>
  );
}

export default App;
