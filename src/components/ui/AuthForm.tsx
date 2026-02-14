import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/auth.css';

interface AuthFormProps {
  title: string;
  buttonText: string;
  linkText: string;
  linkTo: string;
  onSubmit: (username: string, password: string) => Promise<void>;
}

export const AuthForm = ({ title, buttonText, linkText, linkTo, onSubmit }: AuthFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await onSubmit(username, password);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1 className="auth-title">{title}</h1>
        {error && <p className="auth-error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="auth-input"
          autoComplete="new-password"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
          autoComplete="new-password"
          required
        />
        <button type="submit" className="auth-button">{buttonText}</button>
        <p className="auth-link">
          {linkText} <Link to={linkTo}>here</Link>
        </p>
      </form>
    </div>
  );
};
