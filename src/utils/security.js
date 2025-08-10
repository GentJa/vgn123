/**
 * Security utilities for VGN website
 * Provides functions for input sanitization, URL validation, and XSS protection
 */

/**
 * Sanitizes user input to prevent XSS attacks
 * @param {string} input - The user input to sanitize
 * @returns {string} - The sanitized input
 */
export const sanitizeInput = (input) => {
  if (!input || typeof input !== 'string') return '';
  
  // Replace potentially dangerous characters with HTML entities
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Validates a URL to ensure it's safe
 * @param {string} url - The URL to validate
 * @returns {boolean} - Whether the URL is safe
 */
export const isValidUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  
  try {
    // Check if URL is valid
    const parsedUrl = new URL(url);
    
    // Only allow http and https protocols
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch (e) {
    return false;
  }
};

/**
 * Validates that a route path only contains allowed characters
 * @param {string} path - The route path to validate
 * @returns {boolean} - Whether the path is safe
 */
export const isValidRoutePath = (path) => {
  if (!path || typeof path !== 'string') return false;
  
  // Allow alphanumeric characters, hyphens, underscores, slashes, and periods
  const safePathRegex = /^[a-zA-Z0-9\-_\/\.]+$/;
  return safePathRegex.test(path);
};

/**
 * Sanitizes form data object by sanitizing all string values
 * @param {Object} formData - The form data object to sanitize
 * @returns {Object} - The sanitized form data object
 */
export const sanitizeFormData = (formData) => {
  if (!formData || typeof formData !== 'object') return {};
  
  const sanitized = {};
  
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
};

/**
 * Creates a Content Security Policy header value
 * @returns {string} - The CSP header value
 */
export const getCSPHeaderValue = () => {
  return `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://api.web3forms.com;
    frame-src 'self' https://www.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self' https://api.web3forms.com;
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `.replace(/\s+/g, ' ').trim();
};

/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email format is valid
 */
export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number format (allows international formats)
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - Whether the phone format is valid
 */
export const isValidPhone = (phone) => {
  if (!phone || typeof phone !== 'string') return false;
  
  // Allow digits, spaces, plus, hyphens, and parentheses
  const phoneRegex = /^[0-9\s\+\-\(\)]{6,20}$/;
  return phoneRegex.test(phone);
};
