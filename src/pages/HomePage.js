import React from 'react';
import ComponentGrid from '../components/ComponentGrid';

function HomePage() {
  const featuredComponents = [
    { id: 1, name: "Responsive Navbar", description: "A fully responsive navigation bar", author: "JohnDoe", rating: 4.8, price: 9.99, image: "https://placehold.co/200x150" },
    { id: 2, name: "3D Cube Animation", description: "Animated 3D cube using Three.js", author: "JaneSmith", rating: 4.9, price: 14.99, image: "https://placehold.co/200x150" },
    // Add more components...
  ];

  const newComponents = [
    // Similar to featuredComponents, but with different data
  ];

  return (
    <main className="home-page">
      <h1>Discover & Share Code Components</h1>
      <ComponentGrid title="Featured Components" components={featuredComponents} />
      {/* <ComponentGrid title="New Arrivals" components={newComponents} /> */}
    </main>
  );
}

export default HomePage;