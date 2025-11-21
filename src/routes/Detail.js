import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!location?.state) {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  if (!location?.state) {
    return null;
  }

  return <span>{location.state.title}</span>;
}

export default Detail;
