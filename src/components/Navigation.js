import React from 'react';

function Navigation() {
  const categories = ['All', 'React', 'Vue', 'Angular', 'Three.js', 'More'];
  
  return (
    <nav className="navigation">
      {categories.map(category => (
        <a key={category} href={`#${category.toLowerCase()}`} className="nav-item">
          {category}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;