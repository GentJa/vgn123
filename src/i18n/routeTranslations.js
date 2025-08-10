// Define route translations for each language
export const routeTranslations = {
  de: {
    home: '',
    service: 'service',
    services: 'services',
    about: 'ueber-uns',
    contact: 'kontakt',
    location: 'standort',
    imprint: 'impressum',
    privacy: 'datenschutz'
  },
  en: {
    home: '',
    service: 'service',
    services: 'services',
    about: 'about',
    contact: 'contact',
    location: 'location',
    imprint: 'imprint',
    privacy: 'privacy-policy'
  },
  fr: {
    home: '',
    service: 'service',
    services: 'services',
    about: 'a-propos',
    contact: 'contact', 
    location: 'emplacement',
    imprint: 'mentions-legales',
    privacy: 'politique-de-confidentialite'
  }
};

// Get translated path for a route key in a specific language
export const getTranslatedPath = (routeKey, language) => {
  return routeTranslations[language]?.[routeKey] || routeTranslations.de[routeKey];
};

// Get route key from a translated path in a specific language
export const getRouteKeyFromPath = (path, language) => {
  const translations = routeTranslations[language] || routeTranslations.de;
  
  // Find the key that matches this path
  for (const [key, translatedPath] of Object.entries(translations)) {
    if (translatedPath === path) {
      return key;
    }
  }
  
  // If no match found, return the path as is
  return path;
};
