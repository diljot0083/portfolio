import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './components/context/ThemeContext'
import AuroraBackground from './components/aurora/AuroraBackground';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AuroraBackground />
        <div className="relative z-10">
          <AppRoutes />
        </div>
        <Analytics />
      </Router>
    </ThemeProvider>
  );
}

export default App;