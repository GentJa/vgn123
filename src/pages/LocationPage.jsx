import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const LocationPage = () => {
  const { location: locationParam } = useParams();
  const location = useLocation();
  const { t } = useTranslation();
  
  // If no location param is provided, extract from pathname
  const locationName = locationParam || location.pathname.split('/').pop();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  // Location-specific data would typically come from a database or API
  // For now, we'll use the translation keys
  
  return (
    <div className="page container mx-auto p-6 min-h-[70vh]">
      <motion.div 
        className="location-hero mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          {t(`footer.${locationName}`, locationName)}
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          {/* {t('location.subtitle', { location: t(`footer.${locationName}`, locationName) })} */}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <motion.div 
          className="location-info"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* <h2 className="text-3xl font-bold text-primary mb-6">{t('location.contact_info')}</h2> */}
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary p-3 rounded-full text-white mr-4">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-lg">{t('location.address')}</h3>
                <p className="text-gray-700">{t(`location.${locationName}.address_line1`, 'Hauptstraße 123')}</p>
                <p className="text-gray-700">{t(`location.${locationName}.address_line2`, `${locationName} 10115`)}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary p-3 rounded-full text-white mr-4">
                <FaPhone className="text-lg" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-lg">{t('location.phone')}</h3>
                <p className="text-gray-700">{t(`location.${locationName}.phone`, '0800 3110010')}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary p-3 rounded-full text-white mr-4">
                <FaEnvelope className="text-lg" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-lg">{t('location.email')}</h3>
                <p className="text-gray-700">{t(`location.${locationName}.email`, `${locationName}@physio-24.de`)}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary p-3 rounded-full text-white mr-4">
                <FaClock className="text-lg" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-lg">{t('location.hours')}</h3>
                <p className="text-gray-700">{t('location.hours_weekdays')}</p>
                <p className="text-gray-700">{t('location.hours_weekend')}</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="location-map bg-gray-200 rounded-lg min-h-[300px]"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Google Maps embed */}
          <div className="h-[400px] w-full rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.1957281972854!2d7.4435683!3d46.9475232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39c0d43dd199%3A0x7b9f3bc3d98d3cfd!2sMonbijoustrasse%2073%2C%203007%20Bern%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1658343912345!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
      
      {/* <motion.div 
        className="location-team mb-12"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">{t('location.team_title')}</h2>
        <p className="text-gray-700 mb-8">{t('location.team_description', { location: t(`footer.${locationName}`, locationName) })}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="team-member bg-gray-100 p-6 rounded-lg text-center"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-primary mb-2">{t(`location.${locationName}.team.member1.name`, 'Dr. Anna Schmidt')}</h3>
            <p className="text-gray-600 mb-2">{t(`location.${locationName}.team.member1.position`, t('location.team.position_lead'))}</p>
            <p className="text-gray-700">{t(`location.${locationName}.team.member1.bio`, t('location.team.bio_placeholder'))}</p>
          </motion.div>
          
          <motion.div 
            className="team-member bg-gray-100 p-6 rounded-lg text-center"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-primary mb-2">{t(`location.${locationName}.team.member2.name`, 'Thomas Müller')}</h3>
            <p className="text-gray-600 mb-2">{t(`location.${locationName}.team.member2.position`, t('location.team.position_therapist'))}</p>
            <p className="text-gray-700">{t(`location.${locationName}.team.member2.bio`, t('location.team.bio_placeholder'))}</p>
          </motion.div>
          
          <motion.div 
            className="team-member bg-gray-100 p-6 rounded-lg text-center"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-primary mb-2">{t(`location.${locationName}.team.member3.name`, 'Maria Weber')}</h3>
            <p className="text-gray-600 mb-2">{t(`location.${locationName}.team.member3.position`, t('location.team.position_assistant'))}</p>
            <p className="text-gray-700">{t(`location.${locationName}.team.member3.bio`, t('location.team.bio_placeholder'))}</p>
          </motion.div>
        </div>
      </motion.div> */}
      
      {/* <motion.div 
        className="location-services mb-12"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">{t('location.services_title')}</h2>
        <p className="text-gray-700 mb-8">{t('location.services_description', { location: t(`footer.${locationName}`, locationName) })}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-2">{t('home.services.lymphdrainage')}</h3>
            <p className="text-gray-700">{t('home.services.lymphdrainage_desc')}</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-2">{t('home.services.manual')}</h3>
            <p className="text-gray-700">{t('home.services.manual_desc')}</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-2">{t('home.services.massage')}</h3>
            <p className="text-gray-700">{t('home.services.massage_desc')}</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-2">{t('home.services.physio')}</h3>
            <p className="text-gray-700">{t('home.services.physio_desc')}</p>
          </div>
        </div>
      </motion.div> */}
      
      {/* <motion.div 
        className="cta-section bg-primary text-white p-8 rounded-lg text-center"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">{t('location.cta_title')}</h2>
        <p className="mb-6">{t('location.cta_description', { location: t(`footer.${locationName}`, locationName) })}</p>
        <motion.button 
          className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('location.cta_button')}
        </motion.button>
      </motion.div> */}
    </div>
  );
};

export default LocationPage;
