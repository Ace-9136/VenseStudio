import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to VenseStudio</h1>
        <p>A collective of passionate student artists.<br /> Join us in our creative journey!</p>
        <a href="https://instagram.com/_vense_studio_" className="cta-button lm"><InstagramIcon style={{ width: "20px", height: "20px", marginRight: "8px", marginBottom: "2px" }} />Follow Us</a>
        <a href="#students" className="cta-button">
Meet the Artists</a>
      </div>
    </section>
  );
}

export default Hero;

