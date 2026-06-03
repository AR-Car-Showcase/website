import { motion, useScroll, useTransform } from 'framer-motion';
import { FiSmartphone, FiMap } from 'react-icons/fi';
import { useRef } from 'react';
import './ARShowcase.css';

const ARShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imgRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 5]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [-30, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);

  return (
    <section id="ar-showcase" ref={sectionRef} className="section ar-showcase">
      <div className="container grid-2">
        <motion.div
          className="ar-content"
          style={{ x: textX }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge glass">
            <FiSmartphone /> AR Experience
          </div>
          <h2 className="section-title text-left">
            Your Garage,<br /> <span className="gradient-text">Your Real World</span>
          </h2>
          <p className="section-desc">
            Experience the future of car shopping. Our advanced Augmented Reality engine lets you project life-sized, highly detailed 3D models of any customized vehicle directly into your driveway or garage.
          </p>
          <ul className="feature-list">
            <li>
              <FiMap className="list-icon" />
              <span><strong>True-to-Scale Projection:</strong> Walk around your custom build to see every detail in real-world lighting.</span>
            </li>
            <li>
              <FiSmartphone className="list-icon" />
              <span><strong>Instant Visualization:</strong> Seamless ARCore/ARKit integration for immediate spatial tracking.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="ar-visual"
          style={{ y: imgY, scale }}
        >
          <div className="image-stack">
            <motion.img 
              src="/assets/screenshots/light_AR_mode.png" 
              alt="AR Mode UI" 
              className="img-front glass"
              style={{ rotate: imgRotate }}
            />
            <img src="/assets/screenshots/AR_customized.png" alt="Customized AR View" className="img-back glass" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ARShowcase;
