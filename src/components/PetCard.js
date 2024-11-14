import React from 'react';
import placeHolderImage from '../assets/image-placeholder-300x200.png';

const PetCard = ({ pet }) => {
  // Define imageUrl with a fallback to the placeholder image
  const imageUrl = pet.image ? pet.image : placeHolderImage;

  return (
    <div className="pet-card fade-in">
      <img src={imageUrl} alt={pet.name} className="pet-image" />

      <div className="pet-info">

        <h3 className="pet-name">{pet.name}</h3>
        <p className="pet-details">{pet.breed} • {pet.age} years old</p>
        <p>{pet.description}</p>
        <button className="button"onClick={() => alert(`Adoption request for ${pet.name}`)}>Request Adoption </button>
        
      </div>
    </div>
  );
};

export default PetCard;