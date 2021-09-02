import React, { useState, useEffect } from "react";
import SignInSignUp from "./page/SignInSignUp";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./utils/contexts";
import { isUserLogedApi } from "./api/auth";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(isUserLogedApi());
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {user ? <h1>Estas logueado</h1> : <SignInSignUp />}
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );
}
