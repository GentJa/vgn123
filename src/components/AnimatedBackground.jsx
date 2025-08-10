import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBackground = ({ className }) => {
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
      {/* Flowing wave patterns */}
      <motion.div 
        className="absolute w-full h-full opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,202.7C672,213,768,267,864,277.3C960,288,1056,256,1152,229.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#4ECDC4"
            fillOpacity="0.3"
            animate={{
              d: [
                "M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,202.7C672,213,768,267,864,277.3C960,288,1056,256,1152,229.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ],
              y: getParallaxValue(20).y
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#8FBC8F"
            fillOpacity="0.2"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,197.3C672,203,768,181,864,154.7C960,128,1056,96,1152,106.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ],
              y: getParallaxValue(15).y
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </svg>
      </motion.div>
      
      {/* Abstract human silhouettes */}
      <motion.div 
        className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-10"
        style={{ y: getParallaxValue(10).y }}
      >
        <svg viewBox="0 0 200 400" preserveAspectRatio="xMidYMid meet">
          <motion.path
            d="M100,20 C120,20 150,50 150,80 C150,110 140,140 120,160 C100,180 100,220 100,240 C100,260 110,280 130,300 C150,320 160,350 140,370 C120,390 80,390 60,370 C40,350 50,320 70,300 C90,280 100,260 100,240 C100,220 100,180 80,160 C60,140 50,110 50,80 C50,50 80,20 100,20 Z"
            fill="none"
            stroke="#E27D60"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.3,
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              pathLength: { duration: 3, ease: "easeInOut" },
              opacity: { duration: 1 },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </svg>
      </motion.div>
      
      {/* Anatomical elements - stylized spine */}
      <motion.div 
        className="absolute top-10 left-10 w-1/4 h-1/2 opacity-10"
        style={{ x: getParallaxValue(15).x }}
      >
        <svg viewBox="0 0 100 300" preserveAspectRatio="xMidYMid meet">
          <motion.path
            d="M50,10 C55,10 60,15 60,20 C60,25 55,30 50,30 C45,30 40,25 40,20 C40,15 45,10 50,10 Z
               M50,40 C55,40 60,45 60,50 C60,55 55,60 50,60 C45,60 40,55 40,50 C40,45 45,40 50,40 Z
               M50,70 C55,70 60,75 60,80 C60,85 55,90 50,90 C45,90 40,85 40,80 C40,75 45,70 50,70 Z
               M50,100 C55,100 60,105 60,110 C60,115 55,120 50,120 C45,120 40,115 40,110 C40,105 45,100 50,100 Z
               M50,130 C55,130 60,135 60,140 C60,145 55,150 50,150 C45,150 40,145 40,140 C40,135 45,130 50,130 Z
               M50,160 C55,160 60,165 60,170 C60,175 55,180 50,180 C45,180 40,175 40,170 C40,165 45,160 50,160 Z
               M50,190 C55,190 60,195 60,200 C60,205 55,210 50,210 C45,210 40,205 40,200 C40,195 45,190 50,190 Z
               M50,220 C55,220 60,225 60,230 C60,235 55,240 50,240 C45,240 40,235 40,230 C40,225 45,220 50,220 Z
               M50,250 C55,250 60,255 60,260 C60,265 55,270 50,270 C45,270 40,265 40,260 C40,255 45,250 50,250 Z"
            fill="none"
            stroke="#E8C547"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.3,
              y: [0, -5, 0, 5, 0]
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.path
            d="M50,30 L50,40 M50,60 L50,70 M50,90 L50,100 M50,120 L50,130 M50,150 L50,160 M50,180 L50,190 M50,210 L50,220 M50,240 L50,250"
            stroke="#E8C547"
            strokeWidth="1"
            strokeDasharray="3,3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 2 }}
          />
        </svg>
      </motion.div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-primary"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1.2, 1],
                opacity: [0, 0.2, 0.1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
