import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TherapyAnimations from '../components/TherapyAnimations';
import LocalizedLink from '../components/LocalizedLink';
import ServiceBackgroundSection from '../components/ServiceBackgroundSection';

// Use external image URLs for reliable background images
const manualTherapyImage = '../../images/1.png'; // Manual therapy image
const massageTherapyImage = '../../images/2.png'; // Massage therapy image

const Services = () => {
  const { t } = useTranslation();
  const [activeTherapy, setActiveTherapy] = useState('massage');
  
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  // Service data with therapy types
  const therapyTypes = ['massage', 'manual'];
  
  // Get current service data
  const currentTherapy = activeTherapy;
  
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Page Header with Background Image */}
      <div 
        className="relative bg-cover bg-center py-20 z-10"
        style={{ 
          backgroundImage: `url(${manualTherapyImage})`,
          backgroundAttachment: 'fixed',
          backgroundColor:'red'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ backgroundColor: 'rgba(30, 64, 175, 0.75)' }}
        />
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-2 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('services.title')}
          </motion.h1>
          <motion.p 
            className="text-xl text-white text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.p>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <LocalizedLink to="contact">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all">
                {t('services.book_appointment')}
              </button>
            </LocalizedLink>
          </motion.div>
        </div>
      </div>
      
      {/* Service Selection Tabs */}
      <div 
        className="relative bg-cover bg-center py-6"
        style={{ 
          backgroundImage: `url(${massageTherapyImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(52, 78, 65, 0.85)' }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-4">
            {therapyTypes.map((therapy) => (
              <motion.button
                key={therapy}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                  activeTherapy === therapy 
                    ? 'bg-white text-primary shadow-lg' 
                    : 'bg-primary/20 text-white hover:bg-primary/40'
                }`}
                onClick={() => setActiveTherapy(therapy)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`services.therapy.${therapy}.title`)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Service Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Service Animation */}
          <motion.div 
            className="h-[400px] relative rounded-xl overflow-hidden shadow-xl"
            key={activeTherapy}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <TherapyAnimations therapy={activeTherapy} className="w-full h-full" />
          </motion.div>
          
          {/* Service Description */}
          <motion.div
            key={`desc-${activeTherapy}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">{t(`services.therapy.${currentTherapy}.title`)}</h2>
            <p className="text-lg text-gray-700">{t(`services.therapy.${currentTherapy}.description`)}</p>
            
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Benefits:</h3>
              <ul className="space-y-2">
                {t(`services.therapy.${currentTherapy}.benefits`, { returnObjects: true }).map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <span className="text-primary mr-2">•</span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <LocalizedLink to="contact">
              <motion.button
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-all mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('services.book_appointment')}
              </motion.button>
            </LocalizedLink>
          </motion.div>
        </div>
      </div>
      
      {/* Manual Therapy Background Section */}
      <ServiceBackgroundSection
        imageUrl={manualTherapyImage}
        title={t('services.therapy.manual.title')}
        description={t('services.therapy.manual.description')}
        overlayColor="rgba(0, 78, 134, 0.75)"
      >
        <LocalizedLink to="contact">
          <motion.button
            className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('services.book_appointment')}
          </motion.button>
        </LocalizedLink>
      </ServiceBackgroundSection>
      
      {/* Additional Services Section with Background */}
      <div 
        className="relative bg-cover bg-center py-16"
        style={{ 
          backgroundImage: `url(${massageTherapyImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(111, 66, 193, 0.85)' }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-white"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {t('services.additional_title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Additional Service 1 */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('services.additional_services.sports.title')}</h3>
              <p className="text-gray-600">{t('services.additional_services.sports.description')}</p>
            </motion.div>
            
            {/* Additional Service 2 */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('services.additional_services.preventive.title')}</h3>
              <p className="text-gray-600">{t('services.additional_services.preventive.description')}</p>
            </motion.div>
            
            {/* Additional Service 3 */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('services.additional_services.holistic.title')}</h3>
              <p className="text-gray-600">{t('services.additional_services.holistic.description')}</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Massage Therapy Background Section */}
      <ServiceBackgroundSection
        imageUrl={massageTherapyImage}
        title={t('services.therapy.massage.title')}
        description={t('services.therapy.massage.description')}
        overlayColor="rgba(52, 78, 65, 0.75)"
        alignRight={true}
      >
        <LocalizedLink to="contact">
          <motion.button
            className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('services.book_appointment')}
          </motion.button>
        </LocalizedLink>
      </ServiceBackgroundSection>
      
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-6"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {t('services.cta_title')}
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t('services.cta_text')}
        </motion.p>
        <LocalizedLink to="contact">
          <motion.button
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-secondary transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('services.contact_us')}
          </motion.button>
        </LocalizedLink>
      </div>
    </div>
  );
};

export default Services;
