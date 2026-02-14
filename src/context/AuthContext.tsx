import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import type { AuthRequest } from '../types';
import { authService } from '../services/auth.service';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (data: AuthRequest) => Promise<void>;
  register: (data: AuthRequest) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem('token'),
  );

  const login = async (data: AuthRequest) => {
    const result = await authService.login(data);
    localStorage.setItem('token', result.accessToken);
    setIsLoggedIn(true);
  };

  const register = async (data: AuthRequest) => {
    const result = await authService.register(data);
    localStorage.setItem('token', result.accessToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
