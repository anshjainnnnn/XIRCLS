// src/components/Footer.jsx
import React from 'react';

const footerStyle = {
  backgroundColor: 'lightgrey',
  padding: '10px',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  textAlign: 'center',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Xircls. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
