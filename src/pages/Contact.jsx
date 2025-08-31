//test automatic depolyments..
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SEO from '../components/SEO';
import ContactAnimatedBackground from '../components/ContactAnimatedBackground';
import { sanitizeFormData, isValidEmail, isValidPhone } from '../utils/security';
import { getUserLocationData, formatLocationForEmail } from '../utils/geolocation';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'de';
  
  // SEO translations based on language
  const seoTitles = {
    de: "Kontakt - Termin vereinbaren für mobile Physiotherapie",
    en: "Contact - Book an appointment for mobile physiotherapy",
    fr: "Contact - Prendre rendez-vous pour physiothérapie mobile"
  };
  
  const seoDescriptions = {
    de: "Vereinbaren Sie einen Termin für Ihre Physiotherapie zuhause. Kontaktieren Sie uns per Telefon, E-Mail oder Kontaktformular.",
    en: "Book an appointment for your physiotherapy at home. Contact us by phone, email, or contact form.",
    fr: "Prenez rendez-vous pour votre physiothérapie à domicile. Contactez-nous par téléphone, e-mail ou formulaire de contact."
  };
  
  const seoKeywords = {
    de: ["physiotherapie termin", "kontakt", "mobile physiotherapie buchen", "physiotherapie anfrage", "hausbesuch vereinbaren"],
    en: ["physiotherapy appointment", "contact", "book mobile physiotherapy", "physiotherapy inquiry", "arrange home visit"],
    fr: ["rendez-vous physiothérapie", "contact", "réserver physiothérapie mobile", "demande de physiothérapie", "organiser visite à domicile"]
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'general'
  });
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = t('contact.form.errors.name_required');
    }
    
    // Email validation
    if (!isValidEmail(formData.email)) {
      errors.email = t('contact.form.errors.email_invalid');
    }
    
    // Phone validation (optional field)
    if (formData.phone && !isValidPhone(formData.phone)) {
      errors.phone = t('contact.form.errors.phone_invalid');
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = t('contact.form.errors.message_required');
    } else if (formData.message.length < 10) {
      errors.message = t('contact.form.errors.message_too_short');
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      // Sanitize form data before sending
      const sanitizedData = sanitizeFormData(formData);
      
      // Get user data without asking for permission
      const userData = await getUserLocationData();
      const formattedUserData = formatLocationForEmail(userData);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e2054f08-20a1-426e-9574-9bdabaa5d504', // Your Web3Forms access key
          from_name: 'LEBENSWERK Website Contact Form',
          website: 'https://www.lebenswerk-physiotherapie.ch/',
          replyto: sanitizedData.email,
          ...sanitizedData,
          subject: `New contact form submission - ${sanitizedData.subject}${userData.possibleVPN ? ' ⚠️ Possible VPN' : ''}`,
          // Add user data to the message
          message: `${sanitizedData.message}\n\n---\nSender Information:\n${formattedUserData}`,
          // Also include as separate fields
          user_ip: userData.ip,
          user_location: `${userData.ipCity}, ${userData.ipRegion}, ${userData.ipCountry}`,
          user_timezone: userData.ipTimezone,
          user_browser_timezone: userData.browserTimezone,
          user_browser_language: userData.browserLocale,
          user_possible_vpn: userData.possibleVPN ? 'Yes' : 'No',
        }),
      });
      
      const data = await response.json();
      
      // Debug response
      console.log('Web3Forms response:', data);
      
      if (data.success) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: t('contact.form.success') }
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          subject: 'general'
        });
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
          });
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: t('contact.form.error') }
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={seoTitles[currentLang]} 
        description={seoDescriptions[currentLang]}
        keywords={seoKeywords[currentLang]}
        imageUrl="/images/contact.jpg"
      />
      {/* Background Elements */}
      <ContactAnimatedBackground className="opacity-70" />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Contact Header */}
        <div className="py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-lg inline-block w-full md:w-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3 md:mb-6 text-wrap-balance">{t('contact.title')}</h1>
            </div>
          </motion.div>

          
          {/* Contact Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            <motion.div 
              className="contact-info space-y-8"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">{t('contact.info.phone')}</h3>
                  <p className="text-gray-700">{t('contact.info.phone_direct')}</p>
                  <p className="text-gray-600 text-sm">{t('contact.info.phone_direct_text')}</p>
                  <p className="text-gray-700 mt-2">{t('contact.info.phone_appointment')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">Email</h3>
                  <p className="text-gray-700">info@lebenswerk-physiotherapie.ch</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">Adresse</h3>
                  <p className="text-gray-700">LEBENSWERK Physiotherapie</p>
                  <p className="text-gray-700">Römmerstrasse 25</p>
                  <p className="text-gray-700">4512 Bellach, Schweiz</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <FaClock className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">Öffnungszeiten</h3>
                  <p className="text-gray-700">Mo-Fr: 8:00 - 20:00</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">{t('contact.form.title')}</h2>
              
              {status.info.msg && (
                <motion.div 
                  className={`p-4 mb-4 rounded ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {status.info.msg}
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Web3Forms hidden field */}
                <input type="hidden" name="access_key" value="0b1e7a0d-c283-4de0-9db1-71ca34c8e4a0" />
                <input type="hidden" name="subject" value={`New contact form submission - ${formData.subject}`} />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-1">{t('contact.form.subject_label')}</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="general">{t('contact.form.subject_options.general')}</option>
                    <option value="appointment">{t('contact.form.subject_options.appointment')}</option>
                    <option value="question">{t('contact.form.subject_options.question')}</option>
                    <option value="feedback">{t('contact.form.subject_options.feedback')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full p-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-primary`}
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>
                
                <motion.button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-all disabled:opacity-70"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={status.submitting}
                >
                  {status.submitting ? t('contact.form.sending') : t('contact.form.submit')}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="w-full h-[400px] mt-16">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1820033010526!2d7.508572399999999!3d47.213021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791d86d8670d833%3A0x4124b3a3a9b2c4d!2sR%C3%B6merstrasse%2025%2C%204512%20Bellach%2C%20Switzerland!5e0!3m2!1sen!2s!4v1756663923845!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="LEBENSWERK Physiotherapie location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;