import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===============================
  // Load User on Refresh
  // ===============================

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if(storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // ===============================
  // Login
  // ===============================

  const login = (userData) => {
    localStorage.setItem("userInfo", JSON.stringify(userData));

    localStorage.setItem("token", userData.token);

    setUser(userData);
  };

  // ===============================
  // Logout
  // ===============================

  const logout = () => {
    localStorage.removeItem("userInfo");

    localStorage.removeItem("token");

    setUser(null);
  };

  // ===============================
  // Update User
  // ===============================

  const updateUser = (updatedUser) => {
    const currentUser = JSON.parse(localStorage.getItem("userInfo"));

    const mergedUser = {
      ...currentUser,
      ...updatedUser,
    };

    localStorage.setItem("userInfo", JSON.stringify(mergedUser));

    setUser(mergedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
