import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getTranslatedPath } from '../i18n/routeTranslations';

/**
 * LocalizedLink component that automatically adds the current language prefix to routes
 * and translates route paths based on the current language
 */
const LocalizedLink = ({ to, children, ...props }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'de';
  
  // Handle different types of 'to' props
  let localizedTo = to;
  
  // If it's an absolute path starting with '/'
  if (typeof to === 'string' && to.startsWith('/')) {
    // Remove the leading slash
    const path = to.substring(1);
    
    // Special case for home page
    if (path === '') {
      localizedTo = `/${currentLang}`;
    } else {
      // Extract the route key from the path
      const routeKey = path.split('/')[0];
      
      // Special case for contact page to ensure correct routing
      if (routeKey === 'contact') {
        // Use the language-specific path for contact
        if (currentLang === 'de') {
          localizedTo = '/de/kontakt';
        } else if (currentLang === 'en') {
          localizedTo = '/en/contact';
        } else if (currentLang === 'fr') {
          localizedTo = '/fr/contact';
        } else {
          // Fallback
          localizedTo = `/${currentLang}/contact`;
        }
      } else {
        // For all other routes, use the standard translation logic
        // Get the translated path for this route key
        const translatedPath = getTranslatedPath(routeKey, currentLang);
        
        // Check if we have a valid translation
        if (translatedPath === undefined) {
          console.warn(`No translation found for route key: ${routeKey} in language: ${currentLang}`);
          // Fallback to the original path if no translation found
          localizedTo = `/${currentLang}/${routeKey}`;
        } else {
          // Replace the route key with its translation
          const remainingPath = path.substring(routeKey.length);
          localizedTo = `/${currentLang}/${translatedPath}${remainingPath}`;
        }
      }
    }
  }
  
  // Custom onClick handler to ensure language synchronization
  const handleClick = (e) => {
    // If props already has onClick, call it
    if (props.onClick) {
      props.onClick(e);
    }
    
    // Extract language from the target URL
    if (typeof localizedTo === 'string') {
      const pathSegments = localizedTo.split('/').filter(Boolean);
      const langFromPath = pathSegments[0];
      
      // Ensure i18n language matches the URL language
      if (['de', 'en', 'fr'].includes(langFromPath) && langFromPath !== i18n.language) {
        i18n.changeLanguage(langFromPath);
      }
    }
  };
  
  // Pass all props except onClick which we handle specially
  const { onClick, ...restProps } = props;
  
  return <Link to={localizedTo} onClick={handleClick} {...restProps}>{children}</Link>;
};

export default LocalizedLink;
