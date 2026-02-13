import '../../styles/loading.css';

export const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="spinner" />
      <p className="loading-text">Loading...</p>
    </div>
  );
};
