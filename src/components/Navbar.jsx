import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo"><b>Corkys</b>Footwear</div>
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <a href="#services">Products</a>
          <a href="#contact">Sign In</a>
        </div>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

