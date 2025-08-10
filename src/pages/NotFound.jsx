import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaHome, FaArrowRight } from 'react-icons/fa';

const NotFound = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page container mx-auto p-6 min-h-[70vh] flex items-center justify-center">
      <motion.div 
        className="text-center max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">{t('notFound.title')}</h2>
        <p className="text-gray-600 mb-8">{t('notFound.message')}</p>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-all"
            >
              <FaHome className="mr-2" />
              {t('notFound.home')}
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/kontakt" 
              className="flex items-center justify-center bg-white text-primary border border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition-all"
            >
              {t('notFound.contact')}
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 p-6 bg-white rounded-lg shadow-md border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-primary mb-3">{t('notFound.help')}</h3>
          <p className="text-gray-600 mb-4">{t('notFound.help_text')}</p>
          <ul className="text-left text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> 
              <span>{t('notFound.suggestion1')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> 
              <span>{t('notFound.suggestion2')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> 
              <span>{t('notFound.suggestion3')}</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
