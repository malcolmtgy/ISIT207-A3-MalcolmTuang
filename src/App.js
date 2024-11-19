import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import PetsPage from './components/PetsPage';
import RegisterPage from './components/RegisterPage';
import ReleasePetPage from './components/ReleasePetPage';
import AdoptionPage from './components/AdoptionPage';
import DonationPage from './components/DonationPage';
import BookingPage from './components/BookingPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Tracks current page
  const [loggedInUser, setLoggedInUser] = useState(null); // Tracks logged-in user
  const [selectedPet, setSelectedPet] = useState(null); // Tracks selected pet for adoption
  const [bookedAppointment, setBookedAppointment] = useState(null); // Tracks the booked appointment

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'aboutus':
        return <AboutUs />;
      case 'pets':
        return (
          <PetsPage
            setCurrentPage={setCurrentPage}
            setSelectedPet={setSelectedPet} // Pass state setter
          />
        );
      case 'register':
        return <RegisterPage setCurrentPage={setCurrentPage} />;
      case 'release':
        return <ReleasePetPage />;
      case 'login':
        return (
          <LoginPage
            setLoggedInUser={setLoggedInUser}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'adoption':
        return (
          <AdoptionPage
            loggedInUser={loggedInUser}
            selectedPet={selectedPet} // Pass the selected pet object
            setCurrentPage={setCurrentPage}
            setBookedAppointment={setBookedAppointment} // Pass booked appointment state setter
          />
        );
      case 'donation':
        return <DonationPage />;
      case 'booking':
        return (
          <BookingPage
            loggedInUser={loggedInUser}
            bookedAppointment={bookedAppointment} // Pass the booked appointment
            setCurrentPage={setCurrentPage}
          />
        );
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation bar */}
      <Navigation
        setCurrentPage={setCurrentPage}
        setLoggedInUser={setLoggedInUser}
        loggedInUser={loggedInUser}
      />

      {/* Render the selected page */}
      <div className="flex-grow">{renderPage()}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
