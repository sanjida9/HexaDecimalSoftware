import React, { useState } from "react";
function App() {
  const [users, setUsers] = useState([]);

  // fetch from api
  fetch("http://localhost:5000/getData")
    .then((res) => res.json())
    .then((data) => setUsers(data));
  return (
    <div style={{ textAlign: "center" }}>
      {users.map((user) => (
        <>
          <h3>Name : {user?.name}</h3>
          <h5>Username : {user?.username}</h5>

          <h5>Company Name : {user?.company?.name}</h5>
          <h5>Address : {user.address?.city}</h5>
        </>
      ))}
    </div>
  );
}

export default App;
