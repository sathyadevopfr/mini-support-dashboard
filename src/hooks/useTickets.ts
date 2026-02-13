import { useEffect, useMemo, useState } from 'react';

import type { TicketWithCustomer, User } from '../types';
import { ticketService } from '../services/ticket.service';
import { userService } from '../services/user.service';

export const useTickets = () => {
  const [tickets, setTickets] = useState<TicketWithCustomer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [postsData, usersData] = await Promise.all([
          ticketService.getAll(),
          userService.getAll(),
        ]);

        const userMap = new Map<number, User>();
        usersData.forEach((user) => userMap.set(user.id, user));

        const ticketsWithCustomers: TicketWithCustomer[] = postsData.map(
          (post) => ({
            ...post,
            customerName: userMap.get(post.userId)?.name ?? 'Unknown Customer',
          }),
        );

        setTickets(ticketsWithCustomers);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Failed to fetch tickets';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const filteredTickets = useMemo(() => {
    if (!searchQuery.trim()) return tickets;

    const query = searchQuery.toLowerCase();
    return tickets.filter((ticket) =>
      ticket.title.toLowerCase().includes(query),
    );
  }, [tickets, searchQuery]);

  return { tickets: filteredTickets, isLoading, error, searchQuery, setSearchQuery };
};
