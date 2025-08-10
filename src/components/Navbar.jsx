import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';
import { getTranslatedPath, getRouteKeyFromPath } from '../i18n/routeTranslations';
import LocalizedLink from './LocalizedLink';

function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  // Available languages
  const languages = [
    { code: 'de', name: 'Deutsch', countryCode: 'DE' },
    { code: 'en', name: 'English', countryCode: 'US' },
    { code: 'fr', name: 'Français', countryCode: 'FR' }
  ];
  
  // Get current language from URL or i18n
  const getCurrentLanguage = () => {
    // Extract language from URL path if it exists
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const langFromPath = pathSegments[0];
    
    // Check if the first segment is a valid language code
    if (languages.some(lang => lang.code === langFromPath)) {
      return langFromPath;
    }
    
    // Otherwise use the current i18n language or fallback to default
    return i18n.language || 'de';
  };
  
  // Get language-specific path for navigation
  const getLocalizedPath = (routeKey) => {
    const currentLang = getCurrentLanguage();
    
    // Handle root path specially
    if (routeKey === 'home') {
      return `/${currentLang}`;
    }
    
    return `/${currentLang}/${getTranslatedPath(routeKey, currentLang)}`;
  };
  
  // Change language handler with URL update
  const changeLanguage = (langCode) => {
    // Get current path segments
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    // If we have a valid path structure with at least one segment
    if (pathSegments.length > 1) {
      // Keep the current page but change the language
      const currentRouteKey = getRouteKeyFromPath(pathSegments[1], pathSegments[0]);
      const newPath = getTranslatedPath(currentRouteKey, langCode);
      
      // Construct new URL with new language but same page
      const newUrl = `/${langCode}/${newPath}`;
      
      // Force a hard navigation to ensure complete page reload with new language
      window.location.replace(newUrl);
    } else {
      // Fallback to homepage of the selected language
      window.location.replace(`/${langCode}`);
    }
    
    // Close language menu
    setLangMenuOpen(false);
  };
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  // Navigation links
  const navLinks = [
    { key: 'home', label: t('navigation.home') },
    { key: 'service', label: t('navigation.service') },
    { key: 'about', label: t('navigation.about') },
    { key: 'contact', label: t('navigation.contact') },
  ];
  
  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };
  
  const navItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };
  
  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-md py-0' : 'bg-primary bg-opacity-90 py-0'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center relative z-10">
        {/* Logo */}
        <LocalizedLink to="/" className="flex items-center cursor-hover">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img 
              src="/images/logo.jpeg" 
              alt="Lebenswerk Logo" 
              className="h-7 mr-2 rounded-full shadow-md"
            />
            <div className="leading-none no-overflow">
              <span className="text-white font-bold text-lg block text-wrap-balance">LEBENSWERK</span>
              <span className="text-white text-xs opacity-80 block break-words-safe">PHYSIOTHERAPIE & GESUNDHEIT</span>
            </div>
          </motion.div>
        </LocalizedLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <LocalizedLink 
              key={link.key} 
              to={link.key === 'home' ? '/' : `/${link.key}`}
              className={`cursor-hover relative ${
                location.pathname === getLocalizedPath(link.key) 
                  ? 'text-white font-semibold' 
                  : scrolled ? 'text-gray-100 hover:text-white' : 'text-white hover:text-gray-200'
              }`}
            >
              {link.label}
              {location.pathname === getLocalizedPath(link.key) && (
                <motion.div 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                  layoutId="navbar-underline"
                />
              )}
            </LocalizedLink>
          ))}
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`flex items-center ${
                scrolled ? 'text-gray-100 hover:text-white' : 'text-white hover:text-gray-200'
              } cursor-hover`}
            >
              <FaGlobe className="mr-1" />
              {languages.map(lang => (
                lang.code === i18n.language && (
                  <div key={lang.code} className="flex items-center">
                    <ReactCountryFlag 
                      countryCode={lang.countryCode} 
                      svg 
                      style={{ width: '1em', height: '1em', marginRight: '4px' }}
                      title={lang.name}
                    />
                    <span className="uppercase">{lang.code}</span>
                  </div>
                )
              ))}
            </button>
            
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div 
                  className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50 min-w-[140px]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center ${
                        i18n.language === lang.code ? 'bg-gray-100 text-primary' : 'text-gray-700'
                      }`}
                    >
                      <ReactCountryFlag 
                        countryCode={lang.countryCode} 
                        svg 
                        style={{ width: '1.2em', height: '1.2em', marginRight: '8px' }}
                        title={lang.name}
                      />
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none cursor-hover fixed top-4 right-4 z-[9999] text-white"
          onClick={() => setIsOpen(!isOpen)}
          style={{ position: 'fixed' }}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-primary z-30 md:hidden pt-0"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Close button inside menu */}
            <button 
              className="absolute top-4 right-4 text-white focus:outline-none cursor-hover"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
            {/* Tap anywhere to close - overlay */}
            <div className="absolute inset-0 w-full h-full" onClick={() => setIsOpen(false)}></div>
            
            {/* Menu content - prevent clicks from closing */}
            <div className="container mx-auto flex flex-col h-full relative z-10" onClick={(e) => e.stopPropagation()}>
              {navLinks.map((link) => (
                <motion.div key={link.key} variants={navItemVariants}>
                  <LocalizedLink 
                    to={link.key === 'home' ? '/' : `/${link.key}`}
                    className={`block py-4 text-xl border-b border-green-600 break-words-safe ${
                      location.pathname === getLocalizedPath(link.key) 
                        ? 'text-white font-semibold' 
                        : 'text-gray-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </LocalizedLink>
                </motion.div>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="mt-0 border-t border-green-600 pt-4">
                <h3 className="text-gray-100 mb-2 text-xl text-wrap-balance">Language</h3>
                <div className="flex flex-col space-y-0">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      variants={navItemVariants}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center py-2 ${
                        i18n.language === lang.code ? 'text-white font-semibold' : 'text-gray-100'
                      }`}
                    >
                      <FaGlobe className="mr-2" />
                      {lang.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
