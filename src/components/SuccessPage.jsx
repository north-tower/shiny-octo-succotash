// File: SuccessPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const SuccessPage = () => {
  const { trackId } = useParams();

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Your payment with Track ID <strong>{trackId}</strong> was completed successfully.</p>
      <p>Thank you for your purchase.</p>
    </div>
  );
};

export default SuccessPage;
