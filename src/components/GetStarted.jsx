import { motion } from 'framer-motion';
import { FiGithub, FiDownload, FiArrowRight } from 'react-icons/fi';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section id="get-started" className="section get-started">
      <div className="container">
        <motion.div
          className="cta-card glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience the Future?</h2>
            <p className="cta-desc">
              Start exploring the AR Car Showcase platform today. Dive into our open-source repositories or download the latest Android APK to see it in action.
            </p>

            <div className="cta-actions">
              <a href="https://github.com/AR-Car-Showcase" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FiGithub /> Explore Source Code
              </a>
              <a
                href="https://github.com/AR-Car-Showcase/mobile-app/releases/download/v1.0.0/ARCS-v1.0.0.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FiDownload /> Download APK <FiArrowRight />
              </a>
            </div>

            <div className="repo-links">
              <span>Other Repositories:</span>
              <a href="https://github.com/AR-Car-Showcase/mobile-app" target="_blank" rel="noopener noreferrer">Mobile App</a>
              <a href="https://github.com/AR-Car-Showcase/spring-boot-server" target="_blank" rel="noopener noreferrer">Spring Boot API</a>
              <a href="https://github.com/AR-Car-Showcase/blender-service" target="_blank" rel="noopener noreferrer">Blender Service</a>
              <a href="https://github.com/AR-Car-Showcase/recommendation-service" target="_blank" rel="noopener noreferrer">AI Recommender</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
