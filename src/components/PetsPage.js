import React from 'react';
import PetCard from './PetCard';

// Sample data
const availablePets = [
  {
    id: 1,
    name: "Maxi",
    type: "Dog",
    breed: "Pomeranian Spitz",
    age: 12,
    description: "Clingy dog looking for a loving home",
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Cat",
    breed: "Persian",
    age: 3,
    description: "Gentle and affectionate cat who loves to cuddle",
    image: "/api/placeholder/300/200"
  }
];

const PetsPage = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-6">Available Pets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {availablePets.map(pet => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  </div>
);

export default PetsPage;