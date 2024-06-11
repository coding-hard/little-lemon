import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!Cookies.get('isAuthenticated'),
  );

  useEffect(() => {
    const authCookie = Cookies.get('isAuthenticated');
    setIsAuthenticated(!!authCookie);
  }, []);

  const login = () => {
    Cookies.set('isAuthenticated', 'true', { expires: 1 });
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('isAuthenticated');
    setIsAuthenticated(false);
    alert('You have been logged out');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
