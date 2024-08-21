// File: ProceedPayment.js

import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProceedPayment = () => {
  const { trackId } = useParams();
  const { state } = useLocation();
  const { payLink } = state || {};a

  if (!payLink) {
    return <p>Error: No payment link found.</p>;
  }

  return (
    <div>
      <h1>Proceed with Payment</h1>
      <p>Track ID: {trackId}</p>
      <p>Click the button below to complete the payment:</p>
      <a href={payLink} target="_blank" rel="noopener noreferrer">
        <button>Proceed to Payment</button>
      </a>
    </div>
  );
};

export default ProceedPayment;
