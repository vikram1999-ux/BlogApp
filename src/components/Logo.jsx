import React from 'react';
import logo from '../assets/images/logo.jpg'; 

function Logo({ width = '100px', altText = 'Logo' }) {
  return (
    <div>
      <img src={logo} alt={altText} style={{ width }} />
    </div>
  );
}

export default Logo;
