import React,{useState} from 'react'

function CheckBoxHandle() {
    const [skills, setskills] = useState([]);

    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked);
        if(event.target.checked) {
            setskills([...skills, event.target.value]);
        }
        else {
            setskills(skills.filter((item) => item !== event.target.value));
        }    
    }
  return (
    <div>
      <h3>Select Your Skills</h3>
      <input type="checkbox" id='html' value="html" onChange={handleSkills}/>
        <label htmlFor="html">HTML</label>
        <br />
        <input type="checkbox" id='css' value="css" onChange={handleSkills}/>
        <label htmlFor="css">CSS</label>
        <br />
        <input type="checkbox" id='js' value="js" onChange={handleSkills}/>
        <label htmlFor="js">JavaScript</label>
        <br />
        <input type="checkbox" id='react' value="react" onChange={handleSkills}/>
        <label htmlFor="react">React</label>
        <h1>{skills.toString()}</h1>
    </div>
  )
}

export default CheckBoxHandle
