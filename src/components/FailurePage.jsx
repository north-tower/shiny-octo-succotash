// File: FailurePage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const FailurePage = () => {
  const { trackId } = useParams();

  return (
    <div>
      <h1>Payment Failed</h1>
      <p>Your payment with Track ID <strong>{trackId}</strong> could not be completed.</p>
      <p>Please try again or contact support.</p>
    </div>
  );
};

export default FailurePage;
