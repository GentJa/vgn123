import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TherapyAnimations = ({ therapy = 'massage', className }) => {
  const { t } = useTranslation();
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

  // Massage Therapy Animation
  const MassageTherapyAnimation = () => (
    <div className="relative w-full h-full">
      {/* Hands moving in massage motion */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4"
        style={{ y: getParallaxValue(10).y }}
      >
        <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
          {/* Stylized body outline */}
          <motion.path
            d="M100,50 C120,30 180,30 200,50 C220,70 220,130 200,150 C180,170 120,170 100,150 C80,130 80,70 100,50 Z"
            fill="none"
            stroke="#8FBC8F"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.6
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1 }
            }}
          />
          
          {/* Massage hands - first hand */}
          <motion.path
            d="M80,80 C90,85 100,85 110,80"
            fill="none"
            stroke="#E27D60"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, x: -10, opacity: 0 }}
            animate={{ 
              pathLength: 1,
              x: [0, 20, 0],
              y: [0, -5, 0],
              opacity: 0.8
            }}
            transition={{ 
              pathLength: { duration: 1 },
              x: { duration: 2, repeat: Infinity, repeatType: "reverse" },
              y: { duration: 2, repeat: Infinity, repeatType: "reverse" },
              opacity: { duration: 0.5 }
            }}
          />
          
          {/* Massage hands - second hand */}
          <motion.path
            d="M190,120 C200,115 210,115 220,120"
            fill="none"
            stroke="#E27D60"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, x: 10, opacity: 0 }}
            animate={{ 
              pathLength: 1,
              x: [0, -20, 0],
              y: [0, 5, 0],
              opacity: 0.8
            }}
            transition={{ 
              pathLength: { duration: 1 },
              x: { duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 },
              y: { duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 },
              opacity: { duration: 0.5 }
            }}
          />
          
          {/* Massage pressure waves */}
          {[1, 2, 3].map((i) => (
            <motion.circle
              key={`massage-wave-${i}`}
              cx="150"
              cy="100"
              r={10 + i * 15}
              fill="none"
              stroke="#4ECDC4"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [0.8, 1.2, 1.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>
      
      {/* Relaxation indicators */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`massage-particle-${i}`}
            className="absolute rounded-full bg-primary"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              opacity: 0.3
            }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </div>
  );
  
  // Manual Therapy Animation
  const ManualTherapyAnimation = () => (
    <div className="relative w-full h-full">
      {/* Spine and joint manipulation visualization */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4"
        style={{ x: getParallaxValue(5).x }}
      >
        <svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMid meet">
          {/* Stylized spine */}
          <motion.path
            d="M100,20 C105,20 110,25 110,30 C110,35 105,40 100,40 C95,40 90,35 90,30 C90,25 95,20 100,20 Z
               M100,50 C105,50 110,55 110,60 C110,65 105,70 100,70 C95,70 90,65 90,60 C90,55 95,50 100,50 Z
               M100,80 C105,80 110,85 110,90 C110,95 105,100 100,100 C95,100 90,95 90,90 C90,85 95,80 100,80 Z
               M100,110 C105,110 110,115 110,120 C110,125 105,130 100,130 C95,130 90,125 90,120 C90,115 95,110 100,110 Z
               M100,140 C105,140 110,145 110,150 C110,155 105,160 100,160 C95,160 90,155 90,150 C90,145 95,140 100,140 Z
               M100,170 C105,170 110,175 110,180 C110,185 105,190 100,190 C95,190 90,185 90,180 C90,175 95,170 100,170 Z
               M100,200 C105,200 110,205 110,210 C110,215 105,220 100,220 C95,220 90,215 90,210 C90,205 95,200 100,200 Z"
            fill="none"
            stroke="#8FBC8F"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.7
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1 }
            }}
          />
          
          {/* Connecting lines */}
          <motion.path
            d="M100,40 L100,50 M100,70 L100,80 M100,100 L100,110 M100,130 L100,140 M100,160 L100,170 M100,190 L100,200"
            stroke="#8FBC8F"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
          
          {/* Manipulation hands */}
          <motion.path
            d="M70,90 C75,85 85,85 90,90"
            fill="none"
            stroke="#E27D60"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.8,
              rotate: [0, -5, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              opacity: { duration: 0.5 },
              rotate: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
              x: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
            }}
          />
          
          <motion.path
            d="M110,90 C115,85 125,85 130,90"
            fill="none"
            stroke="#E27D60"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.8,
              rotate: [0, 5, 0],
              x: [0, -5, 0]
            }}
            transition={{ 
              opacity: { duration: 0.5 },
              rotate: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
              x: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
            }}
          />
          
          {/* Adjustment effect */}
          <motion.circle
            cx="100"
            cy="90"
            r="15"
            fill="none"
            stroke="#4ECDC4"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 0.7, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </svg>
      </motion.div>
      
      {/* Movement indicators */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`manual-indicator-${i}`}
          className="absolute rounded-full border-2 border-primary"
          style={{
            top: `${30 + i * 20}%`,
            left: `${45 + (i % 2) * 10}%`,
            width: '20px',
            height: '20px',
            opacity: 0.1
          }}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.7
          }}
        />
      ))}
    </div>
  );
  
  // Lymphatic Drainage Animation
  const LymphaticAnimation = () => (
    <div className="relative w-full h-full">
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4"
        style={{ y: getParallaxValue(8).y }}
      >
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid meet">
          {/* Body outline */}
          <motion.path
            d="M100,50 C130,50 170,50 200,50 C230,50 230,100 230,150 C230,200 230,250 200,300 C170,350 130,350 100,300 C70,250 70,200 70,150 C70,100 70,50 100,50 Z"
            fill="none"
            stroke="#8FBC8F"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.6
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1 }
            }}
          />
          
          {/* Lymphatic system paths */}
          <motion.path
            d="M120,80 C120,120 120,160 120,200 C120,240 140,260 160,280"
            fill="none"
            stroke="#4ECDC4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.7
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1, delay: 0.5 }
            }}
          />
          
          <motion.path
            d="M180,80 C180,120 180,160 180,200 C180,240 160,260 140,280"
            fill="none"
            stroke="#4ECDC4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.7
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1, delay: 0.8 }
            }}
          />
          
          {/* Lymph nodes */}
          {[
            { cx: 120, cy: 100 },
            { cx: 180, cy: 100 },
            { cx: 120, cy: 180 },
            { cx: 180, cy: 180 },
            { cx: 150, cy: 260 }
          ].map((node, i) => (
            <motion.circle
              key={`lymph-node-${i}`}
              cx={node.cx}
              cy={node.cy}
              r="5"
              fill="#4ECDC4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1, 0.8],
                opacity: 0.7
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.3 },
                opacity: { duration: 1, delay: 1 + i * 0.2 }
              }}
            />
          ))}
          
          {/* Drainage flow particles */}
          {[
            { path: "M120,80 C120,120 120,160 120,200 C120,240 140,260 160,280" },
            { path: "M180,80 C180,120 180,160 180,200 C180,240 160,260 140,280" }
          ].map((pathData, pathIndex) => (
            Array.from({ length: 3 }).map((_, i) => (
              <motion.circle
                key={`flow-${pathIndex}-${i}`}
                r="3"
                fill="#E8C547"
                opacity="0.8"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.8, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.2 + pathIndex * 0.6
                }}
              >
                <animateMotion
                  path={pathData.path}
                  dur={`${4 + i}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </motion.circle>
            ))
          ))}
          
          {/* Gentle pressure hands */}
          <motion.path
            d="M90,150 C100,145 110,145 120,150"
            fill="none"
            stroke="#E27D60"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [0, 20, 40]
            }}
            transition={{ 
              opacity: { duration: 3, repeat: Infinity },
              y: { duration: 3, repeat: Infinity }
            }}
          />
          
          <motion.path
            d="M210,180 C200,175 190,175 180,180"
            fill="none"
            stroke="#E27D60"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [0, 20, 40]
            }}
            transition={{ 
              opacity: { duration: 3, repeat: Infinity, delay: 1.5 },
              y: { duration: 3, repeat: Infinity, delay: 1.5 }
            }}
          />
        </svg>
      </motion.div>
    </div>
  );

  // Render the appropriate animation based on therapy type
  const renderTherapyAnimation = () => {
    switch(therapy) {
      case 'massage':
        return <MassageTherapyAnimation />;
      case 'manual':
        return <ManualTherapyAnimation />;
      case 'lymphatic':
        return <LymphaticAnimation />;
      default:
        return <MassageTherapyAnimation />;
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      {renderTherapyAnimation()}
    </div>
  );
};

export default TherapyAnimations;
