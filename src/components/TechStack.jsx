import { motion, useScroll, useTransform } from 'framer-motion';
import { SiReact, SiTypescript, SiSpringboot, SiPostgresql, SiRedis, SiPython, SiBlender, SiDocker, SiCloudflare, SiNginx } from 'react-icons/si';
import { TbBrandReactNative, TbCloudDataConnection } from 'react-icons/tb';
import { useRef } from 'react';
import './TechStack.css';

const categories = [
  {
    title: 'Mobile Application',
    techs: [
      { name: 'React Native', icon: <TbBrandReactNative /> },
      { name: 'Expo', icon: <SiReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> }
    ]
  },
  {
    title: 'Backend Services',
    techs: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Redis', icon: <SiRedis /> }
    ]
  },
  {
    title: '3D Processing',
    techs: [
      { name: 'Blender', icon: <SiBlender /> },
      { name: 'Python', icon: <SiPython /> }
    ]
  },
  {
    title: 'Infrastructure',
    techs: [
      { name: 'Oracle Cloud', icon: <TbCloudDataConnection /> },
      { name: 'Cloudflare', icon: <SiCloudflare /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Nginx', icon: <SiNginx /> }
    ]
  }
];

const TechStack = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <section id="techstack" ref={sectionRef} className="section techstack">
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
          >
            Technology <span className="gradient-text">Stack</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Powered by modern, industry-standard technologies to ensure high performance and reliability.
          </motion.p>
        </motion.div>

        <div className="tech-categories">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="tech-category glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3>{category.title}</h3>
              <div className="tech-grid">
                {category.techs.map((tech, i) => (
                  <div key={i} className="tech-item">
                    <div className="tech-icon">{tech.icon}</div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
