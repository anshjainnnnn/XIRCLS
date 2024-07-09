// src/components/Contact.jsx
import React from 'react';

const contactContainerStyle = {
  paddingLeft: '100px',
  paddingRight: '100px',
  borderColor: 'rgba(221, 15, 15, 0.25)',
};

const Contact = () => {
  return (
    <div style={contactContainerStyle}>
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>
    </div>
  );
};

export default Contact;
