import React from 'react';
import { FaPaw } from 'react-icons/fa';
import PropTypes from 'prop-types';
function HomePage({setCurrentPage}) {
  return (
    <div>
      <div className="container fade-in card hero-image">
        <div className="hero-content">
          <h1>Welcome to Pet Heaven</h1>
          <p>Ushering pets into the gates of your home!</p>
          <button onClick={() => setCurrentPage('pets')} className='button'>Adopt Now!  <FaPaw/></button>
        </div>
      </div>
      
      <div className="container fade-in card">
        <h2 className="card-title">Why adopt?   <FaPaw/></h2>
        <p className="card-description">
          All pets in our shelters deserves a home, and most importantly happiness. <br />
          We can't do recreate that feeling of being in a loving home. That's where you come in. Adopt a pet today and give them the love they deserve.<br />
          We are dedicated to finding the perfect match for every pet, and we are here to support you through the adoption process and beyond.
        </p>
      </div>

      <div className="container fade-in card">
        <h2 className="card-title">Unable to care for yours? Come to us!  <FaPaw/></h2>
        <p className="card-description">
          If you are unable to care for your pet, we are here to help. We provide a safe and loving environment for pets in need, and we are committed to finding them a loving home. <br />
          Contact us today to learn more about our surrender process.
        </p>
      </div>

      <div className="container fade-in card">
        <h2 className="card-title">Support Us with a Donation   <FaPaw/></h2>
        <p className="card-description">
          Donations help us care for our animals, covering food, medical expenses, and housing.
          Every contribution, big or small, makes a huge difference in the lives of these pets.
          Consider donating here:
        </p>
        <button className="button" onClick={()=> setCurrentPage('donation')}>Donate</button>
      </div>

      {/* Articles Section */}
      <div className="container fade-in card">
        <h2 className="card-title">Articles   <FaPaw/></h2>
        <p className="card-description">
          Discover stories of successful adoptions, insights into pet care, and how donations change pet lives.
        </p>
        <h2>Article: 5 dog adoption stories that will melt your heart</h2>
        <p>Sometimes, it’s good to read about a good dog adoption story. After all, life can be so hard sometimes, however, little rays of light like these help us keep our faith in humanity, in the world, and in each oth...</p>
        <button onClick={()=> 
          window.open('https://fetchpetcare.com/blog/5-dog-adoption-stories-will-melt-heart/')}>
          Read More...
        </button>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  setCurrentPage: PropTypes.func
};

export default HomePage;