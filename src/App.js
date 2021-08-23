import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState({ name: "Guso" });

  return <div>{user ? (<h1>Estas loguedo!</h1>) : (<h1>No estas loguedo!</h1>)}</div>;

}
