import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';

const BusinessDirectory = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const businesses = [
    {
      id: 1,
      name: 'Tech Solutions',
      category: 'Technology',
      location: 'San Francisco',
      description: 'Providing innovative tech solutions for businesses.',
    },
    {
      id: 2,
      name: 'Café Delight',
      category: 'Food & Beverage',
      location: 'New York',
      description: 'A cozy café offering a range of delicious coffee and pastries.',
    },
    {
      id: 3,
      name: 'Fitness Hub',
      category: 'Health & Fitness',
      location: 'Los Angeles',
      description: 'Your go-to place for fitness and wellness programs.',
    },
    // Add more business listings here
  ];

  const filteredBusinesses = businesses.filter(business =>
    (category === '' || business.category === category) &&
    (search === '' || business.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <section className="py-12 px-6 flex-grow">
        <h2 className="text-3xl font-semibold text-center mb-8">{t('businessDirectory')}</h2>

        {/* Search and Filter Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full md:w-1/2 mb-4">
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-2 px-4 rounded-lg shadow-md"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="py-2 px-4 rounded-lg shadow-md"
            >
              <option value="">{t('allCategories')}</option>
              <option value="Technology">{t('technology')}</option>
              <option value="Food & Beverage">{t('foodAndBeverage')}</option>
              <option value="Health & Fitness">{t('healthAndFitness')}</option>
              {/* Add more categories here */}
            </select>
          </div>
        </div>

        {/* Businesses List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map((business) => (
            <div key={business.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{business.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{t('category')}: {business.category}</p>
              <p className="text-sm text-gray-600 mb-2">{t('location')}: {business.location}</p>
              <p className="text-sm text-gray-600">{t('description')}: {business.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BusinessDirectory;
