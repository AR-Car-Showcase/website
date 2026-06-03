import { FiGithub, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/assets/icons/logo.png" alt="ARCS Logo" className="logo-img" />
              <span className="logo-text">ARCS</span>
            </a>
            <p className="footer-desc">
              An immersive Augmented Reality Car Showcase platform combining mobile AR technology with cloud-based 3D generation.
            </p>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-column">
              <h4>Repositories</h4>
              <ul className="footer-links">
                <li><a href="https://github.com/AR-Car-Showcase/mobile-app" target="_blank" rel="noopener noreferrer">Mobile App</a></li>
                <li><a href="https://github.com/AR-Car-Showcase/spring-boot-server" target="_blank" rel="noopener noreferrer">Spring Boot Server</a></li>
                <li><a href="https://github.com/AR-Car-Showcase/blender-service" target="_blank" rel="noopener noreferrer">Blender Service</a></li>
                <li><a href="https://github.com/AR-Car-Showcase/recommendation-service" target="_blank" rel="noopener noreferrer">Recommendation Service</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <ul className="footer-links">
                <li><a href="https://github.com/AR-Car-Showcase" target="_blank" rel="noopener noreferrer"><FiGithub className="inline-icon" /> GitHub Org</a></li>
                <li><a href="mailto:contact@arcarshowcase.com"><FiMail className="inline-icon" /> Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 AR Car Showcase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
