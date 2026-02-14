import { Outlet } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import '../../styles/layout.css';

export const Layout = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <h1 className="header-logo">SupportDesk</h1>
          {isLoggedIn && (
            <nav className="header-nav">
              <span className="nav-status">Live</span>
              <button className="logout-button" onClick={logout}>Logout</button>
            </nav>
          )}
        </div>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
