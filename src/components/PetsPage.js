import React, { useEffect, useState } from 'react';
import PetCard from './PetCard';
import { FaCat, FaDog } from 'react-icons/fa';

const PetsPage = () => {
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('');

  // Sample pet data
  const availablePets = [
    { id: 1, name: "Buddy", type: "Dog", breed: "retriever-golden", age: 2, description: "Clingy dog looking for a loving home" },
    { id: 2, name: "Bella", type: "Dog", breed: "labrador", age: 1, description: "Energetic puppy with a heart of gold" },
    { id: 3, name: "Max", type: "Dog", breed: "bulldog", age: 3, description: "Laid-back companion with a friendly demeanor" },
    { id: 4, name: "Rocky", type: "Dog", breed: "beagle", age: 2, description: "Playful dog that loves adventure" },
    { id: 5, name: "Charlie", type: "Dog", breed: "dachshund", age: 4, description: "Small dog with a big personality" },
    { id: 6, name: "Whiskers", type: "Cat", breed: "siamese", age: 3, description: "Gentle and affectionate cat who loves to cuddle" },
    { id: 7, name: "Shadow", type: "Cat", breed: "persian", age: 4, description: "A curious cat with a playful spirit" },
    { id: 8, name: "Mittens", type: "Cat", breed: "maine", age: 5, description: "Loyal and gentle giant of a cat" },
    { id: 9, name: "Luna", type: "Cat", breed: "bengal", age: 2, description: "Active cat with a unique coat pattern" },
    { id: 10, name: "Pumpkin", type: "Cat", breed: "tabby", age: 3, description: "Loves to play and snuggle" }
  ];

  // Map breeds to local image paths
  const petImages = {
    "retriever-golden": require('../assets/images/pets/retriever-golden.jpg'),
    "labrador": require('../assets/images/pets/labrador.jpg'),
    "bulldog": require('../assets/images/pets/bulldog.jpg'),
    "beagle": require('../assets/images/pets/beagle.jpg'),
    "dachshund": require('../assets/images/pets/dachshund.jpg'),
    "siamese": require('../assets/images/pets/siamese.jpg'),
    "persian": require('../assets/images/pets/persian.jpg'),
    "maine": require('../assets/images/pets/maine.jpg'),
    "bengal": require('../assets/images/pets/bengal.jpg'),
    "tabby": require('../assets/images/pets/tabby.jpg')
  };

  // Placeholder image URL
  const placeholderImage = "https://via.placeholder.com/300x200.png?text=No+Image+Available";

  // Filter pets based on search term and type
  useEffect(() => {
    const filtered = availablePets.filter(pet => {
      const matchesBreed = pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = searchType ? pet.type.toLowerCase() === searchType.toLowerCase() : true;
      return matchesBreed && matchesType;
    });
    setFilteredPets(filtered);
  }, [searchTerm, searchType]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">
        Pets For Adoption <FaCat /> <FaDog />
      </h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by breed"
          className="form-input mr-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-input"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="">All</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>
      </div>

      {/* Dogs Section */}
      {filteredPets.some(pet => pet.type === 'Dog') && (
        <>
          <h3 className="text-xl font-bold mb-4">Dogs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.filter(pet => pet.type === 'Dog').map(pet => (
              <PetCard
                key={pet.id}
                pet={{
                  ...pet,
                  image: petImages[pet.breed] || placeholderImage
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Cats Section */}
      {filteredPets.some(pet => pet.type === 'Cat') && (
        <>
          <h3 className="text-xl font-bold mb-4">Cats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.filter(pet => pet.type === 'Cat').map(pet => (
              <PetCard
                key={pet.id}
                pet={{
                  ...pet,
                  image: petImages[pet.breed] || placeholderImage
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PetsPage;
