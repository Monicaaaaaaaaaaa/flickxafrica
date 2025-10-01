import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 

      if (password !== "password123") {
        throw new Error("Incorrect password");
      }
      
      const mockToken = "mock-jwt-token-" + Date.now();
      Cookies.set("flickx_token", mockToken, { path: "/", sameSite: "strict" });

      // Redirect to LMS when it's available
      window.location.replace("https://lms.flickxafrica.com");
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name, email, password) => {
    setIsLoading(true);
    try {
      if (!password || password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockToken = "mock-jwt-token-" + Date.now();
      Cookies.set("flickx_token", mockToken, { path: "/", sameSite: "strict" });

      window.location.replace("https://lms.flickxafrica.com");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoading, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
