import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateToken = async (token) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      const storedUser = localStorage.getItem('flickx_user');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        return { user: userData, error: null };
      }
      
      return { user: null, error: "No active session found" };
    } catch (err) {
      console.error("Token validation failed:", err);
      return { user: null, error: "Session expired. Please log in again." };
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get("flickx_token");
        if (token) {
          const { user: validatedUser, error } = await validateToken(token);
          if (validatedUser) {
            setUser(validatedUser);
          } else {
            Cookies.remove("flickx_token", { path: "/" });
            setError(error);
          }
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setError("Failed to check authentication status");
      } finally {
        setIsAuthLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password, rememberMe = false) => {
    setError(null);
    
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (password === "password123") {
            resolve();
          } else {
            reject(new Error("Incorrect email or password"));
          }
        }, 3000);
      });

      const mockUser = {
        id: '1',
        name: email.split('@')[0],
        email,
        avatar: email[0].toUpperCase()
      };

      const mockToken = `mock-jwt-token-${Date.now()}`;
      Cookies.set("flickx_token", mockToken, { 
        path: "/", 
        sameSite: "strict",
        expires: rememberMe ? 30 : 7 // 30 days if remember me, 7 days otherwise
      });
      
      localStorage.setItem('flickx_user', JSON.stringify(mockUser));
      
      setUser(mockUser);
      
      navigate("/lms", { replace: true });
      
      return mockUser;
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
      throw err;
    } finally {
    }
  };

  const signup = async (name, email, password, role) => {
    setError(null);

    try {
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      if (!role) {
        throw new Error("Please select a role");
      }

      await new Promise(resolve => setTimeout(resolve, 3000));

      const mockUser = {
        id: Date.now().toString(),
        name,
        email,
        role,
        avatar: name[0].toUpperCase()
      };

      const mockToken = `mock-jwt-token-${Date.now()}`;
      Cookies.set("flickx_token", mockToken, { 
        path: "/", 
        sameSite: "strict",
        expires: 7
      });
      
      localStorage.setItem('flickx_user', JSON.stringify(mockUser));
      setUser(mockUser);
      
      navigate("/lms", { replace: true });
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
      throw err;
    } finally {
    }
  };

  const logout = () => {
    Cookies.remove("flickx_token", { path: "/" });
    localStorage.removeItem('flickx_user');
    setUser(null);
    navigate("/");
  };

  const value = {
    user,
    isLoading: isAuthLoading,
    error,
    login,
    signup,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {!isAuthLoading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
