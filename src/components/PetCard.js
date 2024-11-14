import React, { useState } from 'react';
import placeHolderImage from '../assets/image-placeholder-300x200.png';

const PetCard = ({ pet }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Toggle the visibility of the adoption form
  const handleAdoptionClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Adoption request for ${pet.name} submitted!`);
    setIsFormVisible(false); // Close form after submission
  };

  const imageUrl = pet.image ? pet.image : placeHolderImage;

  return (
    <div className="pet-card fade-in">
      <img src={imageUrl} alt={pet.name} className="pet-image" />

      <div className="pet-info">
        <h3 className="pet-name">{pet.name}</h3>
        <p className="pet-details">{pet.breed} • {pet.age} years old</p>
        <p>{pet.description}</p>
        
        <button className="button" onClick={handleAdoptionClick}>
          Request Adoption
        </button>

        {/* Adoption form */}
        {isFormVisible && (
          <div className="adoption-form-overlay">
            <div className="adoption-form">
              <h2>Adoption Form for {pet.name}</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Your Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Contact Number:
                  <input type="tel" name="contact" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Address:
                  <textarea name="address" required></textarea>
                </label>
                <label>
                  Why do you want to adopt {pet.name}?
                  <textarea name="reason" required></textarea>
                </label>
                <label>
                  Do you have any other pets? If so, please describe:
                  <textarea name="otherPets" required></textarea>
                </label>
                <label>
                  Do you have experience caring for this type of pet?
                  <select name="experience" required>
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>
                <label>
                  How will you provide for {pet.name}'s daily needs?
                  <textarea name="carePlan" required></textarea>
                </label>
                <label>
                  Any additional information you’d like us to know:
                  <textarea name="additionalInfo"></textarea>
                </label>
                <button type="submit" className="button">
                  Submit
                </button>
                <button type="button" className="button" onClick={handleCloseForm}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetCard;
