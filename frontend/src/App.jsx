import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Opportunities from './components/Opportunities';
import Footer from './components/Footer';
import { AuthPage } from './auth';
import { MarketplacePage } from './marketplace';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'auth', 'marketplace'

  const handleAuthClick = () => {
    console.log('Auth button clicked!');
    setCurrentView('auth');
  };

  const handleMarketplaceClick = () => {
    console.log('Marketplace button clicked!');
    setCurrentView('marketplace');
  };

  const handleLoginSuccess = () => {
    console.log('Login successful, redirecting to marketplace');
    setCurrentView('marketplace');
  };

  // Set global login success handler
  window.onLoginSuccess = handleLoginSuccess;

  if (currentView === 'auth') {
    return <AuthPage />;
  }

  if (currentView === 'marketplace') {
    return <MarketplacePage />;
  }

  return (
    <div className="relative w-full overflow-x-hidden">
      <Header onAuthClick={handleAuthClick} />
      <main>
        <Hero onAuthClick={handleAuthClick} />
        <Features />
        <Process />
        <Opportunities onAuthClick={handleAuthClick} />
      </main>
      <Footer />
    </div>
  );
}

export default App;