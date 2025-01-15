import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaAngleDown, FaUser } from 'react-icons/fa';
import { MdSettings, MdNotifications } from 'react-icons/md';
import logo from '/logo.png';
import LanguageSwitcher from '../LanguageSwitcher';
import { Link, useNavigate } from 'react-router-dom';

export const AdminNavbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // Change this based on actual login status

  const dropdownRefs = useRef({});
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setDropdown(dropdown === dropdownName ? null : dropdownName);
  };

  const handleClickOutside = (event) => {
    const isClickInsideDropdown = Object.values(dropdownRefs.current).some(ref =>
      ref.current && ref.current.contains(event.target)
    );

    if (!isClickInsideDropdown) {
      setDropdown(null);
    }
  };

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <nav className="h-20 bg-white shadow-md flex md:justify-evenly justify-between items-center px-6 font-Lato font-bold z-50">
      <div className="flex items-center">
        <Link to="/" ><img src={logo} alt="Forsa Logo" className="w-28 h-12" /></Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        {/* Manage Dropdown */}
        {loggedIn && (
          <div className="relative" ref={(el) => (dropdownRefs.current.manage = el)}>
            <button
              onClick={() => toggleDropdown('manage')}
              className="flex items-center text-black hover:text-primary-100 focus:outline-none"
            >
              {t('manage')}
              <FaAngleDown className="ml-1" />
            </button>
            {dropdown === 'manage' && (
              <div className="absolute top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
                <Link to="/admin-profile" className="block px-4 py-2 text-black hover:bg-gray-100">{t('adminProfile')}</Link>
                <Link to="/notifications" className="block px-4 py-2 text-black hover:bg-gray-100">{t('notifications')}</Link>
                <Link to="/settings" className="block px-4 py-2 text-black hover:bg-gray-100">{t('settings')}</Link>
              </div>
            )}
          </div>
        )}

        {/* Settings Dropdown */}
        {loggedIn && (
          <div className="relative" ref={(el) => (dropdownRefs.current.settings = el)}>
            <button
              onClick={() => toggleDropdown('settings')}
              className="flex items-center text-black hover:text-primary-100 focus:outline-none"
            >
              <MdSettings className="mr-2" /> {t('settings')}
              <FaAngleDown className="ml-1" />
            </button>
            {dropdown === 'settings' && (
              <div className="absolute top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
                <Link to="/settings" className="block px-4 py-2 text-black hover:bg-gray-100">{t('generalSettings')}</Link>
              </div>
            )}
          </div>
        )}
    <LanguageSwitcher />
        {/* Login/Logout Button */}
        {!loggedIn ? (
          <>
            <Link to="/sign-in" className="flex items-center text-white hover:text-black bg-primary-100 p-2 rounded-lg text-md px-5">
              {t('signIn')}
            </Link>
            <Link to="/sign-up" className="flex items-center text-black hover:text-primary-100">
              {t('signUp')}
            </Link>
          </>
        ) : (
          <Link to="/sign-out" className="flex items-center text-white hover:text-black bg-primary-100 p-2 rounded-lg text-md px-5">
            {t('signOut')}
          </Link>
        )}
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform transform z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center space-y-6 pt-20`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <Link to="/" className="text-black text-lg" onClick={toggleMenu}>
          {t('home')}
        </Link>

        {/* Mobile Manage Dropdown */}
        {loggedIn && (
          <div className="relative" ref={(el) => (dropdownRefs.current.manage = el)}>
            <button
              onClick={() => toggleDropdown('manage')}
              className="flex items-center text-black hover:text-primary-100 focus:outline-none"
            >
              {t('manage')}
              <FaAngleDown className="ml-1" />
            </button>
            {dropdown === 'manage' && (
              <div className="mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
                <Link onClick={toggleMenu} to="/admin-profile" className="block px-4 py-2 text-black hover:bg-gray-100">{t('adminProfile')}</Link>
                <Link onClick={toggleMenu} to="/notifications" className="block px-4 py-2 text-black hover:bg-gray-100">{t('notifications')}</Link>
                <Link onClick={toggleMenu} to="/settings" className="block px-4 py-2 text-black hover:bg-gray-100">{t('settings')}</Link>
              </div>
            )}
          </div>
        )}

        {/* Mobile Settings Dropdown */}
        {loggedIn && (
          <div className="relative" ref={(el) => (dropdownRefs.current.settings = el)}>
            <button
              onClick={() => toggleDropdown('settings')}
              className="flex items-center text-black hover:text-primary-100 focus:outline-none"
            >
              <MdSettings className="mr-2" /> {t('settings')}
              <FaAngleDown className="ml-1" />
            </button>
            {dropdown === 'settings' && (
              <div className="mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
                <Link onClick={toggleMenu} to="/settings" className="block px-4 py-2 text-black hover:bg-gray-100">{t('generalSettings')}</Link>
              </div>
            )}
          </div>
        )}

        {/* Mobile Login/Logout */}
        {!loggedIn ? (
          <>
            <Link to="/sign-in" className="text-black text-lg" onClick={toggleMenu}>
              {t('signIn')}
            </Link>
            <Link to="/sign-up" className="text-black text-lg" onClick={toggleMenu}>
              {t('signUp')}
            </Link>
          </>
        ) : (
          <Link to="/sign-out" className="text-black text-lg" onClick={toggleMenu}>
            {t('signOut')}
          </Link>
        )}
      </div>
    </nav>
  );
};

