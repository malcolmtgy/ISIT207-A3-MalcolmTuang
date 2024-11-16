import React from 'react';
import PropTypes from 'prop-types';
import placeHolderImage from '../assets/image-placeholder-300x200.png';

const PetCard = ({ pet }) => {
  const imageUrl = pet.image && pet.image.trim() ? pet.image : placeHolderImage;

  return (
    <div className="pet-card fade-in">
      <img src={imageUrl} alt={pet.name || "Pet image"} className="pet-image" />

      <div className="pet-info">
        <h3 className="pet-name">{pet.name}</h3>
        <p className="pet-details">{pet.breed} • {pet.age} years old</p>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

PetCard.propTypes = {
  pet: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PetCard;