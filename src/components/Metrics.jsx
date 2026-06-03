import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FiDatabase, FiLayers, FiCpu, FiSmartphone } from 'react-icons/fi';
import './Metrics.css';

const Metrics = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const stats = [
    { id: 1, icon: <FiDatabase />, end: 50, suffix: '+', label: 'Vehicle Catalog' },
    { id: 2, icon: <FiLayers />, end: 100, suffix: 'k+', label: 'Customizations' },
    { id: 3, icon: <FiCpu />, end: 99, suffix: '%', label: 'AI Accuracy' },
    { id: 4, icon: <FiSmartphone />, end: 2, suffix: '', label: 'Platforms Supported' },
  ];

  return (
    <section className="metrics section" ref={ref}>
      <div className="container">
        <div className="metrics-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="metric-card glass"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="metric-icon">{stat.icon}</div>
              <h2 className="metric-number">
                {inView ? <CountUp end={stat.end} duration={2.5} /> : '0'}
                <span className="metric-suffix">{stat.suffix}</span>
              </h2>
              <p className="metric-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
