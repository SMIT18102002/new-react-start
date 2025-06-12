import { createContext, useId, useState } from "react";
import "./App.css";
import User from "./User";
import UserFunctionalCmp from "./components/UserFunctionalCmp";
import UserClassCmp from "./components/UserClassCmp";
import PropsEg from "./PropsEg";
import InputExample from "./components/InputExample";
import ToggleAndHideShow from "./components/ToggleAndHideShow";
import UserProps from "./components/props/UserProps";
import CollegeArray from "./components/props/CollegeArray";
import Student from "./components/props/Student";
import ControlledComponent from "./components/ControlledComponent";
import CheckBoxHandle from "./components/CheckBoxHandle";
import RadioAndDropdownHandle from "./components/RadioAndDropdownHandle";
import MapMethod from "./components/LoopsUsingMap";
import ReuseComponent from "./components/ReuseComponent/ReuseComponent";
import Dropdown from "./components/props-Task/Dropdown";
import UseEffectHook from "./components/UseEffectHook";
import UseRefHook from "./components/UseRefHook";
import ChildA from "./components/propDrilling/ChildA";
import ChildD from "./components/propDrilling/ChildD";
import UseMemoHook from "./components/UseMemoHook";
import UseCallBackHook from "./components/UseCallBackHook";

// contextApi
const data = createContext();
const data1 = createContext();
const data2 = createContext();
const data3 = createContext();

function App() {
  // let dataN = "Smit";
  // function Apple() {
  //   return alert("Function called");
  // }

  // const [data, setdata] = useState("Smit");
  // function updateData() {
  //   setdata("Smit Patel");
  // }

  // const [name,setName] = useState('S Patel')

  let userIdNum = 1234;
  let userObject = {
    name: "Smit",
    age: 23,
    email: "smit@gmail.com",
    userId: 1234,
  };

  let collegeName = ["IIT Manipur", "GTU", "AIT", "NIT", "MIT"];

  const [student, setStudent] = useState("sam");

  const name = "Smit Patel";
  const age = 23;
  const gender = "Male";


  return (
    <div className="App">
      <h1>React Tuts</h1>
      <User />
      <UserFunctionalCmp />
      <UserClassCmp />

      {/* <h1>{dataN}</h1>
      <div>
        <button onClick={Apple}>Click me</button> */}
      <br />
      {/* <button onClick={() =>  alert("Hello User")}>Press It</button> */}
      {/* </div> */}

      {/* <div>
        <h1>{data}</h1>
        <button onClick={updateData}>Update data</button>
      </div> */}

      {/* <div>
        <h1>Props in react⬇️</h1>
        <PropsEg name={name} email={"abc@gmail.com"}/>
        <button onClick={() => {setName("Mr. Smit")}}>Update Name</button>
      </div> */}

      <hr />
      <h3 style={{ color: "yellowgreen" }}>Small Task 1</h3>
      <ToggleAndHideShow />

      <hr />
      <h2 style={{ color: "blue" }}>Props Examples</h2>
      {/* <UserProps name="S Patel" age={23} id={userIdNum}/> */}
      {/* <UserProps userData={userObject}/>
      <CollegeArray names={collegeName}/>
      {student && <Student name={student}/>}
      <button onClick={() => setStudent("Ram raman")}>Update Student Name</button> */}

      <hr />
      <div>
        <h3 style={{ color: "yellowgreen" }}>Small Task 2</h3>
        <InputExample />
      </div>

      <hr />
      <div>
        <h2 style={{ color: "coral" }}>Controlled Component</h2>
        <ControlledComponent />
      </div>

      <hr />
      <div>
        <h2 style={{ color: "blue" }}>Handle CheckBox in React js</h2>
        <CheckBoxHandle />
      </div>

      <hr />
      <div>
        <h2 style={{ color: "coral" }}>Radio and Dropdown Handle</h2>
        <RadioAndDropdownHandle />
      </div>

      <hr />
      <div>
        <h2 style={{ color: "blue" }}>Loops using map Function in jsx</h2>
        <MapMethod />
      </div>

      <hr />
      <div>
        <h2 style={{ color: "coral" }}>Reuse Component in loop</h2>
        <ReuseComponent />
      </div>

      <hr />
      <div>
        <h2 style={{ color: "yellowgreen" }}>Small Task 3 (Digital Clock)</h2>
        <Dropdown />
      </div>

      <hr />
      <div>
        <h2 style={{ color: "blue" }}>UseEffectHook example</h2>
        <UseEffectHook />
      </div>

      <hr />
      <div>
        <h2 style={{ color: "coral" }}>UseRefHook example</h2>
        <UseRefHook />
      </div>

      <hr />
      <div>
        <h2 style={{ color: "blue" }}>PropDrilling Examples with contextApi</h2>
        <data.Provider value={name}>
          <data1.Provider value={age}>
            <ChildA />
          </data1.Provider>
        </data.Provider>
      </div>

      <hr />
      <div>
        <h2 style={{ color: "coral" }}>UseContextHook example</h2>
        <data2.Provider value={name}>
          <data3.Provider value={gender}>
          <ChildD />
          </data3.Provider>
        </data2.Provider>
      </div>

      <hr />
      <div>
        <h2 style={{ color: "blue" }}>UsememoHook Example</h2>
        <UseMemoHook/>
      </div>

      <hr />
      <div>
        <h2 style={{ color: "coral" }}>UsememoHook Example</h2>
        <UseCallBackHook/>
      </div>
    </div>
  );
}

export default App;
export { data, data1,data2,data3 }; // Exporting context to use in other components
