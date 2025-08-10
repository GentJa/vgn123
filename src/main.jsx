import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'
import './i18n/i18n.js'
import i18n from 'i18next'

// Update HTML lang attribute and canonical URL when language changes
i18n.on('languageChanged', (lng) => {
  // Update HTML lang attribute
  document.getElementById('htmlRoot').setAttribute('lang', lng);
  
  // Update canonical URL
  const canonicalLink = document.getElementById('canonicalLink');
  if (canonicalLink) {
    const currentPath = window.location.pathname.split('/').slice(2).join('/');
    const baseUrl = 'https://mobile-physiotherapie24.de';
    canonicalLink.setAttribute('href', `${baseUrl}/${lng}${currentPath ? `/${currentPath}` : ''}`);
  }
  
  // Update meta descriptions based on language
  updateMetaTags(lng);
});

// Function to update meta tags based on language
function updateMetaTags(language) {
  const metaDescriptions = {
    de: "✔ Professionelle Physiotherapie bei Ihnen zuhause – individuell, flexibel und ohne Anfahrtsstress. Jetzt beraten lassen!",
    en: "✔ Professional physiotherapy in your home – personalized, flexible and without travel stress. Get advice now!",
    fr: "✔ Physiothérapie professionnelle à domicile – personnalisée, flexible et sans stress de déplacement. Obtenez des conseils maintenant!"
  };
  
  const metaDescription = metaDescriptions[language] || metaDescriptions.de;
  
  // Update standard meta description
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) descriptionTag.setAttribute('content', metaDescription);
  
  // Update Open Graph description
  const ogDescTag = document.querySelector('meta[property="og:description"]');
  if (ogDescTag) ogDescTag.setAttribute('content', metaDescription);
  
  // Update Twitter description
  const twitterDescTag = document.querySelector('meta[property="twitter:description"]');
  if (twitterDescTag) twitterDescTag.setAttribute('content', metaDescription);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
