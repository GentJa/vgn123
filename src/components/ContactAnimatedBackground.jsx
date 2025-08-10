import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ContactAnimatedBackground = ({ className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Subtle parallax effect based on mouse position
  const getParallaxValue = (factor) => {
    return {
      x: mousePosition.x * factor - factor / 2,
      y: mousePosition.y * factor - factor / 2
    };
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Healing circles animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              width: `${Math.random() * 120 + 40}px`,
              height: `${Math.random() * 120 + 40}px`,
              background: `radial-gradient(circle, rgba(78, 205, 196, 0.1) 0%, rgba(78, 205, 196, 0.05) 70%, rgba(78, 205, 196, 0) 100%)`,
              boxShadow: '0 0 15px rgba(78, 205, 196, 0.2)',
              filter: 'blur(2px)'
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              x: getParallaxValue(20 + i * 5).x,
              y: getParallaxValue(20 + i * 5).y
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
      
      {/* Flowing energy lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M${100 + i * 200},0 Q${300 + i * 100},${500 + i * 50} ${100 + i * 200},1000`}
            stroke="#8FBC8F"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,20"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0, 0.2, 0],
              x: getParallaxValue(10).x
            }}
            transition={{ 
              duration: 8 + i,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </svg>
      
      {/* Healing hands silhouette */}
      <motion.div 
        className="absolute bottom-0 right-0 w-1/4 h-1/3 opacity-10"
        style={{ y: getParallaxValue(15).y }}
      >
        <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
          <motion.path
            d="M100,50 C120,30 150,30 170,50 C190,70 190,100 170,120 C150,140 120,140 100,120 C80,100 80,70 100,50 Z"
            fill="none"
            stroke="#E27D60"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.3,
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              pathLength: { duration: 3, ease: "easeInOut" },
              opacity: { duration: 1 },
              rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.path
            d="M100,120 C90,130 80,150 90,170 C100,190 120,190 130,170 C140,150 130,130 120,120"
            fill="none"
            stroke="#E27D60"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.3,
              y: [0, -5, 0, 5, 0]
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut", delay: 1 },
              opacity: { duration: 1, delay: 1 },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </svg>
      </motion.div>
      
      {/* Pulse effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary"
            style={{
              width: '200px',
              height: '200px',
              x: '-50%',
              y: '-50%'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2, 4],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactAnimatedBackground;
