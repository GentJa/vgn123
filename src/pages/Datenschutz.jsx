import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Datenschutz = () => {
  const { t } = useTranslation();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  return (
    <div className="page container mx-auto p-6 min-h-[70vh]">
      <motion.div 
        className="datenschutz-hero mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-wrap-balance">{t('legal.privacy.title')}</h1>
      </motion.div>
      
      <motion.div 
        className="datenschutz-content"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 text-wrap-balance">{t('legal.privacy.introduction')}</h2>
          <p className="text-gray-700 mb-4 break-words-safe">{t('legal.privacy.intro_text1')}</p>
          <p className="text-gray-700 break-words-safe">{t('legal.privacy.intro_text2')}</p>
        </div>
        
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 text-wrap-balance">{t('legal.privacy.responsible')}</h2>
          
          <div className="mb-6">
            <p className="font-bold mb-1">{t('legal.privacy.responsible_entity')}</p>
            <p className="text-gray-700 break-words-safe">Mobile Physiotherapie 24 GmbH</p>
            <p className="text-gray-700 break-words-safe">Hauptstraße 123</p>
            <p className="text-gray-700 break-words-safe">10115 Berlin</p>
            <p className="text-gray-700 break-words-safe">Deutschland</p>
          </div>
          
          <div className="mb-6">
            <p className="font-bold mb-1">{t('legal.privacy.contact')}</p>
            <p className="text-gray-700 break-words-safe">{t('legal.privacy.phone')}: 0800 3110010</p>
            <p className="text-gray-700 break-words-safe">{t('legal.privacy.email')}: datenschutz@physio-24.de</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 text-wrap-balance">{t('legal.privacy.data_collection')}</h2>
          <p className="text-gray-700 mb-4 break-words-safe">{t('legal.privacy.collection_text1')}</p>
          
          <h3 className="text-xl font-bold text-primary mb-2 mt-6 text-wrap-balance">{t('legal.privacy.website_data')}</h3>
          <p className="text-gray-700 mb-4 break-words-safe">{t('legal.privacy.website_data_text')}</p>
          
          <h3 className="text-xl font-bold text-primary mb-2 mt-6 text-wrap-balance">{t('legal.privacy.contact_form')}</h3>
          <p className="text-gray-700 mb-4 break-words-safe">{t('legal.privacy.contact_form_text')}</p>
        </div>
        
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 text-wrap-balance">{t('legal.privacy.cookies')}</h2>
          <p className="text-gray-700 mb-4 break-words-safe">{t('legal.privacy.cookies_text1')}</p>
          <p className="text-gray-700 mb-4 break-words-safe">{t('legal.privacy.cookies_text2')}</p>
        </div>
        
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 text-wrap-balance">{t('legal.privacy.analytics')}</h2>
          <p className="text-gray-700 mb-4 break-words-safe">{t('legal.privacy.analytics_text')}</p>
          
          <h3 className="text-xl font-bold text-primary mb-2 mt-6 text-wrap-balance">{t('legal.privacy.google_analytics')}</h3>
          <p className="text-gray-700 mb-4 break-words-safe">{t('legal.privacy.google_analytics_text')}</p>
        </div>
        
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 text-wrap-balance">{t('legal.privacy.rights')}</h2>
          <p className="text-gray-700 mb-4 break-words-safe">{t('legal.privacy.rights_text')}</p>
          
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>{t('legal.privacy.right_information')}</li>
            <li>{t('legal.privacy.right_correction')}</li>
            <li>{t('legal.privacy.right_deletion')}</li>
            <li>{t('legal.privacy.right_restriction')}</li>
            <li>{t('legal.privacy.right_objection')}</li>
            <li>{t('legal.privacy.right_portability')}</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-primary mb-4 text-wrap-balance">{t('legal.privacy.changes')}</h2>
          <p className="text-gray-700 mb-4 break-words-safe">{t('legal.privacy.changes_text')}</p>
          <p className="text-gray-700 italic">{t('legal.privacy.last_updated')}: 20.07.2025</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Datenschutz;
