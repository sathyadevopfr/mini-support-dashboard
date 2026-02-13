import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TicketDetailPage } from './app/ticket-detail/TicketDetailPage';
import { TicketsListPage } from './app/tickets/TicketsListPage';
import { Layout } from './components/ui/Layout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TicketsListPage />} />
          <Route path="/ticket/:id" element={<TicketDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
