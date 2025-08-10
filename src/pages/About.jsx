import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLeaf, FaHandshake, FaClock, FaHeart } from 'react-icons/fa';
import SEO from '../components/SEO';

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'de';
  
  // SEO translations based on language
  const seoTitles = {
    de: "Über uns - Erfahrene Physiotherapeuten für Ihre Gesundheit",
    en: "About us - Experienced physiotherapists for your health",
    fr: "À propos de nous - Physiothérapeutes expérimentés pour votre santé"
  };
  
  const seoDescriptions = {
    de: "Lernen Sie unser Team aus erfahrenen Physiotherapeuten kennen. Wir bieten professionelle Behandlungen bei Ihnen zuhause mit über 15 Jahren Erfahrung.",
    en: "Meet our team of experienced physiotherapists. We offer professional treatments at your home with over 15 years of experience.",
    fr: "Rencontrez notre équipe de physiothérapeutes expérimentés. Nous proposons des traitements professionnels à domicile avec plus de 15 ans d'expérience."
  };
  
  const seoKeywords = {
    de: ["physiotherapie team", "erfahrene physiotherapeuten", "über uns", "physiotherapie qualifikationen", "mobile physiotherapie team"],
    en: ["physiotherapy team", "experienced physiotherapists", "about us", "physiotherapy qualifications", "mobile physiotherapy team"],
    fr: ["équipe de physiothérapie", "physiothérapeutes expérimentés", "à propos de nous", "qualifications en physiothérapie", "équipe de physiothérapie mobile"]
  };
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  return (
    <div className="page relative min-h-[70vh]">
      <SEO 
        title={seoTitles[currentLang]} 
        description={seoDescriptions[currentLang]}
        keywords={seoKeywords[currentLang]}
        imageUrl="/images/about-team.jpg"
      />
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* SVG Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231aa34a' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Decorative Circles - Representing Wellness and Healing */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 animate-pulse-slowest"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-primary/5 animate-pulse-slower"></div>
        
        {/* Flowing Lines - Representing Movement and Progress */}
        <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"></div>
        <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"></div>
        
        {/* Vertical Accent Lines - Representing Posture and Alignment */}
        <div className="absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0"></div>
        
        {/* Small Animated Dots - Representing Energy Points */}
        <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '6s' }}></div>
        
        {/* Blurred Gradient Spots - Adding Depth */}
        <div className="absolute top-1/2 left-1/5 w-40 h-40 rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-40 h-40 rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:p-6 relative z-10">
        <motion.div 
          className="about-hero mb-8 md:mb-12 pt-4 md:pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-lg inline-block w-full md:w-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3 md:mb-6 text-wrap-balance">{t('about.title')}</h1>
            <p className="text-base md:text-xl text-gray-700 mb-2 md:mb-6 break-words-safe max-w-lg">{t('about.subtitle')}</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div 
            className="about-vision bg-white/90 p-4 md:p-6 rounded-lg"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-6 text-wrap-balance">{t('about.vision.title')}</h2>
            <p className="text-gray-700 mb-4 break-words-safe text-sm md:text-base">{t('about.vision.description')}</p>
            <p className="text-gray-700 break-words-safe text-sm md:text-base">{t('about.vision.goal')}</p>
          </motion.div>
          
          <motion.div 
            className="about-image"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="bg-white/90 p-4 md:p-6 rounded-lg">
              <div className="bg-primary/20 h-48 md:h-64 rounded-lg flex items-center justify-center text-primary font-medium">
                Team Image
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* <motion.div 
          className="team-section mb-12"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary mb-6">{t('about.team.title')}</h2>
          <p className="text-gray-700 mb-8">{t('about.team.description')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="team-member bg-white p-6 rounded-lg text-center shadow-md"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-32 h-32 rounded-full bg-primary bg-opacity-20 mx-auto mb-4 flex items-center justify-center">
                <FaLeaf className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{t('about.team.member1.name')}</h3>
              <p className="text-gray-600 mb-2">{t('about.team.member1.position')}</p>
              <p className="text-gray-700">{t('about.team.member1.bio')}</p>
            </motion.div>
            
            <motion.div 
              className="team-member bg-white p-6 rounded-lg text-center shadow-md"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-32 h-32 rounded-full bg-primary bg-opacity-20 mx-auto mb-4 flex items-center justify-center">
                <FaHandshake className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{t('about.team.member2.name')}</h3>
              <p className="text-gray-600 mb-2">{t('about.team.member2.position')}</p>
              <p className="text-gray-700">{t('about.team.member2.bio')}</p>
            </motion.div>
            
            <motion.div 
              className="team-member bg-white p-6 rounded-lg text-center shadow-md"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-32 h-32 rounded-full bg-primary bg-opacity-20 mx-auto mb-4 flex items-center justify-center">
                <FaClock className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{t('about.team.member3.name')}</h3>
              <p className="text-gray-600 mb-2">{t('about.team.member3.position')}</p>
              <p className="text-gray-700">{t('about.team.member3.bio')}</p>
            </motion.div>
          </div>
        </motion.div> */}
        
        {/* <motion.div 
          className="values-section mb-12"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary mb-6">{t('about.values.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-2">{t('about.values.quality.title')}</h3>
              <p className="text-gray-700">{t('about.values.quality.description')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-2">{t('about.values.care.title')}</h3>
              <p className="text-gray-700">{t('about.values.care.description')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-2">{t('about.values.innovation.title')}</h3>
              <p className="text-gray-700">{t('about.values.innovation.description')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-2">{t('about.values.integrity.title')}</h3>
              <p className="text-gray-700">{t('about.values.integrity.description')}</p>
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
          <h2 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
          <p className="mb-6">{t('about.cta.description')}</p>
          <motion.button 
            className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-all font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('about.cta.button')}
          </motion.button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default About;
