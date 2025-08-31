import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import LocalizedLink from '../components/LocalizedLink';
import AnimatedBackground from '../components/AnimatedBackground';
import { 
  FaLeaf, 
  FaHandHoldingMedical, 
  FaUserMd, 
  FaHeart, 
  FaShieldAlt, 
  FaHandshake, 
  FaComments, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaStarHalfAlt,
  FaUserCircle,
  FaCopy
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import PatternBackground from '../components/PatternBackground';

const Home = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language || 'de';
  
  // SEO translations based on language
  const seoTitles = {
    de: "Vigan Musliu - LEBENSWERK Mobile Physiotherapie Solothurn | Hausbesuch Schweiz",
    en: "Vigan Musliu - LEBENSWERK Mobile Physiotherapy Solothurn | Home Visits Switzerland",
    fr: "Vigan Musliu - LEBENSWERK Physiothérapie Mobile Soleure | Visites à Domicile Suisse"
  };
  
  const seoDescriptions = {
    de: "✔ Vigan Musliu - LEBENSWERK Physiotherapie Solothurn. Mobile Behandlung bei Ihnen zuhause. Professionell, flexibel, ohne Anfahrtsstress. Schweizweit verfügbar!",
    en: "✔ Vigan Musliu - LEBENSWERK Physiotherapy Solothurn. Mobile treatment in your home. Professional, flexible, without travel stress. Available throughout Switzerland!",
    fr: "✔ Vigan Musliu - LEBENSWERK Physiothérapie Soleure. Traitement mobile à domicile. Professionnel, flexible, sans stress de déplacement. Disponible dans toute la Suisse!"
  };
  
  const seoKeywords = {
    de: ["Vigan Musliu", "Vigan Musliu Physiotherapie", "Vigan Musliu Physiotherapeut", "Vigan Musliu Solothurn", "LEBENSWERK", "LEBENSWERK Physiotherapie", "LEBENSWERK Solothurn", "LEBENSWERK Physiotherapie Solothurn", "physiotherapie solothurn", "mobile physiotherapie solothurn", "physiotherapeut solothurn", "physiotherapie", "mobile physiotherapie", "physiotherapie hausbesuch", "physiotherapeut", "krankengymnastik", "rehabilitation", "schmerztherapie", "physiotherapie zu hause", "manuelle therapie", "lymphdrainage", "physiotherapie schweiz"],
    en: ["Vigan Musliu", "Vigan Musliu Physiotherapy", "Vigan Musliu Physiotherapist", "Vigan Musliu Solothurn", "LEBENSWERK", "LEBENSWERK Physiotherapy", "LEBENSWERK Solothurn", "LEBENSWERK Physiotherapy Solothurn", "physiotherapy solothurn", "mobile physiotherapy solothurn", "physiotherapist solothurn", "physiotherapy", "mobile physiotherapy", "home physiotherapy", "physiotherapist", "physical therapy", "rehabilitation", "pain therapy", "manual therapy", "lymphatic drainage", "physiotherapy switzerland"],
    fr: ["Vigan Musliu", "Vigan Musliu Physiothérapie", "Vigan Musliu Physiothérapeute", "Vigan Musliu Soleure", "LEBENSWERK", "LEBENSWERK Physiothérapie", "LEBENSWERK Soleure", "LEBENSWERK Physiothérapie Soleure", "physiothérapie soleure", "physiothérapie mobile soleure", "physiothérapeute soleure", "physiothérapie", "physiothérapie mobile", "physiothérapie à domicile", "physiothérapeute", "thérapie physique", "réhabilitation", "thérapie de la douleur", "thérapie manuelle", "drainage lymphatique", "physiothérapie suisse"]
  };
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const phoneNumber = "078 922 72 74";
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Service item hover animation variants
  const serviceItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { 
      backgroundColor: "rgba(0, 78, 104, 0.05)", // Very light primary color background
      scale: 1.03, // Slightly more pronounced scale
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "rgba(0, 78, 104, 0.5)", // Primary color border
    },
    transition: { 
      duration: 0.6,
      hover: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };


  
  const testimonials = [
    {
      name: t('home.testimonials.testimonial1.name'),
      age: t('home.testimonials.testimonial1.age'),
      condition: t('home.testimonials.testimonial1.condition'),
      text: t('home.testimonials.testimonial1.text')
    },
    {
      name: t('home.testimonials.testimonial2.name'),
      age: t('home.testimonials.testimonial2.age'),
      condition: t('home.testimonials.testimonial2.condition'),
      text: t('home.testimonials.testimonial2.text')
    },
    {
      name: t('home.testimonials.testimonial3.name'),
      age: t('home.testimonials.testimonial3.age'),
      condition: t('home.testimonials.testimonial3.condition'),
      text: t('home.testimonials.testimonial3.text')
    }
  ];
  
  return (
    <div className="home-page relative">
      <SEO 
        title={seoTitles[currentLang]} 
        description={seoDescriptions[currentLang]}
        keywords={seoKeywords[currentLang]}
        imageUrl="/images/home-hero.jpg"
      />
      <StructuredData 
        type="LocalBusiness"
        name="Mobile Physiotherapie 24"
        description={seoDescriptions[currentLang]}
        image="/images/home-hero.jpg"
        telephone="+49 30 1234567"
        address={{
          streetAddress: "Musterstraße 123",
          addressLocality: "Berlin",
          postalCode: "10115",
          addressCountry: "DE"
        }}
      />
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <AnimatedBackground className="z-0" />
        
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('home.hero.title')}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              dangerouslySetInnerHTML={{ __html: t('home.hero.description') }}
            />
            
            <div className="flex justify-center">
              <LocalizedLink to="/kontakt">
                <motion.button 
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('home.hero.button')}
                  <FaArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </LocalizedLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Info Bar */}
      {/* <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaPhone className="w-4 h-4" />
              <span>{t('home.contact_info.phone')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaEnvelope className="w-4 h-4" />
              <span>{t('home.contact_info.email')}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <FaMapMarkerAlt className="w-4 h-4" />
            <span>{t('home.contact_info.address')}</span>
          </div>
        </div>
      </div> */}

      {/* About Me Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <AnimatedBackground className="opacity-50" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-primary/20 shadow-primary/10 hover:border-primary/40 hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300">
                <img 
                  src="/images/vigan.jpeg" 
                  alt="Physiotherapist working with patient" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
                {t('home.about.title')}
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="text-gray-600 mb-6 text-lg space-y-4">
                <p>
                  {t('home.about.paragraph1')}
                </p>
                <p>
                  {t('home.about.paragraph2')}
                </p>
                <p>
                  {t('home.about.paragraph3')}
                </p>
                <p>
                  {t('home.about.paragraph4')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white relative">
        <PatternBackground opacity={0.05} color="#059669" bgColor="white" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">{t('home.services.title')}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto">
              {t('home.services.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{t('home.services.classical.title')}</h3>
                  <p className="text-gray-600">{t('home.services.classical.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{t('home.services.manual.title')}</h3>
                  <p className="text-gray-600">{t('home.services.manual.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{t('home.services.rehabilitation.title')}</h3>
                  <p className="text-gray-600">{t('home.services.rehabilitation.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{t('home.services.pain.title')}</h3>
                  <p className="text-gray-600">{t('home.services.pain.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{t('home.services.neurological.title')}</h3>
                  <p className="text-gray-600">{t('home.services.neurological.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{t('home.services.breathing.title')}</h3>
                  <p className="text-gray-600">{t('home.services.breathing.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{t('home.services.lymph.title')}</h3>
                  <p className="text-gray-600">{t('home.services.lymph.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{t('home.services.balance.title')}</h3>
                  <p className="text-gray-600">{t('home.services.balance.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{t('home.services.homevisits.title')}</h3>
                  <p className="text-gray-600">{t('home.services.homevisits.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{t('home.services.massage.title')}</h3>
                  <p className="text-gray-600">{t('home.services.massage.description')}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <LocalizedLink to="/kontakt">
              <motion.button 
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-white hover:bg-primary-700 px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('home.services.button')}
                <FaArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </LocalizedLink>
          </div>
        </div>
      </section>

      
      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-700 text-center relative overflow-hidden">
        <AnimatedBackground />
        <PatternBackground opacity={0.1} color="white" bgColor="primary" pattern="plus" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-3xl font-bold text-white mb-6">
              {t('home.contact_info.title')}
            </h3>
            
            <div className="text-white/90 mb-8 space-y-4 max-w-2xl mx-auto">
              <p className="text-lg">
                {t('home.contact_info.direct_text')}
              </p>
              <p className="text-lg">
                {t('home.contact_info.appointment_text')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigator.clipboard.writeText(phoneNumber);
                  setShowCopyMessage(true);
                  setTimeout(() => setShowCopyMessage(false), 2000);
                }}
              >
                <FaPhone className="h-5 w-5" />
                {t('home.contact_info.direct_phone')}
                <FaCopy className="ml-2 h-4 w-4 opacity-70" />
                
                {/* Copy notification message */}
                <AnimatePresence>
                  {showCopyMessage && (
                    <motion.div 
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-primary px-4 py-2 rounded-md shadow-lg text-sm font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-1">
                        <FaCheckCircle className="text-green-500" />
                        {t('home.copy_notification')}
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
              <motion.button 
                className="inline-flex items-center justify-center gap-2 rounded-md bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigator.clipboard.writeText(t('home.contact_info.appointment_phone'));
                  setShowCopyMessage(true);
                  setTimeout(() => setShowCopyMessage(false), 2000);
                }}
              >
                <FaPhone className="h-5 w-5" />
                {t('home.contact_info.appointment_phone')}
                <FaCopy className="ml-2 h-4 w-4 opacity-70" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            
            <motion.div 
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
              <p className="text-gray-600">{t('home.stats.patients')}</p>
            </motion.div>
            
            <motion.div 
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <p className="text-gray-600">{t('home.stats.methods')}</p>
            </motion.div>
            
            <motion.div 
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
              <p className="text-gray-600">{t('home.stats.locations')}</p>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
