import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * SEO component for managing page-specific meta tags
 * This component should be included at the top of each page component
 */
const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  imageUrl = '/og-image.jpg',
  noindex = false 
}) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentLang = i18n.language || 'de';
  
  // Base domain for canonical and OG URLs
  const baseUrl = 'https://lebenswerk-physiotherapie.ch';
  
  // Current path without language prefix
  const pathWithoutLang = location.pathname.split('/').slice(2).join('/');
  const fullUrl = `${baseUrl}/${currentLang}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`;
  
  useEffect(() => {
    // Update page title
    const pageTitle = title ? `${title} | LEBENSWERK` : 'LEBENSWERK - Mobile Physiotherapie 24';
    document.title = pageTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords.length > 0) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    }
    
    // Update robots meta tag if noindex is true
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // Update canonical URL
    let canonicalLink = document.getElementById('canonicalLink');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullUrl);
    }
    
    // Update Open Graph meta tags
    const ogTags = {
      'og:title': pageTitle,
      'og:description': description,
      'og:url': fullUrl,
      'og:image': imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`,
      'og:type': 'website',
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      }
    });
    
    // Update Twitter meta tags
    const twitterTags = {
      'twitter:title': pageTitle,
      'twitter:description': description,
      'twitter:url': fullUrl,
      'twitter:image': imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`,
      'twitter:card': 'summary_large_image',
    };
    
    Object.entries(twitterTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      }
    });
    
    // Update language attribute
    document.getElementById('htmlRoot').setAttribute('lang', currentLang);
    
    // Clean up function
    return () => {
      // Reset title when component unmounts
      document.title = 'Mobile Physiotherapie 24';
    };
  }, [title, description, keywords, imageUrl, noindex, currentLang, fullUrl]);
  
  // This component doesn't render anything
  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string,
  noindex: PropTypes.bool
};

export default SEO;
