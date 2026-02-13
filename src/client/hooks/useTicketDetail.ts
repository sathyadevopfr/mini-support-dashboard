import { useEffect, useState } from 'react';

import type { Comment, Ticket, User } from '../../types';
import { commentService } from '../services/comment.service';
import { ticketService } from '../services/ticket.service';
import { userService } from '../services/user.service';

interface TicketDetail {
  ticket: Ticket;
  customer: User;
  replies: Comment[];
}

export const useTicketDetail = (id: number) => {
  const [data, setData] = useState<TicketDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const ticket = await ticketService.getById(id);

        const [customer, replies] = await Promise.all([
          userService.getById(ticket.userId),
          commentService.getByTicketId(id),
        ]);

        setData({ ticket, customer, replies });
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Failed to fetch ticket details';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  return { data, isLoading, error };
};
