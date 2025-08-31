import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

/**
 * StructuredData component for adding JSON-LD schema markup to pages
 * This helps search engines better understand the content of the page
 */
const StructuredData = ({ 
  type = 'LocalBusiness',
  name = 'LEBENSWERK - Mobile Physiotherapie 24',
  description,
  image = '/images/home-hero.jpg',
  url,
  telephone = '+49 30 1234567',
  address = {
    streetAddress: 'Musterstraße 123',
    addressLocality: 'Berlin',
    postalCode: '10115',
    addressCountry: 'DE'
  },
  geo = {
    latitude: '52.520008',
    longitude: '13.404954'
  },
  openingHours = [
    'Mo-Fr 08:00-20:00',
    'Sa 09:00-14:00'
  ],
  priceRange = '€€',
  serviceArea = {
    type: 'GeoCircle',
    geoMidpoint: {
      latitude: '52.520008',
      longitude: '13.404954'
    },
    geoRadius: '50000'
  }
}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'de';
  
  // Base domain for URLs
  const baseUrl = 'https://mobile-physiotherapie24.de';
  const fullUrl = url || `${baseUrl}/${currentLang}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  useEffect(() => {
    // Create the JSON-LD schema data
    const schema = {
      '@context': 'https://schema.org',
      '@type': type,
      name,
      description,
      image: fullImageUrl,
      url: fullUrl,
      telephone,
      address: {
        '@type': 'PostalAddress',
        ...address
      },
      geo: {
        '@type': 'GeoCoordinates',
        ...geo
      },
      openingHoursSpecification: openingHours.map(hours => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.split(' ')[0],
        opens: hours.split(' ')[1].split('-')[0],
        closes: hours.split(' ')[1].split('-')[1]
      })),
      priceRange,
      areaServed: {
        '@type': serviceArea.type,
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          ...serviceArea.geoMidpoint
        },
        geoRadius: serviceArea.geoRadius
      }
    };
    
    // Add the schema to the head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    script.id = 'structured-data';
    
    // Remove any existing structured data
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    // Clean up function
    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, name, description, fullImageUrl, fullUrl, telephone, address, geo, openingHours, priceRange, serviceArea, currentLang]);
  
  // This component doesn't render anything
  return null;
};

StructuredData.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string,
  telephone: PropTypes.string,
  address: PropTypes.object,
  geo: PropTypes.object,
  openingHours: PropTypes.arrayOf(PropTypes.string),
  priceRange: PropTypes.string,
  serviceArea: PropTypes.object
};

export default StructuredData;
