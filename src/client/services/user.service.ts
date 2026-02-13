import type { User } from '../../types';
import { ApiService } from './api.service';

class UserService extends ApiService {
  async getAll(): Promise<User[]> {
    return this.request<User[]>('/users');
  }

  async getById(id: number): Promise<User> {
    return this.request<User>(`/users/${id}`);
  }
}

export const userService = new UserService();
