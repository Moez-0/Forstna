import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import logo from '/logo.png'; // Import your logo image

const LogIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');


  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePassword = (password) => {
    return password.length >= 6;
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address.');
        return;
      } else {
        setEmailError('');
      }

      if (!validatePassword(password)) {
        setPasswordError('Password must be at least 6 characters long.');
        return;
      }
      else {
        setPasswordError('');
      }


      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }

      const data = await response.json();
      setSuccess(data.message);
      console.log('User info:', data.user);

      // Redirect to products page after successful login
      navigate('/deals');
    } catch (err) {

      setError('An error occurred. Please try again.');
      console.error(err);
    }
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={logo} alt="Logo" className="w-32 mb-4" />

      <h1 className="text-3xl font-bold mb-4">{t('logIn')}</h1>

      <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('emailAddress')}</label>
          <input
            type="text"
            id="email"
            name="email"
            required
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
          className="w-full py-2 px-4 bg-primary-100 text-white font-semibold rounded-lg shadow-md hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100"
        >
          {t('logInButton')}
        </button>

        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && <p className="mt-4 text-green-500">{success}</p>}

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
          {t('logInWithGoogle')}
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        {t('dontHaveAccount')} <a href="/sign-up" className="text-primary-100 hover:text-primary-300">{t('signUp')}</a>
      </p>
    </div>
  );
};

export default LogIn;
