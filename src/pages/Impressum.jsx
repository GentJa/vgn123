import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Impressum = () => {
  const { t } = useTranslation();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  return (
    <div className="page container mx-auto p-6 min-h-[70vh]">
      <motion.div 
        className="impressum-hero mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('legal.impressum.title')}</h1>
      </motion.div>
      
      <motion.div 
        className="impressum-content"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">{t('legal.impressum.company_info')}</h2>
          
          <div className="mb-6">
            <p className="font-bold mb-1">Mobile Physiotherapie 24 GmbH</p>
            <p className="text-gray-700">Hauptstraße 123</p>
            <p className="text-gray-700">10115 Berlin</p>
            <p className="text-gray-700">Deutschland</p>
          </div>
          
          <div className="mb-6">
            <p className="font-bold mb-1">{t('legal.impressum.contact')}</p>
            <p className="text-gray-700">{t('legal.impressum.phone')}: 0800 3110010</p>
            <p className="text-gray-700">{t('legal.impressum.email')}: info@physio-24.de</p>
            <p className="text-gray-700">{t('legal.impressum.website')}: www.mobile-physiotherapie24.de</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">{t('legal.impressum.legal_info')}</h2>
          
          <div className="mb-6">
            <p className="font-bold mb-1">{t('legal.impressum.managing_directors')}</p>
            <p className="text-gray-700">Dr. Anna Schmidt</p>
            <p className="text-gray-700">Thomas Müller</p>
          </div>
          
          <div className="mb-6">
            <p className="font-bold mb-1">{t('legal.impressum.registration')}</p>
            <p className="text-gray-700">{t('legal.impressum.register_court')}: Amtsgericht Berlin-Charlottenburg</p>
            <p className="text-gray-700">{t('legal.impressum.register_number')}: HRB 123456</p>
          </div>
          
          <div className="mb-6">
            <p className="font-bold mb-1">{t('legal.impressum.vat_id')}</p>
            <p className="text-gray-700">DE123456789</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">{t('legal.impressum.responsibility')}</h2>
          
          <div className="mb-6">
            <p className="font-bold mb-1">{t('legal.impressum.content_responsibility')}</p>
            <p className="text-gray-700">Dr. Anna Schmidt</p>
            <p className="text-gray-700">Mobile Physiotherapie 24 GmbH</p>
            <p className="text-gray-700">Hauptstraße 123</p>
            <p className="text-gray-700">10115 Berlin</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-primary mb-4">{t('legal.impressum.disclaimer')}</h2>
          
          <div className="mb-6">
            <p className="font-bold mb-1">{t('legal.impressum.disclaimer_content')}</p>
            <p className="text-gray-700 mb-4">{t('legal.impressum.disclaimer_text1')}</p>
            <p className="text-gray-700 mb-4">{t('legal.impressum.disclaimer_text2')}</p>
          </div>
          
          <div className="mb-6">
            <p className="font-bold mb-1">{t('legal.impressum.copyright')}</p>
            <p className="text-gray-700">{t('legal.impressum.copyright_text')}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Impressum;
