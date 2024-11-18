import React, { useState } from 'react';

const ReleasePetPage = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('Dog');
  const [age, setAge] = useState('');
  const [reason, setReason] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!petName.trim()) newErrors.petName = 'Pet name is required.';
    if (!age || age <= 0) newErrors.age = 'Please provide a valid age.';
    if (!reason.trim() || reason.length < 10)
      newErrors.reason = 'Reason must be at least 10 characters long.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Thank you for entrusting your pet with us. We will review your request and get back to you shortly.');
      // Clear the form after successful submission
      setPetName('');
      setPetType('Dog');
      setAge('');
      setReason('');
      setErrors({});
    }
  };

  return (
    <div className="container fade-in">
      <div className="card form-container">
        <h2 className="card-title">Release a Pet</h2>
        <p className="card-description">Unable to care for your pet anymore? Here, you can release them into our care.</p>
        <p className="card-description">Please provide details about the pet you wish to release:</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="pet-name">Pet Name</label>
            <input
              type="text"
              id="pet-name"
              className={`form-input ${errors.petName ? 'input-error' : ''}`}
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
            {errors.petName && <p className="error-text">{errors.petName}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="pet-type">Pet Type</label>
            <select
              id="pet-type"
              className="form-input"
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              className={`form-input ${errors.age ? 'input-error' : ''}`}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            {errors.age && <p className="error-text">{errors.age}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="reason">Reason for Release</label>
            <textarea
              id="reason"
              className={`form-textarea ${errors.reason ? 'textarea-error' : ''}`}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
            {errors.reason && <p className="error-text">{errors.reason}</p>}
          </div>

          <button type="submit" className="button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReleasePetPage;
