import React from 'react';


function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container fade-in card hero-image">
        <div className="hero-content">
          <h1>Welcome to Pet Heaven</h1>
          <p>Ushering pets into the gates of your home!</p>
          <button className="button">Adopt Now!</button>
        </div>
      </div>
      
      {/* Why Adopt Section */}
      <div className="container fade-in card">
        <h2 className="card-title">Can you give our pets a loving home?</h2>
        <p className="card-description">
          All pets in our shelters deserves a home, and most importantly happiness. Try as we might to provide that feeling, we can't do recreate that feeling of being in a loving home. That's where you come in. Adopt a pet today and give them the love they deserve.
          We believe that every pet deserves a loving home, and we are committed to making that happen, regardless of the challenges we face. We are dedicated to finding the perfect match for every pet, and we are here to support you through the adoption process and beyond.
        </p>
      </div>

      {/* Donation Section */}
      <div className="container fade-in card">
        <h2 className="card-title">Support Us with a Donation</h2>
        <p className="card-description">
          Donations help us care for our animals, covering food, medical expenses, and housing.
          Every contribution, big or small, makes a huge difference in the lives of these pets.
        </p>
      </div>

      {/* Articles Section */}
      <div className="container fade-in card">
        <h2 className="card-title">Articles</h2>
        <p className="card-description">
          Discover stories of successful adoptions, insights into pet care, and how donations change lives.
        </p>
      </div>

      {/* Newsletter Section */}
      <div className="container fade-in card form-container">
        <h2 className="card-title">Newsletter</h2>
        <p className="card-description">
          Join our newsletter to stay updated on the latest events, pet stories, and ways you can help.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-input" placeholder="Enter your email" />
          </div>
          <button className="button">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;