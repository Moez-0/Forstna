import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';

const Deals = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const initialFilters = {
    category: searchParams.get('category') || '',
    location: searchParams.get('location') || '',
    popularity: searchParams.get('popularity') || '',
    expiryDate: searchParams.get('expiryDate') || '',
  };

  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    setSearchParams(filters);
  }, [filters, setSearchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredProducts = products.filter(
    (product) =>
      (filters.category === '' || product.category === filters.category) &&
      (filters.location === '' || product.location === filters.location) &&
      (filters.popularity === '' || product.popularity === filters.popularity) &&
      (filters.expiryDate === '' || new Date(product.expiryDate) <= new Date(filters.expiryDate))
  );

  return (
    <div className={`flex flex-col min-h-screen ${isRtl ? 'rtl' : ''}`}>
      <section className="py-12 px-6 flex-grow">
        <h2 className="text-3xl font-semibold text-center mb-8">{t('deals')}</h2>

        {/* Search and Filter Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="w-full py-2 px-4 rounded-lg shadow-md"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>

          <div className="flex flex-wrap justify-center mt-6 gap-4">
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="py-2 px-4 rounded-lg shadow-md"
            >
              <option value="">{t('category')}</option>
              <option value="Electronics">{t('electronics')}</option>
              <option value="Food">{t('food')}</option>
              <option value="Clothing">{t('clothing')}</option>
            </select>

            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="py-2 px-4 rounded-lg shadow-md"
            >
              <option value="">{t('location')}</option>
              <option value="New York">{t('newYork')}</option>
              <option value="Los Angeles">{t('losAngeles')}</option>
              <option value="Chicago">{t('chicago')}</option>
            </select>

            <select
              name="popularity"
              value={filters.popularity}
              onChange={handleFilterChange}
              className="py-2 px-4 rounded-lg shadow-md"
            >
              <option value="">{t('popularity')}</option>
              <option value="High">{t('high')}</option>
              <option value="Medium">{t('medium')}</option>
              <option value="Low">{t('low')}</option>
            </select>

            <input
              type="date"
              name="expiryDate"
              value={filters.expiryDate}
              onChange={handleFilterChange}
              className="py-2 px-4 rounded-lg shadow-md"
              placeholder={t('expiryDate')}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <p>{t('loading')}</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading &&
            !error &&
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={product.thumbnail || 'https://via.placeholder.com/150'}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="mb-4">{product.description}</p>
                <p className="text-sm text-gray-600">{t('price')}: ${product.price}</p>
                <p className="text-sm text-gray-600">{t('stock')}: {product.stock}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Deals;
