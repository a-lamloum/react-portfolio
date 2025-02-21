import React from 'react';
// import CV from '../../assets/cv2122_old.pdf';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const CTA = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className='cta'>
      <a href="#" download className='btn'>{t.downloadCV}</a>
      {/* <a href={CV} download className='btn'>{t.downloadCV}</a> */}
      <a href="#contact" className='btn btn-primary'>{t.letsTalk}</a>
    </div>
  );
};

export default CTA;
