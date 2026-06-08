import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // LOAD USER FROM LOCAL STORAGE
  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // LOGIN
  const login = (userData) => {
    localStorage.setItem("userInfo", JSON.stringify(userData));

    setUser(userData);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("userInfo");

    setUser(null);
  };

  const updateUser = (updatedUser) => {
    const currentUser = JSON.parse(localStorage.getItem("userInfo"));

    const mergedUser = {...currentUser,...updatedUser,};

    localStorage.setItem("userInfo", JSON.stringify(mergedUser));

    setUser(mergedUser);
  };

  return (
    <AuthContext.Provider
      value={{user,login,logout,updateUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
