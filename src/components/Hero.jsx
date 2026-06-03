import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import './Hero.css';

function Model(props) {
  const { scene } = useGLTF('/assets/Models/bugatti_chiron.glb');
  return <primitive object={scene} {...props} />;
}

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityVisual = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="hero section">
      <div className="container grid-2">
        <motion.div style={{ y: yText }} className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Experience Cars in <br />
            <span className="gradient-text">Augmented Reality</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            An immersive platform that enables users to browse, customize, and visualize vehicles in their real-world environment.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#get-started" className="btn btn-primary">Start Exploring</a>
            <a
              href="https://github.com/AR-Car-Showcase/mobile-app/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Latest Release
            </a>
            <a href="#features" className="btn btn-secondary">Discover Features</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          style={{ y: yVisual, opacity: opacityVisual }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="canvas-container glass">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1.5, 8], fov: 45 }}>
              <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
                <Stage environment="warehouse" intensity={0.3} contactShadow={false} >
                  <Model scale={0.03} />
                </Stage>
              </PresentationControls>
            </Canvas>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
    </section>
  );
};

useGLTF.preload('/assets/Models/bugatti_chiron.glb');

export default Hero;
