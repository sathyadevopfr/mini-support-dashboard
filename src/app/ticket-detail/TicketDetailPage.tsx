import { useParams } from 'react-router-dom';

import { useTicketDetail } from '../../hooks/useTicketDetail';
import { BackButton } from '../../components/ui/BackButton';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import '../../styles/ticket-detail.css';

export const TicketDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useTicketDetail(Number(id));

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return <ErrorMessage message="Ticket not found" />;

  const { ticket, customer, replies } = data;

  return (
    <div className="detail-page">
      <BackButton />

      <div className="ticket-detail">
        <h1 className="detail-title">{ticket.title}</h1>
        <p className="detail-body">{ticket.body}</p>

        <div className="customer-info">
          <p><strong>Customer:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
        </div>
      </div>

      <div className="replies-section">
        <h2 className="replies-title">Replies ({replies.length})</h2>

        {replies.map((reply) => (
          <div key={reply.id} className="reply-card">
            <p className="reply-name">{reply.name}</p>
            <p className="reply-email">{reply.email}</p>
            <p className="reply-body">{reply.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
