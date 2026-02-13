import type { ReactNode } from 'react';

import '../../styles/layout.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <h1 className="header-logo">SupportDesk</h1>
          <nav className="header-nav">
            <span className="nav-status">Live</span>
          </nav>
        </div>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
};
