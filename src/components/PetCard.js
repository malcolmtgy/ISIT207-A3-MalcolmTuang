import React from 'react';

const PetCard = ({ pet }) => (
  <div className="pet-card">
    <img src={pet.image} alt={pet.name} className="pet-image" />
    <div className="pet-info">
      <h3 className="pet-name">{pet.name}</h3>
      <p className="pet-details">{pet.breed} • {pet.age} years old</p>
      <p>{pet.description}</p>
      <button 
        className="button"
        onClick={() => alert(`Adoption request for ${pet.name}`)}
      >
        Request Adoption
      </button>
    </div>
  </div>
);

export default PetCard;