import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaChevronDown } from 'react-icons/fa';

function ChatBot() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  
  // All questions flattened into a single array for better visibility
  const allQuestions = [
    // Services questions
    {
      key: 'faq.services.q1',
      category: 'services'
    },
    {
      key: 'faq.services.q2',
      category: 'services'
    },
    {
      key: 'faq.services.q3',
      category: 'services'
    },
    // Hours questions
    {
      key: 'faq.hours.q1',
      category: 'hours'
    },
    {
      key: 'faq.hours.q2',
      category: 'hours'
    },
    // Location questions
    {
      key: 'faq.location.q1',
      category: 'location'
    },
    {
      key: 'faq.location.q2',
      category: 'location'
    },
    // Contact questions
    {
      key: 'faq.contact.q1',
      category: 'contact'
    },
    {
      key: 'faq.contact.q2',
      category: 'contact'
    }
  ];
  
  // Toggle a question's expanded state
  const toggleQuestion = (questionKey) => {
    if (expandedQuestion === questionKey) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(questionKey);
    }
  };
  
  return (
    <>
      {/* FAQ toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('faq.toggle')}
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </motion.button>
      
      {/* FAQ window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-green-600 text-white p-3 flex justify-between items-center sticky top-0 z-10">
              <h3 className="font-semibold text-lg">{t('faq.title')}</h3>
              <button 
                onClick={() => setIsOpen(false)}
                aria-label={t('faq.close')}
                className="text-white hover:text-gray-200 p-1"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* FAQ content - Improved scrolling container */}
            <div className="max-h-[70vh] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
              {/* Welcome message */}
              <div className="bg-gray-100 p-3 m-3 rounded-lg">
                <p>{t('faq.welcome')}</p>
              </div>
              
              {/* All questions in a single scrollable list */}
              <div className="mx-3 mb-3 border rounded-lg overflow-hidden">
                {allQuestions.map((question, index) => (
                  <div key={question.key} className={index !== 0 ? "border-t" : ""}>
                    {/* Category label for first question in each category */}
                    {allQuestions.findIndex(q => q.category === question.category) === allQuestions.findIndex(q => q.key === question.key) && (
                      <div className="bg-green-50 p-2 font-medium">
                        {t(`faq.${question.category}.title`)}
                      </div>
                    )}
                    
                    {/* Question button */}
                    <button
                      className="w-full text-left p-3 flex justify-between items-center hover:bg-gray-50 transition-colors"
                      onClick={() => toggleQuestion(question.key)}
                    >
                      <span className="pr-4 text-sm">{t(question.key)}</span>
                      <FaChevronDown
                        className={`transform transition-transform flex-shrink-0 ${
                          expandedQuestion === question.key ? 'rotate-180' : ''
                        }`}
                        size={14}
                      />
                    </button>
                    
                    {/* Answer */}
                    <AnimatePresence>
                      {expandedQuestion === question.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-3 bg-gray-50">
                            <p className="text-sm leading-relaxed">{t(`${question.key}_answer`)}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;