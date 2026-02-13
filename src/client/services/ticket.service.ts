import type { Ticket } from '../../types';
import { ApiService } from './api.service';

class TicketService extends ApiService {
  async getAll(): Promise<Ticket[]> {
    return this.request<Ticket[]>('/posts');
  }

  async getById(id: number): Promise<Ticket> {
    return this.request<Ticket>(`/posts/${id}`);
  }
}

export const ticketService = new TicketService();
