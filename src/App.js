import React, { useState } from "react";
import SignInSignUp from "./page/SignInSignUp";

export default function App() {
  const [user, setUser] = useState({ name: "Guso" });

  return (
    <div>
      {user ? (
        <div>
          <SignInSignUp />
        </div>
      ) : (
        <h1>No esta logueado!</h1>
      )}
    </div>
  );
}
