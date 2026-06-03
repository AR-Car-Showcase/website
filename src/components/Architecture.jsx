import { motion } from 'framer-motion';
import { FiSmartphone, FiCloud, FiServer, FiDatabase, FiBox, FiCpu } from 'react-icons/fi';
import './Architecture.css';

const Architecture = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="architecture" className="section architecture">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            System <span className="gradient-text">Architecture</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Built on a distributed microservices architecture designed for performance, scalability, and real-time 3D processing.
          </motion.p>
        </div>

        <motion.div
          className="arch-diagram"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mobile Layer */}
          <motion.div className="arch-layer" variants={itemVariants}>
            <div className="arch-node glass primary">
              <FiSmartphone className="arch-icon" />
              <h3>React Native Mobile App</h3>
              <p>Expo, ViroReact, Three.js</p>
            </div>
          </motion.div>

          <div className="arch-connector">
            <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="var(--accent-primary)" strokeWidth="2" strokeDasharray="6,4" /></svg>
          </div>

          {/* Network Layer */}
          <motion.div className="arch-layer" variants={itemVariants}>
            <div className="arch-node glass network">
              <FiCloud className="arch-icon" />
              <h3>Cloudflare Network</h3>
              <p>DNS &bull; CDN &bull; SSL &bull; Security</p>
            </div>
          </motion.div>

          <div className="arch-connector">
            <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="var(--accent-primary)" strokeWidth="2" strokeDasharray="6,4" /></svg>
          </div>

          {/* Backend + Database Layer */}
          <motion.div className="arch-layer split" variants={itemVariants}>
            <div className="arch-node glass secondary">
              <FiServer className="arch-icon" />
              <h3>Spring Boot Backend</h3>
              <p>Auth &bull; Catalog &bull; REST API</p>
            </div>

            <div className="arch-node glass database">
              <FiDatabase className="arch-icon" />
              <h3>PostgreSQL &amp; Redis</h3>
              <p>Persistence &amp; Caching</p>
            </div>
          </motion.div>

          <div className="arch-connector">
            <svg width="2" height="40"><line x1="1" y1="0" x2="1" y2="40" stroke="var(--accent-primary)" strokeWidth="2" strokeDasharray="6,4" /></svg>
          </div>

          {/* 3D Processing + Recommendation Layer */}
          <motion.div className="arch-layer triple" variants={itemVariants}>
            <div className="arch-node glass processing">
              <FiBox className="arch-icon" />
              <h3>Blender Service</h3>
              <p>Python Flask &bull; 3D Model Generation</p>
            </div>

            <div className="arch-node glass recommendation">
              <FiCpu className="arch-icon" />
              <h3>Recommendation Service</h3>
              <p>Python Flask &bull; AI / ML Engine</p>
            </div>

            <div className="arch-node glass storage">
              <FiCloud className="arch-icon" />
              <h3>Oracle Object Storage</h3>
              <p>Vehicle Assets &amp; Generated Models</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
