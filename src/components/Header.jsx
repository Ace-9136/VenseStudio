import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="container">
        <h1 className="logo">VenseStudio</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#students">Artists</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

