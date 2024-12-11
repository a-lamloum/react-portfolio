import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'DE' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
