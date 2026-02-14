import type { AuthRequest, AuthResponse } from '../types';

class AuthService {
  private baseUrl = 'https://dummyjson.com/auth';

  async login(data: AuthRequest): Promise<AuthResponse> {
    const response = await fetch(`${this.baseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    return response.json() as Promise<AuthResponse>;
  }

  // dummyjson.com doesn't have a register endpoint, so we use /login
  async register(data: AuthRequest): Promise<AuthResponse> {
    const response = await fetch(`${this.baseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }

    return response.json() as Promise<AuthResponse>;
  }
}

export const authService = new AuthService();
