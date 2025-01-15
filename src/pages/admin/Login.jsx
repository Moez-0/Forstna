import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGoogle } from 'react-icons/fa';
import logo from '/logo.png'; // Import your logo image

const AdminLogin = () => {
  const { t } = useTranslation(); // Use translation hook

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo Section */}
      <img src={logo} alt="Logo" className="w-32 mb-4" />

      <h1 className="text-3xl font-bold mb-4">{t('adminLogIn')}</h1>

      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('emailAddress')}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">{t('password')}</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary-100 text-white font-semibold rounded-lg shadow-md hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100"
        >
          {t('logInButton')}
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
          {t('logInWithGoogle')}
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        {t('dontHaveAccount')} <a href="/sign-up" className="text-primary-100 hover:text-primary-300">{t('signUp')}</a>
      </p>
    </div>
  );
};

export default AdminLogin;
