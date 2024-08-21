// File: PaymentForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    amount: 100,
    currency: 'USD',
    payCurrency: 'USDT',
    lifeTime: 90,
    feePaidByPayer: 1,
    underPaidCover: 10,
    callbackUrl: 'https://example.com/callback',
    description: 'Order #12345',
    orderId: 'ORD-12345',
    email: 'customer@example.com'
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post('http://localhost:3000/create-payment', formData);
      setError(null);
      // Redirect to the payment page with the trackId and payment link
      const { trackId, payLink } = res.data;
      navigate(`/proceed-payment/${trackId}`, { state: { payLink } });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Create Payment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Currency:</label>
          <input
            type="text"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Payment Currency:</label>
          <input
            type="text"
            name="payCurrency"
            value={formData.payCurrency}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Callback URL:</label>
          <input
            type="text"
            name="callbackUrl"
            value={formData.callbackUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Order ID:</label>
          <input
            type="text"
            name="orderId"
            value={formData.orderId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Payment</button>
      </form>

      {error && (
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
