// File: App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
import ProceedPayment from './components/ProceedPayment';
import SuccessPage from './components/SuccessPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentForm />} />
        <Route path="/proceed-payment/:trackId" element={<ProceedPayment />} />
        <Route path="/success" element={<SuccessPage />} />


      </Routes>
    </Router>
  );
};

export default App;
