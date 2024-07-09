// src/components/Home.jsx
import React from 'react';

const homeContainerStyle = {
  paddingLeft: '100px',
  paddingRight: '100px',
  borderColor: 'rgba(221, 15, 15, 0.25)',
};

const Home = () => {
  return (
    <div style={{ paddingTop: '10px', paddingRight: '10px', alignItems: 'initial', borderColor: 'rgba(255, 40, 40, 0.25)' }}>
      <div style={homeContainerStyle}>
        <h1>Welcome to Xircls</h1>
        <p>This is the home page.</p>
      </div>
    </div>
  );
};

export default Home;
