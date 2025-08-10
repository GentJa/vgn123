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
    de: "Professionelle mobile Physiotherapie bei Ihnen zuhause",
    en: "Professional mobile physiotherapy in your home",
    fr: "Physiothérapie mobile professionnelle à votre domicile"
  };
  
  const seoDescriptions = {
    de: "✔ Professionelle Physiotherapie bei Ihnen zuhause – individuell, flexibel und ohne Anfahrtsstress. Jetzt beraten lassen!",
    en: "✔ Professional physiotherapy in your home – personalized, flexible and without travel stress. Get advice now!",
    fr: "✔ Physiothérapie professionnelle à domicile – personnalisée, flexible et sans stress de déplacement. Obtenez des conseils maintenant!"
  };
  
  const seoKeywords = {
    de: ["mobile physiotherapie", "hausbesuch", "krankengymnastik", "physiotherapeut", "rehabilitation", "schmerztherapie", "physiotherapie zu hause"],
    en: ["mobile physiotherapy", "home visit", "physical therapy", "physiotherapist", "rehabilitation", "pain therapy", "physiotherapy at home"],
    fr: ["physiothérapie mobile", "visite à domicile", "thérapie physique", "physiothérapeute", "réhabilitation", "thérapie de la douleur", "physiothérapie à domicile"]
  };
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const phoneNumber = "+49 30 1234567";
  
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

  const slideImages = [
    '/images/physiotherapy-hero-bg.png',
    '/images/physiotherapy-treatment.png',
    '/images/physiotherapy-equipment.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const testimonials = [
    {
      name: 'Martina K.',
      age: '35 Jahre',
      condition: 'Rückenschmerzen',
      text: 'Die Behandlung in meinem Zuhause war eine große Erleichterung. Der Therapeut war sehr professionell und hat mir wirklich geholfen. Meine Rückenschmerzen sind deutlich besser geworden!'
    },
    {
      name: 'Thomas B.',
      age: '52 Jahre',
      condition: 'Knieprobleme',
      text: 'Nach meiner Knie-OP war es schwierig, zur Physiotherapie zu fahren. Die mobile Physiotherapie kam genau zur richtigen Zeit. Sehr empfehlenswert!'
    },
    {
      name: 'Sabine M.',
      age: '48 Jahre',
      condition: 'Lymphödem',
      text: 'Flexible Termine und keine Anfahrt - das spart so viel Zeit! Die Qualität der Behandlung ist erstklassig und die Therapeuten sind sehr freundlich.'
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
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <AnimatedBackground className="z-0" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url(${slideImages[currentSlide]})`,
            opacity: 0.2
          }}
        />
        {/* Background Slider */}
        <div className="absolute inset-0">
          {slideImages.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat transform transition-transform duration-1000"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            {/* Slide 1 Content */}
            <div className={`transition-all duration-700 ${currentSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute'}`}>
              <motion.div 
                className="animate-fade-in-up"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {t('home.hero.slide1.title')}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl drop-shadow-md">
                  {t('home.hero.slide1.subtitle')}
                </p>
              </motion.div>
            </div>

            {/* Slide 2 Content */}
            <div className={`transition-all duration-700 ${currentSlide === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute'}`}>
              <motion.div 
                className="animate-fade-in-up"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {t('home.hero.slide2.title')}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl drop-shadow-md">
                  {t('home.hero.slide2.subtitle')}
                </p>
              </motion.div>
            </div>

            {/* Slide 3 Content */}
            <div className={`transition-all duration-700 ${currentSlide === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute'}`}>
              <motion.div 
                className="animate-fade-in-up"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {t('home.hero.slide3.title')}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl drop-shadow-md">
                  {t('home.hero.slide3.subtitle')}
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="flex justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <LocalizedLink to="/kontakt">
                <motion.button 
                  className="inline-flex items-center justify-center gap-2 h-11 rounded-md bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('home.hero.cta')}
                  <FaArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </LocalizedLink>
            </motion.div>

            {/* Hero features section removed as requested */}
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slideImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
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

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50 relative">
        <PatternBackground opacity={0.05} color="#059669" bgColor="gray-50" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider">{t('home.services.title')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">{t('home.services.title')}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent transition-all duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="h-3 bg-primary"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaHandHoldingMedical className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{t('home.services.manual_therapy.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.services.manual_therapy.description')}</p>
                <LocalizedLink to="/service" className="inline-flex items-center text-primary hover:text-primary-700 font-medium">
                  {t('home.services.view_all')} <FaArrowRight className="ml-2 h-4 w-4" />
                </LocalizedLink>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent transition-all duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="h-3 bg-primary"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaUserMd className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{t('home.services.physical_therapy.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.services.physical_therapy.description')}</p>
                <LocalizedLink to="/service" className="inline-flex items-center text-primary hover:text-primary-700 font-medium">
                  {t('home.services.view_all')} <FaArrowRight className="ml-2 h-4 w-4" />
                </LocalizedLink>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent transition-all duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="h-3 bg-primary"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaLeaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{t('home.services.lymphatic_drainage.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.services.lymphatic_drainage.description')}</p>
                <LocalizedLink to="/service" className="inline-flex items-center text-primary hover:text-primary-700 font-medium">
                  {t('home.services.view_all')} <FaArrowRight className="ml-2 h-4 w-4" />
                </LocalizedLink>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <LocalizedLink to="/service">
              <motion.button 
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('home.services.view_all')}
                <FaArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* About Section */}
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
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/vigan.jpeg" 
                  alt="Physiotherapist working with patient" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-primary text-white p-2 rounded-full shadow-lg flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
                <div className="text-xl font-bold">15+</div>
                <div className="text-[0.55rem] sm:text-[0.6rem] md:text-xs uppercase tracking-wider text-center leading-[0.9] px-1">
                  {i18n.language === 'en' ? 'Year of Experience' : 
                   i18n.language === 'fr' ? 'Année d\'Exp.' : 'Jahr Erfahrung'}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider">{t('home.experience.about.title')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
                {t('home.experience.about.subtitle')}
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 mb-6 text-lg">
                {t('home.experience.about.description')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaHandshake className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{t('home.experience.about.features.personal_care.title')}</h3>
                    <p className="text-gray-600">
                      {t('home.experience.about.features.personal_care.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaShieldAlt className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{t('home.experience.about.features.qualified_staff.title')}</h3>
                    <p className="text-gray-600">
                      {t('home.experience.about.features.qualified_staff.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaHeart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{t('home.experience.about.features.holistic_approach.title')}</h3>
                    <p className="text-gray-600">
                      {t('home.experience.about.features.holistic_approach.description')}
                    </p>
                  </div>
                </div>
              </div>
              
              <LocalizedLink to="/about">
                <motion.button 
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-white px-8 py-3 text-lg font-medium shadow-lg hover:bg-primary-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('home.experience.about.more_about_us')}
                  <FaArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </LocalizedLink>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider">Erfahrungen</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
              {t('home.testimonials.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <FaUserCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Martina K.</h4>
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Die Behandlung in meinem Zuhause war eine große Erleichterung. Der Therapeut war sehr professionell und hat mir wirklich geholfen. Meine Rückenschmerzen sind deutlich besser geworden."
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <FaUserCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Thomas B.</h4>
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Nach meiner Knie-OP war es schwierig, zur Physiotherapie zu fahren. Die mobile Physiotherapie kam genau zur richtigen Zeit. Sehr empfehlenswert!"
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <FaUserCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Sabine M.</h4>
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Flexible Termine und keine Anfahrt - das spart so viel Zeit! Die Qualität der Behandlung ist erstklassig und die Therapeuten sind sehr freundlich."
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 italic max-w-3xl mx-auto mb-8">
              {t('home.testimonials.pricing')}
            </p>
            <LocalizedLink to={i18n.language === 'de' ? '/kontakt' : '/contact'}>
              <motion.button 
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-white hover:bg-primary-700 px-8 py-3 text-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('home.testimonials.more')}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {t('home.appointment.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocalizedLink to={i18n.language === 'de' ? '/kontakt' : '/contact'} className="w-full sm:w-auto">
                <motion.button 
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('home.appointment.cta')}
                  <FaArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </LocalizedLink>
              <motion.button 
                className="inline-flex items-center justify-center gap-2 rounded-md bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium transition-all duration-300 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigator.clipboard.writeText(phoneNumber);
                  setShowCopyMessage(true);
                  setTimeout(() => setShowCopyMessage(false), 2000);
                }}
              >
                <FaPhone className="h-5 w-5" />
                {phoneNumber}
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
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-600">{t('home.stats.experience')}</p>
            </motion.div>
            
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
