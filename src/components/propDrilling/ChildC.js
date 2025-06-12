import React from 'react'
import { data,data1 } from '../../App'

function ChildC() {
  return (
    <div>
      <data.Consumer>
        {
          (name) => {
            return (
              // <h2> </h2>
              <data1.Consumer>
                {
                  (age) => {
                    return (
                      <h2>My name is <span style={{color:"goldenrod"}}>{name}</span> and my age is <span style={{color:"crimson"}}>{age}</span></h2>
                    )
                  }
                }
              </data1.Consumer>
            )
          }
        }
      </data.Consumer>
    </div>
  )
}

export default ChildC
