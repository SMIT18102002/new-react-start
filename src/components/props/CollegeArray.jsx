import React from 'react'

function CollegeArray({names}) {
    console.log(names)
  return (
    <div>
      <h3>College data pass of array</h3>
      <h4>{names[0]}</h4>
      <hr />
    </div>
  )
}

export default CollegeArray
