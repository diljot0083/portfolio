import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <AppRoutes />
      <Analytics />
    </Router>
  );
}

export default App;
