import React from 'react'
import User from './User';

function ReuseComponent() {
     const userData = [
    { name: "Smit Patel", age: 23, id: 1, email: "Demo@gamil.com" },
    { name: "Patel Raj", age: 24, id: 2, email: "user@gamil.com" },
    { name: "Sam Xavier", age: 22, id: 3, email: "admin@gamil.com" },
    { name: "John Don", age: 25, id: 4, email: "Don@gamil.com" },
  ];
  return (
    <div>
      {
        userData.map((user) => {
          return (
            <div key={user.id}>
              <User data={user} />
            </div>
          );
        })
      }
    </div>
  )
}

export default ReuseComponent
