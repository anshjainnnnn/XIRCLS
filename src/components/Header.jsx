// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav >
      <Link to="/">Xircls</Link>
      <div>
        <ul style>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link  to="/about">About</Link>
          </li>
          <li>
            <Link  to="/services">Services</Link>
          </li>
          <li>
            <Link  to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
