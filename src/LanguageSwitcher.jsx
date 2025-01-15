import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [clickedIcon, setClickedIcon] = useState(false); // State for dropdown visibility
  const [language, setLanguage] = useState('en'); // Current language
  const dropdownRef = useRef(null); // Ref for the dropdown

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    setClickedIcon(false); // Close the dropdown after selecting a language
  };

  const handleClickIcon = () => {
    setClickedIcon(!clickedIcon);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setClickedIcon(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <FaGlobe 
        onClick={handleClickIcon} 
        className="cursor-pointer text-black hover:text-primary-100"
      />
      {clickedIcon && (
        <div 
          ref={dropdownRef} 
          className="absolute right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-32 z-50"
        >
          <button 
            onClick={() => handleChangeLanguage('en')} 
            className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left"
          >
            English
          </button>
          <button 
            onClick={() => handleChangeLanguage('fr')} 
            className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left"
          >
            French
          </button>
          <button 
            onClick={() => handleChangeLanguage('ar')} 
            className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left"
          >
            Arabic
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
