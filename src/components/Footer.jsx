import { useTranslation } from 'react-i18next';
import LocalizedLink from './LocalizedLink';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin,
  FaClock
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div 
            className="footer-col"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-white mb-4 text-wrap-balance relative">
              LEBENSWERK
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-white/30 -mb-2"></span>
            </h3>
            <p className="mb-6 text-white/80 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            className="footer-col"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-white mb-4 text-wrap-balance relative">
              {t('footer.quick_links')}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-white/30 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <LocalizedLink to="/" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> {t('navigation.home')}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/service" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> {t('navigation.service')}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/about" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> {t('navigation.about')}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/contact" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> {t('navigation.contact')}
                </LocalizedLink>
              </li>
            </ul>
          </motion.div>
          
          {/* Locations */}
          <motion.div 
            className="footer-col"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-white mb-4 text-wrap-balance relative">
              {t('footer.schweiz')}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-white/30 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <LocalizedLink to="/location/bern" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-white/60" /> Solothurn
                </LocalizedLink>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="footer-col"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-white mb-4 text-wrap-balance relative">
              {t('contact.title')}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-white/30 -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-white/60" />
                <div>
                  <p className="font-medium break-words-safe">{t('home.contact_info.direct_phone')}</p>
                  <p className="text-xs text-white/60 mt-1">{t('home.contact_info.direct_text')}</p>
                  <p className="font-medium break-words-safe mt-2">{t('home.contact_info.appointment_phone')}</p>
                  <p className="text-xs text-white/60 mt-1">{t('home.contact_info.appointment_text')}</p>
                  <p className="text-sm text-white/60 flex items-center mt-2 break-words-safe">
                    <FaClock className="mr-1" /> Mo-Fr: 8:00 - 20:00
                  </p>
                </div>
              </li>
              <li className="flex">
                <FaEnvelope className="mt-1 mr-3 text-white/60" />
                <a href={`mailto:${t('home.contact_info.email')}`} className="hover:text-white/90 transition-colors">
                  {t('home.contact_info.email')}
                </a>
              </li>
              <li className="flex">
                <FaMapMarkerAlt className="mt-1 mr-3 text-white/60" />
                <p>{t('home.contact_info.address')}</p>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 break-words-safe">
              {t('footer.copyright')} {new Date().getFullYear()} LEBENSWERK. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              {/* <LocalizedLink to="/impressum" className="text-sm text-white/70 hover:text-white transition-colors">
                {t('footer.impressum')}
              </LocalizedLink> */}
              {/* <LocalizedLink to="/datenschutz" className="text-sm text-white/70 hover:text-white transition-colors">
                {t('footer.datenschutz')}
              </LocalizedLink> */}
              {/* <LocalizedLink to="/agb" className="text-sm text-white/70 hover:text-white transition-colors">
                AGB
              </LocalizedLink> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
