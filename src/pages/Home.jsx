import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import video from '../assets/vid.mp4';
import deal1Image from '../assets/deal.avif'; // Replace with your actual image paths
import deal2Image from '../assets/deal.avif';
import deal3Image from '../assets/deal.avif';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <div className={`flex flex-col min-h-screen ${isRtl ? 'rtl' : ''}`}>
      <section className="relative h-screen flex flex-col justify-center items-center text-white z-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-lg mb-6">{t('heroSubtitle')}</p>
          <Link to="/deals" className="bg-black text-white py-2 px-6 rounded-lg text-lg font-semibold">
            {t('exploreDeals')}
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional dark overlay */}
      </section>

      {/* Featured Deals Section */}
      <section className="py-12 px-6 flex-grow">
        <h2 className="text-3xl font-semibold text-center mb-8">{t('featuredDeals')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/deal1" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={deal1Image} alt={t('deal1Title')} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('deal1Title')}</h3>
            <p>{t('deal1Description')}</p>
          </Link>
          <Link to="/deal2" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={deal2Image} alt={t('deal2Title')} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('deal2Title')}</h3>
            <p>{t('deal2Description')}</p>
          </Link>
          <Link to="/deal3" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={deal3Image} alt={t('deal3Title')} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('deal3Title')}</h3>
            <p>{t('deal3Description')}</p>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary-300 text-white text-center py-4">
        <p>{t('footerText')}</p>
      </footer>
    </div>
  );
};

export default Home;
