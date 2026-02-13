import '../../styles/error.css';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="error-container">
      <p className="error-title">Something went wrong</p>
      <p className="error-message">{message}</p>
    </div>
  );
};
