import React from "react";
import PropTypes from "prop-types";
import { FaPaw } from "react-icons/fa";

const BookingPage = ({ loggedInUser, bookedAppointment, setCurrentPage }) => {
  // If no user is logged in, redirect to the login page
  if (!loggedInUser) {
    return (
      <div className="container fade-in">
        <h2 className="card-title">You need to log in to view your appointments.</h2>
        <button onClick={() => setCurrentPage("login")} className="button">
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="container fade-in">
      <div className="card form-container">
        <h2 className="card-title">
          Your Appointment <FaPaw />
        </h2>
        {bookedAppointment ? (
          <div>
            <p>
              <strong>Pet:</strong> {bookedAppointment.petName}
            </p>
            <p>
              <strong>Breed:</strong> {bookedAppointment.breed}
            </p>
            <p>
              <strong>Age:</strong> {bookedAppointment.age} years
            </p>
            <p>
              <strong>Description:</strong> {bookedAppointment.description}
            </p>
            <p>
              <strong>Date:</strong> {bookedAppointment.date}
            </p>
            <p>
              <strong>Time:</strong> {bookedAppointment.time}
            </p>
          </div>
        ) : (
          <p>No appointments booked.</p>
        )}
        <button
          className="button"
          onClick={() => setCurrentPage("pets")}
        >
          Browse Pets
        </button>
      </div>
    </div>
  );
};

BookingPage.propTypes = {
  loggedInUser: PropTypes.string,
  bookedAppointment: PropTypes.shape({
    petName: PropTypes.string,
    breed: PropTypes.string,
    age: PropTypes.number,
    description: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  }),
  setCurrentPage: PropTypes.func.isRequired,
};

export default BookingPage;
