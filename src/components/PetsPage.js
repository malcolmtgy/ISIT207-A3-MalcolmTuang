import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PetCard from "./PetCard";
import { FaCat, FaDog } from "react-icons/fa";
import placeholderImage from "../assets/image-placeholder-300x200.png";

const availablePets = [
  { id: 1, name: "Buddy", type: "Dog", breed: "Golden Retriever", age: 2, description: "Clingy dog looking for a loving home" },
  { id: 2, name: "Bella", type: "Dog", breed: "Labrador", age: 1, description: "Energetic puppy with a heart of gold" },
  { id: 3, name: "Max", type: "Dog", breed: "Japanese Spitz", age: 3, description: "Laid-back companion with a friendly demeanor" },
  { id: 4, name: "Rocky", type: "Dog", breed: "Beagle", age: 2, description: "Playful dog that loves adventure" },
  { id: 5, name: "Charlie", type: "Dog", breed: "Dachshund", age: 4, description: "Small dog with a big personality" },
  { id: 6, name: "Whiskers", type: "Cat", breed: "Siamese", age: 3, description: "Gentle and affectionate cat who loves to cuddle" },
  { id: 7, name: "Shadow", type: "Cat", breed: "Persian", age: 4, description: "A curious cat with a playful spirit" },
  { id: 8, name: "Mittens", type: "Cat", breed: "Maine", age: 5, description: "Loyal and gentle giant of a cat" },
  { id: 9, name: "Luna", type: "Cat", breed: "Bengal", age: 2, description: "Active cat with a unique coat pattern" },
  { id: 10, name: "Pumpkin", type: "Cat", breed: "Tabby", age: 3, description: "Loves to play and snuggle" },
];

const petImages = {
  "Golden Retriever": require("../assets/pet-images/retriever-golden.jpg"),
  "Labrador": require("../assets/pet-images/labrador.jpg"),
  "Japanese Spitz": require("../assets/pet-images/spitz.jpg"),
  "Beagle": require("../assets/pet-images/beagle.jpg"),
  "Dachshund": require("../assets/pet-images/dachshund.jpg"),
  "Siamese": require("../assets/pet-images/siamese.jpg"),
  "Persian": require("../assets/pet-images/persian.jpg"),
  "Maine": require("../assets/pet-images/maine.jpg"),
  "Bengal": require("../assets/pet-images/bengal.jpg"),
  "Tabby": require("../assets/pet-images/tabby.jpg"),
};

const PetsPage = ({ setCurrentPage, setSelectedPet }) => {
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchBreed, setSearchBreed] = useState("");
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    const filtered = availablePets.filter((pet) => {
      const matchesName =
        !searchName || pet.name.toLowerCase().includes(searchName.toLowerCase());
      const matchesBreed =
        !searchBreed || pet.breed.toLowerCase().includes(searchBreed.toLowerCase());
      const matchesType = !searchType || pet.type.toLowerCase() === searchType.toLowerCase();

      return matchesName && matchesBreed && matchesType;
    });
    setFilteredPets(filtered);
  }, [searchName, searchBreed, searchType]);

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
    setCurrentPage("adoption");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">
        Pets For Adoption <FaCat /> <FaDog />
      </h2>

      {/* Search Section */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by name"
          className="form-input"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by breed"
          className="form-input"
          value={searchBreed}
          onChange={(e) => setSearchBreed(e.target.value)}
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
      {filteredPets.some((pet) => pet.type === "Dog") && (
        <>
          <h3 className="text-xl font-bold mb-4">Dogs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets
              .filter((pet) => pet.type === "Dog")
              .map((pet) => (
                <PetCard
                  key={pet.id}
                  pet={{
                    ...pet,
                    image: petImages[pet.breed] || placeholderImage,
                  }}
                  handleAdoptClick={handleAdoptClick}
                />
              ))}
          </div>
        </>
      )}

      {/* Cats Section */}
      {filteredPets.some((pet) => pet.type === "Cat") && (
        <>
          <h3 className="text-xl font-bold mb-4">Cats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets
              .filter((pet) => pet.type === "Cat")
              .map((pet) => (
                <PetCard
                  key={pet.id}
                  pet={{
                    ...pet,
                    image: petImages[pet.breed] || placeholderImage,
                  }}
                  handleAdoptClick={handleAdoptClick}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

PetsPage.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setSelectedPet: PropTypes.func.isRequired,
};

export default PetsPage;
