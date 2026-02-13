import { Link } from 'react-router-dom';

import { useTickets } from '../../hooks/useTickets';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { SearchBar } from '../../components/ui/SearchBar';
import { truncateText } from '../../utils/string.utils';
import '../../styles/tickets.css';

export const TicketsListPage = () => {
  const { tickets, isLoading, error, searchQuery, setSearchQuery } = useTickets();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="tickets-page">
      <h1 className="page-title">Support Tickets</h1>
      <p className="page-subtitle">View and manage customer support tickets</p>

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search tickets by title..."
      />

      <div className="tickets-list">
        {tickets.length === 0 ? (
          <p className="no-results">No tickets found.</p>
        ) : (
          tickets.map((ticket) => (
            <Link
              to={`/ticket/${ticket.id}`}
              key={ticket.id}
              className="ticket-card"
            >
              <div className="ticket-card-top">
                <span className="ticket-id">#{ticket.id}</span>
                <span className="ticket-customer">{ticket.customerName}</span>
              </div>
              <h3 className="ticket-title">{ticket.title}</h3>
              <p className="ticket-body">{truncateText(ticket.body, 100)}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
