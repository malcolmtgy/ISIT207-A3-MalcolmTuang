import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; // Main component for the app
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import PetsPage from './components/PetsPage';
import RegisterPage from './components/RegisterPage';
import ReleasePetPage from './components/ReleasePetPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';

describe('App Component Tests', () => {
  test('renders HomePage on initial load', () => {
    render(<App />);

    const homePageContent = screen.getByText(/Welcome to the Pet Adoption Center/i);
    expect(homePageContent).toBeInTheDocument();
  });

  test('navigates to AboutUs page when About Us link is clicked', async () => {
    render(<App />);

    const aboutUsLink = screen.getByText(/About Us/i);
    fireEvent.click(aboutUsLink);

    const aboutUsContent = await screen.findByText(/Learn about our mission/i);
    expect(aboutUsContent).toBeInTheDocument();
  });

  test('navigates to PetsPage when Pets link is clicked', async () => {
    render(<App />);

    const petsLink = screen.getByText(/Pets/i);
    fireEvent.click(petsLink);

    const petsContent = await screen.findByText(/Adopt a pet/i);
    expect(petsContent).toBeInTheDocument();
  });

  test('navigates to RegisterPage when Register link is clicked', async () => {
    render(<App />);

    const registerLink = screen.getByText(/Register/i);
    fireEvent.click(registerLink);

    const registerContent = await screen.findByText(/Join our community/i);
    expect(registerContent).toBeInTheDocument();
  });

  test('navigates to ReleasePetPage when Release Pet link is clicked', async () => {
    render(<App />);

    const releasePetLink = screen.getByText(/Release a Pet/i);
    fireEvent.click(releasePetLink);

    const releasePetContent = await screen.findByText(/Please provide details/i);
    expect(releasePetContent).toBeInTheDocument();
  });

  test('navigates to LoginPage when Login link is clicked', async () => {
    render(<App />);

    const loginLink = screen.getByText(/Login/i);
    fireEvent.click(loginLink);

    const loginContent = await screen.findByText(/Login to your account/i);
    expect(loginContent).toBeInTheDocument();
  });

  test('navigates to AdoptionPage when a pet is selected', async () => {
    render(<App />);

    // First, navigate to the Pets page
    const petsLink = screen.getByText(/Pets/i);
    fireEvent.click(petsLink);

    // Simulate selecting a pet for adoption
    const adoptButton = screen.getByText(/Adopt/i); // Assuming the button has this text
    fireEvent.click(adoptButton);

    const adoptionContent = await screen.findByText(/Pet Adoption/i);
    expect(adoptionContent).toBeInTheDocument();
  });

  test('logs out when logout button is clicked', () => {
    const { rerender } = render(<App />);

    // Assume user is logged in
    const setLoggedInUser = jest.fn();
    const { getByText } = render(
      <Navigation loggedInUser="John Doe" setLoggedInUser={setLoggedInUser} setCurrentPage={jest.fn()} />
    );

    const logoutButton = getByText(/Logout/i);
    fireEvent.click(logoutButton);

    // Simulate logging out
    expect(setLoggedInUser).toHaveBeenCalledWith(null);
  });

  test('renders Footer component', () => {
    render(<App />);

    const footerText = screen.getByText(/© 2024 Pet Adoption Center/i);
    expect(footerText).toBeInTheDocument();
  });
});
