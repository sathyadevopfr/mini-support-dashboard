import { useNavigate } from 'react-router-dom';

import '../../styles/back-button.css';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      &larr; Back
    </button>
  );
};
