import React from "react";

function MapMethod() {
  const userNames = ["Smit", "Patel", "Sam", "John", "Doe"];
  const userData = [
    { name: "Smit Patel", age: 23, id: 1, email: "Demo@gamil.com" },
    { name: "Patel Raj", age: 24, id: 2, email: "user@gamil.com" },
    { name: "Sam Xavier", age: 22, id: 3, email: "admin@gamil.com" },
    { name: "John Don", age: 25, id: 4, email: "Don@gamil.com" },
    { name: "Doe Karter", age: 21, id: 5, email: "Karter@gamil.com" },
  ];

  return (
    <div>
      <table border={"1"} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>Dummy Table Data⬇️</h4>
      <table border={"1"} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jhon</td>
            <td>Email@gmail.com</td>
            <td>18</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MapMethod;
