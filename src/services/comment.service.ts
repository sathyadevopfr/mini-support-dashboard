import type { Comment } from '../types';
import { ApiService } from './api.service';

class CommentService extends ApiService {
  async getByTicketId(ticketId: number): Promise<Comment[]> {
    return this.request<Comment[]>(`/posts/${ticketId}/comments`);
  }
}

export const commentService = new CommentService();
