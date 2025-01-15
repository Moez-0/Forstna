import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaAngleDown, FaHome, FaUser, FaStar } from 'react-icons/fa';
import { MdBusiness, MdLocalOffer, MdHelpOutline } from 'react-icons/md';
import logo from '/logo.png';
import LanguageSwitcher from '../LanguageSwitcher';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // Change this based on actual login status

  const dropdownRefs = useRef({});
  const navigate = useNavigate();
  const location = useLocation();

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

  const goToDealsPage = (filter) => {
    navigate({
      pathname: '/deals',
      search: `?filter=${filter}`
    });
  };



  return (
    <nav className="h-20 bg-white shadow-md flex md:justify-evenly justify-between items-center px-6 font-Lato font-bold z-50">
      <div className="flex items-center">
        <Link to="/" ><img src={logo} alt="Forsa Logo" className="w-28 h-12" /></Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="flex items-center text-black hover:text-primary-100">
          <FaHome className="mr-2" /> {t('home')}
        </Link>

        {/* Deals Dropdown */}
        <div className="relative" ref={(el) => (dropdownRefs.current.deals = el)}>
          <button
            onClick={() => toggleDropdown('deals')}
            className="flex items-center text-black hover:text-primary-100 focus:outline-none"
          >
            <MdLocalOffer className="mr-2" /> {t('deals')}
            <FaAngleDown className="ml-1" />
          </button>
          {dropdown === 'deals' && (
            <div className="absolute top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
              <button onClick={() => goToDealsPage('category')} className="block px-4 py-2 text-black hover:bg-gray-100">{t('category')}</button>
              <button onClick={() => goToDealsPage('location')} className="block px-4 py-2 text-black hover:bg-gray-100">{t('location')}</button>
              <button onClick={() => goToDealsPage('popularity')} className="block px-4 py-2 text-black hover:bg-gray-100">{t('popularity')}</button>
              <button onClick={() => goToDealsPage('expiry-date')} className="block px-4 py-2 text-black hover:bg-gray-100">{t('expiryDate')}</button>
            </div>
          )}
        </div>

        {/* Business Listings Dropdown */}
        <div className="relative" ref={(el) => (dropdownRefs.current.businessListings = el)}>
          <button
            onClick={() => toggleDropdown('businessListings')}
            className="flex items-center text-black hover:text-primary-100 focus:outline-none"
          >
            <MdBusiness className="mr-2" /> {t('businessListings')}
            <FaAngleDown className="ml-1" />
          </button>
          {dropdown === 'businessListings' && (
            <div className="absolute top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
              <Link to="/add-business" className="block px-4 py-2 text-black hover:bg-gray-100">{t('addBusiness')}</Link>
              <Link to="/business-directory" className="block px-4 py-2 text-black hover:bg-gray-100">{t('businessDirectory')}</Link>
            </div>
          )}
        </div>

        {/* My Account Dropdown (conditionally shown) */}
        {loggedIn && (
          <div className="relative" ref={(el) => (dropdownRefs.current.myAccount = el)}>
            <button
              onClick={() => toggleDropdown('myAccount')}
              className="flex items-center text-black hover:text-primary-100 focus:outline-none"
            >
              <FaUser className="mr-2" /> {t('myAccount')}
              <FaAngleDown className="ml-1" />
            </button>
            {dropdown === 'myAccount' && (
              <div className="absolute top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
                <Link to="/profile" className="block px-4 py-2 text-black hover:bg-gray-100">{t('profile')}</Link>
                <Link to="/saved-deals" className="block px-4 py-2 text-black hover:bg-gray-100">{t('savedDeals')}</Link>
                <Link to="/purchase-history" className="block px-4 py-2 text-black hover:bg-gray-100">{t('purchaseHistory')}</Link>
                <Link to="/notifications" className="block px-4 py-2 text-black hover:bg-gray-100">{t('notifications')}</Link>
              </div>
            )}
          </div>
        )}

        {/* Loyalty Program Dropdown */}
        <div className="relative" ref={(el) => (dropdownRefs.current.loyaltyProgram = el)}>
          <button
            onClick={() => toggleDropdown('loyaltyProgram')}
            className="flex items-center text-black hover:text-primary-100 focus:outline-none"
          >
            <FaStar className="mr-2" /> {t('loyaltyProgram')}
            <FaAngleDown className="ml-1" />
          </button>
          {dropdown === 'loyaltyProgram' && (
            <div className="absolute top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
              <Link to="/earn-points" className="block px-4 py-2 text-black hover:bg-gray-100">{t('earnPoints')}</Link>
              <Link to="/redeem-points" className="block px-4 py-2 text-black hover:bg-gray-100">{t('redeemPoints')}</Link>
              <Link to="/tiers-benefits" className="block px-4 py-2 text-black hover:bg-gray-100">{t('tiersBenefits')}</Link>
            </div>
          )}
        </div>

        {/* FAQ Dropdown */}
        <div className="relative" ref={(el) => (dropdownRefs.current.faq = el)}>
          <button
            onClick={() => toggleDropdown('faq')}
            className="flex items-center text-black hover:text-primary-100 focus:outline-none"
          >
            <MdHelpOutline className="mr-2" /> {t('faq')}
            <FaAngleDown className="ml-1" />
          </button>
          {dropdown === 'faq' && (
            <div className="absolute top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
              <Link to="/faq/general" className="block px-4 py-2 text-black hover:bg-gray-100">{t('generalinquiries')}</Link>
              <Link to="/faq/account" className="block px-4 py-2 text-black hover:bg-gray-100">{t('accountProblems')}</Link>
              <Link to="/faq/billing" className="block px-4 py-2 text-black hover:bg-gray-100">{t('billing')}</Link>
              <Link to="/faq/technical" className="block px-4 py-2 text-black hover:bg-gray-100">{t('technicalSupport')}</Link>
            </div>
          )}
        </div>

        <LanguageSwitcher />

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
          Home
        </Link>

        {/* Mobile Deals Dropdown */}
        <div className="relative" ref={(el) => (dropdownRefs.current.deals = el)}>
          <button
            onClick={() => toggleDropdown('deals')}
            className="flex items-center text-black hover:text-primary-100 focus:outline-none"
          >
            <MdLocalOffer className="mr-2" /> {t('deals')}
            <FaAngleDown className="ml-1" />
          </button>
          {dropdown === 'deals' && (
            <div className="mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
<button
  onClick={() => {
    goToDealsPage('category');
    toggleMenu();
  }}
  className="block px-4 py-2 text-black hover:bg-gray-100"
>
  {t('category')}
</button>              <button
  onClick={() => {
    goToDealsPage('location');
    toggleMenu();
  }}
  className="block px-4 py-2 text-black hover:bg-gray-100"
>
  {t('location')}
</button>

<button
  onClick={() => {
    goToDealsPage('popularity');
    toggleMenu();
  }}
  className="block px-4 py-2 text-black hover:bg-gray-100"
>
  {t('popularity')}
</button>

<button
  onClick={() => {
    goToDealsPage('expiry-date');
    toggleMenu();
  }}
  className="block px-4 py-2 text-black hover:bg-gray-100"
>
  {t('expiryDate')}
</button>

            </div>
          )}
        </div>

        {/* Mobile Business Listings Dropdown */}
        <div className="relative" ref={(el) => (dropdownRefs.current.businessListings = el)}>
          <button
            onClick={() => toggleDropdown('businessListings')}
            className="flex items-center text-black hover:text-primary-100 focus:outline-none"
          >
            <MdBusiness className="mr-2" /> {t('businessListings')}
            <FaAngleDown className="ml-1" />
          </button>
          {dropdown === 'businessListings' && (
            <div className="mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
              <Link onClick={toggleMenu} to="/add-business" className="block px-4 py-2 text-black hover:bg-gray-100">{t('addBusiness')}</Link>
              <Link onClick={toggleMenu} to="/business-directory" className="block px-4 py-2 text-black hover:bg-gray-100">{t('businessDirectory')}</Link>
            </div>
          )}
        </div>

        {/* Mobile My Account Dropdown */}
        {loggedIn && (
          <div className="relative" ref={(el) => (dropdownRefs.current.myAccount = el)}>
            <button
              onClick={() => toggleDropdown('myAccount')}
              className="flex items-center text-black hover:text-primary-100 focus:outline-none"
            >
              <FaUser className="mr-2" /> {t('myAccount')}
              <FaAngleDown className="ml-1" />
            </button>
            {dropdown === 'myAccount' && (
              <div className="mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
                <Link onClick={toggleMenu} to="/profile" className="block px-4 py-2 text-black hover:bg-gray-100">{t('profile')}</Link>
                <Link onClick={toggleMenu} to="/saved-deals" className="block px-4 py-2 text-black hover:bg-gray-100">{t('savedDeals')}</Link>
                <Link onClick={toggleMenu} to="/purchase-history" className="block px-4 py-2 text-black hover:bg-gray-100">{t('purchaseHistory')}</Link>
                <Link onClick={toggleMenu} to="/notifications" className="block px-4 py-2 text-black hover:bg-gray-100">{t('notifications')}</Link>
              </div>
            )}
          </div>
        )}

        {/* Mobile Loyalty Program Dropdown */}
        <div className="relative" ref={(el) => (dropdownRefs.current.loyaltyProgram = el)}>
          <button
            onClick={() => toggleDropdown('loyaltyProgram')}
            className="flex items-center text-black hover:text-primary-100 focus:outline-none"
          >
            <FaStar className="mr-2" /> {t('loyaltyProgram')}
            <FaAngleDown className="ml-1" />
          </button>
          {dropdown === 'loyaltyProgram' && (
            <div className="mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
              <Link onClick={toggleMenu} to="/earn-points" className="block px-4 py-2 text-black hover:bg-gray-100">{t('earnPoints')}</Link>
              <Link onClick={toggleMenu} to="/redeem-points" className="block px-4 py-2 text-black hover:bg-gray-100">{t('redeemPoints')}</Link>
              <Link onClick={toggleMenu} to="/tiers-benefits" className="block px-4 py-2 text-black hover:bg-gray-100">{t('tiersBenefits')}</Link>
            </div>
          )}
        </div>

        {/* Mobile FAQ Dropdown */}
        <div className="relative" ref={(el) => (dropdownRefs.current.faq = el)}>
          <button
            onClick={() => toggleDropdown('faq')}
            className="flex items-center text-black hover:text-primary-100 focus:outline-none"
          >
            <MdHelpOutline className="mr-2" /> {t('faq')}
            <FaAngleDown className="ml-1" />
          </button>
          {dropdown === 'faq' && (
            <div className="mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-50">
              <Link onClick={toggleMenu} to="/faq/general" className="block px-4 py-2 text-black hover:bg-gray-100">{t('generalinquiries')}</Link>
              <Link onClick={toggleMenu} to="/faq/account" className="block px-4 py-2 text-black hover:bg-gray-100">{t('accountProblems')}</Link>
              <Link onClick={toggleMenu} to="/faq/billing" className="block px-4 py-2 text-black hover:bg-gray-100">{t('billing')}</Link>
              <Link onClick={toggleMenu} to="/faq/technical" className="block px-4 py-2 text-black hover:bg-gray-100">{t('technicalSupport')}</Link>
            </div>
          )}
        </div>

        <LanguageSwitcher />

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
