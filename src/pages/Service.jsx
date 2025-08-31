import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLeaf, FaHandshake, FaHeart, FaRunning } from 'react-icons/fa';

// Define image path for consistency with Services.jsx
const backgroundImage = '/images/1.png';

const Service = () => {
  const { t } = useTranslation();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const serviceItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { 
      backgroundColor: "#f0f9ff", // Light blue background on hover
      scale: 1.02, // Slight scale up
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    transition: { 
      duration: 0.6,
      hover: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className="page relative min-h-[70vh]">
      {/* Solid color background for mobile reliability */}
      <div className="absolute inset-0 bg-[#004e68] z-0"></div>
      
      {/* Background Image with Overlay - hidden on small screens */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 hidden md:block"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'scroll',
          backgroundPosition: 'center 30%'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ backgroundColor: 'rgba(0, 78, 104, 0.7)' }}
        />
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* SVG Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat"></div>
        </div>
        
        {/* Spine-like vertical line */}
        <div className="absolute left-[10%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0"></div>
        <div className="absolute right-[10%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0"></div>
        
        {/* Horizontal lines resembling ribs */}
        <div className="absolute left-[5%] right-[80%] top-1/4 h-0.5 bg-primary/10"></div>
        <div className="absolute left-[5%] right-[85%] top-[calc(25%+50px)] h-0.5 bg-primary/10"></div>
        <div className="absolute left-[5%] right-[75%] top-[calc(25%+100px)] h-0.5 bg-primary/10"></div>
        <div className="absolute left-[5%] right-[82%] top-[calc(25%+150px)] h-0.5 bg-primary/10"></div>
        
        <div className="absolute left-[80%] right-[5%] top-1/4 h-0.5 bg-primary/10"></div>
        <div className="absolute left-[85%] right-[5%] top-[calc(25%+50px)] h-0.5 bg-primary/10"></div>
        <div className="absolute left-[75%] right-[5%] top-[calc(25%+100px)] h-0.5 bg-primary/10"></div>
        <div className="absolute left-[82%] right-[5%] top-[calc(25%+150px)] h-0.5 bg-primary/10"></div>
        
        {/* Therapy points */}
        <div className="absolute top-[20%] left-[15%] w-12 h-12 rounded-full border-2 border-primary/10 animate-pulse"></div>
        <div className="absolute top-[40%] right-[15%] w-10 h-10 rounded-full border-2 border-primary/10 animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-[30%] left-[20%] w-8 h-8 rounded-full border-2 border-primary/10 animate-pulse" style={{animationDuration: '5s'}}></div>
        
        {/* Decorative elements */}
        <div className="absolute top-[60%] right-[25%] w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-[10%] left-[30%] w-32 h-32 rounded-full bg-primary/5 blur-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-6 md:p-6 relative z-10">
        <motion.div 
          className="service-hero mb-8 md:mb-12 pt-6 md:pt-10 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-black/30 backdrop-blur-sm p-4 md:p-6 rounded-lg inline-block w-full md:w-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-6 text-wrap-balance">{t('service.title')}</h1>

          </div>
        </motion.div>
        
        <motion.div 
          className="service-list mb-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6 text-wrap-balance">{t('home.services.title')}</h2>
          <p className="text-white font-bold mb-4 md:mb-6 break-words-safe max-w-2xl">{t('home.services.description')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div 
              className="service-item bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-colors duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{t('home.services.classical.title')}</h3>
                  <p className="text-gray-700">{t('home.services.classical.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="service-item bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-colors duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{t('home.services.manual.title')}</h3>
                  <p className="text-gray-700">{t('home.services.manual.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="service-item bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-colors duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{t('home.services.rehabilitation.title')}</h3>
                  <p className="text-gray-700">{t('home.services.rehabilitation.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="service-item bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-colors duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{t('home.services.pain.title')}</h3>
                  <p className="text-gray-700">{t('home.services.pain.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="service-item bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-colors duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{t('home.services.neurological.title')}</h3>
                  <p className="text-gray-700">{t('home.services.neurological.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="service-item bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-colors duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{t('home.services.breathing.title')}</h3>
                  <p className="text-gray-700">{t('home.services.breathing.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="service-item bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-colors duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{t('home.services.lymph.title')}</h3>
                  <p className="text-gray-700">{t('home.services.lymph.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="service-item bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-colors duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{t('home.services.balance.title')}</h3>
                  <p className="text-gray-700">{t('home.services.balance.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="service-item bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-colors duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{t('home.services.homevisits.title')}</h3>
                  <p className="text-gray-700">{t('home.services.homevisits.description')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="service-item bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-colors duration-300"
              variants={serviceItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{t('home.services.massage.title')}</h3>
                  <p className="text-gray-700">{t('home.services.massage.description')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        
        {/* <motion.div 
          className="faq-section"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary mb-6 text-wrap-balance">{t('service.faq.title')}</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-2 text-wrap-balance">{t('service.intro.title')}</h3>
              <p className="text-gray-700 mb-4 break-words-safe">{t('service.intro.paragraph1')}</p>
              <p className="text-gray-700 break-words-safe">{t('service.intro.paragraph2')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-2">{t('service.faq.question1')}</h3>
              <p className="text-gray-700">{t('service.faq.answer1')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-2">{t('service.faq.question2')}</h3>
              <p className="text-gray-700">{t('service.faq.answer2')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-2">{t('service.faq.question3')}</h3>
              <p className="text-gray-700">{t('service.faq.answer3')}</p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Service;
