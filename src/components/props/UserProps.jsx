import React from "react";

function UserProps({ name, age, id, userData }) {
  return (
    <>
      <div>
        <h3>User Prop Component:==</h3>
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>UserID: {id}</li>
        </ul>
      </div>
      <div>
        <h3>User Prop Component by Objects:==</h3>
        <ul>
          <li>Name: {userData.name}</li>
          <li>Age: {userData.age}</li>
          <li>Age: {userData.email}</li>
          <li>UserID: {userData.userId}</li>
        </ul>
      </div>
    </>
  );
}

export default UserProps;
