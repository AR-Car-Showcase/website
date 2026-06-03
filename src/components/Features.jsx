import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCamera, FiEdit3, FiSliders, FiMessageSquare, FiSave, FiMove } from 'react-icons/fi';
import { useRef } from 'react';
import './Features.css';

const featuresData = [
  {
    id: 1,
    icon: <FiCamera />,
    title: 'Place Cars in Your World',
    description: 'Drop life-sized 3D vehicles into your physical surroundings using advanced Augmented Reality, enabling true-to-scale spatial visualization.'
  },
  {
    id: 2,
    icon: <FiEdit3 />,
    title: 'Customize in Real-Time',
    description: 'Personalize colors, rims, interiors, and materials instantly. What you design in the studio is exactly what appears in AR.'
  },
  {
    id: 3,
    icon: <FiSliders />,
    title: 'Compare Side-by-Side',
    description: 'Evaluate different options effortlessly. Compare features, aesthetics, and configurations to make confident choices.'
  },
  {
    id: 4,
    icon: <FiMessageSquare />,
    title: 'AI Recommendations',
    description: 'Receive intelligent suggestions based on your preferences. Use the AI chatbot to quickly compare cars and clear any doubts.'
  },
  {
    id: 5,
    icon: <FiSave />,
    title: 'Save Your Builds',
    description: 'Store customized vehicle configurations in your personal showroom and revisit or modify your bespoke designs anytime.'
  },
  {
    id: 6,
    icon: <FiMove />,
    title: 'Intuitive Gestures',
    description: 'Use intuitive touch gestures to easily rotate, zoom, and explore every detail of the vehicles in 3D and AR environments.'
  }
];

const Features = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <section id="features" ref={sectionRef} className="section features">
      <div className="container">
        <motion.div 
          className="section-header"
          style={{ y: headerY }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Unparalleled <span className="gradient-text">Exploration</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover a suite of intelligent tools designed to revolutionize how you interact with and evaluate vehicles.
          </motion.p>
        </motion.div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="feature-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
