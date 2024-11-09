import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext();
// localStorage.clear()

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { admin, employees } = getLocalStorage();
    setUserData({admin, employees});
  }, []);
  return (
    <div>
      <AuthContext.Provider value={userData}>
      {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
