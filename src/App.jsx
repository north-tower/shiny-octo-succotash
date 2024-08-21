// File: App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
import ProceedPayment from './components/ProceedPayment';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentForm />} />
        <Route path="/proceed-payment/:trackId" element={<ProceedPayment />} />
      </Routes>
    </Router>
  );
};

export default App;
