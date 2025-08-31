import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Service from './pages/Service';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import LocationPage from './pages/LocationPage';
// import Impressum from './pages/Impressum';
// import Datenschutz from './pages/Datenschutz';
import NotFound from './pages/NotFound';

import { routeTranslations, getTranslatedPath } from './i18n/routeTranslations';
import { isValidRoutePath } from './utils/security';

function App() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  // Check if a string is a valid language code
  const isValidLanguage = (code) => {
    return ['de', 'en', 'fr'].includes(code);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Redirect from root to language-specific route
  useEffect(() => {
    if (location.pathname === '/') {
      const language = i18n.language || 'de';
      window.history.replaceState({}, '', `/${language}`);
    }
  }, [location.pathname, i18n.language]);
  
  // Synchronize i18n language with URL path language on every route change
  useEffect(() => {
    // Extract language from URL path
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const langFromPath = pathSegments[0];
    
    // If the path has a valid language code and it's different from current i18n language
    if (isValidLanguage(langFromPath) && langFromPath !== i18n.language) {
      // Update i18n language to match URL
      i18n.changeLanguage(langFromPath);
    }
  }, [location.pathname, i18n.language]);

  // Security check for route paths
  useEffect(() => {
    // Skip the check for the root path
    if (location.pathname === '/') return;
    
    // Validate route path format
    const pathWithoutLang = location.pathname.split('/').slice(2).join('/');
    if (pathWithoutLang && !isValidRoutePath(pathWithoutLang)) {
      console.warn('Invalid route path detected:', location.pathname);
      // Redirect to 404 page with the current language
      window.location.replace(`/${i18n.language || 'de'}/404`);
    }
  }, [location.pathname, i18n.language]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-primary">
        <div className="loader w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Animation settings for page transitions
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  // Wrapper for page components with animation
  const AnimatedPage = ({ children }) => (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      {children}
    </motion.div>
  );

  // Safe route renderer that validates parameters
  const SafeRouteRenderer = ({ component: Component, paramName, paramValue }) => {
    // Validate location parameter if present
    if (paramName === 'location' && (!paramValue || !isValidRoutePath(paramValue))) {
      return <Navigate to={`/${i18n.language || 'de'}`} replace />;
    }
    
    return <AnimatedPage><Component /></AnimatedPage>;
  };

  return (
    <div className="app min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-0">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to={`/${i18n.language || 'de'}`} replace />} />
            
            {/* Handle invalid language codes */}
            <Route path="/:invalidLang/*" element={({ params }) => {
              // If the language code is invalid, redirect to default language
              if (!isValidLanguage(params.invalidLang)) {
                return <Navigate to={`/${i18n.language || 'de'}`} replace />;
              }
              // Otherwise, this route won't match and will fall through to the language-specific routes
              return null;
            }} />
            
            {/* Language-specific routes */}
            {['de', 'en', 'fr'].map(lang => (
              <Route key={lang} path={`/${lang}/*`} element={
                <Routes>
                  {/* Home route */}
                  <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
                  
                  {/* Service route - translated */}
                  <Route 
                    path={`/${getTranslatedPath('service', lang)}`} 
                    element={<AnimatedPage><Service /></AnimatedPage>} 
                  />
                  
                  {/* Services route - translated */}
                  <Route 
                    path={`/${getTranslatedPath('services', lang)}`} 
                    element={<AnimatedPage><Services /></AnimatedPage>} 
                  />
                  
                  {/* About route - translated */}
                  <Route 
                    path={`/${getTranslatedPath('about', lang)}`} 
                    element={<AnimatedPage><About /></AnimatedPage>} 
                  />
                  
                  {/* Contact route - translated */}
                  <Route 
                    path={`/${getTranslatedPath('contact', lang)}`} 
                    element={<AnimatedPage><Contact /></AnimatedPage>} 
                  />
                  
                  {/* Location route - translated */}
                  <Route 
                    path={`/${getTranslatedPath('location', lang)}/:location`} 
                    element={({ params }) => (
                      <SafeRouteRenderer 
                        component={LocationPage} 
                        paramName="location" 
                        paramValue={params.location}
                      />
                    )} 
                  />
                  
                  {/* Imprint route - translated */}
                  {/* <Route 
                    path={`/${getTranslatedPath('imprint', lang)}`} 
                    element={<AnimatedPage><Impressum /></AnimatedPage>} 
                  /> */}
                  
                  {/* Privacy route - translated */}
                  {/* <Route 
                    path={`/${getTranslatedPath('privacy', lang)}`} 
                    element={<AnimatedPage><Datenschutz /></AnimatedPage>} 
                  /> */}
                  
                  {/* Catch-all route for this language */}
                  <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
                </Routes>
              } />
            ))}
            
            {/* Legacy routes - redirect to language-specific routes */}
            <Route path="/service" element={<Navigate to={`/${i18n.language || 'de'}/${getTranslatedPath('service', i18n.language || 'de')}`} replace />} />
            <Route path="/services" element={<Navigate to={`/${i18n.language || 'de'}/${getTranslatedPath('services', i18n.language || 'de')}`} replace />} />
            <Route path="/about" element={<Navigate to={`/${i18n.language || 'de'}/${getTranslatedPath('about', i18n.language || 'de')}`} replace />} />
            <Route path="/kontakt" element={<Navigate to={`/${i18n.language || 'de'}/${getTranslatedPath('contact', i18n.language || 'de')}`} replace />} />
            <Route path="/standort/:location" element={<Navigate to={`/${i18n.language || 'de'}/${getTranslatedPath('location', i18n.language || 'de')}/:location`} replace />} />
            {/* <Route path="/impressum" element={<Navigate to={`/${i18n.language || 'de'}/${getTranslatedPath('imprint', i18n.language || 'de')}`} replace />} /> */}
            {/* <Route path="/datenschutz" element={<Navigate to={`/${i18n.language || 'de'}/${getTranslatedPath('privacy', i18n.language || 'de')}`} replace />} /> */}
            
            {/* Language-specific route corrections */}
            <Route path="/en/kontakt" element={<Navigate to="/en/contact" replace />} />
            <Route path="/fr/kontakt" element={<Navigate to="/fr/contact" replace />} />
            
            {/* Handle invalid language codes and any other unmatched routes */}
            <Route path="/:lang/*" element={
              ({ params }) => {
                const { lang } = params;
                return isValidLanguage(lang) ? 
                  <AnimatedPage><NotFound /></AnimatedPage> : 
                  <Navigate to={`/${i18n.language || 'de'}`} replace />;
              }
            } />
            
            {/* Catch-all route */}
            <Route path="*" element={<Navigate to={`/${i18n.language || 'de'}`} replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />

    </div>
  );
}

export default App;
