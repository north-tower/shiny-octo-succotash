import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProceedPayment = () => {
  const { trackId } = useParams();
  const { state } = useLocation();
  const { payLink } = state || {};

  if (!payLink) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-lg">Error: No payment link found.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Proceed with Payment</h1>
        <p className="text-lg mb-4 text-center">Track ID: <span className="font-medium">{trackId}</span></p>
        <p className="text-base mb-6 text-center">Click the button below to complete the payment:</p>
        <div className="flex justify-center">
          <a
            href={payLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Proceed to Payment
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProceedPayment;
