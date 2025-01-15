import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGoogle } from 'react-icons/fa';
import logo from '/logo.png'; // Import your logo image
import axios from 'axios'; // Import Axios for HTTP requests

const SignUp = () => {
  const { t } = useTranslation(); // Use translation hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateName = (name) => {
    return name.length > 0;

  };

  const validatePhoneNumber = (phoneNumber) => {
    // 8 numbers 
    const re = /^[0-9]{8}$/;
    return re.test(phoneNumber);

  };

  const validateForm = () => {
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError(t('pleaseEnterValidEmail'));
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError(t('passwordMustBeAtLeast6Characters'));
      valid = false;
    } else {
      setPasswordError('');
    }


    if (!validateName(firstName)) {
      setFirstNameError(t('pleaseEnterFirstName'));
      valid = false;
    } else {
      setFirstNameError('');
    }

    if (!validateName(lastName)) {
      setLastNameError(t('pleaseEnterLastName'));
      valid = false;
    } else {
      setLastNameError('');
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError(t('pleaseEnterValidPhoneNumber'));
      valid = false;
    } else {
      setPhoneNumberError('');
    }

    return valid;
  };




  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (!validateForm()) {
        return;
      }

      const response = await axios.post('/api/signup', {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      });
      if (response.status === 201) {
        setSuccess(t('accountCreatedSuccessfully'));
      } else {
        setError(t('somethingWentWrong'));
      }
    } catch (err) {
      setError(err.response?.data?.message || t('somethingWentWrong'));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo Section */}
      <img src={logo} alt="Logo" className="w-32 mb-4" />

      <h1 className="text-3xl font-bold mb-4">{t('signUp')}</h1>

      <form onSubmit={handleSignUp} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t('firstName')}</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder={t('firstName')}
          />

          {firstNameError && <p className="mt-1 text-red-500">{firstNameError}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t('lastName')}</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder={t('lastName')}
          />
                    {lastNameError && <p className="mt-1 text-red-500">{lastNameError}</p>}

        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">{t('contactPhone')}</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder={t('enterPhoneNumber')}
          />
           {phoneNumberError && <p className="mt-1 text-red-500">{phoneNumberError}</p>}

        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('emailAddress')}</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="you@example.com"
          />
         {emailError && <p className="mt-1 text-red-500">{emailError}</p>}

        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">{t('password')}</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="********"
          />
                   {passwordError && <p className="mt-1 text-red-500">{passwordError}</p>}

          
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary-100 text-white font-semibold rounded-lg shadow-md hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100"
        >
          {t('signUpButton')}
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">{t('or')}</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center justify-center"
        >
          <FaGoogle className="mr-2" />
          {t('signUpWithGoogle')}
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        {t('alreadyHaveAccount')} <a href="/sign-in" className="text-primary-100 hover:text-primary-300">{t('signIn')}</a>
      </p>
    </div>
  );
};

export default SignUp;
