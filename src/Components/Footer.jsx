import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Suntrip AB</h3>
          <p>Nueva Estocholmo 69</p>
		  <p>420 69 Playa del sol</p>
          <p>Suntrip@Rullahatt.se</p>
        </div>
        <div className="footer-right">
          <h3>Följ oss!</h3>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Suntrip AB. All makt åt Tengil.</p>
      </div>
    </footer>
  );
}

export default Footer;