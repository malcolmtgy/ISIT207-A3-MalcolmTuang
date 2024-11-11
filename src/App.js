import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import PetsPage from './components/PetsPage';
import RegisterPage from './components/RegisterPage';
import ReleasePetPage from './components/ReleasePetPage';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'pets':
        return <PetsPage />;
      case 'register':
        return <RegisterPage />;
      case 'release':
        return <ReleasePetPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;