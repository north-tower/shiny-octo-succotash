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
<<<<<<< HEAD


=======
>>>>>>> b5834ba8123aabadae95ff8f4dc058a5c43a62f0
      </Routes>
    </Router>
  );
};

export default App;
