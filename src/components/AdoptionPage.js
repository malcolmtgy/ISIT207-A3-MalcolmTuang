import React, { useState } from "react";

const AdoptionPage = ({ loggedInUser, selectedPet, setCurrentPage }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!appointmentDate || !appointmentTime) {
      alert("Please select both a date and time.");
      return;
    }

    alert(
      `Your appointment for viewing "${selectedPet}" has been successfully booked on ${appointmentDate} at ${appointmentTime}.`
    );

    // Navigate back to pets page or any other action
    setCurrentPage("pets");
  };

  if (!loggedInUser) {
    return (
      <div className="container">
        <h2>You need to log in to access the adoption page.</h2>
        <button onClick={() => setCurrentPage("login")} className="button">
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="container fade-in">
      <div className="card form-container">
        <h2 className="card-title">Adoption Appointment for {selectedPet}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="date">
              Select a Date:
            </label>
            <input
              type="date"
              id="date"
              className="form-input"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="time">
              Select a Time:
            </label>
            <input
              type="time"
              id="time"
              className="form-input"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdoptionPage;