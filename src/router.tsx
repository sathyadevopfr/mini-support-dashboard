import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from './context/AuthContext';
import { LoginPage } from './app/login/LoginPage';
import { RegisterPage } from './app/register/RegisterPage';
import { TicketDetailPage } from './app/ticket-detail/TicketDetailPage';
import { TicketsListPage } from './app/tickets/TicketsListPage';
import { Layout } from './components/ui/Layout';

export const AppRouter = () => {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route element={<Layout />}>
            <Route path="/" element={<TicketsListPage />} />
            <Route path="/ticket/:id" element={<TicketDetailPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        ) : (
          <Route element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};
