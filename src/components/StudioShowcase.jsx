import { motion, useScroll, useTransform } from 'framer-motion';
import { FiLayers, FiDroplet, FiSettings } from 'react-icons/fi';
import { useRef } from 'react';
import './StudioShowcase.css';

const StudioShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.92, 1]);

  return (
    <section id="studio" ref={sectionRef} className="section studio-showcase">
      <div className="container grid-2">
        <motion.div
          className="studio-visual"
          style={{ y: imgY, scale }}
        >
          <div className="image-grid">
            <img src="/assets/screenshots/light_3D_Studio.png" alt="3D Studio Editor" className="glass main-img" />
            <img src="/assets/screenshots/dark_3D_Studio_customized.png" alt="Dark Mode Studio" className="glass sub-img" />
          </div>
        </motion.div>

        <motion.div
          className="studio-content"
          style={{ x: textX }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge glass">
            <FiLayers /> 3D Studio
          </div>
          <h2 className="section-title text-left">
            Real-Time <br /><span className="gradient-text">Customization</span>
          </h2>
          <p className="section-desc">
            Make it yours. Our 3D customization studio allows you to modify every detail of your vehicle in real-time, leveraging cloud-powered rendering to deliver hyper-realistic results.
          </p>
          
          <div className="features-mini-grid">
            <div className="mini-feature">
              <div className="mini-icon"><FiDroplet /></div>
              <h4>Paint & Materials</h4>
              <p>Choose from standard, metallic, and matte finishes.</p>
            </div>
            <div className="mini-feature">
              <div className="mini-icon"><FiSettings /></div>
              <h4>Rims & Calipers</h4>
              <p>Swap wheels and customize brake caliper colors instantly.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioShowcase;
