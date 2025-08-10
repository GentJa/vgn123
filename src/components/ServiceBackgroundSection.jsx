import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ServiceBackgroundSection = ({ 
  imageUrl, 
  title, 
  description, 
  overlayColor = 'rgba(0, 0, 0, 0.6)', 
  textColor = 'white',
  alignRight = false,
  children
}) => {
  const { t } = useTranslation();
  
  return (
    <div 
      className="relative w-full bg-cover bg-center bg-no-repeat py-24 my-12" 
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: overlayColor }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col ${alignRight ? 'items-end text-right' : 'items-start text-left'} max-w-2xl mx-auto md:mx-0 ${alignRight ? 'md:mr-12' : 'md:ml-12'}`}>
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-4 ${textColor === 'white' ? 'text-white' : `text-${textColor}`}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className={`text-lg mb-6 ${textColor === 'white' ? 'text-white' : `text-${textColor}`}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceBackgroundSection;
