import React from "react";
import {FaPaw } from 'react-icons/fa';

const BookingPage =  ({ loggedInUser, bookedAppointment, setCurrentPage }) => {
    if (!loggedInUser) {
      return (
        <div className="container fade-in">
          <h2>You need to log in to view your appointments.</h2>
          <button onClick={() => setCurrentPage('login')} className="button">
            Go to Login
          </button>
        </div>
      );
    }
  
    return (
      <div className="container fade-in">
        <div className="card form-container">
          <h2 className="card-title">Your Appointment   <FaPaw/></h2>
          {bookedAppointment ? (
            <div>
              <p><strong>Pet:</strong> {bookedAppointment.petName}</p>
              <p><strong>Date:</strong> {bookedAppointment.date}</p>
              <p><strong>Time:</strong> {bookedAppointment.time}</p>
            </div>
          ) : (
            <p>No appointments booked.</p>
          )}
          <button 
            className="button" 
            onClick={() => setCurrentPage('pets')}
          >
            Browse Pets
          </button>
        </div>
      </div>
    );
  };
  
  export default BookingPage;