// File: App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
import ProceedPayment from './components/ProceedPayment';
import SuccessPage from './components/SuccessPage';
import FailurePage from './components/FailurePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentForm />} />
        <Route path="/proceed-payment/:trackId" element={<ProceedPayment />} />
        <Route path="/success/:trackId" element={<SuccessPage />} />
        <Route path="/failure/:trackId" element={<FailurePage />} />
      </Routes>
    </Router>
  );
};

export default App;
