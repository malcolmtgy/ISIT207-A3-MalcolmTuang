import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import PetsPage from './components/PetsPage';
import RegisterPage from './components/RegisterPage';
import ReleasePetPage from './components/ReleasePetPage';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'aboutus':
        return <AboutUs />;
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation setCurrentPage={setCurrentPage} />
      <div className="flex-grow">{renderPage()}</div>
      <Footer /> 
    </div>
  );
};

export default App;