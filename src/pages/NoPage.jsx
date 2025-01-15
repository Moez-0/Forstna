// src/components/NoPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NoPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">{t('pageNotFound')}</h2>
      <p className="mb-6">{t('notFoundDescription')}</p>
      <Link to="/" className="text-primary-100 underline">
        {t('goHome')}
      </Link>
    </div>
  );
};

export default NoPage;
