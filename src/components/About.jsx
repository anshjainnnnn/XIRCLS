// src/components/About.jsx
import React from 'react';

const aboutContainerStyle = {
  paddingLeft: '100px',
  paddingRight: '100px',
  borderColor: 'rgba(221, 15, 15, 0.25)',
};

const About = () => {
  return (
    <div style={aboutContainerStyle}>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;
